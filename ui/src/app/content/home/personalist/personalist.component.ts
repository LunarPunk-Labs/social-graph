import { Component, OnInit } from "@angular/core";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from "@angular/router";
import { AllPersonasGQL, Persona } from 'src/app/graphql/actions/all-personas-gql';

@Component({
  selector: "app-personalist",
  templateUrl: "./personalist.component.html",
  styleUrls: ["./personalist.component.css"]
})
export class PersonaListComponent implements OnInit {
  //user: User;
  //userlist: Observable<User[]>;
  //persona: Persona;
  personalist: Observable<Persona[]>;
  errorMessage:string

  constructor(private agents: AllPersonasGQL,  private router: Router) {
  }

  ngOnInit() {
    try {
      this.personalist = this.agents.watch().valueChanges.pipe(map(result=>{
        if (!result.errors)
        console.log(result)
          return result.data.allPersonas.map(persona => <Persona>{ id:persona.id, name:persona.name, fields:persona.fields }) //  new User(persona.id,persona.name))
        this.errorMessage = result.errors[0].message
        return null
      }))
    } catch(exception){
        this.errorMessage = exception
    }
  }

}
