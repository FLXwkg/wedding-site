'use client';

interface ImageModalProps {
  image: {
    title: string;
    description: string;
    url: string;
  };
  onClose: () => void;
}

export default function ImageModal({ image, onClose }: ImageModalProps) {
  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
      <div className="max-w-3xl w-full relative">
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white hover:text-gray-300 text-3xl"
        >
          ✕
        </button>
        <div className="bg-white rounded-lg overflow-hidden">
          <div className="bg-gradient-to-br from-rose-200 to-pink-200 h-96 flex items-center justify-center text-8xl">
            📷
          </div>
          <div className="p-6">
            <h2 className="text-3xl font-bold mb-2">{image.title}</h2>
            <p className="text-gray-600 text-lg">{image.description}</p>
            <button
              onClick={onClose}
              className="mt-6 bg-rose-600 text-white px-6 py-2 rounded-lg hover:bg-rose-700 transition"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
