import supabase, { supabaseUrl } from "./supabase";
import { ICabin } from "../types/data.types";
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
//get all cabins
export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }

  return data;
}
// delete cabin based on id
export async function deleteCabin(id: number) {
  await delay(1000);
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be deleted");
  }

  return data;
}

export async function createCabin(newCabin: ICabin) {
  await delay(2000);
  const { data, error } = await supabase
    .from("cabins")
    .insert([newCabin])
    .select();
  if (error) {
    console.error(error);
    throw new Error("Cabin could not be added");
  }

  return data;
}

// export async function createEditCabin(newCabin: ICabin, id: number) {
//   const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);

//   const imageName = `${Math.random()}-${newCabin.image}`.replaceAll("/", "");
//   const imagePath = hasImagePath
//     ? newCabin.image
//     : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

//   // 1. Create/edit cabin
//   const query = supabase.from("cabins");

//   // A) CREATE
//   if (!id) {
//     const { data, error } = await query
//       .insert([{ ...newCabin, image: imagePath }])
//       .select()
//       .single();
//     if (error) {
//       console.error(error);
//       throw new Error("Cabin could not be created");
//     }
//     return handleImageUpload(data, newCabin, imageName, hasImagePath);
//   }

//   // B) EDIT
//   const { data, error } = await query
//     .update({ ...newCabin, image: imagePath })
//     .eq("id", id)
//     .select()
//     .single();
//   if (error) {
//     console.error(error);
//     throw new Error("Cabin could not be updated");
//   }

//   return handleImageUpload(data, newCabin, imageName, hasImagePath);
// }

// async function handleImageUpload(
//   data: ICabin,
//   newCabin: ICabin,
//   imageName: string,
//   hasImagePath: boolean,
// ) {
//   if (hasImagePath) return data;

//   const { error: storageError } = await supabase.storage
//     .from("cabin-images")
//     .upload(imageName, newCabin.image);

//   if (storageError) {
//     await supabase.from("cabins").delete().eq("id", data.id);
//     console.error(storageError);
//     throw new Error(
//       "Cabin image could not be uploaded and the cabin was not created",
//     );
//   }

//   return data;
// }
