import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyUserDetailsComponent } from './my-user-details.component';

describe('MyUserDetailsComponent', () => {
  let component: MyUserDetailsComponent;
  let fixture: ComponentFixture<MyUserDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyUserDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyUserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
