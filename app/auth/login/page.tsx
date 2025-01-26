import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Social from "@/components/auth/Social";

function page() {
  return (
    <Card className=" w-[400px] shadow-md">
      <CardHeader>
        <div className="w-full flex flex-col gap-y-4 items-center justify-center">
          <h1 className={"text-3xl font-semibold "}>🔐 Auth</h1>
          <p className=" text-muted-foreground text-sm">Welcome back</p>
        </div>
      </CardHeader>
      <CardContent>Welcome to your website</CardContent>

      <CardFooter>
        <Social />
      </CardFooter>

      <CardFooter></CardFooter>
    </Card>
  );
}

export default page;
