import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function PATCH(request: Request, context: { params: any }) {
  try {
    const params = await context.params;
    const id = Number(params.id);
    const body = await request.json();
    const { approved } = body;

    if (approved === undefined) {
      return NextResponse.json({ error: 'Missing approved field' }, { status: 400 });
    }

    const appointment = await prisma.appointment.update({
      where: { id },
      data: { approved },
    });

    return NextResponse.json({ appointment });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
