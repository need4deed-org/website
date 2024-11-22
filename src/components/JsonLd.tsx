import { getImageUrl } from "../utils/index";

export default function JsonLd() {
  const logoUrl = getImageUrl("N4D-logo-purple-on-transparent-h.png");

  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: "Need4Deed",
    url: "https://www.need4deed.org",
    logo: logoUrl,
    sameAs: ["https://www.instagram.com/need4deed/"],
    description: "Need based voluntary support for refugees",
  };

  return (
    <script type="application/ld+json">{JSON.stringify(jsonLdData)}</script>
  );
}
