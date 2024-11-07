import styled from "styled-components";
import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import { useForm } from "react-hook-form";
import { ICabin } from "../../types/data.types";
import { useMutation } from "@tanstack/react-query";
import { createCabin } from "../../services/apiCabins";
import { useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { ICreateCabinForm } from "../../types/data.types";
const FormRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 24rem 1fr 1.2fr;
  gap: 2.4rem;

  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

const Label = styled.label`
  font-weight: 500;
`;

// const Error = styled.span`
//   font-size: 1.4rem;
//   color: var(--color-red-700);
// `;

function CreateCabinForm({ onClose }: ICreateCabinForm) {
  //state
  const queryClient = useQueryClient(); //query client
  // validate input
  const { register, handleSubmit, reset } = useForm<ICabin>();

  // create mutation  for creating new cabin  and loading status
  const { mutateAsync, isPending: isCreating } = useMutation({
    mutationFn: createCabin,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
      onClose();
      reset();
    },
  });

  // send request to server
  const onSubmit = (data: ICabin) => {
    // mutate(data);
    toast.promise(mutateAsync(data), {
      loading: "Creating...",
      success: <b>New cabin successfully created!</b>,
      error: (err) => <b>{err.message}</b>,
    });
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow>
        <Label htmlFor="name">Cabin name</Label>
        <Input type="text" id="name" {...register("name")} />
      </FormRow>

      <FormRow>
        <Label htmlFor="maxCapacity">Maximum capacity</Label>
        <Input type="number" id="maxCapacity" {...register("maxCapacity")} />
      </FormRow>

      <FormRow>
        <Label htmlFor="regularPrice">Regular price</Label>
        <Input type="number" id="regularPrice" {...register("regularPrice")} />
      </FormRow>

      <FormRow>
        <Label htmlFor="discount">Discount</Label>
        <Input
          type="number"
          id="discount"
          defaultValue={0}
          {...register("discount")}
        />
      </FormRow>

      <FormRow>
        <Label htmlFor="description">Description for website</Label>
        <Textarea
          id="description"
          defaultValue=""
          {...register("description")}
        />
      </FormRow>

      <FormRow>
        <Label htmlFor="image">Cabin photo</Label>
        <FileInput id="image" accept="image/*" {...register("image")} />
      </FormRow>

      <FormRow>
        <Button
          disabled={isCreating}
          onClick={onClose}
          size="medium"
          variation="secondary"
          type="reset"
        >
          Cancel
        </Button>
        <Button disabled={isCreating} size="medium" variation="green">
          Create
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
