import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";

import { db } from "../_lib/prisma";
import { DataTable } from "../_components/ui/data-table";
import AddTransactionButton from "../_components/add-transaction-button";
import Navbar from "../_components/navbar";
import { transactionColumns } from "./_columns";
import { ScrollArea } from "../_components/ui/scroll-area";

const TransactionPage = async () => {
  const { userId } = await auth();

  if (!userId) {
    redirect("/login");
  }

  const transactions = await db.transaction.findMany({
    where: {
      userId,
    },
  });

  return (
    <>
      <Navbar />
      <div className="space-y-6 overflow-hidden p-6">
        <div className="flex w-full items-center justify-between overflow-hidden">
          <h1 className="text-2xl font-bold">Transações</h1>
          <AddTransactionButton />
        </div>

        <div className="h-[calc(100vh-190px)] overflow-hidden">
          <ScrollArea className="h-full rounded-md border">
            <DataTable
              columns={transactionColumns}
              data={JSON.parse(JSON.stringify(transactions))}
            />
          </ScrollArea>
        </div>
      </div>
    </>
  );
};

export default TransactionPage;
