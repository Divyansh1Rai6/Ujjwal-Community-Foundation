"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Calendar } from "lucide-react";

const newsletters = [
  { title: "Summer 2026: Monsoon Relief & School Reopenings", date: "July 2026", issue: "Issue #18" },
  { title: "Spring 2026: Women Empowerment Craft Mela Success", date: "April 2026", issue: "Issue #17" },
  { title: "Winter 2025: Annual Impact Report Highlights", date: "January 2026", issue: "Issue #16" },
];

export default function NewslettersPage() {
  return (
    <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mt-10 space-y-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
          Newsletters & Updates
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Stay updated with our monthly updates, community stories, and field progress.
        </p>
      </div>

      {/* Subscribe Box */}
      <Card className="bg-emerald-600 text-white border-none p-8 text-center rounded-2xl">
        <CardContent className="space-y-4 max-w-xl mx-auto p-0">
          <Mail className="w-12 h-12 mx-auto text-emerald-200" />
          <h2 className="text-2xl font-bold">Subscribe to Our Monthly Dispatch</h2>
          <p className="text-emerald-100 text-sm">
            Get stories from the field, upcoming volunteer opportunities, and quarterly impact numbers delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-2 pt-2" onSubmit={(e) => e.preventDefault()}>
            <Input
              type="email"
              placeholder="Enter your email address"
              className="bg-white text-black placeholder:text-gray-500 border-none"
            />
            <Button className="bg-emerald-950 hover:bg-emerald-900 text-white shrink-0">
              Subscribe
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Archives */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Newsletter Archive</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {newsletters.map((item, index) => (
            <Card key={index} className="hover:border-emerald-500 transition">
              <CardHeader>
                <div className="flex justify-between items-center text-xs text-muted-foreground mb-1">
                  <span className="font-semibold text-emerald-600">{item.issue}</span>
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {item.date}</span>
                </div>
                <CardTitle className="text-lg">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <Button variant="outline" size="sm" className="w-full">
                  Read Edition
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}