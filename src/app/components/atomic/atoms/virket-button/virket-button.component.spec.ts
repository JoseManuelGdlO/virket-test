import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VirketButtonComponent } from './virket-button.component';

describe('VirketButtonComponent', () => {
  let component: VirketButtonComponent;
  let fixture: ComponentFixture<VirketButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VirketButtonComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VirketButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
