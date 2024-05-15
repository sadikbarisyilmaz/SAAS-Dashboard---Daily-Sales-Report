import Navbar from "@/components/Navbar";

export default function DashboardLayout({
  children, // will be a page or nested layout
}) {
  return (
    <section className="flex min-h-screen w-full">
      {/* Include shared UI here e.g. a header or sidebar */}
      <Navbar />
      {children}
    </section>
  );
}
