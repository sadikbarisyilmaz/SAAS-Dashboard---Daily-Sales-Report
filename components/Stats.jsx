import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const Stats = ({ data }) => {
  const totalSales = data.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.quantity;
  }, 0);
  const totalAmount = data.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.total_amount;
  }, 0);

  return (
    <div className="grid sm:grid-cols-2 gap-4 py-10 max-w-5xl">
      <Card className="flex flex-col justify-center items-center shadow-lg">
        <CardHeader className="text-center">
          <CardTitle>Total Items Sold</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <h3 className="text-5xl font-bold">{totalSales}</h3>
        </CardContent>
        <CardFooter className="text-center"></CardFooter>
      </Card>
      <Card className="flex flex-col justify-center items-center shadow-lg">
        <CardHeader className="text-center">
          <CardTitle>Total Amount Earned</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <h3 className="text-5xl font-bold">{totalAmount}</h3>
        </CardContent>
        <CardFooter className="text-center"></CardFooter>
      </Card>
    </div>
  );
};
