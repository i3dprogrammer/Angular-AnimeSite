import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentEpisdoesComponent } from './recent-episdoes.component';

describe('RecentEpisdoesComponent', () => {
  let component: RecentEpisdoesComponent;
  let fixture: ComponentFixture<RecentEpisdoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentEpisdoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentEpisdoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
