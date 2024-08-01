import { CommonModule } from '@angular/common';
import { TouristPackages } from '../../../shared/models/touristPackages.model';
import { TouristPackageService } from './../../../shared/services/touristPackages.service';
import { Component, inject, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export default class HomeComponent implements OnInit {

  private touristPackageService = inject(TouristPackageService);

  touristPackages: TouristPackages[] = [];

  getAllPackages() {
    this.touristPackageService.getAllPackages().subscribe(touristPackages => {
      this.touristPackages = touristPackages;
    });
  }

  ngOnInit(): void {
    this.getAllPackages();
    this.setupDropdown();
  }


  setupDropdown(): void {
    const dropdownButton = document.getElementById('dropdownServices');
    const dropdownMenu = document.getElementById('dropdownServicesMenu');
    const servicesLink = document.getElementById('servicesLink');

    if (dropdownButton && dropdownMenu && servicesLink) {
      dropdownButton.addEventListener('click', () => {
        const isOpen = dropdownMenu.classList.toggle('hidden');
        dropdownButton.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      });

      // Cerrar el dropdown si se hace clic fuera de él
      document.addEventListener('click', (event) => {
        if (!servicesLink.contains(event.target as Node) && !dropdownMenu.contains(event.target as Node)) {
          dropdownMenu.classList.add('hidden');
          dropdownButton.setAttribute('aria-expanded', 'false');
        }
      });
    }
  }
}