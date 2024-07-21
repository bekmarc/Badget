import { Separator } from "@dingify/ui/components/separator";

import { DisplayForm } from "./display-form";

export const metadata = {
  title: "Display settings",
  description: "Display settings description",
};

export default function SettingsDisplayPage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Display</h3>
        <p className="text-sm text-muted-foreground">
          Turn items on or off to control what&apos;s displayed in the app.
        </p>
      </div>
      <Separator />
      <DisplayForm />
    </div>
  );
}