import ClientAuthWrapper from "./NonAdminHeader";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return <ClientAuthWrapper>{children}</ClientAuthWrapper>;
}
