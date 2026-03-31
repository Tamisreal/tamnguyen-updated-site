"use client";

import { Github, ArrowRight, Zap, DollarSign, Users } from "lucide-react";
import { Button } from "@/components/ui/Button";

const valueProps = [
  { icon: Zap, text: "Ranked by Difficulty" },
  { icon: DollarSign, text: "Real Pricing Data" },
  { icon: Users, text: "1-on-1 Available" },
];

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden bg-grid-pattern">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#faf9f6]/50 to-[#faf9f6] pointer-events-none" />
      <div className="container-custom relative z-10">
        <div className="text-center">

          <div className="flex justify-center mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#fef0eb] text-[#c4552d] text-xs font-bold tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c4552d]" />
              AI Agent Builder & Educator
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-7 text-[#1c1917] leading-[1.05] tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
            Build AI Agents{" "}
            <span className="text-[#1e3a5f]">That Make Money</span>
          </h1>

          <p className="text-lg md:text-xl text-[#78716c] mb-12 max-w-2xl mx-auto leading-relaxed">
            The no-BS guide to picking, building, and selling AI agents — from someone actively doing it.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-20">
            <Button
              variant="accent"
              size="lg"
              icon={<Github className="w-5 h-5" />}
              iconPosition="left"
              onClick={() => document.getElementById("repos")?.scrollIntoView({ behavior: "smooth" })}
            >
              Browse GitHub Repos
            </Button>
            <Button
              variant="outline"
              size="lg"
              icon={<ArrowRight className="w-4 h-4" />}
              onClick={() => document.getElementById("work-with-me")?.scrollIntoView({ behavior: "smooth" })}
            >
              Work With Me
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {valueProps.map((prop) => (
              <div key={prop.text} className="flex items-center gap-3 group cursor-default">
                <div className="w-10 h-10 rounded-xl bg-[#f3f6f9] border border-gray-100 flex items-center justify-center group-hover:bg-[#e8eef4] transition-colors">
                  <prop.icon className="w-[18px] h-[18px] text-[#1e3a5f]" />
                </div>
                <span className="text-sm font-medium text-[#57534e]">{prop.text}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
