"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Quote } from "lucide-react";

const stories = [
  {
    id: 1,
    title: "Sita's Journey to Higher Education",
    category: "Education",
    location: "Barmer, Rajasthan",
    description: "Through our Shiksha program, Sita became the first girl from her village to attend university.",
    quote: "Ujjwal Foundation didn't just give me books, they gave me the confidence to dream big.",
    beneficiary: "Sita Devi, Age 19",
  },
  {
    id: 2,
    title: "Clean Water for 5 Villages",
    category: "Healthcare & Water",
    location: "Jalor, Rajasthan",
    description: "Installed solar-powered water filtration units that serve over 3,000 households daily.",
    quote: "Now our children fall sick less often and can attend school regularly.",
    beneficiary: "Ramesh Ram, Village Elder",
  },
  {
    id: 3,
    title: "Empowering Rural Craftswomen",
    category: "Women Empowerment",
    location: "Jodhpur, Rajasthan",
    description: "Trained 45 women in traditional handicrafts and connected them directly to online marketplaces.",
    quote: "I now earn an independent income that supports my children's nutrition and school fees.",
    beneficiary: "Priya Kanwar, Artisan",
  },
];

export default function ImpactStoriesPage() {
  return (
    <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mt-10">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
          Impact Stories
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Real stories of real change from the rural communities of Rajasthan.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {stories.map((story) => (
          <Card key={story.id} className="flex flex-col justify-between shadow-sm hover:shadow-md transition">
            <CardHeader>
              <div className="flex justify-between items-center mb-2">
                <Badge variant="secondary">{story.category}</Badge>
                <span className="text-xs text-muted-foreground">{story.location}</span>
              </div>
              <CardTitle className="text-xl">{story.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">{story.description}</p>

              <div className="bg-emerald-50 dark:bg-emerald-950/40 p-4 rounded-lg border border-emerald-100 dark:border-emerald-900 relative">
                <Quote className="w-5 h-5 text-emerald-600 dark:text-emerald-400 mb-1 opacity-60" />
                <p className="text-sm italic text-emerald-900 dark:text-emerald-200">
                  &ldquo;{story.quote}&rdquo;
                </p>
                <p className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 mt-2 text-right">
                  — {story.beneficiary}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}