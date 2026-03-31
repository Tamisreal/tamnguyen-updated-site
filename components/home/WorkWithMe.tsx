"use client";

import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

const benefits = [
  "Find your first paying client — even with no portfolio",
  "Build the right agent for your specific niche",
  "Price and package your services for maximum value",
  "Set up systems to deliver and scale without burning out",
  "Weekly 1-on-1 calls with accountability and feedback",
];

export function WorkWithMe() {
  return (
    <section id="work-with-me" className="section-padding bg-[#faf9f6]" style={{ scrollMarginTop: "80px" }}>
      <div className="container-custom">
        <div className="text-center mb-14">
          <span className="section-label text-[#c4552d]">1-on-1 Coaching</span>
          <h2 className="section-heading">
            Want Clients? <span className="text-[#c4552d]">Want to Scale?</span>
          </h2>
          <p className="section-subtitle">
            I work 1-on-1 with builders who are serious about turning AI agents into a real business.
          </p>
        </div>

        <div className="bg-white border border-[#eeece9] rounded-2xl p-8 md:p-12 shadow-[0_4px_24px_rgba(0,0,0,.05)]">
          <ul className="flex flex-col gap-4 mb-10">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-[#e8eef4] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-[#1e3a5f]" />
                </div>
                <span className="text-[#78716c] text-base leading-relaxed">{benefit}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row items-center gap-5 pt-6 border-t border-[#f0ede8]">
            <Button
              variant="accent"
              size="xl"
              icon={<ArrowRight className="w-5 h-5" />}
              onClick={() => window.open("mailto:tam@tamnguyen.ai", "_blank")}
            >
              Apply for 1-on-1 Coaching
            </Button>
            <span className="text-sm text-[#a8a29e]">Only 3 spots open per month</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkWithMe;
