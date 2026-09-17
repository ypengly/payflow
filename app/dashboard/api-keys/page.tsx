"use client";

import { useState } from "react";
import { KeyRound, Eye, EyeOff, Copy, Plus } from "lucide-react";
import { Topbar } from "@/components/dashboard/topbar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Modal } from "@/components/ui/modal";
import { useToast } from "@/components/ui/toast";
import { apiKeys as initialKeys } from "@/lib/data";
import type { ApiKey } from "@/types";

export default function ApiKeysPage() {
  const [keys, setKeys] = useState<ApiKey[]>(initialKeys);
  const [visible, setVisible] = useState<Record<string, boolean>>({});
  const [modalOpen, setModalOpen] = useState(false);
  const [newKeyValue, setNewKeyValue] = useState<string | null>(null);
  const { toast } = useToast();

  function copyKey(value: string) {
    navigator.clipboard?.writeText(value).catch(() => {});
    toast("Key copied to clipboard.");
  }

  function revokeKey(id: string) {
    setKeys((k) => k.filter((key) => key.id !== id));
    toast("Key revoked.", "error");
  }

  function createKey() {
    const random = Math.random().toString(36).slice(2, 10);
    const fullValue = `sk_test_${random}`;
    const newKey: ApiKey = {
      id: `key_${Date.now()}`,
      label: "Test secret key",
      value: `sk_test_••••••••••••${random.slice(-4)}`,
      created: "Just now",
      lastUsed: "Never",
      env: "Test",
    };
    setKeys((k) => [newKey, ...k]);
    setNewKeyValue(fullValue);
  }

  return (
    <>
      <Topbar title="API Keys" />
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted">{keys.length} keys</span>
          <Button
            size="sm"
            onClick={() => {
              setModalOpen(true);
              setNewKeyValue(null);
            }}
          >
            <Plus size={14} /> Create key
          </Button>
        </div>

        <Card>
          {keys.map((k, i) => (
            <div
              key={k.id}
              className={`flex items-center justify-between px-5 py-4 ${
                i < keys.length - 1 ? "border-b border-border-soft" : ""
              }`}
            >
              <div className="flex items-center gap-3">
                <KeyRound size={16} className="text-faint" />
                <div>
                  <div className="text-sm flex items-center gap-2 text-text">
                    {k.label} <Badge tone={k.env === "Live" ? "accent" : "warning"}>{k.env}</Badge>
                  </div>
                  <div className="text-xs mt-0.5 font-mono text-faint">
                    {visible[k.id] ? k.value.replace(/•/g, "8") : k.value}
                  </div>
                  <div className="text-xs mt-1 text-faint">
                    Created {k.created} · Last used {k.lastUsed}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setVisible((v) => ({ ...v, [k.id]: !v[k.id] }))}
                  className="p-2 rounded-md text-faint"
                  aria-label="Toggle key visibility"
                >
                  {visible[k.id] ? <EyeOff size={14} /> : <Eye size={14} />}
                </button>
                <button onClick={() => copyKey(k.value)} className="p-2 rounded-md text-faint" aria-label="Copy key">
                  <Copy size={14} />
                </button>
                <button onClick={() => revokeKey(k.id)} className="text-xs px-2 py-1 rounded-md text-danger">
                  Revoke
                </button>
              </div>
            </div>
          ))}
        </Card>
      </div>

      <Modal open={modalOpen} onClose={() => setModalOpen(false)} title="Create API key">
        {newKeyValue ? (
          <div className="space-y-4">
            <p className="text-sm text-muted">
              Copy this key now — for security, PayFlow never shows the full secret again.
            </p>
            <div className="flex items-center justify-between px-3 py-2 rounded-md border border-border bg-surface-alt">
              <span className="font-mono text-sm text-text break-all">{newKeyValue}</span>
              <button onClick={() => copyKey(newKeyValue)} className="text-faint shrink-0 ml-2" aria-label="Copy key">
                <Copy size={14} />
              </button>
            </div>
            <Button className="w-full" onClick={() => setModalOpen(false)}>
              Done
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            <p className="text-sm text-muted">This creates a new test-mode secret key in sandbox mode.</p>
            <Button className="w-full" onClick={createKey}>
              Generate key
            </Button>
          </div>
        )}
      </Modal>
    </>
  );
}
