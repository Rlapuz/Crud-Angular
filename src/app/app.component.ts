import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { SuperHero } from '../models/superhero.model';
import { AsyncPipe } from '@angular/common';
import { initFlowbite } from 'flowbite';
import { tap } from 'rxjs';
import { NavbarComponent } from './navbar/navbar.component';
import { TableComponent } from './table/table.component';
import { AddDataComponent } from './add-data/add-data.component';
import { UpdateDataComponent } from './update-data/update-data.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    TableComponent,
    AddDataComponent,
    UpdateDataComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Lazshopda';

  kapnino = 'images/kapnino.jpg';

  ngOnInit(): void {
    initFlowbite();
  }
}
