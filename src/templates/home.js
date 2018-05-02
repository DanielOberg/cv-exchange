import "./home.css"

import React from "react"
import CvSearchCard from "../components/cv-search-card"
import CvSendCard from "../components/cv-send-card"
import JobListCard from "../components/job-list-card"

const Home = () => (
  <main className="home">
    <div className="mdl-layout__content">
      <CvSearchCard />
    </div>
    <div className="main-container bg-secondary">
      <h3 className="primary">141 123+ jobb</h3>
      <JobListCard />
    </div>
    <div className="bg-primary main-container">
      <h2 className="light">Skicka CV</h2>
      <hr className="light" />
      <CvSendCard />
    </div>
  </main>
)

export default Home
