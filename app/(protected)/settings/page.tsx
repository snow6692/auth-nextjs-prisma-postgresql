import { auth } from "@/auth";
import SingOutButton from "@/components/auth/SingOutButtonServer";

export default async function SettingsPage() {
  const session = await auth();
  const user = await session?.user;
  console.log(user);
  return (
    <div>
      {<SingOutButton />}
      {JSON.stringify(user)}
    </div>
  );
}
