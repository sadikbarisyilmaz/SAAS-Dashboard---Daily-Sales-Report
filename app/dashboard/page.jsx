import { SalesTable } from "@/components/SalesTable";
import { getSales } from "../actions/saleActions";

export default async function Page() {
  const sales = await getSales();

  return (
    <main className="flex min-h-screen flex-col items-center p-10 w-full">
      Dashboard
      <div>
        <SalesTable sales={sales} />
      </div>
    </main>
  );
}
