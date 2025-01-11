import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface UserSettings {
  companyName: string;
  email: string;
  notificationsEnabled: boolean;
  theme: "light" | "dark";
}

const initialSettings: UserSettings = {
  companyName: "Global Corp Inc.",
  email: "admin@globalcorp.com",
  notificationsEnabled: true,
  theme: "light",
};

export function Settings() {
  const [settings, setSettings] = useState<UserSettings>(initialSettings);
  const [isEditing, setIsEditing] = useState(false);

  const handleSaveSettings = () => {
    setIsEditing(false);
    // Implementation for saving settings
    console.log("Save settings", settings);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
        {isEditing ? (
          <Button onClick={handleSaveSettings}>Save Changes</Button>
        ) : (
          <Button onClick={() => setIsEditing(true)}>Edit Settings</Button>
        )}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Profile Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Company Name</label>
            <Input
              value={settings.companyName}
              onChange={(e) => setSettings({ ...settings, companyName: e.target.value })}
              disabled={!isEditing}
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Email</label>
            <Input
              type="email"
              value={settings.email}
              onChange={(e) => setSettings({ ...settings, email: e.target.value })}
              disabled={!isEditing}
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Preferences</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Enable Notifications</span>
            <Button
              variant={settings.notificationsEnabled ? "default" : "outline"}
              onClick={() => isEditing && setSettings({
                ...settings,
                notificationsEnabled: !settings.notificationsEnabled
              })}
              disabled={!isEditing}
            >
              {settings.notificationsEnabled ? "Enabled" : "Disabled"}
            </Button>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Theme</span>
            <Button
              variant="outline"
              onClick={() => isEditing && setSettings({
                ...settings,
                theme: settings.theme === "light" ? "dark" : "light"
              })}
              disabled={!isEditing}
            >
              {settings.theme === "light" ? "Light" : "Dark"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}