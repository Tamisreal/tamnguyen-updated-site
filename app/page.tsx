"use client";

export default function Home() {
  return (
    <>
      {/* NAV */}
      <nav style={{ position: "sticky", top: 0, zIndex: 100, background: "rgba(242,237,227,0.94)", backdropFilter: "blur(12px)", borderBottom: "1px solid var(--border)", padding: "0 2rem", height: 58 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", maxWidth: 900, margin: "0 auto", height: "100%" }}>
          <a href="/" style={{ fontFamily: "var(--serif)", fontSize: "1.05rem", fontStyle: "italic", color: "var(--ink)" }}>Tam Nguyen</a>
          <ul style={{ display: "flex", gap: "1.6rem", listStyle: "none" }} className="hidden md:flex">
            <li><a href="#revenue-system" style={{ fontSize: "0.82rem", fontWeight: 400, color: "var(--ink3)" }}>AI Revenue System</a></li>
            <li><a href="#sell" style={{ fontSize: "0.82rem", fontWeight: 400, color: "var(--ink3)" }}>How it works</a></li>
            <li><a href="#offers" style={{ fontSize: "0.82rem", fontWeight: 400, color: "var(--ink3)" }}>All offers</a></li>
            <li><a href="#resources" style={{ fontSize: "0.82rem", fontWeight: 400, color: "var(--ink3)" }}>Resources</a></li>
          </ul>
          <a href="#offers" style={{ background: "var(--blue)", color: "#fff", padding: "8px 18px", borderRadius: 6, fontSize: "0.82rem", fontWeight: 500, whiteSpace: "nowrap" }}>Book a call</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero" style={{ maxWidth: 900, margin: "0 auto", padding: "100px 2rem 72px", textAlign: "center" }}>
        <p style={{ fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ink3)", marginBottom: 20 }}>AI Sales Coach & Operator</p>
        <h1 style={{ fontFamily: "var(--serif)", fontSize: "clamp(2.8rem, 6.5vw, 4.2rem)", fontWeight: 400, fontStyle: "italic", lineHeight: 1.1, letterSpacing: "-0.01em", color: "var(--ink)", marginBottom: 20 }}>
          Most AI builders<br />can&apos;t sell.<br />I&apos;ll fix that.
        </h1>
        <p style={{ fontSize: "1rem", color: "var(--ink3)", lineHeight: 1.74, maxWidth: 520, margin: "0 auto 32px", fontWeight: 300 }}>
          I spent over 10 years in corporate america with a background in sales, data science, and finance,  before building GoToAgents.ai. I know exactly what makes a $500K+ business say yes to an AI solution, and I teach that to builders who are ready to turn their skills into real revenue.
        </p>
        <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap", marginBottom: 64 }}>
          <a href="#revenue-system" className="btn-primary" style={{ background: "var(--blue)", color: "#fff", padding: "11px 22px", borderRadius: 6, fontSize: "0.87rem", fontWeight: 500 }}>Get the AI Revenue System</a>
          <a href="#sell" className="btn-secondary" style={{ background: "transparent", color: "var(--ink2)", padding: "11px 22px", borderRadius: 6, fontSize: "0.87rem", fontWeight: 400, border: "1px solid var(--border2)" }}>See how it works</a>
        </div>
      </section>

      {/* STATS */}
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 2rem 72px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", border: "1px solid var(--border)", borderRadius: 10, overflow: "hidden", background: "var(--border)", gap: 1 }}>
          {[
            { num: "170+", label: "Agents deployed" },
            { num: "15+", label: "Clients closed" },
            { num: "$500K+", label: "Target client size" },
            { num: "3", label: "Coaching spots/mo" },
          ].map((s) => (
            <div key={s.label} style={{ background: "var(--white)", padding: "28px 16px", textAlign: "center" }}>
              <div style={{ fontFamily: "var(--serif)", fontSize: "2rem", color: "var(--ink)", lineHeight: 1, marginBottom: 4 }}>{s.num}</div>
              <div style={{ fontSize: "0.75rem", color: "var(--ink3)" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <hr className="rule" />

      {/* AI REVENUE SYSTEM */}
      <section className="section" id="revenue-system">
        <p className="section-label">Featured offer</p>
        <h2 className="section-h2">The AI Revenue System</h2>
        <p className="section-sub">Everything you need to land your first paying AI client. Pick a service, get the full system built out for you, and start closing deals within 6 months.</p>

        <div style={{ background: "var(--white)", border: "1px solid var(--border)", borderRadius: 12, overflow: "hidden" }}>
          {/* Top */}
          <div style={{ padding: 32, display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 28, flexWrap: "wrap" }}>
            <div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 12 }}>
                <span style={{ fontFamily: "var(--serif)", fontSize: "3rem", fontStyle: "italic", color: "var(--ink)", lineHeight: 1 }}>$497</span>
                <span style={{ fontSize: "0.82rem", color: "var(--ink3)", background: "var(--cream)", border: "1px solid var(--border)", padding: "3px 10px", borderRadius: 100 }}>6 months access</span>
              </div>
              <p style={{ fontSize: "0.92rem", color: "var(--ink3)", fontWeight: 300, lineHeight: 1.65, maxWidth: 380 }}>Two proven AI services to sell. One complete system to sell them with. A community that keeps you moving until you close.</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", flexShrink: 0 }}>
              <a href="#" style={{ background: "var(--blue)", color: "#fff", padding: "13px 28px", borderRadius: 6, fontSize: "0.95rem", fontWeight: 500 }}>Join the AI Revenue System</a>
              <p style={{ fontSize: "0.74rem", color: "var(--ink3)", marginTop: 8, textAlign: "center" }}>One-time payment. 6 months access. Cancel anytime after.</p>
            </div>
          </div>

          <div style={{ borderTop: "1px solid var(--border)" }} />

          {/* Tracks */}
          <p style={{ fontSize: "0.69rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ink3)", padding: "20px 32px 16px" }}>Pick one service to sell</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: "var(--border)" }}>
            {[
              { track: "Track A", title: "Cold Email + LinkedIn Outbound", who: "Best for consultants selling to other businesses", desc: "You sell a done-for-you outbound system to other consultants and agencies. They pay you to build and run their lead generation. High ticket, recurring, and in massive demand." },
              { track: "Track B", title: "AI Video Editing Services", who: "Best for selling to local businesses", desc: "You sell AI-powered video editing and content production to local businesses. Restaurants, gyms, salons, real estate agents. Low competition, high demand, easy to demonstrate value fast." },
            ].map((t) => (
              <div key={t.track} style={{ background: "var(--cream)", padding: "24px 28px" }}>
                <span style={{ fontSize: "0.68rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--blue)", background: "var(--blue-light)", border: "1px solid #bfdbfe", padding: "3px 9px", borderRadius: 4, display: "inline-block", marginBottom: 10 }}>{t.track}</span>
                <div style={{ fontWeight: 600, fontSize: "0.95rem", color: "var(--ink)", marginBottom: 4 }}>{t.title}</div>
                <div style={{ fontSize: "0.74rem", color: "var(--ink3)", fontStyle: "italic", marginBottom: 10 }}>{t.who}</div>
                <p style={{ fontSize: "0.82rem", color: "var(--ink3)", fontWeight: 300, lineHeight: 1.62 }}>{t.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ borderTop: "1px solid var(--border)" }} />

          {/* Included */}
          <p style={{ fontSize: "0.69rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ink3)", padding: "20px 32px 16px" }}>Everything built out for you</p>
          <div>
            {[
              { title: "Cold email scripts and templates", desc: "Word-for-word outreach copy for both tracks. Tested, refined, ready to send." },
              { title: "LinkedIn outreach sequences", desc: "Full connection-to-close sequences. What to say at every stage without coming off as a bot." },
              { title: "AI video editing workflow and system", desc: "The exact tools, prompts, and production process to deliver AI video editing at scale." },
              { title: "Lead lists and prospecting system", desc: "Where to find buyers, how to qualify them fast, and how to build a list you can work every week." },
              { title: "Sales pitch deck and proposal template", desc: "A done-for-you proposal you can send the same day as your first call. Designed to get a fast yes." },
              { title: "6 months community access", desc: "Weekly calls, deal reviews, live feedback on your outreach and proposals. You're not doing this alone." },
            ].map((item) => (
              <div key={item.title} style={{ display: "flex", alignItems: "flex-start", gap: 14, padding: "16px 32px", borderBottom: "1px solid var(--border)" }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--blue)", flexShrink: 0, marginTop: 6 }} />
                <div>
                  <div style={{ fontWeight: 500, fontSize: "0.9rem", color: "var(--ink)", marginBottom: 2 }}>{item.title}</div>
                  <div style={{ fontSize: "0.8rem", color: "var(--ink3)", fontWeight: 300, lineHeight: 1.55 }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="section" id="sell">
        <p className="section-label">The problem</p>
        <h2 className="section-h2">Knowing how to build an agent<br />and knowing how to sell one<br />are completely different skills.</h2>
        <p className="section-sub">There are thousands of people teaching you how to build AI agents. Almost nobody is teaching you how to find a buyer, run a sales conversation, handle objections, price the work, and close the deal. That&apos;s the gap. That&apos;s what I do.</p>

        <div style={{ background: "var(--ink)", color: "#fff", borderRadius: 10, padding: "36px 40px" }}>
          <h3 style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.4rem, 3vw, 1.9rem)", fontWeight: 400, fontStyle: "italic", marginBottom: 12, lineHeight: 1.25 }}>My lane is selling. Not building.</h3>
          <p style={{ fontSize: "0.92rem", color: "rgba(255,255,255,0.62)", fontWeight: 300, lineHeight: 1.78, marginBottom: 24, maxWidth: 580 }}>
            I don&apos;t compete with the people teaching you n8n or Claude. I send you to them. My job starts when you have something to sell and have no idea how to get in front of the right person, what to say, or how to charge for it without underpricing your work. Now, do I know how to build? Absolutely, but i'm going to be honest and not reinvent the wheel. Take the time to learn from the creators I mention below for FREE!
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {["Corporate sales background", "Corporate Account Executive", "GoToAgents.ai founder", "Value-based pricing", "Pipeline systems", "Cold outreach", "Deal closing", "Revenue Operations and Strategy"].map((pill) => (
              <span key={pill} style={{ fontSize: "0.74rem", color: "rgba(255,255,255,0.72)", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.14)", padding: "5px 13px", borderRadius: 100 }}>{pill}</span>
            ))}
          </div>
        </div>
      </section>

      <hr className="rule" />

      {/* HOW IT WORKS */}
      <section className="section">
        <p className="section-label">How I help</p>
        <h2 className="section-h2">From &ldquo;I built something&rdquo;<br />to &ldquo;I have paying clients&rdquo;</h2>
        <p className="section-sub">The exact steps I walk every builder through to go from no pipeline to consistent revenue.</p>

        <div style={{ display: "flex", flexDirection: "column", gap: 1, background: "var(--border)", border: "1px solid var(--border)", borderRadius: 10, overflow: "hidden" }}>
          {[
            { num: "1", tag: "Positioning", title: "Pick your niche and own it", desc: "Generic \"AI automation\" doesn't close deals. We identify the specific business problem you solve for a specific buyer so your outreach resonates immediately." },
            { num: "2", tag: "Pipeline", title: "Build a system that finds buyers", desc: "Outreach sequences, targeting $500K+ businesses, LinkedIn and cold email that gets replies. Not spray and pray. A repeatable pipeline you own." },
            { num: "3", tag: "Pricing", title: "Price on value, not hours", desc: "Anchor to what the client currently spends on the problem. A lead gen agent at $1,500/month is a 12x ROI for the right buyer." },
            { num: "4", tag: "Sales conversations", title: "Run discovery calls that close", desc: "How to qualify fast, present the ROI clearly, handle objections, and move to a decision without discounting." },
            { num: "5", tag: "Scale", title: "Turn one client into a pipeline", desc: "Retain, expand, and get referrals. Build the systems that let you take on more without burning out." },
          ].map((step) => (
            <div key={step.num} style={{ display: "flex", alignItems: "flex-start", gap: 20, padding: "24px 28px", background: "var(--white)" }}>
              <div style={{ fontFamily: "var(--serif)", fontSize: "1.5rem", fontStyle: "italic", color: "var(--border2)", flexShrink: 0, width: 28, paddingTop: 1, lineHeight: 1 }}>{step.num}</div>
              <div>
                <div style={{ fontSize: "0.68rem", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--blue)", marginBottom: 4 }}>{step.tag}</div>
                <h4 style={{ fontWeight: 500, fontSize: "0.95rem", color: "var(--ink)", marginBottom: 4 }}>{step.title}</h4>
                <p style={{ fontSize: "0.83rem", color: "var(--ink3)", fontWeight: 300, lineHeight: 1.6 }}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr className="rule" />

      {/* OFFERS */}
      <section className="section" id="offers">
        <p className="section-label">Work with me</p>
        <h2 className="section-h2">Pick your starting point</h2>
        <p className="section-sub">Every engagement starts with a real conversation. No sales pressure. Just a look at where you are and what it would take to get you to consistent revenue.</p>

        <div style={{ display: "flex", flexDirection: "column", gap: 1, background: "var(--border)", border: "1px solid var(--border)", borderRadius: 10, overflow: "hidden" }}>
          {[
            { tag: "Strategy · 60 min", title: "Sales Audit Call", desc: "We diagnose your current pitch, pricing, and pipeline. You leave with a clear plan.", price: "$297", cta: "Book now →", featured: false },
            { tag: "Most popular · Ongoing", title: "1-on-1 Sales Coaching", desc: "Weekly calls, live deal reviews, outreach feedback, and accountability.", price: "$997/mo", cta: "Apply · 3 spots →", featured: true },
            { tag: "Community · Monthly", title: "The Pipeline Group", desc: "Group coaching, weekly calls, deal reviews, outreach templates, and a community.", price: "$99/mo", cta: "Join →", featured: false },
            { tag: "Done-for-you · Agency", title: "Agent Build & Deploy", desc: "Need the agent built too? I handle the full deployment.", price: "$1,500+", cta: "Get started →", featured: false },
          ].map((offer) => (
            <a key={offer.title} href="#" style={{ background: offer.featured ? "var(--blue-light)" : "var(--white)", borderLeft: offer.featured ? "2px solid var(--blue)" : "none", padding: "22px 28px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20, flexWrap: "wrap" }}>
              <div style={{ flex: 1, minWidth: 200 }}>
                <div style={{ fontSize: "0.68rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: offer.featured ? "var(--blue)" : "var(--ink3)", marginBottom: 4 }}>{offer.tag}</div>
                <div style={{ fontFamily: "var(--serif)", fontSize: "1.05rem", color: "var(--ink)", marginBottom: 2 }}>{offer.title}</div>
                <div style={{ fontSize: "0.81rem", color: "var(--ink3)", fontWeight: 300, lineHeight: 1.5 }}>{offer.desc}</div>
              </div>
              <div style={{ textAlign: "right", flexShrink: 0 }}>
                <div style={{ fontFamily: "var(--serif)", fontSize: "1.2rem", color: "var(--ink)", marginBottom: 3 }}>{offer.price}</div>
                <div style={{ fontSize: "0.76rem", color: "var(--blue)", fontWeight: 500 }}>{offer.cta}</div>
              </div>
            </a>
          ))}
        </div>
      </section>

      <hr className="rule" />

      {/* COACHING DETAILS */}
      <section className="section">
        <p className="section-label">What coaching covers</p>
        <h2 className="section-h2">Everything between<br />&ldquo;I built it&rdquo; and &ldquo;I got paid&rdquo;</h2>
        <p className="section-sub">These are the exact conversations, frameworks, and systems from my own corporate sales career and from closing AI clients.</p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: "var(--border)", border: "1px solid var(--border)", borderRadius: 10, overflow: "hidden", marginBottom: 20 }}>
          {[
            { title: "Niche and positioning", desc: "Stop selling \"AI automation\" to everyone. We find the specific problem you solve for a specific buyer." },
            { title: "Cold outreach that gets replies", desc: "Email and LinkedIn sequences targeting $500K+ businesses. Real templates, tested on real buyers." },
            { title: "Discovery calls and objection handling", desc: "How to run a 30-minute call that ends in a clear next step." },
            { title: "Pricing and proposals", desc: "We build your pricing model together so you never undercharge again." },
            { title: "Closing and follow-up", desc: "Most deals die in follow-up. We build a system that keeps deals moving." },
            { title: "Retaining and expanding", desc: "Your first client is your hardest. After that, we build referral and upsell systems." },
          ].map((card) => (
            <div key={card.title} style={{ background: "var(--white)", padding: 24 }}>
              <h4 style={{ fontWeight: 500, fontSize: "0.92rem", color: "var(--ink)", marginBottom: 6 }}>{card.title}</h4>
              <p style={{ fontSize: "0.82rem", color: "var(--ink3)", fontWeight: 300, lineHeight: 1.62 }}>{card.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <a href="#offers" style={{ background: "var(--blue)", color: "#fff", padding: "11px 22px", borderRadius: 6, fontSize: "0.87rem", fontWeight: 500 }}>Apply for 1-on-1 coaching →</a>
          <a href="#offers" style={{ background: "transparent", color: "var(--ink2)", padding: "11px 22px", borderRadius: 6, fontSize: "0.87rem", fontWeight: 400, border: "1px solid var(--border2)" }}>Join the group →</a>
        </div>
      </section>

      <hr className="rule" />

      {/* GOTOAGENTS */}
      <section className="section" id="gotoagents">
        <p className="section-label">What I&apos;ve built</p>
        <h2 className="section-h2">I don&apos;t just teach this.<br />I run it.</h2>
        <p className="section-sub">GoToAgents.ai is a live AI agency with 170 agents deployed across 10 business departments.</p>

        <div style={{ background: "var(--white)", border: "1px solid var(--border)", borderRadius: 10, padding: 32, display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 28, flexWrap: "wrap" }}>
          <div style={{ flex: 1, minWidth: 220 }}>
            <h3 style={{ fontFamily: "var(--serif)", fontSize: "1.2rem", fontStyle: "italic", color: "var(--ink)", marginBottom: 8 }}>GoToAgents.ai</h3>
            <p style={{ fontSize: "0.89rem", color: "var(--ink3)", fontWeight: 300, lineHeight: 1.7, marginBottom: 18 }}>A 170-agent orchestration system running live across 10 business departments. Built and sold using the exact sales process I teach.</p>
            <a href="https://gotoagents.ai" target="_blank" rel="noopener noreferrer" style={{ background: "transparent", color: "var(--ink2)", padding: "9px 18px", borderRadius: 6, fontSize: "0.81rem", fontWeight: 400, border: "1px solid var(--border2)", display: "inline-block" }}>Visit GoToAgents.ai →</a>
          </div>
          <div style={{ display: "flex", gap: 28, flexShrink: 0, flexWrap: "wrap" }}>
            {[{ num: "170+", label: "Active agents" }, { num: "10", label: "Departments" }, { num: "24/7", label: "Autonomous" }].map((s) => (
              <div key={s.label}>
                <div style={{ fontFamily: "var(--serif)", fontSize: "1.7rem", color: "var(--blue)", lineHeight: 1 }}>{s.num}</div>
                <div style={{ fontSize: "0.72rem", color: "var(--ink3)", marginTop: 3 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="rule" />

      {/* RESOURCES */}
      <section className="section" id="resources">
        <p className="section-label">Resources</p>
        <h2 className="section-h2">Need to learn how to build first?<br />Here&apos;s where I&apos;d start.</h2>
        <p style={{ fontSize: "0.93rem", color: "var(--ink3)", fontWeight: 300, lineHeight: 1.72, marginBottom: 28, maxWidth: 560 }}>Building is not my lane. But I&apos;m not going to leave you with nothing. Learn to build from them. Come to me when you&apos;re ready to sell.</p>

        {/* Who to learn from */}
        <p className="section-label" style={{ marginBottom: 12 }}>Who to learn from</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, background: "var(--border)", border: "1px solid var(--border)", borderRadius: 10, overflow: "hidden", marginBottom: 36 }}>
          {[
            { platform: "YouTube", name: "Liam Ottley", desc: "AI agency building, client acquisition, scaling automation businesses." },
            { platform: "Twitter / X", name: "Nick Saraev", desc: "No-code automation, Make.com workflows, selling AI services at scale." },
            { platform: "YouTube", name: "Andrej Karpathy", desc: "Deep technical understanding of how LLMs actually work under the hood." },
            { platform: "Twitter / X", name: "Greg Isenberg", desc: "Building and selling SaaS + AI products. Business strategy and idea generation." },
            { platform: "Twitter / X", name: "Swyx", desc: "AI engineering, agent design patterns, and the state of the AI ecosystem." },
            { platform: "Newsletter", name: "The Rundown AI", desc: "Daily AI news, tools, and practical breakdowns for builders and operators." },
          ].map((c) => (
            <div key={c.name} style={{ background: "var(--white)", padding: "20px 22px" }}>
              <div style={{ fontSize: "0.67rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--ink3)", marginBottom: 5 }}>{c.platform}</div>
              <div style={{ fontWeight: 500, fontSize: "0.91rem", color: "var(--ink)", marginBottom: 3 }}>{c.name}</div>
              <div style={{ fontSize: "0.79rem", color: "var(--ink3)", fontWeight: 300, lineHeight: 1.5 }}>{c.desc}</div>
              <span style={{ fontSize: "0.75rem", color: "var(--blue)", fontWeight: 500, marginTop: 8, display: "block" }}>Follow →</span>
            </div>
          ))}
        </div>

        {/* GitHub repos */}
        <p className="section-label" style={{ marginBottom: 12 }}>GitHub repos · easiest to hardest</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 1, background: "var(--border)", border: "1px solid var(--border)", borderRadius: 10, overflow: "hidden" }}>
          {[
            { rank: "1", title: "Simple Claude chatbot", desc: "API calls, prompt structure, response handling. Your first working agent in under an hour.", stack: "Claude API · Python", difficulty: "Beginner", color: "#166534", bg: "#dcfce7" },
            { rank: "2", title: "Lead generation scraper", desc: "Scrapes sources, enriches with AI, outputs to Google Sheets. First billable agent.", stack: "Python · Claude API · Sheets API", difficulty: "Beginner", color: "#166534", bg: "#dcfce7" },
            { rank: "3", title: "Content automation agent", desc: "Pulls trending topics, writes posts in your voice, schedules to social. Recurring revenue.", stack: "n8n · Claude API · Airtable", difficulty: "Intermediate", color: "#92400e", bg: "#fef3c7" },
            { rank: "4", title: "Multi-agent orchestration system", desc: "Coordinator + specialist agents with memory, handoffs, tool use.", stack: "Python · Claude API · Supabase · n8n", difficulty: "Advanced", color: "#991b1b", bg: "#fee2e2" },
          ].map((repo) => (
            <a key={repo.rank} href="https://github.com/Tamisreal" target="_blank" rel="noopener noreferrer" style={{ background: "var(--white)", padding: "18px 24px", display: "flex", alignItems: "center", gap: 18 }}>
              <div style={{ fontFamily: "var(--serif)", fontSize: "1rem", fontStyle: "italic", color: "var(--border2)", flexShrink: 0, width: 20 }}>{repo.rank}</div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontWeight: 500, fontSize: "0.91rem", color: "var(--ink)", marginBottom: 2 }}>{repo.title}</div>
                <div style={{ fontSize: "0.8rem", color: "var(--ink3)", fontWeight: 300, lineHeight: 1.45 }}>{repo.desc}</div>
                <div style={{ fontSize: "0.71rem", color: "var(--border2)", marginTop: 3 }}>{repo.stack}</div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 6, flexShrink: 0 }}>
                <span style={{ fontSize: "0.67rem", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase", padding: "3px 8px", borderRadius: 4, color: repo.color, background: repo.bg }}>{repo.difficulty}</span>
                <span style={{ fontSize: "0.76rem", color: "var(--blue)", fontWeight: 500 }}>View →</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <hr className="rule" />

      {/* FOOTER */}
      <footer style={{ borderTop: "1px solid var(--border)", background: "var(--cream2)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "44px 2rem 32px", display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 32, flexWrap: "wrap" }}>
          <div>
            <a href="/" style={{ fontFamily: "var(--serif)", fontSize: "1rem", fontStyle: "italic", color: "var(--ink)", display: "block", marginBottom: 6 }}>Tam Nguyen</a>
            <p style={{ fontSize: "0.78rem", color: "var(--ink3)", fontWeight: 300, maxWidth: 200, lineHeight: 1.6 }}>AI sales coach and operator. Helping builders turn AI skills into real revenue.</p>
          </div>
          {[
            { title: "Work with me", links: ["AI Revenue System ($497)", "Sales audit call", "1-on-1 coaching", "Agent build"] },
            { title: "Resources", links: ["Who to learn from", "GitHub repos", "GoToAgents.ai"] },
            { title: "Connect", links: ["GoToAgents.ai", "tam@tamnguyen.ai", "Instagram", "GitHub"] },
          ].map((col) => (
            <div key={col.title}>
              <h5 style={{ fontSize: "0.69rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--ink3)", marginBottom: 14 }}>{col.title}</h5>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                {col.links.map((link) => (
                  <li key={link}><a href="#" style={{ fontSize: "0.81rem", color: "var(--ink3)" }}>{link}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "16px 2rem", borderTop: "1px solid var(--border)", fontSize: "0.74rem", color: "var(--ink3)", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
          <span>© 2026 Tam Nguyen. Built for builders who sell.</span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#16a34a", display: "inline-block" }} />
            Accepting clients
          </span>
        </div>
      </footer>
    </>
  );
}
