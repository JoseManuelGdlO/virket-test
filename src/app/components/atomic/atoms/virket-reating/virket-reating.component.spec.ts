import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VirketReatingComponent } from './virket-reating.component';

describe('VirketReatingComponent', () => {
  let component: VirketReatingComponent;
  let fixture: ComponentFixture<VirketReatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VirketReatingComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VirketReatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
