import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeatilsComponent } from './deatils.component';

describe('DeatilsComponent', () => {
  let component: DeatilsComponent;
  let fixture: ComponentFixture<DeatilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeatilsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeatilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
