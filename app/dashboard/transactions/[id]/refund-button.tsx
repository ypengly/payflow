"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/toast";

export function RefundButton({ id, disabled }: { id: string; disabled: boolean }) {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  async function handleRefund() {
    setLoading(true);
    try {
      const res = await fetch(`/api/transactions/${id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "refund" }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error ?? "Refund failed");
      toast(json.message ?? "Refund processed.");
    } catch (err) {
      toast(err instanceof Error ? err.message : "Something went wrong.", "error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Button variant="outline" onClick={handleRefund} disabled={disabled || loading}>
      {disabled ? "Already refunded" : loading ? "Processing…" : "Refund Payment"}
    </Button>
  );
}
