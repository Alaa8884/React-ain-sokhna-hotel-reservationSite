import ChaletTable from "../features/Chalets/ChaletTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import AddChalet from "../features/Chalets/AddChalet";
import ChaletTableOperations from "../features/Chalets/ChaletTableOperations";

function Chalets() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All Chalets</Heading>
       <ChaletTableOperations/>
      </Row>
      <Row>
        <ChaletTable />
        <AddChalet />
      </Row>
    </>
  );
}

export default Chalets;
