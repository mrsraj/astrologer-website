import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: { default: "श्री ज्योतिष सेवा | Vedic Astrology Guidance", template: "%s | श्री ज्योतिष सेवा" },
  description: "Traditional Vedic astrology guidance for kundli, marriage, career, Vastu and auspicious beginnings.",
};
export const viewport = { width: "device-width", initialScale: 1 };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
