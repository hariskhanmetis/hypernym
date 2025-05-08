import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GoogleMapsService {
  apiLoaded = false;

  constructor() {
    this.loadGoogleMapsAPI();
  }

  loadGoogleMapsAPI(): void {
    if (!this.apiLoaded) {
      const script = document.createElement('script');
      script.src = environment.googleMapsApiKey; 
      script.async = true;
      script.defer = true;
      script.onload = () => {
        this.apiLoaded = true;
        console.log('Google Maps API loaded');
      };
      document.body.appendChild(script);
    }
  }

  getDefaultMapOptions(): google.maps.MapOptions {
    return {
      mapTypeId: 'roadmap',
      disableDefaultUI: true,
      mapTypeControl: false,
      streetViewControl: false,
      rotateControl: false,
      scaleControl: false,
      fullscreenControl: false,
      zoomControl: false,
      styles: [
        {
          featureType: 'all',
          elementType: 'all',
          stylers: [{ lightness: -5 }],
        },
      ],
    };
  }
}