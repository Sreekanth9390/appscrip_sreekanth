import React, { useState } from "react";
import "./Sidebar.css";

const Sidebar = () => {
  const [expandedSections, setExpandedSections] = useState({});
  const [selectedOptions, setSelectedOptions] = useState({
    "Ideal For": [],
  });

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleOptionChange = (section, option) => {
    setSelectedOptions((prev) => {
      const currentOptions = prev[section] || [];
      if (currentOptions.includes(option)) {
        // Remove the option if it's already selected
        return {
          ...prev,
          [section]: currentOptions.filter((item) => item !== option),
        };
      } else {
        // Add the option if it's not selected
        return {
          ...prev,
          [section]: [...currentOptions, option],
        };
      }
    });
  };

  const clearSelection = (section) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [section]: [],
    }));
  };

  return (
    <div className="sidebar">
      {/* Customizable Option */}
      <div className="customizable-option">
        <input type="checkbox" id="customizable" />
        <label htmlFor="customizable">Customizable</label>
      </div>

      {/* Sidebar Sections */}
      <div className="sidebar-section">
        {/* Section: Ideal For */}
        <div
          className="section-header"
          onClick={() => toggleSection("Ideal For")}
        >
          Ideal For
          <span>{expandedSections["Ideal For"] ? "-" : "+"}</span>
        </div>
        {expandedSections["Ideal For"] && (
          <div className="section-content">
            <p
              onClick={() => clearSelection("Ideal For")}
              className="clear-selection"
            >
              Unselect all
            </p>
            <div>
              {["Men", "Women", "Baby & Kids"].map((option) => (
                <div key={option}>
                  <input
                    type="checkbox"
                    id={option}
                    checked={
                      selectedOptions["Ideal For"]?.includes(option) || false
                    }
                    onChange={() => handleOptionChange("Ideal For", option)}
                  />
                  <label htmlFor={option}>{option}</label>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Remaining Sections */}
      {[
        "Occasion",
        "Work",
        "Fabric",
        "Segment",
        "Suitable For",
        "Raw Materials",
        "Pattern",
      ].map((section) => (
        <div key={section} className="sidebar-section">
          <div
            className="section-header"
            onClick={() => toggleSection(section)}
          >
            {section}
            <span>{expandedSections[section] ? "-" : "+"}</span>
          </div>
          {expandedSections[section] && (
            <div className="section-content">
              <p>All</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
