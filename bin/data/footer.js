const content = `import R from "@res/R.js";
import React from "react";
const Footer = () => {
    const linkStyle = {
        textDecoration: "none",
        color: "#267D32",
        paddingLeft: 5,
    };
    return <div
        style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center", background: R.Colors.background, borderTop: \` 1px solid \${R.Colors.divider} \`
        }}>
        <p>created by </p>
        <a href="https://github.com/AmineVolk" style={linkStyle}>AmineVolk</a>

    </div>
}
export default Footer;`;

module.exports.footer = { content };
