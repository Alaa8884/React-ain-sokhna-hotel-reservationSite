/* eslint-disable react/prop-types */
import styled from "styled-components";

import CreateChaletForm from "./CreateChaletForm";
import { formatCurrency } from "../../utils/helpers";
import { useDeleteChalet } from "./useDeleteChalet";
import { HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2";
import { useCreateChalet } from "./useCreateChalet";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";

const Img = styled.img`
  display: block;
  width: 6rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-5px);
`;

const Chalet = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;

function ChaletRow({ chalet }) {
  const { isDeleting, deleteChalet } = useDeleteChalet();
  const { isCreating, createChalet } = useCreateChalet();

  const {
    id: chaletId,
    name,
    maxCapacity,
    regularPrice,
    discount,
    image,
    description,
  } = chalet;

  function handleDublicate() {
    createChalet({
      name: `Copy of ${name}`,
      maxCapacity,
      regularPrice,
      discount,
      image,
      description,
    });
  }

  return (
    <Table.Row>
      <Img src={image} />
      <Chalet>{name}</Chalet>
      <div>{`Fits up to ${maxCapacity} person`}</div>
      <Price>{formatCurrency(regularPrice)}</Price>
      {discount ? (
        <Discount>{formatCurrency(discount)}</Discount>
      ) : (
        <span style={{ textAlign: "center" }}>&mdash;</span>
      )}
      <div>
        <Modal>
          <Menus.Menu>
            <Menus.Toggle id={chaletId} />
            <Menus.List id={chaletId}>
              <Menus.Button
                icon={<HiSquare2Stack />}
                onClick={handleDublicate}
                disabled={isCreating}
              >
                Dublicate
              </Menus.Button>

              <Modal.Open opens="edit">
                <Menus.Button icon={<HiPencil />} disabled={isCreating}>
                  Edit
                </Menus.Button>
              </Modal.Open>

              <Modal.Open opens="confirm-delete">
                <Menus.Button icon={<HiTrash />} disabled={isCreating}>
                  Delete
                </Menus.Button>
              </Modal.Open>
            </Menus.List>

            <Modal.Window name="edit">
              <CreateChaletForm chaletForEdit={chalet} />
            </Modal.Window>

            <Modal.Window name="confirm-delete">
              <ConfirmDelete
                resourceName="chalets"
                onConfirm={() => deleteChalet(chaletId)}
                disabled={isDeleting}
              />
            </Modal.Window>
          </Menus.Menu>
        </Modal>
      </div>
    </Table.Row>
  );
}

export default ChaletRow;
