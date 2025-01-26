"use client";

import { Button } from "../ui/button";

import { signOutAction } from "@/app/actions/signOutAction";

const SignoutButton = () => {
  return (
    <form action={signOutAction}>
      <Button>Sign Out</Button>
    </form>
  );
};

export default SignoutButton;
