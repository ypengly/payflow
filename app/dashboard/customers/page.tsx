"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Search, Plus, Users } from "lucide-react";
import { Topbar } from "@/components/dashboard/topbar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Table, THead, TBody, Tr, Th, Td } from "@/components/ui/table";
import { TableSkeleton } from "@/components/ui/skeleton";
import { EmptyState } from "@/components/ui/empty-state";
import { Modal } from "@/components/ui/modal";
import { useToast } from "@/components/ui/toast";
import type { Customer, CustomerStatus } from "@/types";

const STATUS_TONE: Record<CustomerStatus, "accent" | "danger" | "warning"> = {
  Active: "accent",
  Disputed: "danger",
  "At risk": "warning",
};

export default function CustomersPage() {
  const [query, setQuery] = useState("");
  const [rows, setRows] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  useEffect(() => {
    setLoading(true);
    const params = new URLSearchParams({ query });
    fetch(`/api/customers?${params}`)
      .then((r) => r.json())
      .then((json) => setRows(json.data ?? []))
      .finally(() => setLoading(false));
  }, [query]);

  function handleAdd(e: React.FormEvent) {
    e.preventDefault();
    setModalOpen(false);
    toast(`${name || "New customer"} added in sandbox mode.`);
    setName("");
    setEmail("");
  }

  return (
    <>
      <Topbar title="Customers" />
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-2 rounded-md border border-border bg-surface flex-1 min-w-[200px]">
            <Search size={15} className="text-faint" />
            <Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search customers" />
          </div>
          <Button variant="subtle">Filters</Button>
          <Button onClick={() => setModalOpen(true)}>
            <Plus size={14} /> Add customer
          </Button>
        </div>

        <Card>
          {loading ? (
            <TableSkeleton rows={6} cols={6} />
          ) : rows.length === 0 ? (
            <EmptyState icon={Users} title="No customers found" description="Try a different search term." />
          ) : (
            <Table>
              <THead>
                <Tr>
                  <Th>Name</Th>
                  <Th>Email</Th>
                  <Th>Total spent</Th>
                  <Th>Transactions</Th>
                  <Th>Last payment</Th>
                  <Th>Status</Th>
                </Tr>
              </THead>
              <TBody>
                {rows.map((c) => (
                  <Tr key={c.id}>
                    <Td>
                      <Link href={`/dashboard/customers/${c.id}`} className="hover:text-accent2">
                        {c.name}
                      </Link>
                    </Td>
                    <Td className="text-faint">{c.email}</Td>
                    <Td className="font-mono">${c.spent.toFixed(2)}</Td>
                    <Td>{c.txns}</Td>
                    <Td className="text-faint">{c.last}</Td>
                    <Td>
                      <Badge tone={STATUS_TONE[c.status]}>{c.status}</Badge>
                    </Td>
                  </Tr>
                ))}
              </TBody>
            </Table>
          )}
        </Card>
      </div>

      <Modal open={modalOpen} onClose={() => setModalOpen(false)} title="Add customer">
        <form onSubmit={handleAdd} className="space-y-4">
          <div>
            <label className="text-xs text-faint mb-1 block">Full name</label>
            <div className="px-3 py-2 rounded-md border border-border bg-surface">
              <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Jordan Ellis" required />
            </div>
          </div>
          <div>
            <label className="text-xs text-faint mb-1 block">Email</label>
            <div className="px-3 py-2 rounded-md border border-border bg-surface">
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="jordan@company.com"
                required
              />
            </div>
          </div>
          <Button type="submit" className="w-full">
            Add customer
          </Button>
        </form>
      </Modal>
    </>
  );
}
