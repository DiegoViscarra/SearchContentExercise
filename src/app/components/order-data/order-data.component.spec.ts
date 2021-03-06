import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDataComponent } from './order-data.component';

describe('OrderDataComponent', () => {
  let component: OrderDataComponent;
  let fixture: ComponentFixture<OrderDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should correctly @Output value Ascendant of option A-Z checked in component', () => {
    spyOn(component.optionToOrder, 'emit');
    const radioCheck = fixture.nativeElement.querySelector('div.asc > input');
    radioCheck.dispatchEvent(new Event("click"));
    fixture.detectChanges();
    expect(component.optionToOrder.emit).toHaveBeenCalledWith('Ascendant');
  });

  it('should correctly @Output value Descendant of option A-Z checked in component', () => {
    spyOn(component.optionToOrder, 'emit');
    const radioCheck = fixture.nativeElement.querySelector('div.desc > input');
    radioCheck.dispatchEvent(new Event("click"));
    fixture.detectChanges();
    expect(component.optionToOrder.emit).toHaveBeenCalledWith('Descendant');
  });

});
