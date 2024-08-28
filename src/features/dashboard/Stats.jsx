import { HiOutlineBriefcase, HiOutlineChartBar } from "react-icons/hi";
import Stat from "./Stat";
import { HiOutlineBanknotes, HiOutlineCalendarDays } from "react-icons/hi2";
import { formatCurrency } from "../../utils/helpers";

/* eslint-disable react/prop-types */
function Stats({ bookings, confirmedStays, dayNums, chaletsNum }) {
  const bookingsNum = bookings.length;

  const sales = bookings.reduce((acc, cur) => acc + cur.totalPrice, 0);

  const checkInNum = confirmedStays.length;


  const occupation =
    confirmedStays.reduce((acc, cur) => acc + cur.numNights, 0) /
    (dayNums * chaletsNum);

  return (
    <>
      <Stat
        title="Bookings"
        color="brand"
        value={bookingsNum}
        icon={<HiOutlineBriefcase />}
      />
      <Stat
        title="Check in"
        color="blue"
        value={checkInNum}
        icon={<HiOutlineCalendarDays />}
      />
      <Stat
        title="Sales"
        color="green"
        value={formatCurrency(sales)}
        icon={<HiOutlineBanknotes />}
      />
      <Stat
        title="Occupancy rate"
        color="yellow"
        value={Math.round(occupation * 100) + " %"}
        icon={<HiOutlineChartBar />}
      />
    </>
  );
}

export default Stats;
