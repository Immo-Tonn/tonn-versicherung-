/**
 * Google Places API (New) – Place Details, nur serverseitig.
 * Der API-Key bleibt in process.env (ohne NEXT_PUBLIC_) und verlässt den Server nie.
 */

export type GoogleReview = {
  author: string;
  authorUri?: string;
  rating: number;
  text: string;
  relativeTime?: string;
  url?: string;
};

export type GoogleReviewsData = {
  rating: number;
  count: number;
  reviews: GoogleReview[];
  reviewsUrl?: string;
};

const REVALIDATE_SECONDS = 60 * 60 * 24; // Bewertungen ändern sich selten: 1× pro Tag
const FIELD_MASK = "displayName,rating,userRatingCount,reviews,googleMapsLinks";

type PlaceResponse = {
  rating?: number;
  userRatingCount?: number;
  googleMapsLinks?: { reviewsUri?: string; placeUri?: string };
  reviews?: {
    rating?: number;
    relativePublishTimeDescription?: string;
    text?: { text?: string };
    originalText?: { text?: string };
    authorAttribution?: { displayName?: string; uri?: string };
    googleMapsUri?: string;
  }[];
};

export async function getGoogleReviews(): Promise<GoogleReviewsData | null> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;
  if (!apiKey || !placeId) return null;

  try {
    const res = await fetch(`https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}?languageCode=de`, {
      headers: { "X-Goog-Api-Key": apiKey, "X-Goog-FieldMask": FIELD_MASK },
      next: { revalidate: REVALIDATE_SECONDS },
    });

    if (!res.ok) {
      if (process.env.NODE_ENV === "development") console.warn(`[google-reviews] Places API antwortete mit HTTP ${res.status}`);
      return null;
    }

    const data = (await res.json()) as PlaceResponse;
    if (typeof data.rating !== "number" || typeof data.userRatingCount !== "number") return null;

    const reviews: GoogleReview[] = (data.reviews ?? [])
      .map((r) => ({
        author: r.authorAttribution?.displayName ?? "",
        authorUri: r.authorAttribution?.uri,
        rating: r.rating ?? 0,
        // Originaltext des Autors, unverändert
        text: (r.originalText?.text ?? r.text?.text ?? "").trim(),
        relativeTime: r.relativePublishTimeDescription,
        url: r.googleMapsUri,
      }))
      .filter((r) => r.author && r.text && r.rating > 0);

    return {
      rating: data.rating,
      count: data.userRatingCount,
      reviews,
      reviewsUrl: data.googleMapsLinks?.reviewsUri ?? data.googleMapsLinks?.placeUri,
    };
  } catch {
    if (process.env.NODE_ENV === "development") console.warn("[google-reviews] Abruf der Google-Bewertungen fehlgeschlagen");
    return null;
  }
}
