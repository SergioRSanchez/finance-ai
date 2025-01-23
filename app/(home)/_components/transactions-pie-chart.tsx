"use client";

import { Pie, PieChart } from "recharts";

import { Card, CardContent } from "@/app/_components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/app/_components/ui/chart";
import { TransactionType } from "@prisma/client";
import { TransactionPercentagePerType } from "@/app/_data/get-dashboard/types";
import { PiggyBankIcon, TrendingDownIcon, TrendingUpIcon } from "lucide-react";
import PercentageItem from "./percentage-item";

const chartConfig = {
  [TransactionType.INVESTMENT]: {
    label: "Investimentos",
    color: "#FFFFFF",
  },
  [TransactionType.DEPOSIT]: {
    label: "Receitas",
    color: "#55802E",
  },
  [TransactionType.EXPENSE]: {
    label: "Despesas",
    color: "#D00000",
  },
} satisfies ChartConfig;

interface TransactionsPieChartProps {
  investmentsTotal: number;
  depositsTotal: number;
  expensesTotal: number;
  typesPercentage: TransactionPercentagePerType;
}

const TransactionPieChart = ({
  investmentsTotal,
  depositsTotal,
  expensesTotal,
  typesPercentage,
}: TransactionsPieChartProps) => {
  const chartDate = [
    {
      type: TransactionType.INVESTMENT,
      amount: investmentsTotal,
      fill: chartConfig[TransactionType.INVESTMENT].color,
    },
    {
      type: TransactionType.DEPOSIT,
      amount: depositsTotal,
      fill: chartConfig[TransactionType.DEPOSIT].color,
    },
    {
      type: TransactionType.EXPENSE,
      amount: expensesTotal,
      fill: chartConfig[TransactionType.EXPENSE].color,
    },
  ];

  return (
    <Card className="flex flex-col p-6">
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartDate}
              dataKey="amount"
              nameKey="type"
              innerRadius={60}
            />
          </PieChart>
        </ChartContainer>

        <div className="space-y-3">
          <PercentageItem
            icon={<TrendingUpIcon size={16} className="text-primary" />}
            title="Receitas"
            value={typesPercentage[TransactionType.DEPOSIT]}
          />
          <PercentageItem
            icon={<TrendingDownIcon size={16} className="text-red-500" />}
            title="Despesas"
            value={typesPercentage[TransactionType.EXPENSE]}
          />
          <PercentageItem
            icon={<PiggyBankIcon size={16} />}
            title="Investimentos"
            value={typesPercentage[TransactionType.INVESTMENT]}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default TransactionPieChart;
