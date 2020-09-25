module.exports.App = {
  content: `import React from "react";
import Footer from "@components/footer";
import NavBar from "@components/navBar";
import Routes from "./Routes";
export default function App(props) {
    return <div style={{ height: "100%" }}>
        <div style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            height: "100%"
        }}>
            <NavBar />

            <Routes />
            <Footer />

        </div>
    </div>;
}`
};
