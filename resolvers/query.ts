import { GraphQLError } from "graphql";
import { Pet } from "../types.ts";
import { query } from "../schema/schemaGraphQL.ts";
import {MascotaSchema} from "../db/mascotas.ts";

export const Query = {

    pets : async (_parent:unknown, args:{breed?: string}): Promise<Array<Pet>> => {

        const {bread} = args;
        const mascotas = await MascotaModel.find(bread ? {bread} : {});
        
        return mascotas.map((mascota) => {
            return {
                id: mascota._id.toString(),
                name: mascota.name,
                bread: mascota.bread,
            }
        })
    },

    pet : async (_parent:unknown, args:{id: string}): Promise<Pet> => {
        const {id} = args;
        const mascota = await MascotaModel.findOne({_id:id});
        if(!mascota){
          throw new GraphQLError("No existe mascota con ese id");
        }
        return {
          id: mascota._id.toString(),
          name: mascota.name,
          bread: mascota.bread,
        }
  
    }
  };