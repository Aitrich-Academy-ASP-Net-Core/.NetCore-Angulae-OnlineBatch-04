import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounterComponent]
    });
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

 it('should start with count 0', () => {
    // Check the initial value
    expect(component.count).toBe(0);
  });

  it('should increment count by 1 when increment() is called', () => {
    // Call the action we want and check result
    component.increment();
    expect(component.count).toBe(1);
  });
});
