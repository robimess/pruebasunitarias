import { TestBed } from '@angular/core/testing';

import { PeliculasService } from './peliculas.service';
import { HttpClient, HttpContext } from '@angular/common/http';
import { mockPeliculas } from '../mocks/policulas.mock';
import { of } from 'rxjs';

describe('PeliculasService', () => {
  let service: PeliculasService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new PeliculasService(httpClientSpy)
    TestBed.configureTestingModule({});
    /* service = TestBed.inject(PeliculasService); */
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('obtiene dramas', () => {
    httpClientSpy.get.and.returnValue(of(mockPeliculas));
    service.obtenerDramas().subscribe({
      next: (response) => {
        expect(response).toEqual(mockPeliculas);
        expect(httpClientSpy.get.calls.count()).toBe(1);
        expect(httpClientSpy.get.calls.first().args[0]).toBe('https://api.sampleapis.com/movies/drama')
      }
    })
  })
  it('obtener comedias',()=>{
    httpClientSpy.get.and.returnValue(of(mockPeliculas));
    service.obtenerComedias().subscribe({
      next:(res) =>{
        expect(res).toEqual(mockPeliculas);
        expect(httpClientSpy.get.calls.count()).toBe(1);
        expect(httpClientSpy.get.calls.first().args[0]).toBe('https://api.sampleapis.com/movies/comedy')
      }
    })
  })
});
