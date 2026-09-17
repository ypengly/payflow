export type TransactionStatus = "Successful" | "Pending" | "Failed" | "Refunded";

export interface Transaction {
  id: string;
  customer: string;
  amount: number;
  currency: string;
  status: TransactionStatus;
  method: string;
  date: string;
  riskScore: number;
}

export type CustomerStatus = "Active" | "Disputed" | "At risk";

export interface Customer {
  id: string;
  name: string;
  email: string;
  spent: number;
  txns: number;
  last: string;
  status: CustomerStatus;
}

export interface WebhookEvent {
  id: string;
  type: string;
  status: "Delivered" | "Retrying" | "Failed";
  attempts: number;
  date: string;
  ms: number;
}

export interface AuditLog {
  user: string;
  action: string;
  resource: string;
  ip: string;
  date: string;
}

export interface ApiKey {
  id: string;
  label: string;
  value: string;
  created: string;
  lastUsed: string;
  env: "Live" | "Test";
}

export interface TeamMember {
  name: string;
  role: "Owner" | "Admin" | "Developer";
  email: string;
}

export interface Invoice {
  id: string;
  period: string;
  amount: string;
  status: "Paid" | "Due";
}
