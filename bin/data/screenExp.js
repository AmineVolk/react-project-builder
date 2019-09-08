const getScreenExp = (name) => {
    return `import React from "react";
  export default function ${name}() {
      return <div
          style={{ flex: 1, height: "100%", padding: 15 }} >
          ${name} screen
      </div>;
  
  };  
  `;
};
module.exports = { getScreenExp };
