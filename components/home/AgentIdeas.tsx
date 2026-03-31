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
        <div className="text-center mb-14">
          <span className="section-label text-[#c4552d]">What Sells</span>
          <h2 className="section-heading">What to Build & Sell</h2>
          <p className="section-subtitle">These are the agents businesses actually pay for — with real price ranges.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {agents.map((agent) => (
            <Card key={agent.name} hover className="h-full flex flex-col">
              <CardHeader>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#fef0eb] w-fit mb-3">
                  <DollarSign className="w-3.5 h-3.5 text-[#c4552d]" />
                  <span className="text-xs font-bold text-[#c4552d]">{agent.price}</span>
                </div>
                <CardTitle>{agent.name}</CardTitle>
              </CardHeader>
              <CardDescription className="flex-1">{agent.description}</CardDescription>
              <CardContent>
                <div className="flex items-start gap-2 mt-5 pt-4 border-t border-[#f0ede8]">
                  <Users className="w-3.5 h-3.5 text-[#c9c5bf] mt-0.5 shrink-0" />
                  <span className="text-xs text-[#a8a29e] leading-relaxed">{agent.buyers}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AgentIdeas;
