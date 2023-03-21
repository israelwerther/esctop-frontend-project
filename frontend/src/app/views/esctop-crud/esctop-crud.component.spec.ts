import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsctopCrudComponent } from './esctop-crud.component';

describe('EsctopCrudComponent', () => {
  let component: EsctopCrudComponent;
  let fixture: ComponentFixture<EsctopCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EsctopCrudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EsctopCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
