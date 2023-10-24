import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ModalComponent } from '../modal/modal.component';
import { BirthdayService } from 'src/app/Services/to-spring-boot.service';
import { BirthdayData } from 'src/app/Interface/interace';

@Component({
  selector: 'app-birthday',
  templateUrl: './birthday.component.html',
  styleUrls: ['./birthday.component.css']
})
export class BirthdayComponent implements OnInit {
  // Referencia al componente modal utilizado para mostrar mensajes
  @ViewChild('modal') modal!: ModalComponent;

  // Formulario para recopilar información del usuario
  userForm: FormGroup;

  constructor(private fb: FormBuilder, private consumirApi: BirthdayService) {
    // Inicialización del formulario con los campos userName y userDate
    this.userForm = fb.group({
      userName: [''],
      userDate: ['']
    });
  }

  // Mensaje de error para mostrar en el modal
  errorMessage: string = '';

  ngOnInit() {
    // Método de inicialización del componente
  }

  // Método invocado al enviar el formulario
  sendForm() {
    // Obtiene los valores del formulario
    let formData: BirthdayData = {
      userName: this.userForm.value.userName,
      userDate: this.userForm.value.userDate
    };

    // Validación de campos y fecha
    if (!formData.userName || !formData.userDate || isNaN(new Date(formData.userDate).getTime())) {
      this.errorMessage = 'Por favor, rellena todos los campos para continuar';
      this.modal.openModal();
    } else {
      // Transforma la fecha en formato ISO
      const isoDateString = new Date(formData.userDate).toISOString().split('T')[0];
      const birthday = {
        date: isoDateString,
      };

      // Llama al servicio para calcular los días hasta el próximo cumpleaños
      this.consumirApi.calculateDaysUntilNextBirthday(birthday).subscribe(
        (response) => {
          if (response === 0) {
            this.errorMessage = '¡Felicidades! Hoy sí es tu cumpleaños :D';
            this.modal.openModal();
          } else {
            this.errorMessage = '¡Feliz no cumpleaños, ' + formData.userName + '! ' + 'Faltan ' + response + ' días para tu cumpleaños :)';
            this.modal.openModal();
          }
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }
}
