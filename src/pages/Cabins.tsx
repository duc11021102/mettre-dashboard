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
    setIsFormAddCabinOpen(true);
  };
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        {/* <CabinTableOperations /> */}
      </Row>

      <Row>
        <Button
          onClick={handleOpenFormAddCabin}
          size="medium"
          variation="green"
        >
          Add Cabin
        </Button>
        <CabinTable />
        {isFormAddCabinOpen && (
          <Modal onClose={() => setIsFormAddCabinOpen(false)}>
            <CreateCabinForm onClose={() => setIsFormAddCabinOpen(false)} />
          </Modal>
        )}
      </Row>
    </>
  );
}

export default Cabins;
