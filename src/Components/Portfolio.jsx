/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/deep_breath.jpg";

const imageAltText = "image description which use i donot know";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Researchers' degrees of freedom? A quick fix: Multiverse analysis",
    description:
      "Addressing the replication crises in science, quantitativly evaluating the multiverse of possible analysis pipelines .",
    url: "https://github.com/leonardozaggia/MultiBabiVerse",
  },
  {
    title: "Master in Neurocognitive Psychology",
    description:
      "From EEG to fMRI, from Psychometrics to Machine Learning, from Python to R, from Matlab to SPSS, from Statistics to NeuroImaging, from Psychology to Neuroscience.",
    url: "https://curriculum_online",
  },
  {
    title: "Automatic Sleep Stage Classification",
    description:
      "Collaboration with Fraunhofer Institute for Digital Medicine MEVIS, Oldenburg, Germany. Using Deep Learning to classify sleep stages from EEG data.",
    url: "https://github.com/microsoft/workshop-library/tree/main/full/build-resume-website",
  },
  {
    title: "Prematurity and Brain Development, an inquiry into preventive NeuroScience?",
    description:
      "A study on the effects of prematurity on brain development (functional and structural), and the potential role of preventive neuropsychology.",
    url: "https://preregistration",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{
              height: "90%",
              width: "100%",
              objectFit: "cover",
              animation: "1s ease-out 0s 1 slideIn",
            }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
