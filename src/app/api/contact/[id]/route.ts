import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export const runtime = 'nodejs';

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    const fallbackId = new URL(request.url).pathname.split('/').pop();
    const id = Number(params?.id ?? fallbackId);

    if (!Number.isInteger(id) || id <= 0) {
      return NextResponse.json({ error: 'Invalid id' }, { status: 400 });
    }

    await prisma.contactMessage.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch (err) {
    if (err instanceof Error && err.message.includes('Record to delete does not exist')) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }

    console.error('Contact DELETE error', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
