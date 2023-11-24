import { Pet } from "../types.ts";
import { GraphQLError } from "graphql";
import MascotaModel from "../db/mascotas.ts";

export const Mutation= {
  addPet: async(_: unknown, args: { name: string; bread: string }) : Promise<Pet> => {
    const { name, bread } = args;
    const mascota = await MascotaModel.create({ name, bread });
    return {
      id: mascota._id.toString(),
      name: mascota.name,
      bread: mascota.bread,
    };
  },

  deletePet: async(_: unknown, args: { id: string }) : Promise<Pet> => {
    const { id } = args;
    const mascota = await MascotaModel.findOneAndDelete({_id:id});
    if(!mascota){
      throw new GraphQLError("No existe mascota con ese id");
    }
    return {
      id: mascota._id.toString(),
      name: mascota.name,
      bread: mascota.bread,
    };

  },
  updatePet: async(_: unknown, args: { id: string; name: string; bread: string }) : Promise<Pet> => {
    const { id, name, bread } = args;
    const mascota = await MascotaModel.findOneAndUpdate({_id:id},{name, bread});
    if(!mascota){
      throw new GraphQLError("No existe mascota con ese id");
    }
    return {
      id: mascota._id.toString(),
      name: mascota.name,
      bread: mascota.bread,
    };
  }
};
