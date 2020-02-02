import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewLocationsPage } from './new-locations.page';

describe('NewLocationsPage', () => {
  let component: NewLocationsPage;
  let fixture: ComponentFixture<NewLocationsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewLocationsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewLocationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
