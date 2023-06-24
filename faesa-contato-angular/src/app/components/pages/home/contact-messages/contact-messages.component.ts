import { Component, OnInit } from '@angular/core';
import { Contato } from 'src/app/Contato';
import { ContatoService } from 'src/app/contato.service';

@Component({
  selector: 'app-contact-messages',
  templateUrl: './contact-messages.component.html',
  styleUrls: ['./contact-messages.component.css']
})
export class ContactMessagesComponent implements OnInit {
    
    mensagens: Contato[];
  
    constructor(private contatoService: ContatoService) {}

    ngOnInit(): void {
      this.contatoService.GetAll().subscribe(resultado => {
        this.mensagens = resultado
      });
    }
}
