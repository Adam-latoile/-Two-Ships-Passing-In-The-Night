import { randFloatSpread, mapLinear, lerp } from '../src/math.js';
test('test name', () => {
  expect(randFloatSpread(1)).toBeLessThanOrEqual(1);
  expect(randFloatSpread(1)).toBeGreaterThanOrEqual(-1);
  expect(mapLinear(1, 2, 3, 4, 5)).toBe(3);
  expect(mapLinear(1, 20, 3, 40, 5)).toBeCloseTo(0.882352941176471);
  expect(lerp(1, 3, 20)).toBe(41);
  expect(lerp(1.3, -7, 2)).toBeCloseTo(-15.3);
});

test('Unitaires', () => {
  expect(lerp(10, 30, 0.25)).toBe(15);
  expect(lerp(-20, 20, 0.5)).toBe(0);
  expect(mapLinear(50, 0, 100, 0, 1000)).toBe(500);
  expect(mapLinear(1, 0, 1, 10, 0)).toBe(0);
  const val = randFloatSpread(100);
  expect(val).toBeLessThanOrEqual(50);
  expect(val).toBeGreaterThanOrEqual(-50);
});

test('Fonctionnels', () => {
  const r1 = randFloatSpread(10);
  const r2 = randFloatSpread(10);
  expect(r1).not.toBe(r2);
  expect(lerp(10, 50, 0)).toBe(10);
  expect(lerp(10, 50, 1)).toBe(50);
});
