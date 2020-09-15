import useAppSettings from "./hooks";

export default function SettingsPage() {
  const { loading, settings } = useAppSettings();
  return <div>Settings Page</div>;
}
