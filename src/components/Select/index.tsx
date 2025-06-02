import { IonIcon } from "@ionic/react";
import { chevronBack } from "ionicons/icons";
import React, { useState } from "react";

export type SelectProps = {
  onSelect: (value: { value: string; label: string }) => void;
  selectedLabel: string;
  elements: { value: string; label: string }[];
};
export default function Select({
    onSelect,
    selectedLabel,
    elements,
}: SelectProps) {
    const [active, setActive] = useState(false);

    const handleSelect = (cat: { value: string; label: string }) => {
        onSelect(cat);
        setActive(false);
    };

    return (
      <div className={`filter-select-box`}>
        <button
          className={`filter-select ${active ? "active" : ""}`} 
          type="button"
          onClick={() => setActive((prev) => !prev)}
        >
          <div className="select-value">{selectedLabel}</div>
          <div className="select-icon">
            <IonIcon icon={chevronBack} />
          </div>
        </button>

        {active && (
          <ul className="select-list">
            {elements.map((cat) => (
              <li className="select-item" key={cat.value}>
                <button type="button" onClick={() => handleSelect(cat)}>
                  {cat.label}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
}
