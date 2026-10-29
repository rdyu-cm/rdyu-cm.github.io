import { describe, expect, test } from "vitest";

import { news } from "../src/data/news";
import { formatBehavioralDate } from "../src/lib/dates";
import { sortNewsDescending } from "../src/lib/news";

describe("sortNewsDescending", () => {
  test("orders items newest first without mutating its input", () => {
    const items = [
      { id: "older", date: new Date("2024-12-01T00:00:00.000Z") },
      { id: "newer", date: new Date("2026-06-01T00:00:00.000Z") },
      { id: "middle", date: new Date("2026-01-01T00:00:00.000Z") },
    ];
    const before = items.map((item) => item.id);

    expect(sortNewsDescending(items).map((item) => item.id)).toEqual([
      "newer",
      "middle",
      "older",
    ]);
    expect(items.map((item) => item.id)).toEqual(before);
  });
});

describe("seeded news", () => {
  test("renders short month-year labels newest first", () => {
    expect(
      sortNewsDescending(news).map(
        (item) =>
          formatBehavioralDate(item.date, item.datePrecision, "short").visible,
      ),
    ).toEqual(["Jun 2026", "2026", "Dec 2024"]);
  });
});
