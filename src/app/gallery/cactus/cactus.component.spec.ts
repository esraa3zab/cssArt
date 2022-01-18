import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CactusComponent } from './cactus.component';

describe('CactusComponent', () => {
  let component: CactusComponent;
  let fixture: ComponentFixture<CactusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CactusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CactusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
