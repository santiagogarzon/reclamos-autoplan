declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

function push(payload: Record<string, unknown>): void {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);
}

export function trackEvent(event: string, params?: Record<string, unknown>): void {
  push({ event, ...params });
}

export function trackWhatsAppClick(location: string = "unknown"): void {
  push({
    event: "whatsapp_click",
    event_category: "conversion",
    event_label: "whatsapp_button",
    location,
  });
}

export function trackScrollDepth(depth: 25 | 50 | 75 | 100): void {
  push({ event: "scroll_depth", depth_percent: depth });
}

export function trackTimeOnPage(seconds: number): void {
  push({ event: "time_on_page", seconds });
}
