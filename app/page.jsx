import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 md:p-24">
      <Card className="grid gap-2 dark:bg-black bg-white dark:bg-opacity-40 bg-opacity-40 p-8 shadow-md dark:shadow-slate-700 h-full">
        <div className="text-center flex flex-col items-center justify-center max-w-2xl">
          <h1 className="drop-shadow-2xl px-4 py-8 text-4xl font-extrabold lg:text-4xl">
            Welcome to Your Company&apos;s Dashboard !
          </h1>
          <p className="leading-7 text-foreground/80">
            <Link className=" link" href="/dashboard">
              Go to Your Dashboard
            </Link>
          </p>
        </div>
      </Card>
    </main>
  );
}
