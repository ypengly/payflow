import type {
  Transaction,
  Customer,
  WebhookEvent,
  AuditLog,
  ApiKey,
  TeamMember,
  Invoice,
} from "@/types";

/**
 * All data in this file is fictional sandbox data for demo purposes.
 * No real payment credentials or personal information are stored or
 * processed anywhere in this project.
 */

export const revenueSeries = [
  { m: "Mar", v: 38200 },
  { m: "Apr", v: 41500 },
  { m: "May", v: 45900 },
  { m: "Jun", v: 52300 },
  { m: "Jul", v: 61100 },
  { m: "Aug", v: 68400 },
  { m: "Sep", v: 84240 },
];

export const dailyVolume = [
  { d: "Mon", v: 4200 },
  { d: "Tue", v: 5100 },
  { d: "Wed", v: 4800 },
  { d: "Thu", v: 6200 },
  { d: "Fri", v: 7300 },
  { d: "Sat", v: 3900 },
  { d: "Sun", v: 3100 },
];

export const paymentMethodSplit = [
  { name: "Card", value: 68 },
  { name: "ACH", value: 18 },
  { name: "Wallet", value: 14 },
];

export const transactions: Transaction[] = [
  { id: "tx_9F21A4", customer: "Alex Johnson", amount: 240.0, currency: "USD", status: "Successful", method: "Visa •••• 4242", date: "Today, 10:42 AM", riskScore: 3 },
  { id: "tx_7C88B1", customer: "Sarah Kim", amount: 1240.0, currency: "USD", status: "Successful", method: "Mastercard •••• 5588", date: "Today, 9:15 AM", riskScore: 5 },
  { id: "tx_2E90D3", customer: "Michael Chen", amount: 85.0, currency: "USD", status: "Pending", method: "ACH transfer", date: "Yesterday, 6:03 PM", riskScore: 18 },
  { id: "tx_5A17F0", customer: "Emma Wilson", amount: 430.0, currency: "USD", status: "Refunded", method: "Visa •••• 1190", date: "Yesterday, 2:47 PM", riskScore: 9 },
  { id: "tx_1B44C7", customer: "Daniel Ortiz", amount: 129.5, currency: "USD", status: "Failed", method: "Amex •••• 3007", date: "Yesterday, 11:20 AM", riskScore: 61 },
  { id: "tx_8D62E5", customer: "Priya Patel", amount: 980.0, currency: "USD", status: "Successful", method: "Visa •••• 8842", date: "2 days ago", riskScore: 4 },
  { id: "tx_3F09A8", customer: "Liam Carter", amount: 62.25, currency: "USD", status: "Successful", method: "Apple Pay", date: "2 days ago", riskScore: 2 },
  { id: "tx_6C71B2", customer: "Nina Morales", amount: 310.0, currency: "USD", status: "Pending", method: "ACH transfer", date: "3 days ago", riskScore: 22 },
];

export const customers: Customer[] = [
  { id: "cus_A001", name: "Alex Johnson", email: "alex.johnson@meridiancraft.com", spent: 4820.5, txns: 18, last: "Today", status: "Active" },
  { id: "cus_A002", name: "Sarah Kim", email: "sarah.kim@northloop.io", spent: 12430.0, txns: 42, last: "Today", status: "Active" },
  { id: "cus_A003", name: "Michael Chen", email: "m.chen@brightfield.co", spent: 1290.75, txns: 6, last: "Yesterday", status: "Active" },
  { id: "cus_A004", name: "Emma Wilson", email: "emma@wilsonstudio.com", spent: 3040.0, txns: 11, last: "Yesterday", status: "Disputed" },
  { id: "cus_A005", name: "Daniel Ortiz", email: "d.ortiz@ortizlogistics.com", spent: 590.0, txns: 3, last: "3 days ago", status: "At risk" },
  { id: "cus_A006", name: "Priya Patel", email: "priya@patelconsulting.com", spent: 8320.4, txns: 27, last: "2 days ago", status: "Active" },
];

export const webhookEvents: WebhookEvent[] = [
  { id: "evt_A812", type: "payment.succeeded", status: "Delivered", attempts: 1, date: "2 min ago", ms: 184 },
  { id: "evt_A809", type: "payment.refunded", status: "Delivered", attempts: 1, date: "18 min ago", ms: 221 },
  { id: "evt_A804", type: "payment.failed", status: "Retrying", attempts: 3, date: "41 min ago", ms: 3400 },
  { id: "evt_A798", type: "customer.updated", status: "Delivered", attempts: 1, date: "1 hr ago", ms: 96 },
  { id: "evt_A791", type: "payment.succeeded", status: "Delivered", attempts: 2, date: "3 hrs ago", ms: 340 },
];

export const auditLogs: AuditLog[] = [
  { user: "John Reyes", action: "Created payment", resource: "tx_9F21A4", ip: "84.12.55.2", date: "Today, 10:42 AM" },
  { user: "Sarah Kim", action: "Refunded payment", resource: "tx_5A17F0", ip: "71.9.204.18", date: "Yesterday, 2:48 PM" },
  { user: "Admin (You)", action: "Changed team permissions", resource: "team:sarah.kim", ip: "24.5.118.9", date: "Yesterday, 11:02 AM" },
  { user: "Priya Patel", action: "Generated API key", resource: "key_live_4f2a", ip: "108.3.44.71", date: "2 days ago" },
  { user: "John Reyes", action: "Retried webhook", resource: "evt_A804", ip: "84.12.55.2", date: "3 days ago" },
];

export const apiKeys: ApiKey[] = [
  { id: "key_1", label: "Live secret key", value: "sk_live_••••••••••••pQ2f", created: "Aug 2, 2026", lastUsed: "2 min ago", env: "Live" },
  { id: "key_2", label: "Test secret key", value: "sk_test_••••••••••••91Ka", created: "Jun 14, 2026", lastUsed: "1 hr ago", env: "Test" },
  { id: "key_3", label: "Publishable key", value: "pk_live_••••••••••••7bM1", created: "Aug 2, 2026", lastUsed: "5 min ago", env: "Live" },
];

export const teamMembers: TeamMember[] = [
  { name: "John Reyes (You)", role: "Owner", email: "john@payflow-demo.com" },
  { name: "Sarah Kim", role: "Admin", email: "sarah.kim@payflow-demo.com" },
  { name: "Priya Patel", role: "Developer", email: "priya@payflow-demo.com" },
];

export const invoices: Invoice[] = [
  { id: "inv_0091", period: "Aug 2026", amount: "$49.00", status: "Paid" },
  { id: "inv_0084", period: "Jul 2026", amount: "$49.00", status: "Paid" },
  { id: "inv_0077", period: "Jun 2026", amount: "$49.00", status: "Paid" },
];

export function getTransactionById(id: string): Transaction | undefined {
  return transactions.find((t) => t.id === id);
}

export function getCustomerById(id: string): Customer | undefined {
  return customers.find((c) => c.id === id);
}

export const overviewStats = {
  balance: "$128,430.52",
  revenue: "$84,240.32",
  successfulPayments: "12,482",
  refunds: "$4,230.10",
};

export const analyticsStats = {
  revenueGrowth: "+24.8%",
  successRate: "98.2%",
  customerGrowth: "+312",
  avgTransactionValue: "$67.40",
};
