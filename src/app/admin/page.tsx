import Link from 'next/link';
import AdminAppointments from '@/components/AdminAppointments';

export const revalidate = 0; // always fresh for admin

export default async function AdminPage() {
  return (
    <div className="min-h-screen py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Admin — Appointments</h1>
          <Link href="/" className="text-primary font-semibold">View site</Link>
        </div>

        <AdminAppointments />
      </div>
    </div>
  );
}
