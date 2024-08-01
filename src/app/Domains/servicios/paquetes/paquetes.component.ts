import { Component, OnInit, inject } from '@angular/core';
import { TouristPackageService } from '../../shared/services/touristPackages.service';
import { TouristPackages } from '../../shared/models/touristPackages.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-paquetes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './paquetes.component.html',
  styleUrl: './paquetes.component.css'
})
export default class PaquetesComponent implements OnInit {

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
