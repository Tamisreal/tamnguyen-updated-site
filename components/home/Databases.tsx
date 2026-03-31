"use client";

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

const databases = [
  { name: "Supabase", tag: "Relational", variant: "success" as const, recommendation: "Best for beginners", description: "Full Postgres database with a friendly dashboard. Auth, storage, and real-time built in. Free tier handles most projects.", href: "https://supabase.com" },
  { name: "Airtable", tag: "No-Code", variant: "primary" as const, recommendation: "Best for no-code", description: "Spreadsheet-meets-database. Perfect for non-technical clients who need to view and edit data without code.", href: "https://airtable.com" },
  { name: "Pinecone", tag: "Vector", variant: "primary" as const, recommendation: "Best for AI memory", description: "Store embeddings for RAG and semantic search. Use when your agent needs to remember or search through documents.", href: "https://pinecone.io" },
  { name: "Redis", tag: "Cache", variant: "accent" as const, recommendation: "Best for speed", description: "Ultra-fast in-memory storage. Use for session data, rate limiting, or caching frequent API responses.", href: "https://redis.io" },
];

export function Databases() {
  return (
    <section id="databases" className="section-padding bg-[#faf9f6]" style={{ scrollMarginTop: "80px" }}>
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="section-label text-[#1e3a5f]">Storage Layer</span>
          <h2 className="section-heading">Which Database to Use</h2>
          <p className="section-subtitle">Pick the right storage layer from the start — switching later is painful.</p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch [&>*]:h-full">
            {databases.map((db) => (
              <Card key={db.name} hover className="h-full flex flex-col text-center">
                <CardHeader className="items-center">
                  <Badge variant={db.variant} className="mb-3">{db.tag}</Badge>
                  <CardTitle className="text-center">{db.name}</CardTitle>
                  <p className="text-xs font-semibold text-[#1e3a5f] mt-1">{db.recommendation}</p>
                </CardHeader>
                <CardDescription className="flex-1 min-h-[112px] text-center">{db.description}</CardDescription>
                <CardContent className="text-center">
                  <a href={db.href} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-[#6b7280] hover:text-[#1e3a5f] transition-colors mt-6 inline-block">
                    Visit site &rarr;
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Databases;
