'use client';

interface GalleryGridProps {
  images: Array<{
    id: number;
    title: string;
    description: string;
    url: string;
  }>;
  onImageClick: (image: any) => void;
}

export default function GalleryGrid({ images, onImageClick }: GalleryGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {images.map((image) => (
        <button
          key={image.id}
          onClick={() => onImageClick(image)}
          className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition cursor-pointer"
        >
          <div className="h-64 w-full bg-gray-100 overflow-hidden">
            <img
              src={image.url}
              alt={image.title}
              className="object-cover w-full h-64 group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition flex items-end justify-start p-4">
            <div className="opacity-0 group-hover:opacity-100 transition text-white">
              <h3 className="font-bold text-lg">{image.title}</h3>
              <p className="text-sm">{image.description}</p>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
}
