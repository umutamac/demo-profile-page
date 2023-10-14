import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SideNav } from './side-nav';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [SideNav]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(SideNav);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ollang'`, () => {
    const fixture = TestBed.createComponent(SideNav);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('ollang');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(SideNav);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('ollang app is running!');
  });
});
