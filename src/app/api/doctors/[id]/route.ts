import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

function parseId(request: Request, params?: { id?: string }) {
  const fallbackId = new URL(request.url).pathname.split('/').pop();
  const id = Number(params?.id ?? fallbackId);
  return Number.isInteger(id) && id > 0 ? id : null;
}

function isPrismaNotFoundError(error: unknown) {
  return typeof error === 'object' && error !== null && 'code' in error && (error as { code?: string }).code === 'P2025';
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    const id = parseId(request, params);
    if (!id) {
      return NextResponse.json({ error: 'Invalid id' }, { status: 400 });
    }

    const body = await request.json();
    const { name, specialty, bio, image } = body;

    if (image && image.length > 10000000) {
      return NextResponse.json({ error: 'Image too large (max ~7.5MB)' }, { status: 400 });
    }

    const doctor = await prisma.doctor.update({
      where: { id },
      data: { 
        name, 
        specialty, 
        bio: bio || null,
        image: image || null
      },
    });

    return NextResponse.json({ doctor });
  } catch (err) {
    if (isPrismaNotFoundError(err)) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }

    console.error('Doctor update error:', err);
    return NextResponse.json({ 
      error: err instanceof Error ? err.message : 'Server error',
      details: process.env.NODE_ENV === 'development' ? String(err) : undefined
    }, { status: 500 });
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    const id = parseId(request, params);
    if (!id) {
      return NextResponse.json({ error: 'Invalid id' }, { status: 400 });
    }

    await prisma.doctor.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch (err) {
    if (isPrismaNotFoundError(err)) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }

    console.error('Doctor delete error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
