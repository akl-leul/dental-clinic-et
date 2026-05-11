import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export const runtime = 'nodejs';

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    const inferredId = params?.id ?? new URL(request.url).pathname.split('/').filter(Boolean).pop();
    const id = Number(inferredId);
    if (Number.isNaN(id)) return NextResponse.json({ error: 'Invalid id', params: params, inferredId }, { status: 400 });

    const body = await request.json();
    const { title, slug, content, excerpt, published, image } = body;

    if (!title || !slug || !content) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    if (image && typeof image === 'string' && image.length > 10000000) {
      return NextResponse.json({ error: 'Image too large (max ~7.5MB)' }, { status: 400 });
    }

    const blog = await prisma.blog.update({
      where: { id },
      data: {
        title,
        slug,
        content,
        excerpt: excerpt || null,
        image: image || null,
        published: Boolean(published),
      },
    });

    return NextResponse.json({ blog });
  } catch (err: any) {
    console.error('Blog PUT error:', err);
    // Handle Prisma unique constraint
    if (err?.code === 'P2002') {
      return NextResponse.json({ error: 'Unique constraint failed', meta: err.meta }, { status: 409 });
    }
    return NextResponse.json({ error: err?.message ?? 'Server error', details: process.env.NODE_ENV === 'development' ? String(err) : undefined }, { status: 500 });
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    const inferredId = params?.id ?? new URL(request.url).pathname.split('/').filter(Boolean).pop();
    const id = Number(inferredId);
    if (Number.isNaN(id)) return NextResponse.json({ error: 'Invalid id', inferredId }, { status: 400 });

    await prisma.blog.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error('Blog DELETE error:', err);
    return NextResponse.json({ error: err?.message ?? 'Server error' }, { status: 500 });
  }
}
