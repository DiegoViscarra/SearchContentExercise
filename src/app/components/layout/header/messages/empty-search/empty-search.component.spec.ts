import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptySearchComponent } from './empty-search.component';

describe('EmptySearchComponent', () => {
  let component: EmptySearchComponent;
  let fixture: ComponentFixture<EmptySearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmptySearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptySearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the empty search title message in a h4 tag', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h4').textContent).toContain('Search the albums of your favorite artists!!!');
  });

  it('should render the empty search content message in a p tag', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p.content').textContent).toContain('iTunes Search Application is an application so you can find information about artists, it includes:');
  });

  it('should render the empty search information message in a p tag', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p.info').textContent).toContain('All the information is retrieved from the iTunes Search API');
  });

});
