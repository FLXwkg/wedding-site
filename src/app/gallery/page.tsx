'use client';

import { useState } from 'react';
import GalleryGrid from '@/components/Gallery/GalleryGrid';
import ImageModal from '@/components/Gallery/ImageModal';

// Sample gallery images
const galleryImages = [
  { id: 1, title: 'Engagement Photos', description: 'Our engagement shoot at the park', url: '/api/placeholder?id=1' },
  { id: 2, title: 'Pre-Wedding Event', description: 'Beautiful sunset celebration', url: '/api/placeholder?id=2' },
  { id: 3, title: 'Family Time', description: 'Quality time with loved ones', url: '/api/placeholder?id=3' },
  { id: 4, title: 'Preparations', description: 'Getting ready day', url: '/api/placeholder?id=4' },
  { id: 5, title: 'The Venue', description: 'Our beautiful wedding venue', url: '/api/placeholder?id=5' },
  { id: 6, title: 'Decorations', description: 'Stunning floral arrangements', url: '/api/placeholder?id=6' },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-rose-50 to-pink-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Wedding Gallery</h1>
          <p className="text-lg text-gray-600">Moments leading up to our big day</p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GalleryGrid images={galleryImages} onImageClick={setSelectedImage} />
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <ImageModal image={selectedImage} onClose={() => setSelectedImage(null)} />
      )}
    </div>
  );
}
