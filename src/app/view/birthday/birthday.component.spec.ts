/*import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BirthdayComponent } from './birthday.component';
import { BirthdayService } from 'src/app/Services/to-spring-boot.service';
import { of } from 'rxjs';

describe('BirthdayComponent', () => {
    let component: BirthdayComponent;
    let fixture: ComponentFixture<BirthdayComponent>;
    let birthdayService: BirthdayService;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [BirthdayComponent],
            imports: [FormsModule, ReactiveFormsModule],
            providers: [
                {
                    provide: BirthdayService,
                    useValue: {
                        calculateDaysUntilNextBirthday: jest.fn().mockReturnValue(of(0))
                    }
                }
            ]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(BirthdayComponent);
        component = fixture.componentInstance;
        birthdayService = TestBed.inject(BirthdayService);
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should display error message when form is invalid', () => {
        component.userForm.setValue({
            userName: '',
            userDate: ''
        });

        component.sendForm();

        expect(component.errorMessage).toBe('Por favor, rellena todos los campos para continuar');
    });

    it("should display happy birthday message when today is the user's birthday", () => {
        const today = new Date().toISOString().split('T')[0];
        component.userForm.setValue({
            userName: 'John',
            userDate: today
        });

        component.sendForm();

        expect(component.errorMessage).toBe('¡Felicidades! Hoy sí es tu cumpleaños :D');
    });

    it("should display days until next birthday message when today is not the user's birthday", () => {
        component.userForm.setValue({
            userName: 'John',
            userDate: '2024-01-01'
        });

        component.sendForm();

        expect(component.errorMessage).toBe('¡Feliz no cumpleaños, John! Faltan 365 días para tu cumpleaños :)');
    });
});
*/