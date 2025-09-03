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

  // const prefix = process.env.NODE_ENV === "production" ? "/App-Forge-Solutions" : "";
  const isGhPages = process.env.DEPLOY_TARGET === "ghpages";
  const prefix = isGhPages ? "/App-Forge-Solutions" : "";


  return (
    <div>
      <main className="flex-1 min-h-screen bg-white text-gray-800 font-sans">
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
          <section className="px-6 py-20 text-center bg-gray-100">
            <div className="max-w-5xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-4" data-aos="fade-up">
                From concept to code
              </h1>
              <h1 className="text-4xl md:text-6xl font-bold mb-4" data-aos="fade-up">
                We make it happen
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
            className="relative bg-fixed bg-center bg-cover h-[60vh] md:h-[50vh] flex items-center justify-center text-white"
            style={{ backgroundImage: `url('${prefix}/images/parallax-bg.jpg')` }}
          >
            <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Crafting Seamless Digital Experiences</h2>
              <p className="text-lg max-w-2xl mx-auto">From idea to impact, we turn your vision into functional, beautiful software. Built for users, scaled for success.</p>
            </div>
          </section>

          {/* How It Works */}
          <section id="how" className="px-6 py-20 text-center">
            <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-10" data-aos="fade-up">How It Works</h2>
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
            </div>
          </section>

          {/* Why AFS */}
          <section id="why" className="px-6 py-20 bg-gray-100">
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

          {/* Contact */}
          <section id="contact" className="px-6 py-20 text-center">
            <div className="max-w-4xl md:max-w-5xl mx-auto">
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
            </div>
          </section>

          <footer className="py-6 text-center text-sm text-gray-500 flex flex-col items-center gap-1">
            <a
              href="https://projxon.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-700"
            >
              Partnered with PROJXON
            </a>
            © {new Date().getFullYear()} App Forge Solutions. All rights reserved.
          </footer>
        </div>
      </main>
  </div>
  );
}
