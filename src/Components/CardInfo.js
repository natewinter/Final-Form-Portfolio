import React from "react";
import { useSpring, animated } from "react-spring";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

function CardInfo(props) {
  const style = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <animated.div className="j-card-info" style={style}>
      <p className="j-card-title">{props.title}</p>
      <p className="j-card-sub-title">
        {props.subTitle}
        <span>
          <a href={props.link} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGlobe} size="2x" />
          </a>
        </span>
        <span>
          <a href={props.gitHub} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </span>
      </p>
    </animated.div>
  );
}

export default CardInfo;
