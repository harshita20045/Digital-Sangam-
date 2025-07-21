import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function FAQSection() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Frequently Asked Questions</h2>
      <div className="accordion rounded shadow" id="faqAccordion">
        <div className="accordion-item mb-3 rounded">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button rounded"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              What is Digital Sangam?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
              Digital Sangam is a platform to preserve, showcase, and celebrate India's diverse cultural heritage digitally.
            </div>
          </div>
        </div>

        <div className="accordion-item mb-3 rounded">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed rounded"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Who can contribute to Digital Sangam?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
              Anyone passionate about Indian culture, history, languages, and traditions can contribute by uploading stories, audio, or dialects.
            </div>
          </div>
        </div>

        <div className="accordion-item mb-3 rounded">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed rounded"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Is the platform available in multiple languages?
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
              Yes, we aim to support multiple Indian languages and dialects to reach every community and individual.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQSection;
