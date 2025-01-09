import { Component, inject } from '@angular/core';
import { initFlowbite } from 'flowbite';
import Swal from 'sweetalert2';
import { SuperHero } from '../../../models/superhero.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  FormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-updateData',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './updateData.component.html',
  styleUrl: './updateData.component.css',
})
export class UpdateDataComponent {
  ngOnInit(): void {
    initFlowbite();
  }

  http = inject(HttpClient);

  private getSuperHero(): Observable<SuperHero[]> {
    return this.http.get<SuperHero[]>('https://localhost:7139/api/SuperHero');
  }

  updateForm = new FormGroup({
    name: new FormControl<string>(''),
    firstName: new FormControl<string>(''),
    lastName: new FormControl<string>(''),
    place: new FormControl<string>(''),
  });

  superhero$ = this.getSuperHero();

  updateData(id: number) {
    console.log(this.updateForm.value);
  }
}
