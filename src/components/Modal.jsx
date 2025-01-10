import React from "react";

function Modal({ show, onClose, project }) {
  if (!show) return null;

  return (
    <div className="modalOverlay">
      <div className="modalContent">
        <button className="closeButton" onClick={onClose}>
          ×
        </button>
        <h2>{project.title}</h2>
        <img className="imageModal" src={project.image} alt={project.alt} />
        <p className="modalParagraph">{project.description}</p>
        <div className="buttonsDiv">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="githubButton"
            >
              GitHub
            </a>
          )}
          {project.website && (
            <a
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="websiteButton"
            >
              Website
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default Modal;
