import React, { useState } from 'react';
import { Marquee } from "@/components/magicui/marquee";

const teamMembers = [
  {
    name: "Lester Andrew Calvert",
    username: "@lester.adrew.calvert",
    role: "Founder & Chief AI Visionary",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    gradient: "from-purple-500/20 to-pink-500/20",
    expertise: ["AI Strategy", "Innovation", "Leadership"]
  },
  {
    name: "Supratim Dhar",
    username: "@supratim.dhar",
    role: "Chief Technology & Data Officer",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face",
    gradient: "from-blue-500/20 to-cyan-500/20",
    expertise: ["Data Science", "Architecture", "Cloud"]
  },
  {
    name: "Sandip Sharma",
    username: "@sandip.sharma",
    role: "AI-Powered Marketing Strategist",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    gradient: "from-green-500/20 to-emerald-500/20",
    expertise: ["Marketing", "Analytics", "Growth"]
  },
  {
    name: "Aishi",
    username: "@aishi",
    role: "Human-Centered Design & AI Experience Lead",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    gradient: "from-orange-500/20 to-red-500/20",
    expertise: ["UX Design", "Research", "Prototyping"]
  },
  {
    name: "Souradip",
    username: "@souradip",
    role: "Lead Machine Learning Engineer",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    gradient: "from-indigo-500/20 to-purple-500/20",
    expertise: ["ML/DL", "Python", "TensorFlow"]
  },
  {
    name: "Bhaibhav",
    username: "@bhaibhav",
    role: "Full-Stack Developer & Data Engineer",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
    gradient: "from-teal-500/20 to-blue-500/20",
    expertise: ["React", "Node.js", "ETL"]
  },
  {
    name: "Suddhajit",
    username: "@suddhajit",
    role: "AI-Driven Designer & Developer",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    gradient: "from-rose-500/20 to-pink-500/20",
    expertise: ["Creative AI", "Frontend", "Motion"]
  },
  {
    name: "Harleen Kaur",
    username: "@harleen.kaur",
    role: "Innovation Delivery Manager – AI Solutions",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    gradient: "from-amber-500/20 to-orange-500/20",
    expertise: ["Agile", "Delivery", "Strategy"]
  },
];

const firstColumn = teamMembers.slice(0, 3);
const secondColumn = teamMembers.slice(3, 6);
const thirdColumn = teamMembers.slice(6, 9);

