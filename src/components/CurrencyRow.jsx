import React, { useState } from "react";

function CurrencyRow({ options, selected, result }) {
  const [resultValue, setResultValue] = useState(result);
  const [selectedState, setSelectedState] = useState(selected);

  return (
    <div className="input">
      <input
        type="text"
        value={resultValue}
        onChange={(e) => setResultValue(e.target.value)}
      />
      <select
        value={selectedState}
        onChange={(e) => setSelectedState(e.target.value)}
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CurrencyRow;
