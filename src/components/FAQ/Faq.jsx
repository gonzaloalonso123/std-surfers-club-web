import React from "react";
import { OneFaq } from "./OneFaq";
import Questions from "../../contents/faq-questions";

export const Faq = () => {
  return (
    <div className="faq-container">
        <h1>FAQ</h1>
      <div className="faqs-list">
        {Questions.map((q) => (
          <OneFaq question={q.question} answer={q.answer} />
        ))}
      </div>
    </div>
  );
};
