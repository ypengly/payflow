"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { Topbar } from "@/components/dashboard/topbar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Modal } from "@/components/ui/modal";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/toast";
import { teamMembers } from "@/lib/data";

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");
}

export default function TeamPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  function invite(e: React.FormEvent) {
    e.preventDefault();
    setModalOpen(false);
    toast(`Invite sent to ${email || "new teammate"}.`);
    setEmail("");
  }

  return (
    <>
      <Topbar title="Team" />
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted">{teamMembers.length} members</span>
          <Button size="sm" onClick={() => setModalOpen(true)}>
            <Plus size={14} /> Invite member
          </Button>
        </div>

        <Card>
          {teamMembers.map((m, i) => (
            <div
              key={m.email}
              className={`flex items-center justify-between px-5 py-4 ${
                i < teamMembers.length - 1 ? "border-b border-border-soft" : ""
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium bg-accent2-soft text-accent2">
                  {initials(m.name)}
                </div>
                <div>
                  <div className="text-sm text-text">{m.name}</div>
                  <div className="text-xs text-faint">{m.email}</div>
                </div>
              </div>
              <Badge tone="muted">{m.role}</Badge>
            </div>
          ))}
        </Card>
      </div>

      <Modal open={modalOpen} onClose={() => setModalOpen(false)} title="Invite team member">
        <form onSubmit={invite} className="space-y-4">
          <div>
            <label className="text-xs text-faint mb-1 block">Email</label>
            <div className="px-3 py-2 rounded-md border border-border bg-surface">
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="teammate@company.com"
                required
              />
            </div>
          </div>
          <Button type="submit" className="w-full">
            Send invite
          </Button>
        </form>
      </Modal>
    </>
  );
}
