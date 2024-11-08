import styled from "styled-components";
import { ICabin } from "../../types/data.types";
import { formatCurrency } from "../../utils/helpers";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";
import Button from "../../ui/Button";

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.div`
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
type Props = {
  cabin: ICabin;
};

const CabinRow = ({ cabin }: Props) => {
  const {
    id: cabinId,
    name,
    maxCapacity,
    regularPrice,
    discount,
    image,
  } = cabin;

  const queryClient = useQueryClient();

  const { isPending: isLoading, mutateAsync } = useMutation({
    mutationFn: (id: number) => deleteCabin(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
  });

  const onDelete = (id: number) => {
    // mutate(data);
    toast.promise(mutateAsync(id), {
      loading: "Deleting...",
      success: <b>Cabin deleted successfully!</b>,
      error: (err) => <b>{err.message}</b>,
    });
  };
  return (
    <TableRow role="row">
      <Img src={image} />
      <Cabin>{name}</Cabin>
      <div>Fits up to {maxCapacity} guests</div>
      <Price>{formatCurrency(regularPrice)}</Price>
      {discount ? (
        <Discount>{formatCurrency(discount)}</Discount>
      ) : (
        <span>&mdash;</span>
      )}
      <Button
        disabled={isLoading}
        size="small"
        variation="secondary"
        onClick={() => cabinId !== undefined && onDelete(cabinId)}
      >
        Delete
      </Button>
    </TableRow>
  );
};

export default CabinRow;
