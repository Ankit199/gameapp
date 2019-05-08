import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentpanelComponent } from './tournamentpanel.component';

describe('TournamentpanelComponent', () => {
  let component: TournamentpanelComponent;
  let fixture: ComponentFixture<TournamentpanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TournamentpanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
