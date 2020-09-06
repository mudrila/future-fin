import useAccountPage from "./hooks";

export default function AccountPage() {
  const { user } = useAccountPage();
  return <article>Hello {user.name}! This is your account page.</article>;
}
