import CabinTable from "../features/cabins/CabinTable";
import CreateCabinForm from "../features/cabins/CreateCabinForm";
import Button from "../ui/Button";
import Heading from "../ui/Heading";
import Modal from "../ui/Modal";
import Row from "../ui/Row";
import { useState } from "react";
function Cabins() {
  const [isFormAddCabinOpen, setIsFormAddCabinOpen] = useState(false);

  const handleOpenFormAddCabin = () => {
    console.log("12");
    setIsFormAddCabinOpen(true);
  };
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        {/* <CabinTableOperations /> */}
      </Row>

      <Row>
        <CabinTable />
        <Button onClick={handleOpenFormAddCabin} size="large" variation="green">
          Add Cabin
        </Button>
        {isFormAddCabinOpen && (
          <Modal onClose={() => setIsFormAddCabinOpen(false)}>
            <CreateCabinForm />
          </Modal>
        )}
      </Row>
    </>
  );
}

export default Cabins;
