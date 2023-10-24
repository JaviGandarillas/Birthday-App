//==========================Servicio
/* 
 * Este servicio se encarga de realizar peticiones HTTP para calcular los días restantes
 * hasta el próximo cumpleaños a partir de una fecha de cumpleaños proporcionada.
 */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class BirthdayService {
    private apiUrl = 'http://localhost:8080/birthday';

    constructor(private http: HttpClient) { }

    calculateDaysUntilNextBirthday(birthday: {}): Observable<any> {
        return this.http.post<any>(this.apiUrl, birthday);
    }
}

