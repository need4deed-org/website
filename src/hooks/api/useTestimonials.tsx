import { useEffect, useState } from "react";

import { Lang, Testimonial } from "../../config/types";

const testimonialsFallback: Partial<Record<Lang, Testimonial[]>> = {
  en: [
    {
      name: "Moshen",
      text: "Volunteering as a translator with Need4Need has been an incredibly rewarding experience. It has allowed me to bridge language barriers and help individuals feel more connected and understood. The work is not only meaningful but also inspiring, as I've had the chance to meet amazing people and be part of a community that genuinely cares about making a difference. It's fulfilling to know that my small contributions can have a big impact on someone's life.",
      activities: ["Translation", "Accompanying"],
      pic: "data:image/jpeg;base64,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",
    },
    {
      name: "Mika",
      text: "I recently started volunteering at an accommodation center through Need4Deed, where I offer German tutoring for younger kids. Learning a new language is hard, and school is not easy on everyone, so getting some one-on-one time and having some fun with teaching is great for them (and for me!). It's been great from the start: Coordination went smoothly, and all volunteers at the accommodation center are greeted with such warmth by the whole team.",
      activities: ["Tutoring", "Language Café"],
      pic: "data:image/jpeg;base64,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",
    },
    {
      name: "Sergey",
      text: "My name is Sergey. I am engaged in accompanying people in different state agencies, kindergartens, hospitals and so on. I am a refugee myself and I believe it is my duty to help other people who are new to Berlin and cannot speak German.",
      activities: ["Accompanying"],
      pic: "",
    },
  ],
  de: [],
};

export default function useTestimonials(language: Lang) {
  const [testimonials, setTestimonials] = useState<Testimonial[]>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTestimonials(testimonialsFallback[language]);
    setLoading(false);
  }, [language]);

  return [testimonials, loading];
}
