export function range(start: number, end: number, x: number): number {
  return Math.min(end, Math.max(start, x));
}

export function getCubicBezier(x1: number, y1: number, x2: number, y2: number) {
  return (t: number) => {
    const oneMinusT = 1 - t;
    const oneMinusTSquared = oneMinusT * oneMinusT; // (1-t)^2
    const oneMinusTCubed = oneMinusTSquared * oneMinusT; // (1-t)^3

    const tSquared = t * t; // t^2
    const tCubed = tSquared * t; // t^3

    // Y(t) = P0y*(1-t)^3 + 3*P1y*t*(1-t)^2 + 3*P2y*t^2*(1-t) + P3y*t^3
    const y =
      0 * oneMinusTCubed +
      3 * y2 * t * oneMinusTSquared +
      3 * y1 * tSquared * oneMinusT +
      1 * tCubed;

    return y;
  };
}

export function mergeTimingFunctions(
  fn1: (t: number) => number,
  fn2: (t: number) => number
): (t: number) => number {
  return (t: number) => {
    if (t < 0.5) {
      return fn1(t * 2) / 2; // Scale down for first half
    }
    return fn2((t - 0.5) * 2) / 2 + 0.5; // Scale down for second half and offset
  };
}

export const eieo = getCubicBezier(0.5, 0.0, 0.5, 1.0);

export const eieo2 = mergeTimingFunctions(eieo, eieo);

export const riro = getCubicBezier(0.0, 0.5, 1.0, 0.5);
