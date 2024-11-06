export interface ICabin {
  id?: number;
  name: string;
  maxCapacity: number;
  regularPrice: number;
  discount: number;
  description: string;
  image: string;
}
export type ICabinList = ICabin[];

export interface IModal {
  children: React.ReactNode;
  onClose: () => void;
}

// export interface IFormCabin {
//   id?: number;
//   name: string;
//   maxCapacity: number;
//   regularPrice: number;
//   discount: number;
//   description: string;
//   image: string;
// }
