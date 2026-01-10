'use client';

import { useState } from 'react';
import Link from 'next/link';

// Sample RSVP data
const rsvpData = [
  { id: 1, name: 'John Doe', email: 'john@example.com', guests: 1, status: 'attending', dietaryNeeds: 'Vegetarian' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', guests: 2, status: 'attending', dietaryNeeds: 'None' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', guests: 1, status: 'not_attending', dietaryNeeds: 'None' },
  { id: 4, name: 'Alice Williams', email: 'alice@example.com', guests: 3, status: 'pending', dietaryNeeds: 'Gluten-free' },
];

export default function AdminDashboard() {
  const [rsvps] = useState(rsvpData);
  const attendingCount = rsvps.filter(r => r.status === 'attending').length;
  const notAttendingCount = rsvps.filter(r => r.status === 'not_attending').length;
  const pendingCount = rsvps.filter(r => r.status === 'pending').length;

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-50 to-slate-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
          <p className="text-lg text-gray-600">Manage your wedding events and RSVPs</p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg">
              <div className="text-2xl font-bold text-green-600">{attendingCount}</div>
              <p className="text-gray-600 mt-2">Attending</p>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-lg">
              <div className="text-2xl font-bold text-red-600">{notAttendingCount}</div>
              <p className="text-gray-600 mt-2">Not Attending</p>
            </div>
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-lg">
              <div className="text-2xl font-bold text-yellow-600">{pendingCount}</div>
              <p className="text-gray-600 mt-2">Pending</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">{rsvps.length}</div>
              <p className="text-gray-600 mt-2">Total Responses</p>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-6">Management</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/admin/rsvp-list" className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition border-l-4 border-rose-600">
              <h3 className="text-xl font-bold mb-2">📋 RSVP List</h3>
              <p className="text-gray-600">View and manage all RSVP responses</p>
            </Link>
            <Link href="/admin/gallery-manager" className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition border-l-4 border-rose-600">
              <h3 className="text-xl font-bold mb-2">🖼️ Gallery Manager</h3>
              <p className="text-gray-600">Upload and manage wedding photos</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Recent RSVPs */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-6">Recent RSVPs</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="px-6 py-3 text-left font-semibold text-gray-600">Name</th>
                  <th className="px-6 py-3 text-left font-semibold text-gray-600">Email</th>
                  <th className="px-6 py-3 text-left font-semibold text-gray-600">Guests</th>
                  <th className="px-6 py-3 text-left font-semibold text-gray-600">Status</th>
                  <th className="px-6 py-3 text-left font-semibold text-gray-600">Dietary Needs</th>
                </tr>
              </thead>
              <tbody>
                {rsvps.map((rsvp) => (
                  <tr key={rsvp.id} className="border-b hover:bg-gray-50">
                    <td className="px-6 py-4">{rsvp.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{rsvp.email}</td>
                    <td className="px-6 py-4">{rsvp.guests}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        rsvp.status === 'attending' ? 'bg-green-100 text-green-800' :
                        rsvp.status === 'not_attending' ? 'bg-red-100 text-red-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {rsvp.status === 'not_attending' ? 'Not Attending' : rsvp.status.charAt(0).toUpperCase() + rsvp.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm">{rsvp.dietaryNeeds}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
