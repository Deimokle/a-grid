import * as React from "react";
import NavBar from "../components/navbar";

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};
const headingAccentStyles = {
  color: "#663399",
};
const paragraphStyles = {
  marginBottom: 48,
};
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
};
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
};
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
};

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
};

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
};

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
};

const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial/",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    color: "#E95800",
  },
  {
    text: "How to Guides",
    url: "https://www.gatsbyjs.com/docs/how-to/",
    description:
      "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
    color: "#1099A8",
  },
  {
    text: "Reference Guides",
    url: "https://www.gatsbyjs.com/docs/reference/",
    description:
      "Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby's APIs.",
    color: "#BC027F",
  },
  {
    text: "Conceptual Guides",
    url: "https://www.gatsbyjs.com/docs/conceptual/",
    description:
      "Big-picture explanations of higher-level Gatsby concepts. Most useful for building understanding of a particular topic.",
    color: "#0D96F2",
  },
  {
    text: "Plugin Library",
    url: "https://www.gatsbyjs.com/plugins",
    description:
      "Add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
    color: "#8EB814",
  },
  {
    text: "Build and Host",
    url: "https://www.gatsbyjs.com/cloud",
    badge: true,
    description:
      "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
    color: "#663399",
  },
];

const MissionPage = () => {
  return (
    <>
      <NavBar />
      <main style={pageStyles}>
        <h1 style={headingStyles}>
          Bienvenue à ton entretien
          <br />
          <span style={headingAccentStyles}>— voici ta mission 🎯🎯🎯</span>
        </h1>
        <p style={{ backgroundColor: "#e3f2fd", padding: 20, borderRadius: 4 }}>
          L'idée de l'entretien, c'est que tu reproduises un site web notre site
          web a-grid.com en utilisant Gatsby, ReactJS, Mui.js et react-router-dom.
          <br />
          <br />
          L'objectif de cette mission, c'est de voir comment tu travailles avec
          ces technologies, comment tu les combines pour reproduire un site web
          existant, et surtout, comment tu te débrouilles quand tu rencontres des
          problèmes! Le design est également une partie importante de la tâche à
          réaliser.
          <br />
          <br />
          PS: Tu n'as pas besoin de faire tout le site, juste la page d'accueil et
          une autre page de ton choix pour bien faire fonctionner le routing.
          <br />
          PPS: N'oublie pas le responsive !
        </p>
      </main>
    </>
  );
};

export default MissionPage;

export const Head = () => <title>Mission Page</title>;
