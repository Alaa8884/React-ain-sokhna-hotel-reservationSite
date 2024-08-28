import styled from "styled-components";
import Stats from "./Stats";
import Spinner from "../../ui/Spinner";
import { useRecentBookings } from "./useRecentBookings";
import { useRecentStays } from "./useRecentStays";
import { useChalets } from "../Chalets/useChalets";
import SalesChart from "./SalesChart";
import DurationChart from "./DurationChart";
import TodayActivity from "../check-in-out/TodayActivity";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 30rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  const { bookings, isLoading: isLoading1 } = useRecentBookings();

  const { confirmedStays, isLoading: isLoading2, dayNums } = useRecentStays();

  const { chalets, isLoading: isLoading3 } = useChalets();
  
  if (isLoading1 || isLoading2 || isLoading3) return <Spinner />;
  
  return (
      <StyledDashboardLayout>
        <Stats
          bookings={bookings}
          confirmedStays={confirmedStays}
          dayNums={dayNums}
          chaletsNum={chalets.length}
        />
        <TodayActivity />
        <DurationChart confirmedStays={confirmedStays} />
        <SalesChart dayNums={dayNums} bookings={bookings} />
      </StyledDashboardLayout>
  );
}

export default DashboardLayout;
