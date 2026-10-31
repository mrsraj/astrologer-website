import test from "node:test";
import assert from "node:assert/strict";
import { services, getServiceBySlug } from "../src/data/services.js";
import { zodiacSigns } from "../src/data/content.js";
import { buildWhatsAppUrl } from "../src/lib/whatsapp.js";

test("service slugs stay unique and resolve to the correct service", () => {
  assert.equal(new Set(services.map((service) => service.slug)).size, services.length);
  assert.equal(getServiceBySlug("kundli-analysis")?.title, "Kundli Analysis");
  assert.equal(getServiceBySlug("missing-service"), undefined);
});

test("the horoscope navigation contains all twelve unique zodiac signs", () => {
  assert.equal(zodiacSigns.length, 12);
  assert.equal(new Set(zodiacSigns.map((sign) => sign.slug)).size, 12);
});

test("WhatsApp URLs normalize the phone and safely encode the message", () => {
  assert.equal(
    buildWhatsAppUrl("+91 98765 43210", "Namaste & hello"),
    "https://wa.me/919876543210?text=Namaste%20%26%20hello",
  );
});
