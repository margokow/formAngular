import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutreEnfantComponent } from './autre-enfant.component';

describe('AutreEnfantComponent', () => {
  let component: AutreEnfantComponent;
  let fixture: ComponentFixture<AutreEnfantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutreEnfantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutreEnfantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
