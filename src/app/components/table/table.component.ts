import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { SuperHero } from '../../../models/superhero.model';
import Swal from 'sweetalert2';
import { UpdateDataComponent } from '../updateData/updateData.component';

@Component({
  selector: 'app-table',
  imports: [HttpClientModule, AsyncPipe, CommonModule, UpdateDataComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent {
  nino: string = 'images/nino.jpg';

  http = inject(HttpClient);
  superhero$: Observable<SuperHero[]> = this.getSuperHero();

  private getSuperHero(): Observable<SuperHero[]> {
    return this.http.get<SuperHero[]>('https://localhost:7139/api/SuperHero');
  }

  onDelete(id: number): void {
    Swal.fire({
      title: 'Do you want to delete the file?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Yes',
      denyButtonText: `Don't delete`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.http
          .delete(`https://localhost:7139/api/SuperHero/${id}`)
          .subscribe({
            next: () => {
              Swal.fire('Deleted!', '', 'success');
              this.superhero$ = this.getSuperHero();
            },
            error: (err) => {
              console.error('Error deleting superhero:', err);
              alert('Failed to delete the item.');
            },
          });
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info');
      }
    });
  }
}
