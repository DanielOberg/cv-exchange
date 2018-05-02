import "./cv-send-card.css"

import React from "react"

class CvSendCard extends React.Component {
  render() {
    return (
      <div className="cv-send-card mdl-card mdl-shadow--2dp">
        <div className="mdl-card__supporting-text">
          <form action="#">
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input
                className="mdl-textfield__input"
                type="text"
                id="firstname"
              />
              <label className="mdl-textfield__label" htmlFor="firstname">
                Förnamn
              </label>
            </div>
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input
                className="mdl-textfield__input"
                type="text"
                id="familyname"
              />
              <label className="mdl-textfield__label" htmlFor="familyname">
                Efternamn
              </label>
            </div>
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input className="mdl-textfield__input" type="text" id="email" />
              <label className="mdl-textfield__label" htmlFor="email">
                Epost
              </label>
            </div>
            <div>
              <label className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
                Välj ditt CV
                <input
                  className="none"
                  type="file"
                  id="cv"
                  accept=".docx, .md, .tex, .odt, .rtf"
                />
              </label>
            </div>
            <br />
            <div>
              <label className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
                Välj en profilbild
                <input
                  className="none"
                  type="file"
                  id="profilepic"
                  accept="image/*"
                />
              </label>
            </div>
          </form>
        </div>
        <div className="mdl-card__actions mdl-card--border">
          <input
            type="submit"
            className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"
            value="Skicka"
          />
        </div>
      </div>
    )
  }
}

export default CvSendCard
