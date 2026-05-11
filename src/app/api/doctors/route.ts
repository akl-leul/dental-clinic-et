import { NextResponse } from 'next/server';

export const runtime = 'nodejs';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    const doctors = await prisma.doctor.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return NextResponse.json({ doctors });
  } catch (err) {
    console.error('Doctors GET error:', err instanceof Error ? err.message : err);
    return NextResponse.json({ error: err instanceof Error ? err.message : 'Server error' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, specialty, bio, image } = body;

    if (!name || !specialty) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Limit image size (base64 strings are larger than actual images)
    if (image && image.length > 10000000) {
      return NextResponse.json({ error: 'Image too large (max ~7.5MB)' }, { status: 400 });
    }

    const doctor = await prisma.doctor.create({
      data: { 
        name, 
        specialty, 
        bio: bio || null,
        image: image || null
      },
    });

    return NextResponse.json({ doctor }, { status: 201 });
  } catch (err) {
    console.error('Doctor creation error:', err);
    return NextResponse.json({ 
      error: err instanceof Error ? err.message : 'Server error',
      details: process.env.NODE_ENV === 'development' ? String(err) : undefined
    }, { status: 500 });
  }
}
