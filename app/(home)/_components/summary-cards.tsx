import {
  PiggyBankIcon,
  TrendingDownIcon,
  TrendingUpIcon,
  WalletIcon,
} from "lucide-react";

import { db } from "@/app/_lib/prisma";
import SummaryCard from "./summary-card";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const SummaryCards = async () => {
  const { userId } = await auth();

  if (!userId) {
    redirect("/login");
  }

  const depositsTotal =
    Number(
      (
        await db.transaction.aggregate({
          where: { type: "DEPOSIT", userId },
          _sum: { amount: true },
        })
      )?._sum?.amount,
    ) || 0;

  const investmentsTotal =
    Number(
      (
        await db.transaction.aggregate({
          where: { type: "INVESTMENT", userId },
          _sum: { amount: true },
        })
      )?._sum?.amount,
    ) || 0;

  const expensesTotal =
    Number(
      (
        await db.transaction.aggregate({
          where: { type: "EXPENSE", userId },
          _sum: { amount: true },
        })
      )?._sum?.amount,
    ) || 0;

  const balance = depositsTotal - investmentsTotal - expensesTotal;

  return (
    <div className="space-y-6">
      <SummaryCard
        icon={<WalletIcon size={16} />}
        title="Saldo"
        amount={balance}
        size="large"
      />

      <div className="grid grid-cols-3 gap-6">
        <SummaryCard
          icon={<PiggyBankIcon size={16} />}
          title="Investimentos"
          amount={investmentsTotal}
        />

        <SummaryCard
          icon={<TrendingUpIcon size={16} className="text-primary" />}
          title="Receitas"
          amount={depositsTotal}
        />

        <SummaryCard
          icon={<TrendingDownIcon size={16} className="text-red-500" />}
          title="Despesas"
          amount={expensesTotal}
        />
      </div>
    </div>
  );
};

export default SummaryCards;
