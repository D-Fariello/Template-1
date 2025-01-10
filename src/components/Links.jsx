import React from "react";

const Links = () => {
  return (
    <div className="links">
      <h2>Links</h2>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/dalila-fariello/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://github.com/D-Fariello"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </li>
        {/* CV Download Button */}
        <li>
          <a
            href="/Dalila_Fariello_CV.pdf"
            download="Dalila_Fariello_CV"
            className="cv-download-button"
          >
            Download My CV
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Links;
