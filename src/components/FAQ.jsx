// src/components/FAQ.jsx
import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import '../css/FAQ.css';

const faqs = [
  {
    question: 'What makes SASE smart lockers different from traditional parcel systems?',
    answer: 'SASE lockers combine precision-built hardware with advanced software that tracks, manages, and secures every delivery in real time for a seamless, automated experience.'
  },
  {
    question: 'Can SASE lockers be customized for different property types?',
    answer: 'Yes. Our modular designs and flexible configurations allow installations in apartments, offices, campuses, gyms, and retail spaces of any size.'
  },
  {
    question: 'How secure are SASE smart lockers?',
    answer: 'Each locker features encrypted access, user authentication, and tamper alerts to ensure complete privacy and protection for users and property owners.'
  },
  {
    question: 'Does SASE provide installation and ongoing support?',
    answer: 'Yes. From site assessment and setup to maintenance and real-time assistance, our dedicated team ensures your locker system runs smoothly every day.'
  },
  {
    question: 'Can the system integrate with existing management or delivery software?',
    answer: 'Absolutely. SASE’s open-API platform allows seamless integration with property management systems, courier software, and enterprise tools for total operational harmony.'
  }
];


const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2 className='head-text'>Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question" onClick={() => toggleFAQ(index)}>
            <span className='subheading-text'>{faq.question}</span>
            {openIndex === index ? <FaMinus /> : <FaPlus />}
          </div>
          {openIndex === index && (
            <div className="faq-answer">
              <p className='para-text'>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;