import { db } from "@/app/_lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { TransactionType } from "@prisma/client";
import { redirect } from "next/navigation";
import { TransactionPercentagePerType } from "./types";

export const getDashboard = async (month: string) => {
  const { userId } = await auth();

  if (!userId) {
    redirect("/login");
  }

  const where = {
    date: {
      gte: new Date(`2025-${month}-01`),
      lt: new Date(`2025-${month}-31`),
    },
  };

  const depositsTotal =
    Number(
      (
        await db.transaction.aggregate({
          where: { ...where, type: "DEPOSIT", userId },
          _sum: { amount: true },
        })
      )?._sum?.amount,
    ) || 0;

  const investmentsTotal =
    Number(
      (
        await db.transaction.aggregate({
          where: { ...where, type: "INVESTMENT", userId },
          _sum: { amount: true },
        })
      )?._sum?.amount,
    ) || 0;

  const expensesTotal =
    Number(
      (
        await db.transaction.aggregate({
          where: { ...where, type: "EXPENSE", userId },
          _sum: { amount: true },
        })
      )?._sum?.amount,
    ) || 0;

  const balance = depositsTotal - investmentsTotal - expensesTotal;

  const transactionsTotal = Number(
    (
      await db.transaction.aggregate({
        where: { ...where, userId },
        _sum: { amount: true },
      })
    )._sum.amount,
  );

  const typesPercentage: TransactionPercentagePerType = {
    [TransactionType.DEPOSIT]: Math.round(
      (Number(depositsTotal || 0) / Number(transactionsTotal)) * 100,
    ),
    [TransactionType.EXPENSE]: Math.round(
      (Number(expensesTotal || 0) / Number(transactionsTotal)) * 100,
    ),
    [TransactionType.INVESTMENT]: Math.round(
      (Number(investmentsTotal || 0) / Number(transactionsTotal)) * 100,
    ),
  };

  return {
    balance,
    depositsTotal,
    investmentsTotal,
    expensesTotal,
    typesPercentage,
  };
};
