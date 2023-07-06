import { useState } from "react";
import { useRef } from "react";
import fleche from "../../assets/logos/arrow-white.svg";

function MenuDeroulant(props) {
  // faire l'animation de la petite fleche qui tourne quand on clique
  const [isCollapsed, setCollapse] = useState(true);
  const contentRef = useRef(null);
  const triggerCollapse = () => {
    setCollapse((prevState) => {
      return !prevState;
    });
  };

  return (
    <div>
      <div>{props.texteAffiche}</div>
      <button onClick={triggerCollapse}>
        <img
          src={fleche}
          alt="Fleche de déroulement"
          className={isCollapsed ? "fleche-en-haut" : "fleche-en-bas"}
        />
      </button>
      <div
        ref={contentRef}
        className={isCollapsed ? "content-parent" : "content-show"}
        style={
          isCollapsed
            ? { height: "0px" }
            : { height: contentRef.current.scrollHeight + "px" }
        }
      >
        <div>{props.texteCache}</div>
      </div>
    </div>
  );
}

export default MenuDeroulant;
