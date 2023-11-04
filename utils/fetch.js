import { removeEmptyValue } from ".";

export function getUrl(path, params = null) {
  const clearedParams = removeEmptyValue(params);
  const url = new URL(path, process.env.NEXT_PUBLIC_API_BASE_URL);
  url.search = new URLSearchParams(clearedParams).toString();
  return url;
}

export async function setResponse(response) {
  let json = undefined;
  try {
    json = await response.json();
  } catch (e) {
    return { data: "Data conversion error", error: true };
  }
  if (!response.ok) {
    return { data: json.error.message, error: true };
  }
  return { data: json, error: false };
}

export function getConnectionRefused(e) {
  return { data: "Connection refused", error: true };
}
