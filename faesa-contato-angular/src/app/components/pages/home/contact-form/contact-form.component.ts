import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Contato } from 'src/app/Contato';
import { ContatoService } from 'src/app/contato.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  mensagens: Contato[];

  formulario: any;

  constructor (
    private contatoService: ContatoService) {}

  ngOnInit(): void {
    this.formulario = new FormGroup({
        nome: new FormControl(null),
        email: new FormControl(null),
        telefone: new FormControl(null),
        mensagem: new FormControl(null)
    });
  }

  EnviarPorForm() {
    const contato: Contato = this.formulario.value;

    this.contatoService.Create(contato).subscribe((resultado) => {
      alert('Email enviado com sucesso!');
      location.reload();
    });
  }
}
