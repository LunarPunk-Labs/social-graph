

export const typeDefs =`
  type Persona {
    pid: ID!
    name: String!
    fields: [PersonaField]!
  }
  type PersonaField {
    name: String!
    data: String!
  }
  type PersonaSpec {
    name: String!
  }
  type Query {
    personas: [Persona!]!
  }
  type Mutation {
    createPersona(spec: PersonaSpec!)
  }
`;

/*
   #personas
    pub fn create_persona(spec: persona::PersonaSpec) -> ZomeApiResult<Address> 
    pub fn update_persona(persona_address: Address, spec: persona::PersonaSpec) -> ZomeApiResult<Address> 
    pub fn delete_persona(persona_address: Address) -> ZomeApiResult<Address>
    pub fn get_personas() -> ZomeApiResult<Vec<GetLinksLoadResult<Persona>>>
    pub fn add_field(persona_address: Address, field: persona::PersonaField) -> ZomeApiResult<()>
    pub fn get_field(persona_address: Address, field_name: String) -> ZomeApiResult<RawString>
  */

  /*
    #profiles
    pub fn register_app(spec: profile::ProfileSpec) -> ZomeApiResult<Address> 
    pub fn get_profiles() -> ZomeApiResult<Vec<profile::Profile>>
    pub fn create_mapping(mapping: profile::ProfileMapping) -> ZomeApiResult<profile::MapFieldsResult> 
    pub fn saved(ui: String, location: String) -> ZomeApiResult<()> 
    pub fn retrieve(retriever_dna: Address, profile_field: String) -> ZomeApiResult<RawString>

    type ProfileMapping {
      retriever_dna: ID!,
      profile_field_name: String,
      persona_address: ID!,
      persona_field_name: String
    }

  */