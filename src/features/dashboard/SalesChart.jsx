/* eslint-disable react/prop-types */
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import styled from "styled-components";
import DashboardBox from "./DashboardBox";
import Heading from "../../ui/Heading";
import { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";
import { eachDayOfInterval, format, isSameDay, subDays } from "date-fns";

const StyledSalesChart = styled(DashboardBox)`
  grid-column: 1 / -1;

  & .recharts-cartesian-grid-horizontal line,
  & .recharts-cartesian-grid-vertical line {
    stroke: var(--color-grey-300);
  }
`;

function SalesChart({ bookings, dayNums }) {
  const { isDarkMode } = useContext(DarkModeContext);

  const allDates = eachDayOfInterval({
    start: subDays(new Date(), dayNums - 1),
    end: new Date(),
  });

  const data = allDates.map((date) => {
    return {
      label: format(date, "MMM dd"),
      totalSales: bookings
        .filter((booking) => isSameDay(date, new Date(booking.created_at)))
        .reduce((acc, cur) => acc + cur.totalPrice, 0),
      extraPrice: bookings
        .filter((booking) => isSameDay(date, new Date(booking.created_at)))
        .reduce((acc, cur) => acc + cur.extraPrice, 0),
    };
  });

  const colors = isDarkMode
    ? {
        totalSales: { stroke: "#ea580c", fill: "#ea580c" },
        extraPrice: { stroke: "#22c55e", fill: "#22c55e" },
        text: "#e5e7eb",
        background: "#18212f",
      }
    : {
        totalSales: { stroke: "#f97316", fill: "#f97316" },
        extraPrice: { stroke: "#2ce76e ", fill: "#02cf4d" },
        text: "#374151",
        background: "#fff",
      };

  return (
    <StyledSalesChart>
      <Heading as="h2">
        Sales from {format(allDates.at(0), "MMM dd yyyy")} &mdash;{" "}
        {format(allDates.at(-1), "MMM dd yyyy")}{" "}
      </Heading>
      <ResponsiveContainer height={300} width={"100%"}>
        <BarChart
          data={data}
          margin={{
            top: 10,
            right: 0,
            left: 40,
            bottom: 0,
          }}
        >
          <XAxis
            dataKey="label"
            tick={{ fill: colors.text }}
            tickLine={{ stroke: colors.text }}
          />
          <YAxis
            unit="Egp"
            tick={{ fill: colors.text }}
            tickLine={{ stroke: colors.text }}
          />
          <CartesianGrid strokeDasharray="4 4" con />
          <Tooltip contentStyle={{ background: colors.background }} />
          <Legend />
          <Bar
            dataKey="totalSales"
            type="monotone"
            stroke={colors.totalSales.stroke}
            fill={colors.totalSales.fill}
            strokeWidth={4}
            name="Total sales"
            unit="Egp"
          />
          <Bar
            dataKey="extraPrice"
            type="monotone"
            stroke={colors.extraPrice.stroke}
            fill={colors.extraPrice.fill}
            strokeWidth={4}
            name="Extras Sales"
            unit="Egp"
          />
        </BarChart>
      </ResponsiveContainer>
    </StyledSalesChart>
  );
}

export default SalesChart;
