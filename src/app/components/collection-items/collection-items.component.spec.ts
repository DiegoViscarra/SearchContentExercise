import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CollectionItemsComponent } from './collection-items.component';

describe('CollectionItemsComponent', () => {
  let component: CollectionItemsComponent;
  let fixture: ComponentFixture<CollectionItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectionItemsComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should correctly render the passed @Input value artwork', () => {
    component.collection = {
      "artistName" : "Zedd & Alessia Cara", 
      "collectionName" : "Stay - Single", 
      "artworkUrl100" : "https://is2-ssl.mzstatic.com/image/thumb/Music128/v4/de/cb/47/decb473e-b528-079f-f505-46388fa3a02f/source/100x100bb.jpg", 
      "collectionPrice" : 1.29};
    component.initializeComp();
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('img').src).toBe('https://is2-ssl.mzstatic.com/image/thumb/Music128/v4/de/cb/47/decb473e-b528-079f-f505-46388fa3a02f/source/100x100bb.jpg');
    expect(compiled.querySelector('h5').textContent).toBe('Album: Stay - Single');
    expect(compiled.querySelector('p.artist').textContent).toBe('Artist: Zedd & Alessia Cara');
    expect(compiled.querySelector('p.price').textContent).toBe('Price: 1.29 $');
  });

  it('should initialize in empty when the passed @Input is undefined', () => {
    component.collection = undefined;
    component.initializeComp();
    fixture.detectChanges();
    expect(component.artistName).toBe("");
    expect(component.artworkUrl100).toBe("");
    expect(component.collectionName).toBe("");
    expect(component.collectionPrice).toBe(0);;
  });
  
  it('should render the default artwork when none is passed', () => {
    component.collection = {
      "artistName" : "Zedd & Alessia Cara", 
      "collectionName" : "Stay - Single", 
      "artworkUrl100" : "", 
      "collectionPrice" : 1.29};
    component.artworkExists();
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('img').src).toBe('https://km.support.apple.com/kb/image.jsp?productid=PP488&size=240x240');
  });

});
