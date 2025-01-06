import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { SuperHero } from '../../models/superhero.model';
import { UpdateDataComponent } from '../update-data/update-data.component';

@Component({
  selector: 'app-table',
  imports: [HttpClientModule, AsyncPipe, CommonModule, UpdateDataComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent {
  http = inject(HttpClient);
  superhero$: Observable<SuperHero[]> = this.getSuperHero();

  private getSuperHero(): Observable<SuperHero[]> {
    return this.http.get<SuperHero[]>('https://localhost:7139/api/SuperHero');
  }

  onDelete(id: number): void {
    this.http.delete(`https://localhost:7139/api/SuperHero/${id}`).subscribe({
      next: () => {
        alert('Item deleted');
        this.superhero$ = this.getSuperHero(); // Refresh the list
      },
      error: (err) => {
        console.error('Error deleting superhero:', err);
        alert('Failed to delete the item.');
      },
    });
  }
}
