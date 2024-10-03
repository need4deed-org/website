import React from 'react';

const JsonLd: React.FC = () => {
  return (
    <script type="application/ld+json">
      {`
        {
          "@context": "https://schema.org",
          "@type": "NGO",
          "name": "Need4Deed",
          "url": "https://www.need4deed.org",
          "logo": "https://need4deed.org/images/N4D-logo-purple-on-transparent-h.png",
          "sameAs": [
            "https://www.instagram.com/need4deed/",
          ],
          "description": "Need based voluntary support for refugees"
        }
      `}
    </script>
  );
};

export default JsonLd;
