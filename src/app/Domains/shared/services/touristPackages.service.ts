import { Injectable, inject } from '@angular/core';
import { HttpClient,  } from '@angular/common/http';
import { TouristPackages } from '../models/touristPackages.model'

@Injectable({
  providedIn: 'root',

})
export class TouristPackageService {
  
  private http =  inject(HttpClient)
  private apiUrl = 'http://localhost:8080/touristPackage';  
 
  constructor(){}

  getAllPackages() {
    const url = new URL(`${this.apiUrl}/getAll`)
    return this.http.get<TouristPackages[]>(url.toString());
  }
}
