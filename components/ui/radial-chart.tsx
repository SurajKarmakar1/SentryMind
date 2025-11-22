"use client";

import { RadialBar, RadialBarChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const productivityData = [
  { month: "Jan", streak: 28, fill: "#FFFFFF" },
  { month: "Feb", streak: 22, fill: "#FFFFFF" },
  { month: "Mar", streak: 26, fill: "#FFFFFF" },
  { month: "Apr", streak: 20, fill: "#FFFFFF" },
  { month: "May", streak: 24, fill: "#FFFFFF" },
  { month: "Jun", streak: 27, fill: "#FFFFFF" },
];

const chartConfig = {
  streak: {
    label: "Productivity Streaks",
  },
  jan: {
    label: "January",
    color: "var(--chart-1)",
  },
  feb: {
    label: "February",
    color: "var(--chart-2)",
  },
  mar: {
    label: "March",
    color: "var(--chart-3)",
  },
  apr: {
    label: "April",
    color: "var(--chart-4)",
  },
  may: {
    label: "May",
    color: "var(--chart-5)",
  },
  jun: {
    label: "June",
    color: "var(--chart-6)",
  },
} satisfies ChartConfig;

export function DefaultRadialChart() {
  return (
    <Card className="flex flex-col rounded-none h-full">
      <CardHeader className="items-center pb-0">
        <CardTitle>Productivity Streaks</CardTitle>
        <CardDescription>Monthly Streaks - 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <RadialBarChart
            data={productivityData}
            innerRadius={30}
            outerRadius={110}
          >
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  nameKey="month"
                  hideIndicator={true}
                  hideLabel={true}
                />
              }
            />
            <RadialBar dataKey="streak" className="drop-shadow-lg" background />
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
