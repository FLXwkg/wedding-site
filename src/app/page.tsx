import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-rose-50 to-pink-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Together Forever
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Join us for the celebration of our love
          </p>
          <div className="text-3xl mb-8">💕</div>
          <div className="text-2xl font-semibold text-rose-600 mb-4">
            June 15, 2026
          </div>
          <a href="/rsvp" className="inline-block bg-rose-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-rose-700 transition">
            RSVP Now
          </a>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">📍</div>
              <h3 className="text-xl font-bold mb-2">Ceremony</h3>
              <p className="text-gray-600">
                St. James Cathedral<br />
                2:00 PM
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-4">🎉</div>
              <h3 className="text-xl font-bold mb-2">Reception</h3>
              <p className="text-gray-600">
                Grand Ballroom<br />
                5:00 PM
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-4">🎂</div>
              <h3 className="text-xl font-bold mb-2">Dinner & Dancing</h3>
              <p className="text-gray-600">
                Cocktail hour<br />
                followed by dinner
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Our Story</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            We met in college and knew we were meant for each other. After years of 
            amazing memories together, we're thrilled to share this special day with 
            everyone who has been part of our journey. Thank you for being here to 
            celebrate with us!
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-rose-100 to-pink-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Don't Miss Out!</h2>
          <p className="text-lg text-gray-700 mb-8">
            We'd love to see you at our wedding. Check out our gallery, 
            browse frequently asked questions, and RSVP today.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="/gallery" className="bg-white text-rose-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition border-2 border-rose-600">
              View Gallery
            </a>
            <a href="/faq" className="bg-white text-rose-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition border-2 border-rose-600">
              Read FAQ
            </a>
            <a href="/rsvp" className="bg-rose-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-rose-700 transition">
              RSVP
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}