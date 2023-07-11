import { useState } from "react";
import { useRef } from "react";
import fleche from "../../assets/logos/arrow-white.svg";
import "../../utils/style/css/style-texte-deroulant.css";

function TexteDeroulant(props) {
  const [isCollapsed, setCollapse] = useState(true);
  const contentRef = useRef(null);
  const triggerCollapse = () => {
    setCollapse((prevState) => {
      return !prevState;
    });
  };

  return (
    <article className="texte-deroulant">
      <div onClick={triggerCollapse} className="entete">
        <div>{props.texteAffiche}</div>
        <img
          src={fleche}
          alt="Fleche de déroulement"
          className={isCollapsed ? "fleche-en-haut" : "fleche-en-bas"}
        />
      </div>
      <div
        ref={contentRef}
        className="texte-cache"
        style={
          isCollapsed
            ? { height: "0px", paddingTop: "0rem", paddingBottom: "0rem" }
            : { height: contentRef.current.scrollHeight + "px" }
        }
      >
        <div>
          {Array.isArray(props.texteCache) ? (
            <ul>
              {props.texteCache.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>{props.texteCache}</p>
          )}
        </div>
      </div>
    </article>
  );
}

export default TexteDeroulant;
