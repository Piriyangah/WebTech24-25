import { TestBed } from '@angular/core/testing';
import { MembersService } from './members.service';

describe('MemebersService', () => { // umbennen in MembersService
  let service: MembersService; // umbennen in MembersService

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MembersService); // umbennen in MembersService
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
