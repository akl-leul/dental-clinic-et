'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Users, BookOpen, Briefcase, Calendar, Mail, Menu, X, Images } from 'lucide-react';
import AdminAppointments from '@/components/AdminAppointments';
import AdminDoctors from '@/components/AdminDoctors';
import AdminBlog from '@/components/AdminBlog';
import AdminServices from '@/components/AdminServices';
import AdminContact from '@/components/AdminContact';
import AdminGallery from '@/components/AdminGallery';

const navItems = [
  { id: 'appointments', label: 'Appointments', icon: Calendar },
  { id: 'doctors', label: 'Doctors', icon: Users },
  { id: 'blog', label: 'Blog', icon: BookOpen },
  { id: 'gallery', label: 'Gallery', icon: Images },
  { id: 'services', label: 'Services', icon: Briefcase },
  { id: 'contact', label: 'Contact', icon: Mail },
];

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState('appointments');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-30">
        <div className="px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Admin Panel</h1>
          </div>
          <Link href="/" className="text-primary font-semibold hover:underline text-sm sm:text-base">
            View site
          </Link>
        </div>
      </div>

      <div className="flex relative">
        {/* Sidebar */}
        <aside
          className={`${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } lg:translate-x-0 transition-transform duration-300 fixed lg:relative w-64 bg-white border-r border-gray-200 min-h-[calc(100vh-65px)] z-40 top-16 lg:top-0`}
        >
          <nav className="p-4 space-y-2 overflow-y-auto">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setSidebarOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all font-medium text-sm sm:text-base ${
                    activeTab === item.id
                      ? 'bg-primary text-white shadow-md'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 w-full overflow-hidden">
          <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto w-full">
            {/* Appointments Tab */}
            {activeTab === 'appointments' && (
              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Appointments</h2>
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                  <AdminAppointments />
                </div>
              </div>
            )}

            {/* Doctors Tab */}
            {activeTab === 'doctors' && (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6">
                <AdminDoctors />
              </div>
            )}

            {/* Blog Tab */}
            {activeTab === 'blog' && (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6">
                <AdminBlog />
              </div>
            )}

            {/* Gallery Tab */}
            {activeTab === 'gallery' && (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6">
                <AdminGallery />
              </div>
            )}

            {/* Services Tab */}
            {activeTab === 'services' && (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6">
                <AdminServices />
              </div>
            )}

            {/* Contact Tab */}
            {activeTab === 'contact' && (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6">
                <AdminContact />
              </div>
            )}
          </div>
        </main>
      </div>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/30 lg:hidden z-30 top-16"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}
