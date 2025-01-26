import { auth } from "@/auth";
import LoginButton from "@/components/auth/LoginButton";
import SingOutButton from "@/components/auth/SingOutButtonServer";
import { Button } from "@/components/ui/button";

export default async function Home() {
  const session = await auth();
  const user = await session?.user;
  return (
    <div>
      {user && <SingOutButton />}

      {!user && (
        <LoginButton>
          <Button size={"lg"}>Sign in</Button>
        </LoginButton>
      )}
    </div>
  );
}
