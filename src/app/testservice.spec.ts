import { Calculator } from "./testService";

describe('Calculator', () => {
  it('should add 2 numbers', () => {
    const service = new Calculator();
    expect(service.add(2, 2)).toBe(0);
  });
  it('should sub 2 numbers', () => {
    const service = new Calculator();
    expect(service.substract(2, 2)).toBe(0);
  });
});