import { useTranslation } from "react-i18next";
import "./FAQs.css";

function FAQs() {
  const { t } = useTranslation();

  const faqs = [
    {
      question: t("faqs.first_steps_question"),
      answer: t("faqs.first_steps_answer"),
    },
    {
      question: t("faqs.after_form_question"),
      answer: t("faqs.after_form_answer"),
    },
    {
      question: t("faqs.find_opportunities_question"),
      answer: t("faqs.find_opportunities_answer"),
    },
    {
      question: t("faqs.volunteer_roles_question"),
      answer: t("faqs.volunteer_roles_answer"),
    },
    {
      question: t("faqs.special_skills_question"),
      answer: t("faqs.special_skills_answer"),
    },
    {
      question: t("faqs.volunteering_time_question"),
      answer: t("faqs.volunteering_time_answer"),
    },
    {
      question: t("faqs.age_requirements_question"),
      answer: t("faqs.age_requirements_answer"),
    },
    {
      question: t("faqs.voluntea_gatherings_question"),
      answer: t("faqs.voluntea_gatherings_answer"),
    },
    {
      question: t("faqs.training_question"),
      answer: t("faqs.training_answer"),
    },
    {
      question: t("faqs.group_volunteering_question"),
      answer: t("faqs.group_volunteering_answer"),
    },
  ];

  return (
    <div className="n4d-container">
      <h1 className="faqs-title">{t("faqs.title")}</h1>
      {faqs.map((faq) => (
        <div key={faq.question} className="faq-item">
          <h6 className="faq-question">{faq.question}</h6>
          <p className="faq-answer">{faq.answer}</p>
        </div>
      ))}
    </div>
  );
}

export default FAQs;
