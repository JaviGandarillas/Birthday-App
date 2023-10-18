import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ModalComponent } from '../modal/modal.component';
import { BirthdayService } from 'src/app/Services/to-spring-boot.service';

@Component({
  selector: 'app-birthday',
  templateUrl: './birthday.component.html',
  styleUrls: ['./birthday.component.css']
})
export class BirthdayComponent {
  @ViewChild('modal') modal!: ModalComponent;
  userForm: FormGroup;

  constructor(private fb: FormBuilder, private consumirApi: BirthdayService,) {
    this.userForm = fb.group({
      userName: [''],
      userDate: ['']
    });
  }
  errorMessage: string = '';

  sendForm() {
    let currentUserName = this.userForm.value.userName;
    let currentUserDate = new Date(this.userForm.value.userDate);
    const isoDateString = currentUserDate.toISOString().split('T')[0];
    console.log(isoDateString, 1);

    if (currentUserName === '' || currentUserDate === null) {
      this.errorMessage = 'Por favor, rellena todos los campos para continuar';
      this.modal.openModal();
    } else {
      const birthday = {
        date: isoDateString,
      };
      console.log(birthday)
      this.consumirApi.calculateDaysUntilNextBirthday(birthday).subscribe(
        (response) => {
          if(response === 0){
            this.errorMessage = '¡Felicidades! Hoy sí es tu cumpleaños :D';
            this.modal.openModal();
          } else {
          this.errorMessage = '¡Feliz no cumpleaños, ' + currentUserName + '! ' + 'Faltan ' + response + ' días para tu cumpleaños :)';
          this.modal.openModal();
          console.log(response)
        }
        },
        (error) => {
          console.error(error);
        }
        
      );
    }
  }
}

