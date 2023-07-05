import { useState } from "react";
import { useRef } from "react";

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
      <button onClick={triggerCollapse}>Fleche</button>
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
