"use client";

const stats = [
  { value: "50+", label: "AI Agents Built" },
  { value: "20+", label: "GitHub Repos" },
  { value: "15+", label: "Clients Helped" },
  { value: "Active", label: "Builder Community" },
];

export function CredibilityBar() {
  return (
    <section className="py-16 bg-white border-y border-[#eeece9]">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center py-2 ${i < stats.length - 1 ? "lg:border-r lg:border-[#eeece9]" : ""}`}
            >
              <div className="text-3xl md:text-4xl font-extrabold text-[#1e3a5f] mb-1.5 tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
                {stat.value}
              </div>
              <p className="text-xs uppercase tracking-[0.12em] font-semibold text-[#a8a29e]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CredibilityBar;
