"use client";
import Link from "next/link";
import React from "react";
import { Separator } from "./ui/separator";
import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import { HomeIcon } from "lucide-react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Skeleton } from "./ui/skeleton";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <div className="w-full md:w-60 border-b md:border-r md:border-b-0 md:h-screen fixed bg-background z-50">
      <div className="w-full p-4 flex md:flex-col gap-4  h-full">
        <div className="p-2 gap-4 flex">
          <Link className="link flex items-center justify-center" href="/">
            <HomeIcon />
          </Link>
          <div className="hidden md:flex flex-col gap-1 items">
            <p className="w-full text-xs">Logged in as:</p>
            {session ? (
              <p className="w-full text-xs">{session?.user.name}</p>
            ) : (
              <Skeleton className="w-full h-4 rounded" />
            )}
          </div>
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
