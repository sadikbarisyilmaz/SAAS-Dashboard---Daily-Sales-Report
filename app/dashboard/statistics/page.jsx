import Banner from "@/components/Banner";

export default async function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center w-full">
      <Banner title="Statistics" />
      <div className="p-10 w-full h-full">stats</div>
    </main>
  );
}
