import React, { useCallback, useEffect, useRef, useState } from "react";
import { withTheme } from "styled-components";
import { ToastContainer } from "react-toast";
import { Flex, Text, HamburgerMenu } from "components";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// assets
import DarkIcon from "public/images/theme-dark-icon.svg";
import LightIcon from "public/images/theme-light-icon.svg";

// Since we don't have any other layout I prefer to implement the Navbar here
// If we have more than one layout then I prefer to make a separate file for Navbar
const MainLayout = (props) => {
  const {
    children,
    theme: { theme, setTheme },
  } = props;

  const [visible, setVisible] = useState(false);
  const menuRef = useRef(null);

  const toggleVisible = () => {
    setVisible(!visible);
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleClick = useCallback((e) => {
    if (!!menuRef?.current && !menuRef.current.contains(e.target)) {
      setVisible(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

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
        position="fixed"
        style={{ zIndex: "100", top: "0" }}
      >
        <Flex width="100%" justifyContent="space-between" ref={menuRef}>
          <HamburgerMenu onClick={toggleVisible} />
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
                onClick={toggleTheme}
              />
            )}
            {theme === "light" && (
              <img
                src={DarkIcon}
                width="24px"
                height="24px"
                className="pointer"
                onClick={toggleTheme}
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
          <Link to="/lists/watch-later">
            <Text color="forceWhite">Watch later</Text>
          </Link>
          <Link to="/lists/favorites">
            <Text color="forceWhite">Favorites</Text>
          </Link>
        </Flex>
      </Flex>
      <Flex width="100%" background="accent">
        <Flex
          width="100%"
          maxWidth="1300px"
          justifyContent="space-between"
          padding="16px"
          display="flex"
          displayM="none"
        >
          <Flex flexGap="0 8px">
            <Link to="/">
              <Text
                color="lightBlue"
                fontSize="title4"
                weight="bold"
                marginRight="16px"
              >
                Movie Vibe
              </Text>
            </Link>
            <Link to="/lists/watch-later">
              <Text color="forceWhite">Watch later</Text>
            </Link>
            <Link to="/lists/favorites">
              <Text color="forceWhite">Favorites</Text>
            </Link>
          </Flex>

          <Flex>
            {theme === "dark" && (
              <img
                src={LightIcon}
                width="48px"
                height="48px"
                className="pointer"
                onClick={toggleTheme}
              />
            )}
            {theme === "light" && (
              <img
                src={DarkIcon}
                width="48px"
                height="48px"
                className="pointer"
                onClick={toggleTheme}
              />
            )}
          </Flex>
        </Flex>
      </Flex>
      <Flex width="100%" marginTopM="56px" justifyContent="center">
        {children}
        <ToastContainer />
      </Flex>
    </Flex>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.object,
};

export default withTheme(MainLayout);
