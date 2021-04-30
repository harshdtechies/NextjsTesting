import React from "react";
import headerStyles from "../styles/Header.module.css";

const Header = () => {
  const x = 6;
  return (
    <div style={{ marginTop: "1050px" }}>
      <h1 className={headerStyles.title}>
        <span>WebDev</span> News
      </h1>
      <p className={headerStyles.description}>
        Keep us updated with the latest news
      </p>
      {
        <style jsx>
          {`
            .title {
              color: ${x > 3 ? "red" : "blue"};
            }
          `}
        </style>
      }
    </div>
  );
};

export default Header;
