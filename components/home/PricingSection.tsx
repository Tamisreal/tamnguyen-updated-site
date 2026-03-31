"use client";

import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const tiers = [
  {
    name: "Project / Build Fee",
    price: "$500–$2,000",
    period: "one-time",
    popular: false,
    description: "Pay once to get your agent built and delivered.",
    features: ["Discovery call", "Agent built to spec", "2 weeks of support", "Full source code delivered"],
  },
  {
    name: "Monthly Retainer",
    price: "$500–$2,000",
    period: "/mo",
    popular: true,
    description: "Ongoing partnership — maintenance, updates, and support.",
    features: ["Everything in Project", "Ongoing maintenance", "New features monthly", "Priority support", "Performance reporting"],
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    popular: false,
    description: "Multiple agents, team training, and full white-label options.",
    features: ["Multiple agents", "Team training included", "SLA guarantee", "White-label option", "Dedicated account support"],
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="section-padding bg-[#faf9f6]" style={{ scrollMarginTop: "80px" }}>
      <div className="container-custom">
        <div className="text-center mb-14">
          <span className="section-label text-[#1e3a5f]">Pricing Models</span>
          <h2 className="section-heading">How to Price Your Agents</h2>
          <p className="section-subtitle">Three proven models — pick the one that fits how you want to work.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={cn(
                "relative flex flex-col rounded-2xl border transition-all duration-200",
                tier.popular
                  ? "bg-[#1e3a5f] border-[#1e3a5f] shadow-[0_8px_32px_rgba(30,58,95,.2)] scale-[1.02] z-10"
                  : "bg-white border-[#eeece9] shadow-[0_1px_3px_rgba(0,0,0,.04)] hover:border-[#c9c5bf] hover:shadow-[0_8px_24px_rgba(0,0,0,.06)]"
              )}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 rounded-full text-xs font-bold bg-[#c4552d] text-white shadow-sm">
                    MOST POPULAR
                  </span>
                </div>
              )}

              <div className="p-7 flex-1 flex flex-col">
                <div className="mb-6">
                  <h3 className={cn("text-lg font-bold mb-1.5", tier.popular ? "text-white" : "text-[#1c1917]")} style={{ fontFamily: "var(--font-display)" }}>
                    {tier.name}
                  </h3>
                  <p className={cn("text-sm leading-relaxed", tier.popular ? "text-blue-200" : "text-[#a8a29e]")}>
                    {tier.description}
                  </p>
                </div>

                <div className="flex items-end gap-1 mb-8">
                  <span className={cn("text-3xl font-extrabold tracking-tight", tier.popular ? "text-white" : "text-[#1e3a5f]")} style={{ fontFamily: "var(--font-display)" }}>
                    {tier.price}
                  </span>
                  {tier.period && (
                    <span className={cn("text-sm mb-0.5", tier.popular ? "text-blue-200" : "text-[#a8a29e]")}>
                      {tier.period}
                    </span>
                  )}
                </div>

                <ul className="flex flex-col gap-3 flex-1 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <div className={cn("w-5 h-5 rounded-full flex items-center justify-center shrink-0", tier.popular ? "bg-white/15" : "bg-[#e8eef4]")}>
                        <Check className={cn("w-3 h-3", tier.popular ? "text-white" : "text-[#1e3a5f]")} />
                      </div>
                      <span className={cn("text-sm", tier.popular ? "text-blue-100" : "text-[#78716c]")}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={tier.popular ? "accent" : "outline"}
                  fullWidth
                  icon={<ArrowRight className="w-4 h-4" />}
                  onClick={() => document.getElementById("work-with-me")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Get Started
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PricingSection;
