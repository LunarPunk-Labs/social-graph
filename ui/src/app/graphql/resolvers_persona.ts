import { INSTANCE_NAME, ZOME_NAME } from '../config';
import {GraphQLError} from 'graphql'

export const resolvers = {
  Query: {
    async allPersonas(_, __, connection) {
      if (connection.state == 2)
        return new GraphQLError("Holochain is disconnected")
      const allPersonas = await connection.call(INSTANCE_NAME, ZOME_NAME,'get_personas', {});
      console.log(allPersonas)
      return allPersonas.map((persona) => ({
        id: persona.address,
        name: persona.entry.name,
        fields: persona.entry.fields,
      }));
    }
  },
  Mutation: {
    async createPersona(_,  {name}, connection ) {
      if (connection.state == 2)
        return new GraphQLError("Holochain is disconnected")
      await connection.call(INSTANCE_NAME, ZOME_NAME,'create_persona', { name });
    }
  }
};