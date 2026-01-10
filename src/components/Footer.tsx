export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">💕 Our Wedding</h3>
            <p className="text-gray-400">Celebrating our love with family and friends.</p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/gallery" className="hover:text-rose-400 transition">Gallery</a></li>
              <li><a href="/faq" className="hover:text-rose-400 transition">FAQ</a></li>
              <li><a href="/rsvp" className="hover:text-rose-400 transition">RSVP</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <p className="text-gray-400">
              Email: info@ourwedding.com<br />
              Phone: (123) 456-7890
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2026 Our Wedding. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
