declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const measurementId = import.meta.env.VITE_GA_ID as string | undefined;

export function setupGoogleAnalytics() {
  if (!measurementId || typeof document === "undefined") return;
  if (document.querySelector(`script[data-ga-id="${measurementId}"]`)) return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || ((...args: unknown[]) => window.dataLayer?.push(args));
  window.gtag("js", new Date());
  window.gtag("config", measurementId, { anonymize_ip: true });

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
  script.dataset.gaId = measurementId;
  document.head.appendChild(script);
}

export function setupConversionTracking() {
  if (!measurementId || typeof document === "undefined") return;

  document.addEventListener("click", (event) => {
    const target = (event.target as HTMLElement | null)?.closest<HTMLAnchorElement>("a[href]");
    if (!target) return;
    const href = target.getAttribute("href") || "";
    if (href.startsWith("https://wa.me/") || href.startsWith("https://api.whatsapp.com/")) {
      window.gtag?.("event", "whatsapp_click", { event_category: "contact", link_url: href });
    } else if (href.startsWith("tel:")) {
      window.gtag?.("event", "phone_click", { event_category: "contact", link_url: href });
    }
  });

  document.addEventListener("submit", (event) => {
    const form = event.target as HTMLFormElement;
    window.gtag?.("event", "contact_form_submit", {
      event_category: "contact",
      form_name: form.getAttribute("name") || form.id || "contact",
    });
  });
}
