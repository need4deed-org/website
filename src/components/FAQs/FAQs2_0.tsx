import React, { useState, useMemo } from 'react';
import { useTranslation } from "react-i18next";
import "./FAQs.css";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface OpenItemsState {
  [key: string]: boolean;
}

interface FAQSectionProps {
  title: string;
  faqs: FAQItem[];
  sectionPrefix: string;
}

function FAQs(): JSX.Element {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [openItems, setOpenItems] = useState<OpenItemsState>({});

  // Volunteer FAQs
  const volunteerFaqs: FAQItem[] = [
    {
      id: 'vol-1',
      question: t("faqs.first_steps_question"),
      answer: t("faqs.first_steps_answer"),
    },
    {
      id: 'vol-2',
      question: t("faqs.after_form_question"),
      answer: t("faqs.after_form_answer"),
    },
    {
      id: 'vol-3',
      question: t("faqs.find_opportunities_question"),
      answer: t("faqs.find_opportunities_answer"),
    },
    {
      id: 'vol-4',
      question: t("faqs.volunteer_roles_question"),
      answer: t("faqs.volunteer_roles_answer"),
    },
    {
      id: 'vol-5',
      question: t("faqs.special_skills_question"),
      answer: t("faqs.special_skills_answer"),
    },
    {
      id: 'vol-6',
      question: t("faqs.volunteering_time_question"),
      answer: t("faqs.volunteering_time_answer"),
    },
    {
      id: 'vol-7',
      question: t("faqs.age_requirements_question"),
      answer: t("faqs.age_requirements_answer"),
    },
    {
      id: 'vol-8',
      question: t("faqs.voluntea_gatherings_question"),
      answer: t("faqs.voluntea_gatherings_answer"),
    },
    {
      id: 'vol-9',
      question: t("faqs.training_question"),
      answer: t("faqs.training_answer"),
    },
    {
      id: 'vol-10',
      question: t("faqs.group_volunteering_question"),
      answer: t("faqs.group_volunteering_answer"),
    },
  ];

  // Accommodation Centers FAQs - you can add these translations
  const accommodationFaqs: FAQItem[] = [
    {
      id: 'acc-1',
      question: t("faqs.accommodation.registration_question", "How do I register my accommodation center?"),
      answer: t("faqs.accommodation.registration_answer", "Contact our team through the website form or email to begin the registration process."),
    },
    {
      id: 'acc-2',
      question: t("faqs.accommodation.requirements_question", "What are the requirements for accommodation centers?"),
      answer: t("faqs.accommodation.requirements_answer", "Centers must meet basic safety standards and provide appropriate facilities for refugees."),
    },
    {
      id: 'acc-3',
      question: t("faqs.accommodation.volunteer_coordination_question", "How do we coordinate with volunteers?"),
      answer: t("faqs.accommodation.volunteer_coordination_answer", "We provide a coordination system to match volunteers with your center's specific needs."),
    },
    {
      id: 'acc-4',
      question: t("faqs.accommodation.support_question", "What support does Need4Deed provide?"),
      answer: t("faqs.accommodation.support_answer", "We provide volunteer matching, training resources, and ongoing support for your center."),
    },
  ];

  // Filter FAQs based on search term
  const filteredVolunteerFaqs: FAQItem[] = useMemo(() => {
    if (!searchTerm) return volunteerFaqs;
    return volunteerFaqs.filter((faq: FAQItem) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, volunteerFaqs]);

  const filteredAccommodationFaqs: FAQItem[] = useMemo(() => {
    if (!searchTerm) return accommodationFaqs;
    return accommodationFaqs.filter((faq: FAQItem) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, accommodationFaqs]);

  const toggleItem = (itemId: string): void => {
    setOpenItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(e.target.value);
  };

  const clearSearch = (): void => {
    setSearchTerm('');
  };

  const FAQSection: React.FC<FAQSectionProps> = ({ title, faqs, sectionPrefix }) => (
    <div className="faq-section">
      <h2 className="faq-section-title">{title}</h2>
      <div className="faq-items">
        {faqs.map((faq: FAQItem, index: number) => (
          <div key={faq.id} className="faq-item-expandable">
            <button
              onClick={() => toggleItem(faq.id)}
              className="faq-question-button"
              type="button"
            >
              <div className="faq-question-content">
                <span className="faq-number">{index + 1}</span>
                <h6 className="faq-question">{faq.question}</h6>
              </div>
              <div className="faq-toggle-icon">
                {openItems[faq.id] ? (
                  <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                ) : (
                  <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </div>
            </button>
            
            {openItems[faq.id] && (
              <div className="faq-answer-container">
                <p className="faq-answer">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
        
        {faqs.length === 0 && searchTerm && (
          <div className="faq-no-results">
            {t("faqs.no_results", "No FAQ items found matching your search.")}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="n4d-container">
      {/* Header Section */}
      <div className="faq-header">
        <h1 className="faqs-title">{t("faqs.title")}</h1>
        
        {/* Search Bar */}
        <div className="faq-search-container">
          <div className="faq-search-wrapper">
            <svg className="faq-search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder={t("faqs.search_placeholder", "Search FAQ")}
              value={searchTerm}
              onChange={handleSearchChange}
              className="faq-search-input"
            />
            {searchTerm && (
              <button
                onClick={clearSearch}
                className="faq-search-clear"
                type="button"
                aria-label="Clear search"
              >
                <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="faq-content">
        <FAQSection 
          title={t("faqs.volunteers_section", "For Volunteers")}
          faqs={filteredVolunteerFaqs}
          sectionPrefix="vol"
        />
        
        <FAQSection 
          title={t("faqs.accommodation_section", "FAQ for Refugee Accommodation Centers")}
          faqs={filteredAccommodationFaqs}
          sectionPrefix="acc"
        />
        
        {/* No results message */}
        {searchTerm && 
         filteredVolunteerFaqs.length === 0 && 
         filteredAccommodationFaqs.length === 0 && (
          <div className="faq-no-results-global">
            <div className="faq-no-results-title">
              {t("faqs.no_results_title", "No results found")}
            </div>
            <div className="faq-no-results-text">
              {t("faqs.no_results_text", "Try adjusting your search terms or browse all FAQ items above")}
            </div>
          </div>
        )}
      </div>

      {/* Footer CTA */}
      <div className="faq-footer">
        <h3 className="faq-footer-title">
          {t("faqs.still_questions", "Still have questions?")}
        </h3>
        <p className="faq-footer-text">
          {t("faqs.contact_text", "Can't find what you're looking for? Get in touch with our team.")}
        </p>
        <button className="faq-contact-button" type="button">
          {t("faqs.contact_button", "Contact Us")}
        </button>
      </div>
    </div>
  );
}

export default FAQs;