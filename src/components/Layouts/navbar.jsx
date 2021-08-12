import React, { useState } from "react";
import { withTheme } from "styled-components";
import { Flex, Text, HamburgerMenu } from "components";
import { Link } from "react-router-dom";

// assets
import DarkIcon from "public/images/theme-dark-icon.svg";
import LightIcon from "public/images/theme-light-icon.svg";

const Navbar = (props) => {
  const {
    children,
    theme: { theme, setTheme },
  } = props;

  const [visible, setVisible] = useState(false);

  return (
    <Flex width="100%" flexDirection="column">
      <Flex
        width="100%"
        justifyContent="space-between"
        paddingM="16px"
        background="accent"
        display="none"
        displayM="flex"
        flexDirectionM="column"
      >
        <Flex width="100%" justifyContent="space-between">
          <HamburgerMenu
            onClick={() => {
              setVisible(!visible);
            }}
          />
          <Flex flexGap="0 8px">
            <Link to="/">
              <Text color="lightBlue" fontSize="title4" weight="bold">
                Movie Vibe
              </Text>
            </Link>
            {theme === "dark" && (
              <img
                src={LightIcon}
                width="24px"
                height="24px"
                className="pointer"
                onClick={() => setTheme("light")}
              />
            )}
            {theme === "light" && (
              <img
                src={DarkIcon}
                width="24px"
                height="24px"
                className="pointer"
                onClick={() => setTheme("dark")}
              />
            )}
          </Flex>
        </Flex>
        <Flex
          marginTop="8px"
          flexGap="8px 0"
          display={visible ? "flex" : "none"}
          flexDirection="column"
        >
          <Text color="forceWhite">Movies</Text>
          <Text color="forceWhite">TV Shows</Text>
        </Flex>
      </Flex>
      <Flex
        width="100%"
        justifyContent="space-between"
        padding="16px"
        background="accent"
        display="flex"
        displayM="none"
      >
        <Flex flexGap="0 8px">
          <Link to="/">
            <Text color="lightBlue" fontSize="title4" weight="bold" marginRight='16px'>
              Movie Vibe
            </Text>
          </Link>
          <Text color="forceWhite">Movies</Text>
          <Text color="forceWhite">TV Shows</Text>
        </Flex>

        <Flex>
          {theme === "dark" && (
            <img
              src={LightIcon}
              width="48px"
              height="48px"
              className="pointer"
              onClick={() => setTheme("light")}
            />
          )}
          {theme === "light" && (
            <img
              src={DarkIcon}
              width="48px"
              height="48px"
              className="pointer"
              onClick={() => setTheme("dark")}
            />
          )}
        </Flex>
      </Flex>
      {children}
    </Flex>
  );
};

export default withTheme(Navbar);