const TeamMemberCard = ({ img, name, username, role, gradient, expertise }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative w-full max-w-xs group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`
        relative overflow-hidden rounded-3xl border border-white/10 
        bg-gradient-to-b from-white/[0.08] via-white/[0.04] to-transparent
        p-8 shadow-2xl backdrop-blur-xl
        transition-all duration-500 ease-out
        hover:border-white/20 hover:shadow-[0_20px_80px_-20px_rgba(231,138,83,0.3)]
        hover:scale-[1.02] hover:-translate-y-1
      `}>
        {/* Animated gradient background */}
        <div className={`
          absolute -top-10 -left-10 h-48 w-48 rounded-full 
          bg-gradient-to-br ${gradient} blur-3xl opacity-50
          transition-all duration-700 group-hover:opacity-70
          group-hover:scale-110 animate-pulse
        `}></div>
        
        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden rounded-3xl">
          <div className="absolute top-4 left-8 h-1 w-1 bg-white/30 rounded-full animate-float-slow"></div>
          <div className="absolute top-12 right-6 h-1.5 w-1.5 bg-white/20 rounded-full animate-float-medium"></div>
          <div className="absolute bottom-8 left-12 h-1 w-1 bg-white/25 rounded-full animate-float-fast"></div>
        </div>

        {/* Profile image with glow effect */}
        <div className="relative mb-6 group">
          <div className="absolute inset-0 bg-gradient-to-r from-[#e78a53]/40 to-[#f0a068]/40 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <img 
            src={img || "/placeholder.svg"} 
            alt={name} 
            className="relative h-20 w-20 rounded-full object-cover ring-2 ring-white/10 group-hover:ring-white/30 transition-all duration-500"
          />
          {/* Status indicator */}
          <div className="absolute bottom-0 right-0 h-5 w-5 bg-green-500 rounded-full border-2 border-black/50 animate-pulse"></div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-[#e78a53] transition-colors duration-300">
            {name}
          </h3>
          <p className="text-sm text-white/50 mb-3">{username}</p>
          <p className="text-white/80 font-medium mb-4 leading-relaxed">
            {role}
          </p>
          
          {/* Expertise tags */}
          <div className={`
            flex flex-wrap gap-2 mt-4 
            transition-all duration-500 
            ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}
          `}>
            {expertise?.map((skill, idx) => (
              <span 
                key={idx}
                className="px-2 py-1 text-xs bg-white/10 text-white/70 rounded-full backdrop-blur-sm"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Hover shine effect */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
      </div>
    </div>
  );
};

export default function TestimonialsSection() {
  return (
    <section id="team" className="relative py-24 overflow-hidden bg-black">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 h-96 w-96 bg-[#e78a53]/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 h-96 w-96 bg-purple-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] bg-gradient-to-r from-[#e78a53]/5 to-purple-500/5 rounded-full blur-[150px] animate-spin-slow"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex justify-center mb-6">
            <button className="group relative rounded-full border border-white/20 bg-gradient-to-r from-white/10 to-white/5 px-8 py-2 backdrop-blur-xl transition-all duration-500 hover:scale-105 hover:border-[#e78a53]/50">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#e78a53]/20 to-purple-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
              <span className="relative text-sm font-medium text-white/90 group-hover:text-white transition-colors">
                Meet Our Team
              </span>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-1/2 bg-gradient-to-r from-transparent via-[#e78a53] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:w-full"></div>
            </button>
          </div>

          <h2 className="mb-6 text-5xl md:text-7xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
              Brilliant
            </span>
            <span className="bg-gradient-to-r from-[#e78a53] via-[#f0a068] to-[#fbb681] bg-clip-text text-transparent ml-3 animate-gradient">
              Minds
            </span>
          </h2>

          <p className="text-lg text-white/60 leading-relaxed max-w-xl mx-auto">
            Our diverse team of innovators, creators, and problem-solvers working together to shape the future of AI technology.
          </p>
        </div>

        {/* Team marquee */}
        <div className="mt-20 flex justify-center gap-8 max-h-[800px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
          <div className="hidden lg:block">
            <Marquee pauseOnHover vertical className="[--duration:25s]">
              {firstColumn.map((member) => (
                <TeamMemberCard key={member.username} {...member} />
              ))}
            </Marquee>
          </div>

          <div className="hidden md:block">
            <Marquee reverse pauseOnHover vertical className="[--duration:30s]">
              {secondColumn.map((member) => (
                <TeamMemberCard key={member.username} {...member} />
              ))}
            </Marquee>
          </div>

          <div>
            <Marquee pauseOnHover vertical className="[--duration:35s]">
              {thirdColumn.map((member) => (
                <TeamMemberCard key={member.username} {...member} />
              ))}
            </Marquee>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <button className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#e78a53] to-[#f0a068] px-8 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-[0_20px_40px_-15px_rgba(231,138,83,0.5)] hover:scale-105">
            <span>Join Our Team</span>
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) translateX(0); }
          33% { transform: translateY(-20px) translateX(10px); }
          66% { transform: translateY(10px) translateX(-5px); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-15px) translateX(-10px); }
        }
        @keyframes float-fast {
          0%, 100% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-10px) translateX(5px); }
          75% { transform: translateY(5px) translateX(-10px); }
        }
        @keyframes spin-slow {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes gradient {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 1; }
        }
        .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
        .animate-float-medium { animation: float-medium 6s ease-in-out infinite; }
        .animate-float-fast { animation: float-fast 4s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
        .animate-gradient { animation: gradient 3s ease-in-out infinite; }
      `}</style>
    </section>
  );
}

