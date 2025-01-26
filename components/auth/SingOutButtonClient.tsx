"use client";
import { signOut } from "next-auth/react";
import { Button } from "../ui/button"; // Adjust import based on export type

const SignoutButtonClient = () => {
  const handleSignOut = async () => {
    await signOut({ callbackUrl: "/auth/login" });
  };

  return <Button onClick={handleSignOut}>Sign Out</Button>;
};

export default SignoutButtonClient;
