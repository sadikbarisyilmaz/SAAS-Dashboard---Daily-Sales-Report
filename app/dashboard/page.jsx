"use client";
import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      Dashboard
      <div className=" flex gap-2">
        <Button variant="outline" onClick={signOut}>
          Sign out
        </Button>
        <ModeToggle />
      </div>
    </main>
  );
}
