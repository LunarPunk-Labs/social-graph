import {Injectable} from '@angular/core';
import {Query} from 'apollo-angular';
import gql from 'graphql-tag';


export interface PersonaField {
  name: string,
  data: string
}

export interface Persona {
  id: string;
  name: string;
  fields: [PersonaField]
}

export interface Response {
  allPersonas: Persona[]
}

@Injectable({
  providedIn: 'root',
})
export class AllPersonasGQL extends Query<Response> {
  document = gql`
  query GetAllPersonas {
    allPersonas {
      id
      name
      fields{
        name
        data
      }
    }
  }
`;
}