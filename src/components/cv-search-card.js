import "./cv-search-card.css"

import React from "react"

class CvSearchCard extends React.Component {
  render() {
    return (
      <div className="cv-search-card mdl-card mdl-shadow--2dp">
        <div className="mdl-card__title">
          <h2 className="mdl-card__title-text">Jobbsök</h2>
        </div>
        <div className="mdl-card__supporting-text">
          <p>Ladda upp ditt CV, så listar vår AI ut dina drömjobb.</p>
        </div>
        <div className="mdl-card__actions mdl-card--border">
          <label className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
            Sök med ditt CV
            <input id="file_input_file" className="none" type="file" />
          </label>
          <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect none">
            Sök
          </a>
        </div>
      </div>
    )
  }
}

export default CvSearchCard
