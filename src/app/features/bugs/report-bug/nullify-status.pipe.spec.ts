import { NullifyStatusPipe } from './nullify-status.pipe';

describe('NullifyStatusPipe', () => {
  it('create an instance', () => {
    const pipe = new NullifyStatusPipe();
    expect(pipe).toBeTruthy();
  });
});
