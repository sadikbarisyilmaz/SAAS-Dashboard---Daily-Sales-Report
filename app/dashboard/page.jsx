import { getSales } from "../actions/saleActions";
import { DataTable } from "@/components/sales-table/data-table";
import { columns } from "@/components/sales-table/columns";
import Banner from "@/components/Banner";
import { Stats } from "@/components/Stats";

export default async function Page() {
  const sales = await getSales();

  return (
    <main className="flex min-h-screen flex-col items-center w-full">
      <Banner title="Daily Sales" />
      <div className="p-10 w-full h-full ">
        <DataTable columns={columns} data={sales} />
        <Stats data={sales} />
      </div>
    </main>
  );
}
