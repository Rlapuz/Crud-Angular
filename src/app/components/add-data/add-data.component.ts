import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormsModule,
  ReactiveFormsModule,
  FormControl,
} from '@angular/forms';
import { SuperHero } from '../../../models/superhero.model';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-data',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css'],
})
export class AddDataComponent {
  http = inject(HttpClient);

  superForm = new FormGroup({
    name: new FormControl<string>('', Validators.required),
    firstName: new FormControl<string>('', Validators.required),
    lastName: new FormControl<string>('', Validators.required),
    place: new FormControl<string>('', Validators.required),
  });

  superhero$ = this.getSuperHero();

  private getSuperHero(): Observable<SuperHero[]> {
    return this.http.get<SuperHero[]>('https://localhost:7139/api/SuperHero');
  }
  onFormSubmit() {
    if (this.superForm.invalid) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please fill out all required fields.',
      });
      return;
    }

    const addSuperHero = {
      name: this.superForm.value.name,
      firstName: this.superForm.value.firstName,
      lastName: this.superForm.value.lastName,
      place: this.superForm.value.place,
    };

    this.http
      .post('https://localhost:7139/api/SuperHero', addSuperHero)
      .subscribe({
        next: (value) => {
          Swal.fire({
            title: 'Added successfully!',
            icon: 'success',
            draggable: true,
          });

          this.superhero$ = this.getSuperHero();
          this.superForm.reset();
          this.closeModal();
        },
        error: (err) => {
          console.error('Error adding data', err);
          Swal.fire({
            title: 'Error adding data',
            icon: 'error',
            text: err.message || 'Something went wrong.',
          });
        },
      });
  }

  closeModal() {
    const modal = document.getElementById('hi');
    if (modal) {
      modal.click();
    }
  }
}
