import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24 text-center">
      <h2 className="font-serif text-4xl text-text mb-4 max-w-xl mx-auto">
        Ready to simplify your payments?
      </h2>
      <p className="text-muted mb-8">Start building better financial experiences today.</p>
      <div className="flex items-center justify-center gap-3">
        <Link href="/dashboard">
          <Button>
            Get Started <ArrowRight size={15} />
          </Button>
        </Link>
        <Button variant="outline">Talk to Sales</Button>
      </div>
    </section>
  );
}
