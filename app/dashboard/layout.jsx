import Navbar from "@/components/Navbar";

export default function DashboardLayout({ children }) {
  return (
    <section className="flex min-h-screen w-full">
      <Navbar />
      {children}
    </section>
  );
}
