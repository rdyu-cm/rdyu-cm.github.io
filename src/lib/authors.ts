const normalizeName = (name: string) =>
  name.toLowerCase().replace(/\./g, "").replace(/\s+/g, " ").trim();

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

export const isOwnerAuthor = (
  author: string,
  ownerNames: readonly string[],
) => {
  const normalized = normalizeName(author);
  return ownerNames.some((name) => normalizeName(name) === normalized);
};

const formatAuthor = (author: string, ownerNames: readonly string[]) =>
  isOwnerAuthor(author, ownerNames)
    ? `<strong>${escapeHtml(author)}</strong>`
    : escapeHtml(author);

// Rendered through set:html so the separators stay byte-exact regardless of
// how the template is formatted.
export const authorListHtml = (
  authors: readonly string[],
  ownerNames: readonly string[],
) => authors.map((author) => formatAuthor(author, ownerNames)).join(", ");
