"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, ShieldCheck } from "lucide-react";

const financialReports = [
  { year: "2024 - 2025", title: "Annual Financial & Impact Report", size: "2.4 MB" },
  { year: "2023 - 2024", title: "Audited Financial Statement", size: "1.8 MB" },
  { year: "2022 - 2023", title: "Annual Financial & Impact Report", size: "2.1 MB" },
];

const breakdown = [
  { category: "Direct Program Support", percentage: "82%" },
  { category: "Administration & Operations", percentage: "10%" },
  { category: "Fundraising & Awareness", percentage: "8%" },
];

export default function TransparencyPage() {
  return (
    <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mt-10 space-y-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
          Transparency & Financials
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          We are committed to full accountability and financial integrity in all our operations.
        </p>
      </div>

      {/* Fund Allocation Section */}
      <div>
        <h2 className="text-2xl font-bold mb-6 text-center">Where Your Donation Goes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {breakdown.map((item, index) => (
            <Card key={index} className="text-center p-6 border-emerald-100">
              <CardContent className="p-0">
                <div className="text-4xl font-extrabold text-emerald-600 mb-2">{item.percentage}</div>
                <div className="font-medium text-muted-foreground">{item.category}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Downloadable Reports Section */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Annual Audited Reports</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {financialReports.map((report, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center gap-4 space-y-0">
                <div className="p-3 bg-emerald-100 dark:bg-emerald-900 rounded-lg">
                  <FileText className="w-6 h-6 text-emerald-600 dark:text-emerald-300" />
                </div>
                <div>
                  <CardTitle className="text-lg">{report.year}</CardTitle>
                  <p className="text-xs text-muted-foreground">{report.size}</p>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm font-medium">{report.title}</p>
                <Button variant="outline" className="w-full flex items-center gap-2">
                  <Download className="w-4 h-4" /> Download PDF
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Compliance Note */}
      <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-xl border flex items-start gap-4">
        <ShieldCheck className="w-8 h-8 text-emerald-600 shrink-0 mt-1" />
        <p className="text-sm text-muted-foreground">
          Ujjwal Community Foundation is registered under Section 8 of the Companies Act, 2013. 
          All donations are tax-exempted under Section 80G of the Income Tax Act. FCRA registration 
          details available upon request.
        </p>
      </div>
    </main>
  );
}