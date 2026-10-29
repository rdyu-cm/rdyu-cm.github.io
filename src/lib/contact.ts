export const contactLinkLabel = (label: string, ownerName: string) => {
  if (label === "Email") return `Email ${ownerName}`;
  if (label === "CV") return `${ownerName}’s CV`;
  return `${ownerName} on ${label}`;
};
