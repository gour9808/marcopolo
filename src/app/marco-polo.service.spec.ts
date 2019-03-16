import { TestBed } from '@angular/core/testing';

import { MarcoPoloService } from './marco-polo.service';

describe('MarcoPoloService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should return MarcoPolo Message ', () => {
    const service: MarcoPoloService = TestBed.get(MarcoPoloService);
    expect(service.marcoPoloFunc(30)).toEqual('1,2,3,marco,5,6,polo,marco,9,10,11,marco,13,polo,15,marco,17,18,19,marco,polo,22,23,marco,25,26,27,marcopolo,29,30');
  });
});
