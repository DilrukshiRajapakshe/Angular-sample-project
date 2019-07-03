import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuColComponent } from './menu-col.component';

describe('MenuColComponent', () => {
  let component: MenuColComponent;
  let fixture: ComponentFixture<MenuColComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuColComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuColComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
