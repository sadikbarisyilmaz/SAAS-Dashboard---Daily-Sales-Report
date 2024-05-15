import { getUser } from "./actions/userActions";

export default function Home() {
  const users = getUser();
  console.log(users);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Home
    </main>
  );
}
