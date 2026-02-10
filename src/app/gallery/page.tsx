'use client';

import { useState } from 'react';
import GalleryGrid from '@/components/Gallery/GalleryGrid';
import ImageModal from '@/components/Gallery/ImageModal';
import AddPhotoBox from '@/components/Gallery/AddPhotoBox';

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
  const [images, setImages] = useState(galleryImages);
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  const handleUpload = (url: string) => {
    const name = url.split('/').pop() || `upload-${Date.now()}`;
    const id = Date.now();
    const newImage = { id, title: name, description: '', url };
    setImages((prev) => [newImage, ...prev]);
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-gray-100 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-normal text-gray-900 mb-4">PARTAGEZ VOS PHOTOS</h2>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-4">
          <AddPhotoBox onUpload={handleUpload} />
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GalleryGrid images={images} onImageClick={setSelectedImage} />
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <ImageModal image={selectedImage} onClose={() => setSelectedImage(null)} />
      )}
    </div>
  );
}
