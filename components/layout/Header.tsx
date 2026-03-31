"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Repos", href: "#repos" },
  { name: "Agent Ideas", href: "#agents" },
  { name: "Pricing", href: "#pricing" },
  { name: "Tech Stack", href: "#stack" },
  { name: "Learn From", href: "#learn" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-[#eeece9] shadow-[0_1px_3px_rgba(0,0,0,.04)]"
          : "bg-transparent"
      )}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-[4.25rem]">
          <a href="/" className="flex items-center gap-2.5 group shrink-0">
            <div className="w-8 h-8 rounded-lg bg-[#1e3a5f] flex items-center justify-center group-hover:bg-[#162d4a] transition-colors">
              <span className="text-white font-bold text-sm">T</span>
            </div>
            <span className="font-bold text-[1.0625rem] text-[#1c1917] tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
              Tam<span className="text-[#c4552d]">Nguyen</span>
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-[0.8125rem] font-medium text-[#78716c] hover:text-[#1c1917] transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="hidden lg:block shrink-0">
            <Button
              variant="accent"
              size="sm"
              onClick={() => document.getElementById("work-with-me")?.scrollIntoView({ behavior: "smooth" })}
            >
              Work With Me
            </Button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-[#78716c] hover:text-[#1c1917] hover:bg-[#f5f3ee] rounded-lg transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-[#eeece9]">
          <div className="container-custom py-4 space-y-0.5">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-xl text-sm font-medium text-[#78716c] hover:text-[#1e3a5f] hover:bg-[#f3f6f9] transition-colors"
              >
                {item.name}
              </a>
            ))}
            <div className="pt-3 px-3">
              <Button
                variant="accent"
                fullWidth
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  document.getElementById("work-with-me")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Work With Me
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
