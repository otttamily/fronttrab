import React, { useState } from 'react';
import './MenuDropdown.css';

function MenuDropdown({ title, options }) {
  const [open, setOpen] = useState(false);
  const [submenuIndex, setSubmenuIndex] = useState(null); // controla submenu aberto

  return (
    <div className="menu-dropdown">
      <button className="menu-main-button" onClick={() => setOpen(!open)}>
        {title}
        <span className="dots">⋮</span>
      </button>

      {open && (
        <div className="dropdown-options">
          {options.map((opt, index) => (
            <div
              key={index}
              className="dropdown-option"
              onClick={() => opt.onClick && opt.onClick()}
              onMouseEnter={() => opt.children && setSubmenuIndex(index)}
              onMouseLeave={() => setSubmenuIndex(null)}
            >
              {opt.label}
              {opt.children && <span className="submenu-arrow">▸</span>}

              {submenuIndex === index && opt.children && (
                <div className="submenu-options">
                  {opt.children.map((child, i) => (
                    <div
                      key={i}
                      className="dropdown-option"
                      onClick={child.onClick}
                    >
                      {child.label}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MenuDropdown;
