import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableFromServiceComponent } from './table-from-service.component';

describe('TableFromServiceComponent', () => {
  let component: TableFromServiceComponent;
  let fixture: ComponentFixture<TableFromServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableFromServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableFromServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
