import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TouristPackageService } from '../../../shared/services/touristPackages.service';
import { TouristPackages } from '../../../shared/models/touristPackages.model';

@Component({
  selector: 'app-detalles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalles.component.html',
  styleUrl: './detalles.component.css'
})
export default class DetallesComponent {
  
  private touristPackageService = inject(TouristPackageService);

  touristPackages: TouristPackages[] = [];

  getAllPackages() {
    this.touristPackageService.getAllPackages().subscribe(touristPackages => {
      this.touristPackages = touristPackages;
    });
  }

  ngOnInit(): void {
    this.getAllPackages();
}
}
