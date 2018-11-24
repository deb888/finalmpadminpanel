import { CommonindexModule } from './commonindex.module';

describe('CommonindexModule', () => {
  let commonindexModule: CommonindexModule;

  beforeEach(() => {
    commonindexModule = new CommonindexModule();
  });

  it('should create an instance', () => {
    expect(commonindexModule).toBeTruthy();
  });
});
