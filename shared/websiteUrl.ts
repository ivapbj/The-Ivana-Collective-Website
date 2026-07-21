export const WEBSITE_URL_ERROR = "Please enter a valid website, such as yourbusiness.com.";

export function normalizeWebsiteUrl(value: unknown): string | null {
  if (typeof value !== "string") return null;

  const trimmedValue = value.trim();
  if (!trimmedValue) return "";
  if (/\s/.test(trimmedValue)) return null;

  const normalizedValue = /^https?:\/\//i.test(trimmedValue)
    ? trimmedValue
    : `https://${trimmedValue}`;

  try {
    const parsedUrl = new URL(normalizedValue);
    const hostnameLabels = parsedUrl.hostname.split(".");
    const hasValidHostname =
      hostnameLabels.length >= 2 &&
      hostnameLabels.every(
        (label) =>
          label.length > 0 &&
          label.length <= 63 &&
          /^[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i.test(label)
      );

    if (
      !["http:", "https:"].includes(parsedUrl.protocol) ||
      !hasValidHostname ||
      parsedUrl.username ||
      parsedUrl.password
    ) {
      return null;
    }

    return normalizedValue;
  } catch {
    return null;
  }
}
