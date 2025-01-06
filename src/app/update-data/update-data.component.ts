import { Component } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-update-data',
  imports: [],
  templateUrl: './update-data.component.html',
  styleUrl: './update-data.component.css',
})
export class UpdateDataComponent {
  ngOnInit(): void {
    initFlowbite();
  }
}
