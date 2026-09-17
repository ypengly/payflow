import Link from "next/link";
import { FileQuestion } from "lucide-react";
import { Topbar } from "@/components/dashboard/topbar";
import { EmptyState } from "@/components/ui/empty-state";
import { Button } from "@/components/ui/button";

export default function DashboardNotFound() {
  return (
    <>
      <Topbar title="Not found" />
      <div className="flex-1 overflow-y-auto p-6">
        <EmptyState
          icon={FileQuestion}
          title="We couldn't find that record"
          description="It may have been removed, or the link might be out of date."
          action={
            <Link href="/dashboard">
              <Button variant="outline">Back to overview</Button>
            </Link>
          }
        />
      </div>
    </>
  );
}
