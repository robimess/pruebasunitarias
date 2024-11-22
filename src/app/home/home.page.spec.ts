import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';
import { HttpClientModule } from '@angular/common/http';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [IonicModule.forRoot(),HttpClientModule]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('deberia sumar dos numeros', () => {
    expect(component.sumar(1, 1)).toBe(2)
  })
  it('debe mostrar error por solo numeros positivos', () => {
    expect(() => component.sumar(-1, 1)).toThrowError('Solo numeros positivos')
  })
  it('debe restar dos numeros',()=>{
    expect(component.restar(1,1)).toBe(0)
  })
  it('debe multiplicar dos numeros',()=>{
    expect(component.multiplicar(1,1)).toBe(1)
  })
  it('debe dividir dos numeros',()=>{
    expect(component.dividir(1,1)).toBe(1)
  })
  it('debe mostrar error division por cero',()=>{
    expect(()=>component.dividir(1,0)).toThrowError('FATAL ERROR: division por cero')
  })
  it('deberia tener el titulo de pagina',()=>{
    expect(component.title).toBe(HomePage.name)
  })
});
