import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, PLATFORM_ID } from '@angular/core';
import { NoSsrComponent, NoSsrPlaceholderDirective } from 'angular-no-ssr';

@Component({
  template: `
    <no-ssr>
      <div id="data">display value</div>
      <ssr-placeholder>
        <div id="placeholder">loading</div>
      </ssr-placeholder>
    </no-ssr>
  `,
  imports: [NoSsrComponent, NoSsrPlaceholderDirective],
})
class NoSsrTestComponent { }

describe('NoSsrComponent - browser mode', () => {
  let component: NoSsrTestComponent;
  let fixture: ComponentFixture<NoSsrTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: []
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoSsrTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("On browser mode, I have data component and I don't have placeholder component", () => {

    const data = fixture.nativeElement.querySelector('#data');
    expect(data).not.toBeNull();
    expect(data.textContent).toBe('display value');

    const placeholder = fixture.nativeElement.querySelector('#placeholder');
    expect(placeholder).toBeNull();
  });
});

describe('NoSsrComponent - server mode', () => {
  let component: NoSsrTestComponent;
  let fixture: ComponentFixture<NoSsrTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [],
      providers: [{ provide: PLATFORM_ID, useValue: 'server' }]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoSsrTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("On server mode, I don't have data component and I have placeholder component", () => {

    const data = fixture.nativeElement.querySelector('#data');
    expect(data).toBeNull();

    const placeholder = fixture.nativeElement.querySelector('#placeholder');
    expect(placeholder).not.toBeNull();
    expect(placeholder.textContent).toBe('loading');
  });
});
