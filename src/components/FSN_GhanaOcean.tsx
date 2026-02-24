
"use client";
import React, { useRef, useState } from "react";
import ManagementSection from "./ManagementSection";
export default function FSN_GhanaOcean() {
  // --- HERO video sound toggle ---
  const heroRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const toggleMute = () => {
    const v = heroRef.current;
    if (!v) return;
    // A click counts as user interaction, so we can play with sound
    if (v.paused) v.play().catch(() => {});
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  return (
    <div className="min-h-screen w-full bg-neutral-50 text-slate-800">
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            <img
              src="/images/logo.jpeg"
              alt="Fisherfolk Sustainability Network"
              className="h-10 w-10 rounded-full ring-2 ring-sky-600"
            />
            <div>
              <p className="font-semibold leading-tight">
                Fisherfolk Sustainability Network
              </p>
              <p className="text-xs text-slate-500">Ghana • Ocean • Communities</p>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#intro" className="hover:text-sky-700">Overview</a>
            <a href="#issues" className="hover:text-sky-700">Challenges</a>
            <a href="#work" className="hover:text-sky-700">What we do</a>
            <a href="#videos" className="hover:text-sky-700">Videos</a>
            <a href="#gallery" className="hover:text-sky-700">Gallery</a>
            <a href="#contact" className="hover:text-sky-700">Contact</a>
          </nav>
          <a
            href="#donate"
            className="hidden md:inline-flex px-4 py-2 rounded-xl bg-sky-600 text-white hover:bg-sky-700 shadow"
          >
            Donate
          </a>
        </div>
      </header>

      {/* HERO with autoplay background video (one section only) */}
      <section id="home" className="relative h-[68vh] md:h-[80vh] w-full overflow-hidden">
        {/* Background video */}
        <video
          ref={heroRef}
          className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/images/ghana-1.jpeg"
        >
          <source src="/media/hero.mp4" type="video/mp4" />
        </video>

        {/* subtle dark overlay above video */}
        <div className="absolute inset-0 bg-sky-950/30 z-10" />

        {/* content */}
        <div className="relative z-20 h-full grid place-items-center">
          <div className="max-w-3xl px-6 text-center text-white">
            <div className="mx-auto w-20 h-20 bg-white/90 rounded-full grid place-items-center shadow mb-4">
              <img src="/images/logo.jpeg" alt="FSN logo" className="h-12 w-12" />
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
              Protecting Ghana’s ocean and empowering artisanal fishers
            </h1>
            <p className="mt-4 text-sky-100 md:text-lg">
              We champion safety at sea, climate resilience, sustainable fishing
              and community-led advocacy across coastal communities.
              <a href = "https://3news.com/news/fisherfolk-sustainability-network-launches-in-keta-donates-life-jackets">Link for Advocacy events</a>
            </p>
            <a href = "https://3news.com/news/fisherfolk-sustainability-network-launches-in-keta-donates-life-jackets">Link for Advocacy events</a>
            <div className="mt-6 flex flex-wrap gap-3 justify-center">
              <a
                href="#work"
                className="px-5 py-3 rounded-2xl bg-white text-sky-700 hover:bg-slate-100 shadow"
              >
                Our work in Ghana
              </a>
              <a
                href="#contact"
                className="px-5 py-3 rounded-2xl border border-white/70 text-white hover:bg-white/10"
              >
                Get in touch
              </a>
              {/* Unmute button (user gesture enables audio) */}
              <button
                type="button"
                onClick={toggleMute}
                className="px-4 py-3 rounded-2xl bg-black/50 text-white hover:bg-black/60 border border-white/30"
              >
                {muted ? "Unmute video" : "Mute video"}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Intro / Overview */}
      <section id="intro" className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2">
            <h2 className="text-2xl md:text-3xl font-bold">Why this matters</h2>
            <p className="mt-4 text-slate-700">
              Ghana’s coastal communities depend on healthy oceans for livelihoods and
              nutrition. Overfishing, unsafe practices at sea, climate change and weak
              enforcement threaten people and ecosystems. The Fisherfolk Sustainability
              Network (FSN) works hand-in-hand with communities to advocate for safety,
              resilience and sustainable futures.
            </p>
            <div className="mt-6 grid sm:grid-cols-3 gap-4">
              {[
                { k: "Communities", v: "Nungua, Keta, Anyanui, Dixcove, Anomabo, Jomorro" },
                { k: "Focus", v: "• Safety • Sustainability • Advocacy • Research" },
                { k: "Approach", v: "Community-led training, partnerships & policy implementation" },
              ].map((x) => (
                <div
                  key={x.k}
                  className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <p className="text-xs uppercase tracking-wide text-slate-500">{x.k}</p>
                  <p className="mt-1 text-sm font-medium">{x.v}</p>
                </div>
              ))}
            </div>
          </div>
          <aside className="bg-sky-50 rounded-2xl p-6 border border-sky-200 shadow">
            <h3 className="font-semibold">Vision & Mission</h3>
            <p className="mt-2 text-sm">
              Vision: Encourage safety during fishing, handling, processing and
              distribution of fish products.
            </p>
            <p className="mt-2 text-sm">
              Mission: Serve as a safety awareness agency for fishing communities,
              advancing climate-resilient and sustainable practices.
            </p>
          </aside>
        </div>
      </section>

      {/* Challenges */}
      <section id="issues" className="bg-white border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-bold">Key challenges we address</h2>
          <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { t: "Climate Action", d: "Changing currents and extreme weather increase risks for small-scale fishers." },
              { t: "Unsustainable practices", d: "Non-selective gear and poor handling reduce stocks and quality." },
              { t: "Safety at sea", d: "Limited training and equipment lead to preventable accidents." },
              { t: "Weak enforcement", d: "Fragmented regulations and low awareness hinder compliance." },
            ].map((c) => (
              <div
                key={c.t}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
              >
                <h3 className="font-semibold mb-2">{c.t}</h3>
                <p className="text-sm text-slate-700">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Work */}
      <section id="work" className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold">What we do</h2>
        <p className="mt-2 text-slate-600">
          Programs aligned to the <em>Code of Safety for Fishermen &amp; Fishing Vessels (2005)</em>.
        </p>
        <div className="mt-6 grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {[
            { t: "Climate change awareness", b: ["Monthly workshops and local-language materials", "Community dialogues & short films", "Practical adaptation strategies"] },
            { t: "Sustainable fishing practices", b: ["Selective gear & seasonal closures", "Demonstration projects in pilot sites", "Fish handling & quality"] },
            { t: "Safety of life at sea", b: ["Seamanship, first aid & emergency drills", "Life jackets and communication gear", "Incident reporting & learning"] },
            { t: "Advocacy & regulation", b: ["Stakeholder forums & policy dialogues", "Public campaigns", "Follow-up on adoption & enforcement"] },
          ].map((p) => (
            <div key={p.t} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="font-semibold mb-3">{p.t}</h3>
              <ul className="text-sm text-slate-700 space-y-2 list-disc pl-5">
                {p.b.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Videos */}
            {/* Gallery */}
      <section id="gallery" className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold">Field photos</h2>
        <p className="mt-2 text-slate-600">Real scenes from our partner communities.</p>
        <div className="mt-6 grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {[
            "/images/ghana-1.jpeg",
            "/images/ghana-2.jpeg",
            "/images/ghana-3.jpeg",
            "/images/ghana-4.jpeg",
          ].map((src, i) => (
            <figure
              key={src}
              className="rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm"
            >
              <img src={src} alt={`Ghana field ${i + 1}`} className="w-full h-64 object-cover" />
            </figure>
          ))}
        </div>
      </section>

      {/* Contact + Donate */}
      <section id="contact" className="bg-white border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-16 grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <h2 className="text-2xl font-bold mb-2">Get in touch</h2>
            <p className="text-sm text-slate-700 mb-4">For partnerships, press and volunteering.</p>
            <ul className="text-sm text-slate-700 space-y-2">
              <li><strong>Email:</strong> info@fsn.org</li>
              <li><strong>Phone:</strong> +233 500 030 0248</li>
              <li><strong>Address:</strong> Coastal Community Hub, Accra, Ghana</li>
            </ul>
          </div>
          <div id="donate" className="rounded-2xl border border-sky-200 bg-sky-50 p-6 shadow-sm">
            <h2 className="text-2xl font-bold mb-2">Support this work</h2>
            <p className="text-sm text-slate-700">
              Your donation helps fund training, safety equipment and community advocacy.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a className="px-5 py-3 rounded-2xl bg-sky-600 text-white hover:bg-sky-700 shadow" href="#">
                Sponsor a workshop
              </a>
              <a className="px-5 py-3 rounded-2xl border border-sky-300 text-sky-700 hover:bg-white shadow" href="#">
                Partner with us
              </a>
              <a className="px-5 py-3 rounded-2xl bg-sky-600 text-white hover:bg-sky-700 shadow" href="https://3news.com/news/fisherfolk-sustainability-network-launches-in-keta-donates-life-jackets">
                FSN Donations
              </a>
            </div>
          </div>
        </div>
      </section>
<ManagementSection />
      {/* Footer */}
      <footer className="border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-8 text-sm text-slate-600 flex flex-col md:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Fisherfolk Sustainability Network — Ghana Program</p>
          <div className="flex gap-4">
            <a href="#intro" className="hover:text-sky-700">Overview</a>
            <a href="#work" className="hover:text-sky-700">Our work</a>
            <a href="#contact" className="hover:text-sky-700">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
