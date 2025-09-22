import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AdminDashboard() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Card>
        <CardHeader>
          <CardTitle>Admin Dashboard</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Welcome to the admin dashboard!</p>
        </CardContent>
      </Card>
    </div>
  );
}
