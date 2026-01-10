'use client';

import Link from 'next/link';
import { useState } from 'react';

const galleryImages = [
  { id: 1, title: 'Engagement Photos', description: 'Our engagement shoot at the park', uploadedAt: '2026-01-05', size: '2.4 MB' },
  { id: 2, title: 'Pre-Wedding Event', description: 'Beautiful sunset celebration', uploadedAt: '2026-01-06', size: '1.8 MB' },
  { id: 3, title: 'Family Time', description: 'Quality time with loved ones', uploadedAt: '2026-01-07', size: '3.1 MB' },
  { id: 4, title: 'Preparations', description: 'Getting ready day', uploadedAt: '2026-01-08', size: '2.7 MB' },
];

export default function GalleryManager() {
  const [images, setImages] = useState(galleryImages);
  const [uploadMessage, setUploadMessage] = useState<string | null>(null);

  const handleDelete = (id: number) => {
    setImages(images.filter(img => img.id !== id));
    setUploadMessage('Image deleted successfully!');
    setTimeout(() => setUploadMessage(null), 3000);
  };

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const newImage = {
        id: Math.max(...images.map(i => i.id), 0) + 1,
        title: file.name.replace(/\.[^/.]+$/, ''),
        description: 'New upload',
        uploadedAt: new Date().toISOString().split('T')[0],
        size: (file.size / 1024 / 1024).toFixed(1) + ' MB'
      };
      setImages([...images, newImage]);
      setUploadMessage('Image uploaded successfully!');
      setTimeout(() => setUploadMessage(null), 3000);
    }
  };

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-slate-50 to-slate-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/admin" className="text-rose-600 hover:text-rose-700 mb-4 inline-block">← Back to Dashboard</Link>
          <h1 className="text-4xl font-bold text-gray-900">Gallery Manager</h1>
          <p className="text-lg text-gray-600 mt-2">Upload and manage wedding photos</p>
        </div>
      </section>

      {/* Upload Section */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-8 rounded-lg border-2 border-dashed border-rose-300">
            <label className="cursor-pointer">
              <div className="flex flex-col items-center justify-center gap-4">
                <div className="text-4xl">📸</div>
                <div className="text-center">
                  <p className="text-lg font-semibold text-gray-900">Upload a new photo</p>
                  <p className="text-sm text-gray-600">Drag and drop or click to select</p>
                </div>
              </div>
              <input
                type="file"
                accept="image/*"
                onChange={handleUpload}
                className="hidden"
              />
            </label>
          </div>

          {uploadMessage && (
            <div className="mt-4 p-4 bg-green-100 text-green-800 rounded-lg">
              {uploadMessage}
            </div>
          )}
        </div>
      </section>

      {/* Gallery Stats */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-3xl font-bold text-rose-600">{images.length}</div>
              <p className="text-gray-600 mt-2">Total Images</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-3xl font-bold text-blue-600">{(images.reduce((sum, img) => sum + parseFloat(img.size), 0)).toFixed(1)}</div>
              <p className="text-gray-600 mt-2">MB</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-3xl font-bold text-purple-600">Public</div>
              <p className="text-gray-600 mt-2">Gallery Status</p>
            </div>
          </div>
        </div>
      </section>

      {/* Images Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-6">Gallery Images</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image) => (
              <div key={image.id} className="bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition">
                <div className="bg-gray-200 h-40 flex items-center justify-center text-6xl">
                  🖼️
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-900">{image.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{image.description}</p>
                  <div className="mt-3 text-xs text-gray-500 space-y-1">
                    <p>Uploaded: {image.uploadedAt}</p>
                    <p>Size: {image.size}</p>
                  </div>
                  <button
                    onClick={() => handleDelete(image.id)}
                    className="mt-4 w-full bg-red-100 text-red-700 hover:bg-red-200 px-3 py-2 rounded font-medium text-sm transition"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
