import PropTypes from "prop-types";
import React from "react";

import paddingStyles from "../styles/global/modifiers/padding.module.css";
import typeCompositionStyles from "../styles/global/typography/composition.module.css";
import typeStyles from "../styles/global/typography/styles.module.css";

const styles = Object.assign(
  {},
  // type-specific styles
  typeCompositionStyles,
  typeStyles,

  // modifier styles
  paddingStyles
);

const ProjectListing = props => {
  return (
    <ul>
      {props.projects.map((project, i) => {
        const isLast = i === props.projects.length - 1;

        return (
          <li className={!isLast ? styles["paddingBottom--double"] : null}>
            <h5 className={`${styles["text--accentFace"]}`}>
              <a href={project.url} className={styles["text--accentLink"]}>
                {project.name}
              </a>
            </h5>
            <p className={styles["runningText"]}>{project.description}</p>
          </li>
        );
      })}
    </ul>
  );
};

ProjectListing.propTypes = {
  projects: PropTypes.array
};

export default ProjectListing;
