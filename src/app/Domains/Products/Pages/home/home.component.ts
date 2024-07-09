import { TouristPackages } from '../../../shared/models/touristPackages.model';
import { TouristPackageService } from './../../../shared/services/touristPackages.service';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export default class HomeComponent implements OnInit {


  private touristPackageService = inject (TouristPackageService)

  touristPackages: TouristPackages [] = []

  getAllPackages(){
    this.touristPackageService.getAllPackages().subscribe(touristPackages => {
      this.touristPackages = touristPackages;
    });
  }

  ngOnInit(this.):  {
    
  }






}
