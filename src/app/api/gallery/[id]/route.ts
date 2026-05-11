import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export const runtime = 'nodejs';

function parseId(request: Request, params?: { id?: string }) {
  const fallbackId = new URL(request.url).pathname.split('/').pop();
  const id = Number(params?.id ?? fallbackId);
  return Number.isInteger(id) && id > 0 ? id : null;
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    const id = parseId(request, params);
    if (!id) {
      return NextResponse.json({ error: 'Invalid id' }, { status: 400 });
    }

    const body = await request.json();
    const { title, category, stats, image } = body;

    if (!title || !category || !stats) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    if (typeof image === 'string' && image.length > 10000000) {
      return NextResponse.json({ error: 'Image too large' }, { status: 400 });
    }

    const item = await prisma.galleryItem.update({
      where: { id },
      data: { title, category, stats, image: image || '' },
    });

    return NextResponse.json({ item });
  } catch (err) {
    console.error('Gallery PUT error', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    const id = parseId(request, params);
    if (!id) {
      return NextResponse.json({ error: 'Invalid id' }, { status: 400 });
    }

    await prisma.galleryItem.delete({ where: { id } });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Gallery DELETE error', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}