import { useState, ChangeEvent } from "react";
import { useTranslation } from "react-i18next";
import { SearchIcon } from "@/components/svg/SearchIcon"; // adjust path

type FaqItem = {
  question: string;
  answer: string;
};

type FaqGroups = {
  volunteers: FaqItem[];
  racs: FaqItem[];
};

function FAQs2_0() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<keyof FaqGroups>("volunteers");
  const [search, setSearch] = useState<string>("");

  const faqs: FaqGroups = {
    volunteers: [
      { question: t("faqs.first_steps_question"), answer: t("faqs.first_steps_answer") },
      { question: t("faqs.after_form_question"), answer: t("faqs.after_form_answer") },
      { question: t("faqs.find_opportunities_question"), answer: t("faqs.find_opportunities_answer") },
      { question: t("faqs.volunteer_roles_question"), answer: t("faqs.volunteer_roles_answer") },
      { question: t("faqs.special_skills_question"), answer: t("faqs.special_skills_answer") },
      { question: t("faqs.volunteering_time_question"), answer: t("faqs.volunteering_time_answer") },
      { question: t("faqs.age_requirements_question"), answer: t("faqs.age_requirements_answer") },
      { question: t("faqs.voluntea_gatherings_question"), answer: t("faqs.voluntea_gatherings_answer") },
      { question: t("faqs.training_question"), answer: t("faqs.training_answer") },
      { question: t("faqs.group_volunteering_question"), answer: t("faqs.group_volunteering_answer") },
    ],
    racs: [
      {
        question: "How do refugee accommodation centers collaborate with Need4Deed?",
        answer: "Centers can contact Need4Deed to request volunteer support for activities and translation.",
      },
      {
        question: "What kind of support is available for RAC residents?",
        answer: "Support includes language cafés, translation, child care, and social activities.",
      },
    ],
  };

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const filteredFaqs = faqs[activeTab].filter(
    (faq) =>
      faq.question.toLowerCase().includes(search.toLowerCase()) ||
      faq.answer.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="faqs-container">
      {/* Header */}
      <div className="faq-header">
        <h1 className="faq-title">{t("faqs.title")}</h1>
        <div className="faq-search">
          <input
            type="text"
            placeholder={t("faqs.search_placeholder", "Search FAQs...")}
            value={search}
            onChange={handleSearch}
          />
          <button type="button" className="faq-search-btn">
            <SearchIcon />
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="faq-tabs">
        <button
          className={`faq-tab ${activeTab === "volunteers" ? "active" : ""}`}
          onClick={() => setActiveTab("volunteers")}
        >
          {t("faqs.volunteers_tab", "For Volunteers")}
        </button>
        <button
          className={`faq-tab ${activeTab === "racs" ? "active" : ""}`}
          onClick={() => setActiveTab("racs")}
        >
          {t("faqs.racs_tab", "For Refugee Accommodation Centers")}
        </button>
      </div>

      {/* FAQ List */}
      <div className="faq-list">
        {filteredFaqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-number">{index + 1}</div>
            <div className="faq-content">
              <h6 className="faq-question">{faq.question}</h6>
              <p className="faq-answer">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQs2_0;
