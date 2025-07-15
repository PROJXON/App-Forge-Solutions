"use client";

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

const reasons: [string, string, React.ElementType][] = [
  ["Flexible", "We work how you work", Handshake],
  ["Integrity", "We do what’s right, always", ShieldCheck],
  ["Empowerment", "Tech should feel possible for everyone", Rocket],
  ["Innovation", "We build better, not just faster", Lightbulb],
  ["Transparency", "Clear, simple communication", Eye],
  ["Community", "Uplifting those we serve and those we work with", Users]
];


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
    <div className="flex">
      <main className="flex-1 min-h-screen bg-white text-gray-800 font-sans pr-48">
        <div id="top">
          {/* Header */}
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
              <h1 className="text-4xl md:text-6xl font-bold mb-4" data-aos="fade-up">
                From concept to code, we make it happen
              </h1>
              <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
                Helping solo entrepreneurs and small businesses bring their ideas to life through seamless software development
              </p>
              <a href="#contact">
                <button className="bg-orange-600 text-white px-6 py-3 rounded-full text-lg hover:bg-orange-700 transition" data-aos="fade-up" data-aos-delay="200">
                  Contact Us
                </button>
              </a>
            </div>
          </section>

          {/* Parallax Section */}
          <section
            className="relative bg-fixed bg-center bg-cover h-[60vh] flex items-center justify-center text-white"
            style={{ backgroundImage: "url('/images/parallax-bg.jpg')" }}
          >
            <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Crafting Seamless Digital Experiences</h2>
              <p className="text-lg max-w-2xl mx-auto">From idea to impact, we turn your vision into functional, beautiful software. Built for users, scaled for success.</p>
            </div>
          </section>

          {/* How It Works */}
          <section id="how" className="py-20 px-6 max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-12" data-aos="fade-up">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 border rounded-xl shadow-md hover:shadow-lg transition-shadow" data-aos="fade-up">
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

          {/* Why AFS */}
          <section id="why" className="py-20 px-6 bg-gray-100">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-semibold mb-10" data-aos="fade-up">
                Why Choose App Forge Solutions?
              </h2>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                {reasons.map(([title, desc, Icon], i) => (
                  <div
                    key={title}
                    className="flex items-start gap-4"
                    data-aos="fade-up"
                    data-aos-delay={i * 100}
                  >
                    <Icon className="text-orange-500 w-6 h-6 mt-1" />
                    <p>
                      <span className="font-bold">{title}:</span> {desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Meet the Team */}
          <section id="team" className="py-20 px-6 bg-white text-center">
            <h2 className="text-3xl font-semibold mb-10" data-aos="fade-up">Meet the Team</h2>
            <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
              {[
                {
                  name: "First Last",
                  role: "CEO",
                  email: "first.last@afs.com",
                  image: "/images/blank-profile-picture.webp"
                },
                {
                  name: "First Last",
                  role: "Lead Developer",
                  email: "first.last@afs.com",
                  image: "/images/blank-profile-picture.webp"
                },
                {
                  name: "First Last",
                  role: "Project Manager",
                  email: "first.last@afs.com",
                  image: "/images/blank-profile-picture.webp"
                },
              ].map(({ name, role, email, image }, i) => (
                <div
                  key={name}
                  className="flex flex-col items-center space-y-4"
                  data-aos="fade-up"
                  data-aos-delay={i * 100}
                >
                  <img
                  src={image}
                  alt={name}
                  className="w-24 h-24 rounded-full object-cover shadow-md"
                   />
                  <h3 className="text-xl font-bold">{name}</h3>
                  <p className="text-gray-600">{role}</p>
                  <p className="text-sm text-gray-600">{email}</p>
                </div>
              ))}
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
                  headers: { "Content-Type": "application/json" }
                });

                if (res.ok) {
                  alert("Message sent!");
                  form.reset();
                } else {
                  alert("Something went wrong. Please try again.");
                }
              }}
            >
              <input name="name" type="text" required placeholder="Your Name" className="w-full bg-white text-black border-b border-gray-300 focus:border-orange-500 outline-none py-2 transition-colors" />
              <input name="email" type="email" required placeholder="Your Email" className="w-full bg-white text-black border-b border-gray-300 focus:border-orange-500 outline-none py-2 transition-colors" />
              <textarea name="message" required placeholder="Your Message" rows={5} className="w-full bg-white text-black border-b border-gray-300 focus:border-orange-500 outline-none py-2 transition-colors resize-none" />
              <button type="submit" className="bg-orange-600 text-white px-6 py-3 rounded-full text-lg hover:bg-orange-700 transition">
                Send Message
              </button>
            </form>
          </section>

          {/* Back to Top */}
          <a
            href="#top"
            className="fixed bottom-6 right-6 bg-orange-600 text-white p-3 rounded-full shadow-lg hover:bg-orange-700 transition md:block hidden z-50"
          >
            ↑ Top
          </a>

          <footer className="py-6 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} App Forge Solutions. All rights reserved.
          </footer>
        </div>
      </main>
     {/* Sidebar Navigation */}
    <nav className="flex flex-col justify-between fixed right-0 top-0 h-screen bg-gray-800 text-white w-48 px-4 py-10 z-50">
      <div className="flex flex-col space-y-6 text-sm">
        <a href="#how" className="hover:text-orange-400 transition">How It Works</a>
        <a href="#why" className="hover:text-orange-400 transition">Why AFS</a>
        <a href="#team" className="hover:text-orange-400 transition">Meet the Team</a>
        <a href="#contact" className="hover:text-orange-400 transition">Get Started</a>
      </div>
      <a
        href="#top"
        className="bg-orange-600 hover:bg-orange-700 text-center py-2 rounded text-sm transition"
      >
        ↑ Top
      </a>
    </nav>
  </div>
  );
}
