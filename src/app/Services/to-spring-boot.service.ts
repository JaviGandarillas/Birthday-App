import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class BirthdayService {
    private apiUrl = 'http://localhost:8080/birthday';

    constructor(private http: HttpClient) { }

    calculateDaysUntilNextBirthday(birthday: any): Observable<any> {
        return this.http.post<any>(this.apiUrl, birthday);
    }
}

