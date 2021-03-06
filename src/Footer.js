import React from "react";
import getLanguageKey from "./Translations";
import { isDarkMode } from "./ThemeMode";
import "./footer.css";

export default class Footer extends React.Component {
  render() {
    let wipDisclaimerHTML = getLanguageKey("wipDisclaimer")
      .replace("[", '<a href="https://github.com/cyberos/cyberos.github.io">')
      .replace("]", "</a>");
    return (
      <div className="footer-container">
        <div className="footer-content">
          <p>{getLanguageKey("footerCopyright")}</p>
          <p dangerouslySetInnerHTML={{ __html: wipDisclaimerHTML }}></p>
        </div>
      </div>
    );
  }
}
