"use client";

import { ArrowRight } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/Card";

const tools = [
  { name: "n8n", description: "Visual workflow automation. Best for connecting APIs without writing code. Self-hostable and free.", href: "https://n8n.io" },
  { name: "Make.com", description: "Drag-and-drop automation. Great for beginners and quick client prototypes. Fastest time to demo.", href: "https://make.com" },
  { name: "Python", description: "For complex logic, data processing, and custom agent frameworks like LangChain or CrewAI.", href: "https://python.org" },
  { name: "Claude API", description: "Anthropic's API. Best reasoning model for agent tasks. What I use for 90% of production agents.", href: "https://anthropic.com" },
  { name: "Supabase", description: "Postgres database + auth + storage. Generous free tier. The default choice for most projects.", href: "https://supabase.com" },
  { name: "Vercel", description: "Deploy Next.js frontends in seconds. Free for personal projects, great DX, instant previews.", href: "https://vercel.com" },
  { name: "GitHub", description: "Version control and your public portfolio. Every agent you build should live here.", href: "https://github.com/Tamisreal" },
];

export function TechStack() {
  return (
    <section id="stack" className="section-padding bg-[#f5f3ee]" style={{ scrollMarginTop: "80px" }}>
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="section-label text-[#1e3a5f]">My Toolkit</span>
          <h2 className="section-heading">My Tech Stack</h2>
          <p className="section-subtitle">The tools I use to build and ship agents fast — in order of when you should learn them.</p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch [&>*]:h-full">
            {tools.map((tool) => (
              <Card key={tool.name} hover className="h-full flex flex-col text-center">
                <CardHeader className="items-center">
                  <CardTitle className="text-center">{tool.name}</CardTitle>
                </CardHeader>
                <CardDescription className="flex-1 min-h-[96px] text-center">{tool.description}</CardDescription>
                <CardFooter className="mt-auto flex justify-center">
                  <a href={tool.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#6b7280] hover:text-[#1e3a5f] transition-colors group">
                    Learn more
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TechStack;
