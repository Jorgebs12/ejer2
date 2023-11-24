import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { Query } from "./resolvers/query.ts";
import { Mutation } from "./resolvers/mutation.ts";
import { schema } from "./schema/schemaGraphQL.ts";

import mongoose from "npm:mongoose@7.6.3";
import { load } from "https://deno.land/std@0.204.0/dotenv/mod.ts";

//DEFINIR LOS RESOLVERS, TIENE QUE TENER LAS MISMA QUE ARIBA
const resolvers = {
  Query,
  Mutation
};

const env = await load();
const MONGO_URL = env.MONGO_URL || Deno.env.get("MONGO_URL");



try{
  
if (!MONGO_URL) {
  console.log("Debes especificar la variable de entorno MONGO_URL");
  Deno.exit(1);
}
  await mongoose.connect(MONGO_URL)
  console.log("Conectado a MongoDB");

  const server = new ApolloServer({
    typeDefs: schema,
    resolvers,
  });

  const { url } = await startStandaloneServer(server,{listen:{port: 8000}});
  console.log(`🚀 Server ready at ${url}`);

}
catch(error){
  console.log(error);
}