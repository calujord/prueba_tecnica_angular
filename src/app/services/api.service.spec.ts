import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ApiService } from './api.service';
import { of } from 'rxjs';
import { People } from '../interfaces/addressInfo';
import { mock_data } from '../components/datatable/mock-data';

describe('ApiService', () => {
  let service: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService],
    });
    service = TestBed.inject(ApiService);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('should call the API', () => {
    const spy = spyOn(service, 'getData').and.returnValue(of(mock_data));
    service.getData().subscribe((data) => {
      expect(data).toEqual(mock_data);
    });
    expect(spy).toHaveBeenCalledOnceWith();
  });
});
