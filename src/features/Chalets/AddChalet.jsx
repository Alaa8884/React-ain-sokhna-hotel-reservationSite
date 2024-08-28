import Button from "../../ui/Button";
import CreateChaletForm from "./CreateChaletForm";
import Modal from "../../ui/Modal";


function AddChalet() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="chalet-form">
          <Button>Add new Chalet</Button>
        </Modal.Open>
        <Modal.Window name="chalet-form">
          <CreateChaletForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}
export default AddChalet;
