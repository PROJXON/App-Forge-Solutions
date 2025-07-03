"use client"

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
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-in-out",
      once: true
    });
  }, []);

  const prefix = process.env.NODE_ENV === "production" ? "/App-Forge-Solutions" : "";

  return (
    <main className="min-h-screen bg-white text-gray-800 font-sans">
      <header className="flex items-center px-6 py-4">
        <img
          src={`${prefix}/images/App-Forge-Solutions.png`}
          alt="App Forge Solutions Logo"
          width={40}
          height={40}
          className="mr-5"
        />
        <span className="text-xl font-semibold text-gray-900">App Forge Solutions</span>
      </header>
      {/* Hero Section */}
      <section className="py-20 px-6 text-center bg-gray-100">
        <div className="max-w-5xl mx-auto">
          <h1
            className="text-4xl md:text-6xl font-bold mb-4"
            data-aos="fade-up"
            data-aos-delay="0"
          >
            From concept to code, we make it happen
          </h1>
          <p
            className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Helping solo entrepreneurs and small businesses bring their ideas to life through seamless software development
          </p>
          <a href="#contact">
            <button
              className="bg-orange-600 text-white px-6 py-3 rounded-full text-lg hover:bg-orange-700 transition"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Contact Us
            </button>
          </a>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-12" data-aos="fade-up">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 border rounded-xl shadow-md hover:shadow-lg transition-shadow" data-aos="fade-up" data-aos-delay="0">
            <MessageSquare className="mx-auto mb-4 text-orange-500 w-8 h-8" />
            <h3 className="text-xl font-bold mb-2">1. Talk to Us</h3>
            <p>Share your idea in everyday language, no tech speak needed</p>
          </div>
          <div className="p-6 border rounded-xl shadow-md hover:shadow-lg transition-shadow" data-aos="fade-up" data-aos-delay="100">
            <ClipboardList className="mx-auto mb-4 text-orange-500 w-8 h-8" />
            <h3 className="text-xl font-bold mb-2">2. Get a Plan</h3>
            <p>We’ll map out your idea, including features, goals, and tech recommendations</p>
          </div>
          <div className="p-6 border rounded-xl shadow-md hover:shadow-lg transition-shadow" data-aos="fade-up" data-aos-delay="200">
            <Hammer className="mx-auto mb-4 text-orange-500 w-8 h-8" />
            <h3 className="text-xl font-bold mb-2">3. Build or Launch</h3>
            <p>Move forward with App Forge Solutions or use the plan to build with your own team</p>
          </div>
        </div>
      </section>

      {/* Why Choose AFS */}
      <section className="py-20 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-10" data-aos="fade-up">Why Choose App Forge Solutions?</h2>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="flex items-start gap-4" data-aos="fade-up" data-aos-delay="0">
              <Handshake className="text-orange-500 w-6 h-6 mt-1" />
              <p><span className="font-bold">Flexible:</span> We work how you work</p>
            </div>
            <div className="flex items-start gap-4" data-aos="fade-up" data-aos-delay="100">
              <ShieldCheck className="text-orange-500 w-6 h-6 mt-1" />
              <p><span className="font-bold">Integrity:</span> We do what’s right, always</p>
            </div>
            <div className="flex items-start gap-4" data-aos="fade-up" data-aos-delay="200">
              <Rocket className="text-orange-500 w-6 h-6 mt-1" />
              <p><span className="font-bold">Empowerment:</span> Tech should feel possible for everyone</p>
            </div>
            <div className="flex items-start gap-4" data-aos="fade-up" data-aos-delay="300">
              <Lightbulb className="text-orange-500 w-6 h-6 mt-1" />
              <p><span className="font-bold">Innovation:</span> We build better, not just faster</p>
            </div>
            <div className="flex items-start gap-4" data-aos="fade-up" data-aos-delay="400">
              <Eye className="text-orange-500 w-6 h-6 mt-1" />
              <p><span className="font-bold">Transparency:</span> Clear, simple communication</p>
            </div>
            <div className="flex items-start gap-4" data-aos="fade-up" data-aos-delay="500">
              <Users className="text-orange-500 w-6 h-6 mt-1" />
              <p><span className="font-bold">Community:</span> Uplifting those we serve and those we work with</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4" data-aos="fade-up">Ready to Get Started?</h2>
        <p className="mb-8" data-aos="fade-up" data-aos-delay="100">Send us a message:</p>
        <form
          className="max-w-md mx-auto space-y-4"
          data-aos="fade-up"
          data-aos-delay="200"
          onSubmit={async (e) => {
            e.preventDefault();
            const form = e.target as HTMLFormElement;
            const formData = new FormData(form);
            const body = {
              name: formData.get("name"),
              email: formData.get("email"),
              message: formData.get("message"),
            };

            const res = await fetch("/api/contact", {
              method: "POST",
              body: JSON.stringify(body),
              headers: {
                "Content-Type": "application/json"
              }
            });

            if (res.ok) {
              alert("Message sent!");
              form.reset();
            } else {
              alert("Something went wrong. Please try again.");
            }
          }}
        >
          <input
            name="name"
            type="text"
            required
            placeholder="Your Name"
            className="w-full p-3 border rounded"
          />
          <input
            name="email"
            type="email"
            required
            placeholder="Your Email"
            className="w-full p-3 border rounded"
          />
          <textarea
            name="message"
            required
            placeholder="Your Message"
            rows={5}
            className="w-full p-3 border rounded"
          />
          <button
            type="submit"
            className="bg-orange-600 text-white px-6 py-3 rounded-full text-lg hover:bg-orange-700 transition"
          >
            Send Message
          </button>
        </form>
      </section>

      <footer className="py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} App Forge Solutions. All rights reserved.
      </footer>
    </main>
  );
}
