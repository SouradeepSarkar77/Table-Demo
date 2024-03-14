import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineEditingTwoComponent } from './inline-editing-two.component';

describe('InlineEditingTwoComponent', () => {
  let component: InlineEditingTwoComponent;
  let fixture: ComponentFixture<InlineEditingTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InlineEditingTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InlineEditingTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
