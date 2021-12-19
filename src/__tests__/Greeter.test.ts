import { HelloWorld } from '../index';

test('Must say hello', () => {
  expect(HelloWorld('Simple Mask')).toBe('Hello World Simple Mask');
});