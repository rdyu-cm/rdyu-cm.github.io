import { describe, expect, test } from "vitest";

import { profile } from "../src/data/profile";
import { authorListHtml, isOwnerAuthor } from "../src/lib/authors";
import { contactLinkLabel } from "../src/lib/contact";

describe("isOwnerAuthor", () => {
  test("matches configured spellings ignoring case, periods, and spacing", () => {
    const names = ["Ryan D. Yu", "Ryan Yu"];

    expect(isOwnerAuthor("Ryan D. Yu", names)).toBe(true);
    expect(isOwnerAuthor("ryan d yu", names)).toBe(true);
    expect(isOwnerAuthor("  Ryan   Yu ", names)).toBe(true);
    expect(isOwnerAuthor("Ryan Yuan", names)).toBe(false);
    expect(isOwnerAuthor("Amy-Doan P. Vo", names)).toBe(false);
  });

  test("covers the name as it appears on the published article", () => {
    expect(isOwnerAuthor("Ryan D. Yu", profile.authorNames)).toBe(true);
  });
});

describe("authorListHtml", () => {
  test("bolds only the owner and joins authors with commas", () => {
    const authors = ["Ryan D. Yu", "Amy-Doan P. Vo"];
    const html = authorListHtml(authors, ["Ryan D. Yu"]);

    expect(html).toBe("<strong>Ryan D. Yu</strong>, Amy-Doan P. Vo");
  });

  test("escapes markup in author names", () => {
    expect(authorListHtml(["A <b>&</b> B"], [])).toBe(
      "A &lt;b&gt;&amp;&lt;/b&gt; B",
    );
  });
});

describe("contactLinkLabel", () => {
  test("reads naturally for email, profiles, and a CV", () => {
    expect(contactLinkLabel("Email", "Ryan Yu")).toBe("Email Ryan Yu");
    expect(contactLinkLabel("Google Scholar", "Ryan Yu")).toBe(
      "Ryan Yu on Google Scholar",
    );
    expect(contactLinkLabel("CV", "Ryan Yu")).toBe("Ryan Yu’s CV");
  });
});
