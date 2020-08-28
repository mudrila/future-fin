import useSecureRoute from "../../hooks/useSecureRoute";

function AppsDashboard() {
  useSecureRoute();
  return <div>Welcome to AppsDashboard!</div>;
}

export default AppsDashboard;
