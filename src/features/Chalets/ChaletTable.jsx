import Spinner from "../../ui/Spinner";
import ChaletRow from "./ChaletRow";
import { useChalets } from "./useChalets";
import Table from "../../ui/Table";
import Menues from "../../ui/Menus";
import Empty from "../../ui/Empty";
import { useSearchParams } from "react-router-dom";

function ChaletTable() {
  const { isLoading, chalets } = useChalets();
  const [searchParams] = useSearchParams();

  if (isLoading) return <Spinner />;
  
  if (!chalets.length) return <Empty resource="chalets" />;

  const filterValue = searchParams.get("discount") || "all";

  let filteredChalets;
  
  if (filterValue === "all") filteredChalets = chalets;

  if (filterValue === "no-discount")
    filteredChalets = chalets.filter((chalet) => chalet.discount === 0);
  
  if (filterValue === "with-discount")
    filteredChalets = chalets.filter((chalet) => chalet.discount > 0);

const sortBy = searchParams.get("sortBy") || "startDate-asc"

  const [field, direction] = sortBy.split("-");
  
  const modifier = direction === "asc" ? 1 : -1;

  const sortedChalet = filteredChalets.sort(
    (a, b) => (a[field] - b[field]) * modifier
  );
  

  return (
    <Menues>
      <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
        <Table.Header>
          <div>image</div>
          <div>Chalet</div>
          <div>Max Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={sortedChalet}
          render={(chalet) => <ChaletRow chalet={chalet} key={chalet.id} />}
        />
      </Table>
    </Menues>
  );
}

export default ChaletTable;
