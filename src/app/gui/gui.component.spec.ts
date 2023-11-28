import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GUIComponent } from './gui.component';

describe('GUIComponent', () => {
  let component: GUIComponent;
  let fixture: ComponentFixture<GUIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GUIComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
