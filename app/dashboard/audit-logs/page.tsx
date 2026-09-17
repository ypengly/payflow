import { Topbar } from "@/components/dashboard/topbar";
import { Card } from "@/components/ui/card";
import { Table, THead, TBody, Tr, Th, Td } from "@/components/ui/table";
import { auditLogs } from "@/lib/data";

export default function AuditLogsPage() {
  return (
    <>
      <Topbar title="Audit Logs" />
      <div className="flex-1 overflow-y-auto p-6">
        <Card>
          <Table>
            <THead>
              <Tr>
                <Th>User</Th>
                <Th>Action</Th>
                <Th>Resource</Th>
                <Th>IP</Th>
                <Th>Date</Th>
              </Tr>
            </THead>
            <TBody>
              {auditLogs.map((log, i) => (
                <Tr key={i}>
                  <Td>{log.user}</Td>
                  <Td>{log.action}</Td>
                  <Td className="font-mono text-faint">{log.resource}</Td>
                  <Td className="font-mono text-faint">{log.ip}</Td>
                  <Td className="text-faint whitespace-nowrap">{log.date}</Td>
                </Tr>
              ))}
            </TBody>
          </Table>
        </Card>
      </div>
    </>
  );
}
