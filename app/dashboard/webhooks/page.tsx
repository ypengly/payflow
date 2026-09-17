"use client";

import { useEffect, useState } from "react";
import { Plus } from "lucide-react";
import { Topbar } from "@/components/dashboard/topbar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, THead, TBody, Tr, Th, Td } from "@/components/ui/table";
import { useToast } from "@/components/ui/toast";
import { webhookEvents as initialEvents } from "@/lib/data";
import type { WebhookEvent } from "@/types";

export default function WebhooksPage() {
  const [events, setEvents] = useState<WebhookEvent[]>(initialEvents);
  const { toast } = useToast();

  async function retry(id: string) {
    try {
      const res = await fetch("/api/webhooks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error);
      setEvents((evts) => evts.map((e) => (e.id === id ? json.data : e)));
      toast(json.message ?? "Event redelivered.");
    } catch {
      toast("Retry failed.", "error");
    }
  }

  return (
    <>
      <Topbar title="Webhooks" />
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted">Recent events</span>
          <Button size="sm" variant="outline">
            <Plus size={14} /> Add endpoint
          </Button>
        </div>

        <Card>
          <Table>
            <THead>
              <Tr>
                <Th>Event ID</Th>
                <Th>Type</Th>
                <Th>Status</Th>
                <Th>Attempts</Th>
                <Th>Response time</Th>
                <Th>Date</Th>
                <Th />
              </Tr>
            </THead>
            <TBody>
              {events.map((ev) => (
                <Tr key={ev.id}>
                  <Td className="font-mono text-muted">{ev.id}</Td>
                  <Td className="font-mono">{ev.type}</Td>
                  <Td>
                    <Badge tone={ev.status === "Delivered" ? "accent" : "warning"}>{ev.status}</Badge>
                  </Td>
                  <Td>{ev.attempts}</Td>
                  <Td className="text-faint">{ev.ms} ms</Td>
                  <Td className="text-faint whitespace-nowrap">{ev.date}</Td>
                  <Td className="text-right whitespace-nowrap">
                    <span className="text-accent2 cursor-pointer mr-3">View</span>
                    <button onClick={() => retry(ev.id)} className="text-faint">
                      Retry
                    </button>
                  </Td>
                </Tr>
              ))}
            </TBody>
          </Table>
        </Card>
      </div>
    </>
  );
}
