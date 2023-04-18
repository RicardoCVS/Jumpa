import React, { useEffect, useState } from "react";
function Menu() {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div>
        <button onClick={() => setIsOpen(!isOpen)}>Abrir Menú</button>
        {isOpen && (
          <div className="menu">
            <ul>
              <li>Opción 1</li>
              <li>Opción 2</li>
              <li>Opción 3</li>
            </ul>
          </div>
        )}
      </div>
    );
  }
  export default Menu;