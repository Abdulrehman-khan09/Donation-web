import { Heart, Users, Shield, Globe } from "lucide-react";

export default function LearnMore() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm py-8 px-12 text-center">
        <h1 className="text-4xl font-bold text-indigo-700 mb-2">Learn More About Pilgrimage Aid</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Our mission is to connect generous donors with seekers who dream of completing their spiritual journeys. 
          With transparency, security, and compassion, we make pilgrimages possible.
        </p>
      </header>

      {/* Mission Section */}
      <section className="px-12 py-20 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Mission</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Many people dream of embarking on a pilgrimage but face financial hardships. On the other hand, donors 
          want to help but lack trustworthy ways to connect with genuine seekers. Pilgrimage Aid bridges this gap, 
          offering a safe platform where seekers and donors come together with faith and trust.
        </p>
      </section>

      {/* How It Works */}
      <section className="px-12 py-20 bg-white">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div className="bg-gray-50 p-8 rounded-xl shadow-md">
            <Users className="mx-auto text-indigo-600 w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">For Seekers</h3>
            <p className="text-gray-600">
              Register on our platform, verify your details, and share your pilgrimage story. 
              Donors can view your profile and choose to support you.
            </p>
          </div>
          <div className="bg-gray-50 p-8 rounded-xl shadow-md">
            <Heart className="mx-auto text-green-600 w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold text-green-600 mb-2">For Donors</h3>
            <p className="text-gray-600">
              Browse verified seeker profiles, donate securely, and receive regular updates on 
              how your contribution helps fulfill a pilgrimage dream.
            </p>
          </div>
          <div className="bg-gray-50 p-8 rounded-xl shadow-md">
            <Shield className="mx-auto text-red-600 w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold text-red-600 mb-2">Transparency & Security</h3>
            <p className="text-gray-600">
              Every donation is tracked, seekers are verified, and donors receive real-time 
              updates—ensuring 100% trust and accountability.
            </p>
          </div>
        </div>
      </section>

      {/* Community Impact */}
      <section className="px-12 py-20 bg-gray-100">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Our Community Impact</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-md p-8">
            <Globe className="text-indigo-600 w-10 h-10 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Global Reach</h3>
            <p className="text-gray-600">
              Donors and seekers from around the world can connect, transcending borders 
              and bringing unity through faith.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-8">
            <Heart className="text-green-600 w-10 h-10 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Thousands Helped</h3>
            <p className="text-gray-600">
              Each contribution has changed lives, enabling thousands to experience the journey of a lifetime.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-white py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Join Us in Making Journeys Possible</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Whether you are seeking support for your pilgrimage or wish to help others fulfill theirs, 
          Pilgrimage Aid is here to connect hearts with purpose.
        </p>
        <div className="space-x-4">
          <a 
            href="/seeker/login"
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-indigo-700"
          >
            I Am a Seeker
          </a>
          <a 
            href="/donor/login"
            className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-green-700"
          >
            I Am a Donor
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-6 text-center text-gray-600 border-t border-gray-300">
        © {new Date().getFullYear()} Pilgrimage Aid. All Rights Reserved.
      </footer>
    </div>
  );
}
