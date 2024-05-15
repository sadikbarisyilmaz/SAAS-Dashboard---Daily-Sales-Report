import Navbar from "@/components/Navbar";

export default function DashboardLayout({ children }) {
  return (
    <section className="flex min-h-screen flex-col md:flex-row w-full">
      <Navbar />
      <div className="md:pl-60 pl-0 pt-[72px] md:pt-0 flex w-full">
        {children}
      </div>
    </section>
  );
}
