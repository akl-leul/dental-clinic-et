'use client';

import React, { useEffect, useState } from 'react';

type AppointmentType = {
  id: number;
  name: string;
  email: string;
  phone: string;
  treatment: string;
  date: string;
  time: string;
  notes?: string | null;
  approved: boolean;
  createdAt: string;
};

export default function AdminAppointments() {
  const [appointments, setAppointments] = useState<AppointmentType[]>([]);
  const [filter, setFilter] = useState<'all' | 'approved' | 'pending'>('all');
  const [loading, setLoading] = useState(false);
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const fetchAppointments = async () => {
    setLoading(true);
    const q = filter === 'all' ? '' : `?approved=${filter === 'approved'}`;
    const res = await fetch(`/api/appointments${q}`);
    const json = await res.json();
    const rows = Array.isArray(json.appointments) ? json.appointments : [];
    setAppointments(rows.map((r: any) => ({ ...r, approved: r.approved ?? false })));
    setLoading(false);
  };

  useEffect(() => {
    fetchAppointments();
  }, [filter]);

  const toggleApprove = async (id: number, approved: boolean) => {
    try {
      const res = await fetch(`/api/appointments/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ approved }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json?.error || 'Update failed');
      const updated = json.appointment;
      setAppointments((prev) => prev.map((p) => (p.id === id ? { ...p, approved: updated.approved } : p)));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <button className={`px-3 py-1 rounded ${filter==='all'? 'bg-primary text-white':'bg-gray-100'}`} onClick={() => setFilter('all')}>All</button>
          <button className={`px-3 py-1 rounded ${filter==='pending'? 'bg-primary text-white':'bg-gray-100'}`} onClick={() => setFilter('pending')}>Pending</button>
          <button className={`px-3 py-1 rounded ${filter==='approved'? 'bg-primary text-white':'bg-gray-100'}`} onClick={() => setFilter('approved')}>Approved</button>
        </div>
        <div>{loading ? 'Loading…' : `${appointments.length} records`}</div>
      </div>

      <div className="overflow-x-auto bg-white border rounded-2xl shadow-sm">
        <table className="w-full table-auto">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left p-4">Name</th>
              <th className="text-left p-4">Email</th>
              <th className="text-left p-4">Phone</th>
              <th className="text-left p-4">Treatment</th>
              <th className="text-left p-4">Date</th>
              <th className="text-left p-4">Time</th>
              <th className="text-left p-4">Notes</th>
              <th className="text-left p-4">Actions</th>
              <th className="text-left p-4">Approved</th>
              <th className="text-left p-4">Created</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((a) => (
              <React.Fragment key={a.id}>
                <tr className="border-t">
                  <td className="p-4">{a.name}</td>
                  <td className="p-4">{a.email}</td>
                  <td className="p-4">{a.phone}</td>
                  <td className="p-4">{a.treatment}</td>
                  <td className="p-4">{new Date(a.date).toLocaleDateString()}</td>
                  <td className="p-4">{a.time}</td>
                  <td className="p-4">{a.notes ? (a.notes.length > 60 ? a.notes.slice(0, 60) + '…' : a.notes) : '-'}</td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <button onClick={() => setExpandedId(expandedId === a.id ? null : a.id)} className="px-3 py-1 rounded bg-gray-100">Details</button>
                      <button
                        onClick={() => toggleApprove(a.id, !a.approved)}
                        className={`px-3 py-1 rounded ${a.approved ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                        {a.approved ? 'Unapprove' : 'Approve'}
                      </button>
                    </div>
                  </td>
                  <td className="p-4">{a.approved ? 'Yes' : 'No'}</td>
                  <td className="p-4">{new Date(a.createdAt).toLocaleString()}</td>
                </tr>

                {expandedId === a.id && (
                  <tr className="bg-gray-50">
                    <td colSpan={10} className="p-4">
                      <div className="grid md:grid-cols-3 gap-4">
                        <div>
                          <strong>Full Name:</strong>
                          <div>{a.name}</div>
                        </div>
                        <div>
                          <strong>Contact:</strong>
                          <div>{a.email} — {a.phone}</div>
                        </div>
                        <div>
                          <strong>Requested:</strong>
                          <div>{new Date(a.date).toLocaleDateString()} at {a.time}</div>
                        </div>
                        <div className="md:col-span-3">
                          <strong>Notes:</strong>
                          <div>{a.notes ?? '-'}</div>
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
