"use client";

import { ArrowRight } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

const creators = [
  { name: "Liam Ottley", platform: "YouTube", what: "AI agency building, client acquisition, and scaling automation businesses.", href: "#" },
  { name: "Nick Saraev", platform: "Twitter / X", what: "No-code automation, Make.com workflows, and selling AI services at scale.", href: "#" },
  { name: "Greg Isenberg", platform: "Twitter / X", what: "Building and selling SaaS + AI products. Business strategy and idea generation.", href: "#" },
  { name: "Andrej Karpathy", platform: "YouTube", what: "Deep technical understanding of how LLMs actually work under the hood.", href: "#" },
  { name: "Swyx", platform: "Twitter / X", what: "AI engineering, agent design patterns, and the state of the AI ecosystem.", href: "#" },
];

export function WhoToLearnFrom() {
  return (
    <section id="learn" className="section-padding bg-[#f5f3ee]" style={{ scrollMarginTop: "80px" }}>
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="section-label text-[#1e3a5f]">Recommended Follows</span>
          <h2 className="section-heading">Who I Actually Learn From</h2>
          <p className="section-subtitle">These are the people I genuinely follow — not paid to recommend.</p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch [&>*]:h-full">
            {creators.map((creator) => (
              <Card key={creator.name} hover className="h-full flex flex-col text-center">
                <CardHeader>
                  <div className="flex flex-col items-center gap-3">
                    <CardTitle className="text-center">{creator.name}</CardTitle>
                    <Badge variant="primary" className="shrink-0">{creator.platform}</Badge>
                  </div>
                </CardHeader>
                <CardDescription className="flex-1 min-h-[88px] text-center">{creator.what}</CardDescription>
                <CardFooter className="mt-auto flex justify-center">
                  <a href={creator.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1e3a5f] hover:text-[#162d4a] transition-colors group">
                    Follow
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

export default WhoToLearnFrom;
