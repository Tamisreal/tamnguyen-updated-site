"use client";

import { DollarSign, Users } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";

const agents = [
  { name: "Lead Generation Agent", price: "$500–$2k/mo", description: "Finds and qualifies prospects automatically. Scrapes, enriches, and delivers ready-to-contact leads daily.", buyers: "Sales teams, agencies, SaaS companies" },
  { name: "Content Creation Agent", price: "$300–$1k/mo", description: "Generates SEO articles, social posts, and newsletters on autopilot from a single brief.", buyers: "Marketing teams, creators, e-commerce brands" },
  { name: "Customer Support Agent", price: "$400–$1.5k/mo", description: "Handles FAQs, routes tickets, and escalates edge cases to humans 24/7 without missing a beat.", buyers: "SaaS, e-commerce, service businesses" },
  { name: "Data Research Agent", price: "$500–$2k/mo", description: "Monitors competitors, tracks market signals, and surfaces insights your team would miss.", buyers: "Analysts, investors, consultants" },
  { name: "Outreach Automation", price: "$600–$2k/mo", description: "Personalizes and sends cold outreach at scale — email, LinkedIn, or DMs — with real replies.", buyers: "Sales teams, recruiters, growth agencies" },
  { name: "Custom Workflow Agent", price: "$1k–$5k/mo", description: "Replaces a specific business process end-to-end. The highest value, highest price category.", buyers: "Enterprises, operations teams, CFOs" },
];

export function AgentIdeas() {
  return (
    <section id="agents" className="section-padding bg-[#f5f3ee]" style={{ scrollMarginTop: "80px" }}>
      <div className="container-custom">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="section-label text-[#c4552d]">What Sells</span>
          <h2 className="section-heading">What to Build & Sell</h2>
          <p className="section-subtitle">These are the agents businesses actually pay for — with real price ranges.</p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap justify-center gap-6 xl:gap-7 items-stretch">
            {agents.map((agent) => (
              <div key={agent.name} className="w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] xl:w-[calc(33.333%-1.166rem)] flex">
                <Card hover className="w-full flex flex-col items-center text-center">
                  <CardHeader className="flex flex-col items-center">
                    <div className="inline-flex items-center justify-center gap-1.5 px-3 py-1 rounded-full bg-[#fef0eb] border border-[#fde3d9] w-fit mb-3">
                      <DollarSign className="w-3.5 h-3.5 text-[#c4552d]" />
                      <span className="text-[11px] font-bold text-[#c4552d]">{agent.price}</span>
                    </div>
                    <CardTitle className="text-center">{agent.name}</CardTitle>
                  </CardHeader>
                  <CardDescription className="flex-1 min-h-[88px] text-center">{agent.description}</CardDescription>
                  <CardContent className="w-full flex flex-col items-center">
                    <div className="flex flex-col items-center gap-2 mt-6 pt-5 border-t border-gray-100 w-full">
                      <Users className="w-4 h-4 text-[#9ca3af]" />
                      <span className="text-xs text-[#6b7280] leading-relaxed text-center">{agent.buyers}</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AgentIdeas;
