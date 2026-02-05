const API_BASE = process.env.REACT_APP_API_URL || '/api';

export function apiUrl(path) {
  if (!path.startsWith('/')) path = '/' + path;
  return API_BASE + path;
}

export async function apiFetch(path, options) {
  const res = await fetch(apiUrl(path), options);
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`API error ${res.status}: ${text}`);
  }
  return res.json();
}
