import { TestBed, ComponentFixture } from '@angular/core/testing';
import { PostComponent } from './post.component';

describe('Test PostComponent', () => {
  let component: PostComponent;
  let fixture: ComponentFixture<PostComponent>;

  beforeAll(async() => {
    TestBed.configureTestingModule({
      declarations: [PostComponent],
    });
    fixture = TestBed.createComponent(PostComponent);
  });

  it('Should create component', () => {
    expect(fixture.componentInstance).toBeDefined();
  });

  it('Should have title', () => {
    expect(fixture.componentInstance.title).toContain('Test');
  });

  it('Should generate component with snapshot', () => {
    expect(fixture).toMatchSnapshot();
  });
});
