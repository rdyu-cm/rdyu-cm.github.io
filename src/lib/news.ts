export const sortNewsDescending = <T extends { date: Date }>(
  items: readonly T[],
) => [...items].sort((a, b) => b.date.getTime() - a.date.getTime());
