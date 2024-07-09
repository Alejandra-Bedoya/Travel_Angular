import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TouristPackages } from '../models/touristPackages.model'

@Injectable({
  providedIn: 'root',

})
export class TouristPackageService {
  constructor(private http: HttpClient) {}
  
  private apiUrl = 'http://localhost:8080/touristPackage';  // URL del endpoint de tu API
 

  getAllPackages() {
    const url = new URL(`${this.apiUrl}/getAll`)
    return this.http.get<TouristPackages[]>(url.toString());
  }
}
