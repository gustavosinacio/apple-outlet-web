export function roundToTwo(number: number) {
  return Math.round(number * 100 + Number.EPSILON) / 100;
}
