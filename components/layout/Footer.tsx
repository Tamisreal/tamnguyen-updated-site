"use client";

import { Twitter, Youtube, Github, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

const footerLinks = {
  navigate: [
    { name: "GitHub Repos", href: "#repos" },
    { name: "Agent Ideas", href: "#agents" },
    { name: "Pricing", href: "#pricing" },
    { name: "Tech Stack", href: "#stack" },
    { name: "Who to Learn From", href: "#learn" },
  ],
  resources: [
    { name: "Pricing Guide", href: "#pricing" },
    { name: "Databases Comparison", href: "#databases" },
    { name: "Tech Stack", href: "#stack" },
    { name: "Agent Ideas", href: "#agents" },
  ],
};

const socialLinks = [
  { name: "Twitter / X", href: "https://twitter.com/tamnguyen_ai", icon: Twitter },
  { name: "YouTube", href: "https://youtube.com/@tamnguyen_ai", icon: Youtube },
  { name: "GitHub", href: "https://github.com/Tamisreal", icon: Github },
];

export function Footer() {
  return (
    <footer className="bg-[#f5f3ee]">
      {/* CTA Banner */}
      <div className="bg-[#1e3a5f]">
        <div className="container-custom py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
            Ready to Build & Sell AI Agents?
          </h2>
          <p className="text-blue-200/80 text-lg mb-10 max-w-lg mx-auto leading-relaxed">
            Start with a GitHub repo, pick an agent idea, or work with me 1-on-1 to land your first client.
          </p>
          <Button
            variant="accent"
            size="lg"
            icon={<ArrowRight className="w-4 h-4" />}
            onClick={() => document.getElementById("work-with-me")?.scrollIntoView({ behavior: "smooth" })}
          >
            Work With Me
          </Button>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded-lg bg-[#1e3a5f] flex items-center justify-center">
                <span className="text-white font-bold text-sm">T</span>
              </div>
              <span className="font-bold text-[1.0625rem] text-[#1c1917]" style={{ fontFamily: "var(--font-display)" }}>
                TamNguyen.ai
              </span>
            </a>
            <p className="text-[#a8a29e] text-sm leading-relaxed mb-6 max-w-sm">
              The no-BS guide to building and selling AI agents. GitHub repos, pricing guides, and 1-on-1 coaching for serious builders.
            </p>
            <div className="flex gap-2.5">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-white border border-[#eeece9] flex items-center justify-center text-[#a8a29e] hover:bg-[#1e3a5f] hover:text-white hover:border-[#1e3a5f] transition-all duration-200"
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.12em] text-[#78716c] mb-5">Navigate</h4>
            <ul className="space-y-3">
              {footerLinks.navigate.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-[#a8a29e] hover:text-[#1c1917] transition-colors duration-200">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.12em] text-[#78716c] mb-5">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-[#a8a29e] hover:text-[#1c1917] transition-colors duration-200">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-[#e7e5e4]">
        <div className="container-custom py-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#c9c5bf]">&copy; {new Date().getFullYear()} Tam Nguyen. All rights reserved.</p>
          <p className="text-xs text-[#c9c5bf]">Built for AI builders who mean business.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
