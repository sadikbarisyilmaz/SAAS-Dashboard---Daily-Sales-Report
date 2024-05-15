"use client";
import Link from "next/link";
import React from "react";
import { Separator } from "./ui/separator";
import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import { HomeIcon } from "lucide-react";

export default function Navbar() {
  return (
    <div className="w-60 border-r  min-h-screen">
      <div className="w-full p-4 flex flex-col gap-4  h-full">
        <div className="p-2">
          <Link className="link" href="/">
            <HomeIcon />
          </Link>
        </div>
        <Separator />
        <div className="flex flex-col justify-between h-full">
          <div className="p-2 flex flex-col gap-4">
            <Link className="link" href="/dashboard">
              Daily Sales
            </Link>
          </div>
          <div className="w-full flex justify-between">
            <Button variant="outline" onClick={signOut}>
              Sign Out
            </Button>
            <ModeToggle />
          </div>
        </div>
      </div>
    </div>
  );
}
