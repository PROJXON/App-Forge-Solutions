"use client"

import Image from 'next/image'
import {
  Handshake,
  ShieldCheck,
  Rocket,
  Lightbulb,
  Eye,
  Users,
  MessageSquare,
  ClipboardList,
  Hammer
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800 font-sans">
      <header className="flex items-center px-6 py-4">
        <img
          src="/App-Forge-Solutions/images/App-Forge-Solutions.png"
          alt="App Forge Solutions Logo"
          width={40}
          height={40}
          className="mr-3"
        />
        <span className="text-xl font-semibold text-gray-900">App Forge Solutions</span>
      </header>
      {/* Hero Section */}
      <section className="py-20 px-6 text-center bg-gradient-to-br from-gray-100 to-white">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            From concept to code, we make it happen.
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Helping solo entrepreneurs and small businesses bring their ideas to life through seamless software development.          </p>
          <a href="#contact">
            <button className="bg-orange-600 text-white px-6 py-3 rounded-full text-lg hover:bg-orange-700 transition">
              Contact Us
            </button>
          </a>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 border rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <MessageSquare className="mx-auto mb-4 text-orange-500 w-8 h-8" />
            <h3 className="text-xl font-bold mb-2">1. Talk to Us</h3>
            <p>Share your idea in everyday language, no tech speak needed!</p>
          </div>
          <div className="p-6 border rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <ClipboardList className="mx-auto mb-4 text-orange-500 w-8 h-8" />
            <h3 className="text-xl font-bold mb-2">2. Get a Plan</h3>
            <p>We’ll map out your idea, including features, goals, and tech recommendations.</p>
          </div>
          <div className="p-6 border rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <Hammer className="mx-auto mb-4 text-orange-500 w-8 h-8" />
            <h3 className="text-xl font-bold mb-2">3. Build or Launch</h3>
            <p>Move forward with App Forge Solutions or use the plan to build with your own team.</p>
          </div>
        </div>
      </section>

      {/* Why Choose AFS */}
      <section className="py-20 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-10">Why Choose App Forge Solutions?</h2>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="flex items-start gap-4">
              <Handshake className="text-orange-500 w-6 h-6 mt-1" />
              <p><span className="font-bold">Flexible:</span> We work how you work.</p>
            </div>
            <div className="flex items-start gap-4">
              <ShieldCheck className="text-orange-500 w-6 h-6 mt-1" />
              <p><span className="font-bold">Integrity:</span> We do what’s right, always.</p>
            </div>
            <div className="flex items-start gap-4">
              <Rocket className="text-orange-500 w-6 h-6 mt-1" />
              <p><span className="font-bold">Empowerment:</span> Tech should feel possible for everyone.</p>
            </div>
            <div className="flex items-start gap-4">
              <Lightbulb className="text-orange-500 w-6 h-6 mt-1" />
              <p><span className="font-bold">Innovation:</span> We build better, not just faster.</p>
            </div>
            <div className="flex items-start gap-4">
              <Eye className="text-orange-500 w-6 h-6 mt-1" />
              <p><span className="font-bold">Transparency:</span> Clear, simple communication.</p>
            </div>
            <div className="flex items-start gap-4">
              <Users className="text-orange-500 w-6 h-6 mt-1" />
              <p><span className="font-bold">Community:</span> Uplifting those we serve and those we work with.</p>
            </div>
          </div>
        </div>
      </section>


      {/* Contact */}
      <section id="contact" className="py-20 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">Ready to Get Started?</h2>
        <p className="mb-8">Feel free to email us at:</p>
        <a href="mailto:amy@appforgesolutions.com" className="text-blue-600 hover:underline">
          amy@appforgesolutions.com
        </a>
      </section>

      <footer className="py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} App Forge Solutions. All rights reserved.
      </footer>
    </main>
  );
}
