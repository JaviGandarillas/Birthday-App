import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ModalComponent } from '../modal/modal.component';
import { BirthdayService } from 'src/app/Services/to-spring-boot.service';
import { BirthdayData } from 'src/app/Interface/interace';

@Component({
  selector: 'app-birthday',
  templateUrl: './birthday.component.html',
  styleUrls: ['./birthday.component.css']
})
export class BirthdayComponent {
  @ViewChild('modal') modal!: ModalComponent;
  userForm: FormGroup;

  constructor(private fb: FormBuilder, private consumirApi: BirthdayService) {
    this.userForm = fb.group({
      userName: [''],
      userDate: ['']
    });
  }
  errorMessage: string = '';

  sendForm() {
    let formData: BirthdayData = {
      userName: this.userForm.value.userName,
      userDate: this.userForm.value.userDate
    };

    if (!formData.userName || !formData.userDate || isNaN(new Date(formData.userDate).getTime())) {
      this.errorMessage = 'Por favor, rellena todos los campos para continuar';
      this.modal.openModal();
    } else {
      const isoDateString = new Date(formData.userDate).toISOString().split('T')[0];
      const birthday = {
        date: isoDateString,
      };

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
