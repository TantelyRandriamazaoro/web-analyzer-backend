module.exports = {
  "performance-custom": {
    id: "performance",
    title: "Performance",
    description:
      "Shows how fast and performant your website is on a simulated 3G mobile connection",
    auditRefs: [
      {
        id: "first-contentful-paint",
        weight: 15,
        group: "metrics",
      },
      {
        id: "speed-index",
        weight: 15,
        group: "metrics",
      },
      {
        id: "largest-contentful-paint",
        weight: 25,
        group: "metrics",
      },
      {
        id: "interactive",
        weight: 15,
        group: "metrics",
      },
      {
        id: "total-blocking-time",
        weight: 25,
        group: "metrics",
      },
      {
        id: "cumulative-layout-shift",
        weight: 5,
        group: "metrics",
      },
      {
        id: "render-blocking-resources",
        weight: 0,
        group: "load-opportunities",
      },
      {
        id: "uses-responsive-images",
        weight: 0,
        group: "load-opportunities",
      },
      {
        id: "offscreen-images",
        weight: 0,
        group: "load-opportunities",
      },
      {
        id: "unminified-css",
        weight: 0,
        group: "load-opportunities",
      },
      {
        id: "unminified-javascript",
        weight: 0,
        group: "load-opportunities",
      },
      {
        id: "unused-css-rules",
        weight: 0,
        group: "load-opportunities",
      },
      {
        id: "unused-javascript",
        weight: 0,
        group: "load-opportunities",
      },
      {
        id: "uses-optimized-images",
        weight: 0,
        group: "load-opportunities",
      },
      {
        id: "uses-webp-images",
        weight: 0,
        group: "load-opportunities",
      },
      {
        id: "uses-text-compression",
        weight: 0,
        group: "load-opportunities",
      },
      {
        id: "uses-rel-preconnect",
        weight: 0,
        group: "load-opportunities",
      },
      {
        id: "server-response-time",
        weight: 0,
        group: "load-opportunities",
      },
      {
        id: "redirects",
        weight: 0,
        group: "load-opportunities",
      },
      {
        id: "uses-rel-preload",
        weight: 0,
        group: "load-opportunities",
      },
      {
        id: "efficient-animated-content",
        weight: 0,
        group: "load-opportunities",
      },
      {
        id: "total-byte-weight",
        weight: 0,
        group: "diagnostics",
      },
      {
        id: "uses-long-cache-ttl",
        weight: 0,
        group: "diagnostics",
      },
      {
        id: "dom-size",
        weight: 0,
        group: "diagnostics",
      },
      {
        id: "bootup-time",
        weight: 0,
        group: "diagnostics",
      },
      {
        id: "mainthread-work-breakdown",
        weight: 0,
        group: "diagnostics",
      },
      {
        id: "font-display",
        weight: 0,
        group: "diagnostics",
      },
      {
        id: "resource-summary",
        weight: 0,
        group: "diagnostics",
      },
      {
        id: "third-party-summary",
        weight: 0,
        group: "diagnostics",
      },
      {
        id: "largest-contentful-paint-element",
        weight: 0,
        group: "diagnostics",
      },
      {
        id: "layout-shift-elements",
        weight: 0,
        group: "diagnostics",
      },
      {
        id: "no-document-write",
        weight: 0,
        group: "diagnostics",
      },
      {
        id: "long-tasks",
        weight: 0,
        group: "diagnostics",
      },
    ],
    brief: {
      passed: 0,
      failed: 0,
      warning: 0,
      informative: 0,
      notApplicable: 0,
    },
  },
  "best-practices-custom": {
    id: "best-practices",
    title: "Best Practices",
    description:
      "These checks highlight opportunities to improve the overall code health of your web app.",
    score: 0.77,
    auditRefs: [
      {
        id: "is-on-https",
        weight: 1,
        group: "best-practices-trust-safety",
      },
      {
        id: "external-anchors-use-rel-noopener",
        weight: 1,
        group: "best-practices-trust-safety",
      },
      {
        id: "geolocation-on-start",
        weight: 1,
        group: "best-practices-trust-safety",
      },
      {
        id: "notification-on-start",
        weight: 1,
        group: "best-practices-trust-safety",
      },
      {
        id: "no-vulnerable-libraries",
        weight: 1,
        group: "best-practices-trust-safety",
      },
      {
        id: "password-inputs-can-be-pasted-into",
        weight: 1,
        group: "best-practices-ux",
      },
      {
        id: "image-aspect-ratio",
        weight: 1,
        group: "best-practices-ux",
      },
      {
        id: "image-size-responsive",
        weight: 1,
        group: "best-practices-ux",
      },
      {
        id: "doctype",
        weight: 1,
        group: "best-practices-browser-compat",
      },
      {
        id: "charset",
        weight: 1,
        group: "best-practices-browser-compat",
      },
      {
        id: "appcache-manifest",
        weight: 1,
        group: "best-practices-general",
      },
      {
        id: "js-libraries",
        weight: 0,
        group: "best-practices-general",
      },
      {
        id: "deprecations",
        weight: 1,
        group: "best-practices-general",
      },
      {
        id: "errors-in-console",
        weight: 1,
        group: "best-practices-general",
      },
    ],
    brief: {
      passed: 0,
      failed: 0,
      warning: 0,
      informative: 0,
      notApplicable: 0,
    },
  },
  "seo-custom": {
    id: "seo",
    title: "SEO",
    description:
      "These checks ensure that your page is optimized for search engine results ranking. There are additional factors Lighthouse does not check that may affect your search ranking. [Learn more](https://support.google.com/webmasters/answer/35769).",
    score: 0.88,
    manualDescription:
      "Run these additional validators on your site to check additional SEO best practices.",
    auditRefs: [
      {
        id: "viewport",
        weight: 1,
        group: "seo-mobile",
      },
      {
        id: "document-title",
        weight: 1,
        group: "seo-content",
      },
      {
        id: "meta-description",
        weight: 1,
        group: "seo-content",
      },
      {
        id: "http-status-code",
        weight: 1,
        group: "seo-crawl",
      },
      {
        id: "link-text",
        weight: 1,
        group: "seo-content",
      },
      {
        id: "crawlable-anchors",
        weight: 1,
        group: "seo-crawl",
      },
      {
        id: "is-crawlable",
        weight: 1,
        group: "seo-crawl",
      },
      {
        id: "robots-txt",
        weight: 0,
        group: "seo-crawl",
      },
      {
        id: "image-alt",
        weight: 1,
        group: "seo-content",
      },
      {
        id: "hreflang",
        weight: 1,
        group: "seo-content",
      },
      {
        id: "canonical",
        weight: 0,
        group: "seo-content",
      },
      {
        id: "font-size",
        weight: 1,
        group: "seo-mobile",
      },
      {
        id: "plugins",
        weight: 1,
        group: "seo-content",
      },
      {
        id: "tap-targets",
        weight: 1,
        group: "seo-mobile",
      },
    ],
    brief: {
      passed: 0,
      failed: 0,
      warning: 0,
      informative: 0,
      notApplicable: 0,
    },
  },
};
