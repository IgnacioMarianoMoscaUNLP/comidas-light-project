import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackSelectorBarComponent } from './pack-selector-bar.component';

describe('PackSelectorBarComponent', () => {
  let component: PackSelectorBarComponent;
  let fixture: ComponentFixture<PackSelectorBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PackSelectorBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PackSelectorBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
