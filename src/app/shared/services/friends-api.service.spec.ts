import { TestBed } from '@angular/core/testing';
import { FriendsApiService } from './friends-api.service';

describe('FriendsService', () => {
  let service: FriendsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({providers: [FriendsApiService]});
    service = TestBed.inject(FriendsApiService);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });

  describe('list', () => {

    it('should generate 150 fake friends', async () => {
      const result = await service.list().toPromise();
      expect(result).toHaveLength(150);
    });
  });
});
