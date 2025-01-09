import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { SuperHero } from '../models/superhero.model';
import { AsyncPipe } from '@angular/common';
import { initFlowbite } from 'flowbite';
import { tap } from 'rxjs';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TableComponent } from './components/table/table.component';
import { AddDataComponent } from './components/add-data/add-data.component';
import { UpdateDataComponent } from './components/updateData/updateData.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent],
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
