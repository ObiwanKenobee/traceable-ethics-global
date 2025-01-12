import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Activity {
  id: number;
  type: string;
  title: string;
  date: string;
  status: string;
}

const recentActivities = [
  {
    id: 1,
    type: "audit",
    title: "Annual Supplier Audit Completed",
    date: "2024-03-15",
    status: "completed",
  },
  {
    id: 2,
    type: "risk",
    title: "New Risk Identified in Southeast Asia",
    date: "2024-03-14",
    status: "pending",
  },
  {
    id: 3,
    type: "assessment",
    title: "Quarterly Assessment Started",
    date: "2024-03-13",
    status: "in-progress",
  },
];

export function RecentActivities() {
  return (
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle>Recent Activities</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentActivities.map((activity) => (
            <div
              key={activity.id}
              className="flex items-center space-x-4 rounded-lg border p-3"
            >
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium">{activity.title}</p>
                <p className="text-xs text-muted-foreground">{activity.date}</p>
              </div>
              <span
                className={`text-xs px-2 py-1 rounded-full ${
                  activity.status === "completed"
                    ? "bg-green-100 text-green-800"
                    : activity.status === "pending"
                    ? "bg-yellow-100 text-yellow-800"
                    : "bg-blue-100 text-blue-800"
                }`}
              >
                {activity.status}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}