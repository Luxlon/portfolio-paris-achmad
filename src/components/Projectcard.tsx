"use client";

import { motion } from "framer-motion";
import CardSwap, { Card } from "./CardSwap";
import GlobeDemo from "./globedemo";

// Tech Badge Component
const TechBadge = ({ icon, name, color }: { icon: string; name: string; color: string }) => (
  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-800/50 border border-neutral-700/30 backdrop-blur-sm">
    <span className="text-sm">{icon}</span>
    <span className="text-xs text-neutral-300 font-medium">{name}</span>
  </div>
);

export default function ProjectSection() {
  return (
    <section className="relative flex items-center justify-center py-12 pb-10 overflow-hidden">
      {/* Spotlight Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[700px] h-[450px] rounded-full bg-gradient-to-tr from-purple-700/40 via-blue-600/30 to-transparent blur-3xl animate-pulse" />
      </div>

      {/* Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <div className="relative flex flex-col lg:flex-row items-start lg:items-center gap-12 p-8 rounded-3xl border border-neutral-800 bg-neutral-950/70 backdrop-blur-lg shadow-2xl overflow-hidden">
          
          {/* Globe Background - Positioned at bottom left, 1/4 visible */}
          <div className="absolute -left-[400px] -bottom-[100px] w-full h-full pointer-events-none z-0 opacity-60">
            <GlobeDemo />
          </div>

          {/* Left: Title & Description */}
          <div className="flex-1 space-y-6 lg:pr-8 relative z-10 mb-60">
            <span className="inline-block px-4 py-1.5 text-xs font-medium tracking-wider text-purple-400 bg-purple-950/30 rounded-full border border-purple-700/30">
              ✦ Featured Works
            </span>

            <div className="relative">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-6xl font-extrabold text-white relative inline-block"
              >
                My{' '}
                <span className="relative inline-block bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%]">
                  Projects
                </span>
              </motion.h2>
            </div>
          
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-neutral-400 text-lg leading-relaxed max-w-lg"
            >
              A showcase of my latest works in web development, AI, and modern
              software engineering. Built with precision and creativity.
            </motion.p>
          </div>

          {/* Right: Card Swapper Container */}
          <div className="flex-1 relative w-full lg:w-auto z-10" style={{ minHeight: '550px' }}>
            <CardSwap 
              width={420} 
              height={380} 
              cardDistance={50} 
              verticalDistance={60} 
              delay={4000}
              skewAmount={4}
              pauseOnHover={true}
            >
              {/* Project 1 - Aquadex */}
              <Card className="p-6 bg-gradient-to-br from-neutral-900 to-neutral-950 text-white flex flex-col">
                <div className="relative w-full h-44 mb-4 rounded-lg overflow-hidden bg-neutral-800">
                  <img
                    src="/Aquadex.png"
                    alt="Aquadex"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent opacity-60" />
                </div>
                
                <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Aquadex
                </h3>
                
                <p className="text-sm text-neutral-400 mb-4 flex-grow">
                  A water management platform with real-time monitoring & analytics for sustainable resource management.
                </p>
                
                <div className="flex flex-wrap gap-2">
                  <TechBadge icon="⚛️" name="React" color="blue" />
                  <TechBadge icon="▲" name="Next.js" color="purple" />
                  <TechBadge icon="🎨" name="Tailwind" color="cyan" />
                  <TechBadge icon="🗄️" name="MySQL" color="orange" />
                </div>
              </Card>

              {/* Project 2 - Health Tracker */}
              <Card className="p-6 bg-gradient-to-br from-neutral-900 to-neutral-950 text-white flex flex-col">
                <div className="relative w-full h-44 mb-4 rounded-lg overflow-hidden bg-neutral-800">
                  <img
                    src="/Healthtrack.png"
                    alt="Health Tracker"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent opacity-60" />
                </div>
                
                <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  Health Tracker
                </h3>
                
                <p className="text-sm text-neutral-400 mb-4 flex-grow">
                  Personal health & fitness tracker with calorie analytics and workout planning features.
                </p>
                
                <div className="flex flex-wrap gap-2">
                  <TechBadge icon="⚛️" name="React" color="blue" />
                  <TechBadge icon="▲" name="Next.js" color="purple" />
                  <TechBadge icon="🎨" name="Tailwind" color="cyan" />
                </div>
              </Card>

              {/* Project 3 - IoT Dashboard */}
              <Card className="p-6 bg-gradient-to-br from-neutral-900 to-neutral-950 text-white flex flex-col">
                <div className="relative w-full h-44 mb-4 rounded-lg overflow-hidden bg-neutral-800">
                  <img
                    src="/Webdesign.png"
                    alt="Web"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent opacity-60" />
                </div>
                
                <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  Web Design
                </h3>
                
                <p className="text-sm text-neutral-400 mb-4 flex-grow">
                  Real-time monitoring dashboard for embedded systems & IoT devices with data visualization.
                </p>
                
                <div className="flex flex-wrap gap-2">
                  <TechBadge icon="⚛️" name="React" color="blue" />
                  <TechBadge icon="▲" name="Next.js" color="purple" />
                  <TechBadge icon="🎨" name="Tailwind" color="cyan" />
                </div>
              </Card>
            </CardSwap>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }
        .animate-shimmer {
          animation: shimmer 3s linear infinite;
        }
      `}</style>
    </section>
  );
}