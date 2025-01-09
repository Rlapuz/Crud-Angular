import { Component } from '@angular/core';
import { TableComponent } from '../../components/table/table.component';
import { AddDataComponent } from '../../components/add-data/add-data.component';
import { SearchComponent } from '../../components/search/search.component';

@Component({
  selector: 'app-home',
  imports: [TableComponent, AddDataComponent, SearchComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
