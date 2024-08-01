import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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


