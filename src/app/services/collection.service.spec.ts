import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { CollectionService } from './collection.service';

describe('CollectionService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule
    ],
    providers: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: CollectionService = TestBed.get(CollectionService);
    expect(service).toBeTruthy();
  });

});
