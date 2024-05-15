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
    <div className="w-full md:w-60 border-b md:border-r md:border-b-0 md:h-screen fixed bg-background z-50">
      <div className="w-full p-4 flex md:flex-col gap-4  h-full">
        <div className="p-2 flex md:flex-col">
          <Link className="link" href="/">
            <HomeIcon />
          </Link>
        </div>
        <div className="hidden md:flex">
          <Separator />
        </div>
        <div className="flex md:flex-col flex-row justify-between h-full w-full">
          <div className="p-2 flex flex-col gap-4  justify-end md:justify-start">
            <Link className="link" href="/dashboard">
              Daily Sales
            </Link>
          </div>
          <div className="flex gap-2 md:gap-0 justify-end md:justify-between">
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
