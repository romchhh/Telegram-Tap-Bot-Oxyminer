export function calculateLevel(points: number): number {
    if (points < 100) return 1;
    if (points < 500) return 2;
    if (points < 1000) return 3;
    return 4;
  }
  