const content = `import R from "@res/R";
import React from "react";
import { Link } from "react-router-dom";

const NavBar = (props) => {
    const linkStyle = {
        textDecoration: "none",
        color: "black"
    };
    return <div style={{ background: R.Colors.background, borderBottom: \`1px solid \${ R.Colors.divider} \` }}>
        <div style={{ display: "flex" }}>
            <div style={{ padding: 15, borderRight: \`1px solid \${ R.Colors.divider} \` }} >
                <Link to="/" style={linkStyle}>
                    Home

                </Link>
            </div>
            <div style={{ padding: 15, borderRight: \`1px solid \${ R.Colors.divider} \` }} >

                <Link to="/screenExp1" style={linkStyle}>
                    ScreenExp1

                </Link>
            </div>
        </div>
    </div>
}
export default NavBar;`;
module.exports.navBar = { content };
