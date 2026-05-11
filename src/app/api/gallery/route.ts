import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export const runtime = 'nodejs';

export async function GET() {
  try {
    const items = await prisma.galleryItem.findMany({ orderBy: { createdAt: 'desc' } });
    return NextResponse.json({ items });
  } catch (err) {
    console.error('Gallery GET error', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, category, stats, image } = body;

    if (!title || !category || !stats || !image) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    if (typeof image === 'string' && image.length > 10000000) {
      return NextResponse.json({ error: 'Image too large' }, { status: 400 });
    }

    const item = await prisma.galleryItem.create({
      data: { title, category, stats, image },
    });

    return NextResponse.json({ item }, { status: 201 });
  } catch (err) {
    console.error('Gallery POST error', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}