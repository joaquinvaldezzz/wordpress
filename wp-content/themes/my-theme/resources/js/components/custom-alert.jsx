import React, { useState } from "react";
import ReactDOM from "react-dom/client";
// import "../../../css/app.css";

class CustomAlert extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const type = this.getAttribute("type") || "info";
    const title = this.getAttribute("title") || "";
    const content = this.textContent || "";

    // Inject Tailwind styles into Shadow DOM
    const styleEl = document.createElement("style");
    styleEl.textContent = `
      @import url('https://cdn.tailwindcss.com');
    `;
    this.shadowRoot.appendChild(styleEl);

    const root = ReactDOM.createRoot(this.shadowRoot);

    const AlertComponent = () => {
      const [isOpen, setIsOpen] = useState(true);

      if (!isOpen) return null;

      const typeStyles = {
        info: "bg-blue-50 border-blue-200 text-blue-800",
        success: "bg-green-50 border-green-200 text-green-800",
        warning: "bg-yellow-50 border-yellow-200 text-yellow-800",
        error: "bg-red-50 border-red-200 text-red-800",
      };

      const btnStyles = {
        info: "bg-blue-100 hover:bg-blue-200",
        success: "bg-green-100 hover:bg-green-200",
        warning: "bg-yellow-100 hover:bg-yellow-200",
        error: "bg-red-100 hover:bg-red-200",
      };

      const icons = {
        info: "ℹ️",
        success: "✓",
        warning: "⚠️",
        error: "✕",
      };

      return (
        <div className={`rounded-md border p-4 ${typeStyles[type]}`}>
          {title && (
            <div className="mb-2 flex items-center gap-2 font-semibold">
              <span>{icons[type]}</span>
              <span>{title}</span>
            </div>
          )}
          <div className="mb-3">{content}</div>
          <button
            onClick={() => setIsOpen(false)}
            className={`rounded px-3 py-1 text-sm font-medium transition ${btnStyles[type]}`}
          >
            Dismiss
          </button>
        </div>
      );
    };

    root.render(<AlertComponent />);
  }
}

customElements.define("custom-alert", CustomAlert);
