import { environment } from './../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { Login } from '../dados/login';
import {FormBuilder, FormGroup} from '@angular/forms';
import { post } from 'cypress/types/jquery';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  
  formLogin!: FormGroup;

  constructor(private formBuilder:FormBuilder ) { }

  

  createForm(login: Login){
    this.formLogin = this.formBuilder.group({
      usuario: [login.usuario],
      senha: [login.senha]
    })
  }

  ngOnInit(): void {
    this.createForm(new Login());
  }

   async onSubmit(){
    console.log(this.formLogin.value);
    let response = await fetch(environment.API_PATH+"login", 
    {method:"post", 
    headers:{"content-type": "application/json"}, 
    body: JSON.stringify(this.formLogin.value)});
    //let dados = await response.json();
    console.log(response)
  }
}
