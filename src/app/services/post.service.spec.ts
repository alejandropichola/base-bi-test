import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { PostService } from './post.service';
import { PostsDummy, ToUpperCase } from './dummyFunction';
import { TestBed } from '@angular/core/testing';

describe('Testing post service', () => {
  let service: PostService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    })

    service = TestBed.inject(PostService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('Should return word in toUpperCase', () => {
    expect(ToUpperCase('Prueba')).toBe('PRUEBA');
  });

  it('Should return empty', () => {
    expect(ToUpperCase(null)).toBe('');
  });

  it('Should call getPosts and return an Array of posts', () => {
    service.getPosts().subscribe((res) => {
      expect(res).toEqual(PostsDummy);
    });

    const req = httpController.expectOne({
      method: 'GET',
      url: 'https://jsonplaceholder.typicode.com/posts',
    })

    req.flush(PostsDummy);
  })
});
