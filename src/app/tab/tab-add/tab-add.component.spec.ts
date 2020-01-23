import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabEditComponent } from './tab-add.component';

describe('TabEditComponent', () => {
  let component: TabEditComponent;
  let fixture: ComponentFixture<TabEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
