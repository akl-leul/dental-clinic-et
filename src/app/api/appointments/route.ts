import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const approvedParam = url.searchParams.get('approved');

    const where: any = {};
    if (approvedParam === 'true') where.approved = true;
    if (approvedParam === 'false') where.approved = false;

    const appointments = await prisma.appointment.findMany({ where, orderBy: { createdAt: 'desc' } });
    return NextResponse.json({ appointments });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, treatment, date, time, notes } = body;

    if (!name || !email || !phone || !treatment || !date || !time) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const appointment = await prisma.appointment.create({
      data: {
        name,
        email,
        phone,
        treatment,
        date: new Date(date),
        time,
        notes: notes ?? null,
      },
    });

    return NextResponse.json({ appointment }, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
