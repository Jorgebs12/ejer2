//DEFINIR EL ESQUEMA DE GRAPHQL
export const schema = `#graphql  #PARA QUE LO RECONOZCA COMO UN ESQUEMA DE GRAPHQL Y LO PONGA DE COLORES

  type Pet {
    id: ID!   #CUANDO ES OBLIGARIOTIO SE PONE EL ! Y CUANDO NO ES OBLIGATORIO NO SE PONE
    name: String!
    bread: String!
  }

  type Query {

    pets: (bread: String), [Pet!]! #LA QUERY DEVUELVE UN ARRAY DE PET, SIEMPRE DEVUELVE UN ARRAY POR ! Y SIEMPRE DEVUELVE UN PET POR !
    pet(id: ID!): Pet! #LA QUERY RECIBE UN ID Y DEVUELVE UN PET, SIEMPRE DEVUELVE UN PET POR !, NO PUEDE DEVOLVER NULL
    #petByBread(bread: String!): [Pet!]! #LA QUERY RECIBE UN BREAD Y DEVUELVE UN ARRAY DE PET, SIEMPRE DEVUELVE UN ARRAY POR ! Y SIEMPRE DEVUELVE UN PET POR !
  }

  type Mutation {
    addPet(name: String!, bread: String!): Pet!
    deletePet(id: ID!): Pet!
    updatePet(name: String!, bread: String!, id: ID!): Pet!
  }
`;