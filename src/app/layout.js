import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://israelolukanni.com"),
  title: {
    default: "Israel Olukanni | Software, Music, Fashion Tech",
    template: "%s | Israel Olukanni"
  },
  description:
    "A living portfolio for Israel Olukanni: software projects, music releases, creative technology, and Style Finder.",
  openGraph: {
    title: "Israel Olukanni | Software, Music, Fashion Tech",
    description:
      "Software builder, music producer, and creative technologist creating at the edge of code, sound, and style.",
    images: ["/images/banner.png"]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
