import React from "react";
import { withTheme } from "styled-components";
import { Flex } from "components";

// assets
import DarkIcon from "public/images/theme-dark-icon.svg";
import LightIcon from "public/images/theme-light-icon.svg";

const Navbar = (props) => {
  const {
    children,
    theme: { theme, setTheme },
  } = props;

  return (
    <Flex width="100%" flexDirection="column">
      <Flex width="100%" justifyContent="flex-start" padding="16px">
        {theme === "dark" && (
          <img
            src={LightIcon}
            width="64px"
            height="64px"
            className="pointer"
            onClick={() => setTheme("light")}
          />
        )}
        {theme === "light" && (
          <img
            src={DarkIcon}
            width="64px"
            height="64px"
            className="pointer"
            onClick={() => setTheme("dark")}
          />
        )}
      </Flex>
      {children}
    </Flex>
  );
};

export default withTheme(Navbar);
