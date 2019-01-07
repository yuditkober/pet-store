import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Pet } from '../models/pet';
import 'rxjs/add/operator/map';

@Injectable()
export class PetService {

  constructor(private http: HttpClient) { }

  petServiceLocal = 'http://localhost:9999/pet-services/apis/v1/pets';
  petServiceCloud = 'https://steve-pet-services.cfapps.io/pet-services/apis/v1/pets';
  petServiceUrl = this.petServiceLocal;

  getPets(): Observable<Pet[]> {
    return this.http.get<Pet[]>(this.petServiceUrl).map((value, index) => {
      return value.map((data) => {
        data.cardTitle = `${data.name} is ${data.status}`;
        data.ctaText = `View ${data.name}\'s details`;
        data.ctaLink = `view/${data.id}`;
        return new Pet(data);
      });
    });
  }

  getPet(id): Observable<Pet> {
    const petUrl = `${this.petServiceUrl}/${id}`;
    return this.http.get<Pet>(petUrl).map((data) => {
      const re = /b.jpg/;
      data.photoUrl = data.photoUrl.replace(re, 'h.jpg');
      data.cardTitle = `Isn\'t ${data.name} adorable!`;
      data.ctaText = `Adopt this ${data.category}`;
      data.ctaLink = `adopt/${data.id}`;
      return new Pet(data);
    });
  }

  deletePet(id): Observable<Pet> {
    const petUrl = `${this.petServiceUrl}/${id}`;
    return this.http.delete<Pet>(petUrl).map((data) => {
      data.cardTitle = `${data.name}  is now yours!`;
      data.ctaText = 'Adopt another! :)';
      data.ctaLink = '/';
      return new Pet(data);
    });
  }

  createPet(petData): Observable<Pet> {
    return this.http.post<Pet>(this.petServiceUrl, petData).map((data) => {
      return new Pet(data);
    });
  }

}
