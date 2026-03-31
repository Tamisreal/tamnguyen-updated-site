"use client";

import { ArrowRight } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

const repos = [
  { name: "Simple Chatbot", difficulty: "beginner" as const, description: "A basic Claude-powered chatbot. Learn API calls, prompt structure, and response handling. Perfect first project." },
  { name: "Lead Gen Agent", difficulty: "beginner" as const, description: "Scrapes leads from LinkedIn/web, enriches with AI, outputs to Google Sheets. Your first billable agent." },
  { name: "Content Automation Agent", difficulty: "intermediate" as const, description: "Pulls trending topics, writes posts, schedules to social media automatically. Recurring revenue potential." },
  { name: "Data Extraction Agent", difficulty: "intermediate" as const, description: "Reads PDFs, websites, or emails and extracts structured data into a database. High client demand." },
  { name: "Multi-Agent Orchestration", difficulty: "advanced" as const, description: "Coordinates multiple specialized agents to complete complex research and workflow tasks. Enterprise pricing." },
];

const difficultyLabel: Record<string, string> = {
  beginner: "Beginner",
  intermediate: "Intermediate",
  advanced: "Advanced",
};

export function GitHubRepos() {
  return (
    <section id="repos" className="section-padding bg-[#faf9f6]" style={{ scrollMarginTop: "80px" }}>
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="section-label text-[#1e3a5f]">Open Source</span>
          <h2 className="section-heading">Start Building</h2>
          <p className="section-subtitle">
            Ranked easiest to hardest — pick your starting point and ship your first agent this week.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch [&>*]:h-full">
          {repos.map((repo) => (
            <Card key={repo.name} hover className="h-full flex flex-col">
              <CardHeader>
                <div className="flex items-start justify-between gap-3">
                  <CardTitle>{repo.name}</CardTitle>
                  <Badge variant={repo.difficulty} className="shrink-0">{difficultyLabel[repo.difficulty]}</Badge>
                </div>
              </CardHeader>
              <CardDescription className="flex-1 min-h-[88px]">{repo.description}</CardDescription>
              <CardFooter className="mt-auto">
                <a
                  href="https://github.com/Tamisreal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1e3a5f] hover:text-[#162d4a] transition-colors group"
                >
                  View on GitHub
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GitHubRepos;
