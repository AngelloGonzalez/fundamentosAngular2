import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadreComponentComponent } from './padre-component.component';

describe('PadreComponentComponent', () => {
  let component: PadreComponentComponent;
  let fixture: ComponentFixture<PadreComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PadreComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PadreComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
