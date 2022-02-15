import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoyaComponent } from './pedidoya.component';

describe('PedidoyaComponent', () => {
  let component: PedidoyaComponent;
  let fixture: ComponentFixture<PedidoyaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedidoyaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidoyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
