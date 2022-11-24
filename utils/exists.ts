// checks if a given value from the api exists
export const exists = (value: string | null | undefined): string => {
  if (value === null || value === undefined) return "Not provided";

  return value;
};
