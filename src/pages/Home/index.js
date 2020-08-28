import useSecureRoute from "../../hooks/useSecureRoute";

function HomePage() {
  useSecureRoute();
  return <section>Welcome to FinPlan Builder!</section>;
}

export default HomePage;
