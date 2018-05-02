import "./job-list-card.css"

import React from "react"

class JobListCard extends React.Component {
  render() {
    return (
      <ul class="demo-list-three mdl-list">
        <li class="mdl-list__item mdl-list__item--three-line">
          <span class="mdl-list__item-primary-content">
            <i class="material-icons mdl-list__item-avatar">person</i>
            <span>
              Senior Engine Programmer - <small>FATALIST DEVELOPMENT AB</small>
            </span>
            <span class="mdl-list__item-text-body">
              Required qualifications 8+ years of professional C/C++ experience
              In depth knowledge of game engine architectures
            </span>
          </span>
          <span class="mdl-list__item-secondary-content">
            <a class="mdl-list__item-secondary-action disabled" href="#">
              <i class="material-icons">star</i>
            </a>
          </span>
        </li>
        <li class="mdl-list__item mdl-list__item--three-line">
          <span class="mdl-list__item-primary-content">
            <i class="material-icons  mdl-list__item-avatar">person</i>
            Senior Engine Programmer - <small>FATALIST DEVELOPMENT AB</small>
            <span class="mdl-list__item-text-body">
              Required qualifications 8+ years of professional C/C++ experience
              In depth knowledge of game engine architectures
            </span>
          </span>
          <span class="mdl-list__item-secondary-content">
            <a class="mdl-list__item-secondary-action" href="#">
              <i class="material-icons">star</i>
            </a>
          </span>
        </li>
        <li class="mdl-list__item mdl-list__item--three-line">
          <span class="mdl-list__item-primary-content">
            <i class="material-icons  mdl-list__item-avatar">person</i>
            Senior Engine Programmer - <small>FATALIST DEVELOPMENT AB</small>
            <span class="mdl-list__item-text-body">
              Required qualifications 8+ years of professional C/C++ experience
              In depth knowledge of game engine architectures
            </span>
          </span>
          <span class="mdl-list__item-secondary-content">
            <a class="mdl-list__item-secondary-action" href="#">
              <i class="material-icons">star</i>
            </a>
          </span>
        </li>
      </ul>
    )
  }
}

export default JobListCard
