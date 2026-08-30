/**
 * NASA Astronomy Picture of the Day service.
 *
 * The key is read from an env var so it can be swapped for a private key later
 * without touching the UI. NASA's DEMO_KEY is a public, rate-limited fallback.
 */
export interface ApodResponse {
  title: string;
  date: string;
  explanation: string;
  media_type: "image" | "video" | string;
  url?: string;
  hdurl?: string;
  thumbnail_url?: string;
  copyright?: string;
  service_version?: string;
}

const API_KEY = (import.meta.env["VITE_NASA_API_KEY"] as string | undefined) ?? "DEMO_KEY";
const ENDPOINT = "https://api.nasa.gov/planetary/apod";

export async function fetchApod(date?: string): Promise<ApodResponse> {
  const params = new URLSearchParams({ api_key: API_KEY, thumbs: "true" });
  if (date) params.set("date", date);

  const res = await fetch(`${ENDPOINT}?${params.toString()}`);

  if (res.status === 429) {
    throw new Error("NASA's API is rate-limited right now. Please try again shortly.");
  }
  if (!res.ok) {
    throw new Error(`Could not load the Astronomy Picture of the Day (${res.status}).`);
  }

  const data = (await res.json()) as ApodResponse;
  if (!data || !data.title) throw new Error("NASA returned an unexpected response.");
  return data;
}

export const apodQueryOptions = (date?: string) => ({
  queryKey: ["apod", date ?? "today"] as const,
  queryFn: () => fetchApod(date),
  staleTime: 1000 * 60 * 60, // an APOD changes at most once a day
  gcTime: 1000 * 60 * 60 * 6,
  retry: 1,
});

/** Earliest APOD publication date. */
export const APOD_START = "1995-06-16";

export const toIsoDate = (d: Date) => d.toISOString().slice(0, 10);

export function randomApodDate(): string {
  const start = new Date(APOD_START).getTime();
  const end = Date.now();
  return toIsoDate(new Date(start + Math.random() * (end - start)));
}

export function shiftDate(date: string, days: number): string {
  const d = new Date(`${date}T12:00:00Z`);
  d.setUTCDate(d.getUTCDate() + days);
  return toIsoDate(d);
}
