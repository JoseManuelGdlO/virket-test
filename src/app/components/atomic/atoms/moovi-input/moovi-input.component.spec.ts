import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MooviInputComponent } from './moovi-input.component';

describe('MooviInputComponent', () => {
  let component: MooviInputComponent;
  let fixture: ComponentFixture<MooviInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MooviInputComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MooviInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
