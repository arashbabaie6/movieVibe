import React, { useEffect, useState, useRef, useMemo } from "react";
import styled from "styled-components";
import { Flex, Text, Image, Loading } from "components";

const Wrapper = styled.div`
  .search-input {
    border: none;
    width: 80%;
    font-size: 16px;
  }
  .search-input:focus {
    outline: none;
  }

  .search-item:hover {
    background: #d9d9d9;
  }
`;

const SearchInput = ({ onChange, data, fetchingData, onSubmit }) => {
  const [value, setValue] = useState("");
  const [isFocus, setFocus] = useState(false);
  const myRef = useRef(null);

  const handleClick = (e) => {
    if (myRef?.current && myRef.current.contains(e.target)) {
      setFocus(true);
    } else setFocus(false);
  };

  const showResult = useMemo(() => {
    return !!data?.length && !!value?.length && isFocus;
  }, [data, value, isFocus]);

  useEffect(() => {
    !!onChange && onChange(value);
  }, [value]);

  useEffect(() => {
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);
  return (
    <Wrapper
      as={Flex}
      width="100%"
      background="forceWhite"
      borderRadius="8px"
      padding="4px 8px"
      alignItems="flex-start"
      flexDirection="column"
      position="relative"
      ref={myRef}
    >
      <Flex width="100%" justifyContent="space-between" height="28px">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Search for a movie"
          className="search-input"
        />
        {fetchingData && <Loading size={18}/>}
        {!fetchingData && showResult && (
          <Flex
            width="160px"
            borderRadius="8px"
            padding="2px 8px"
            background="accent"
            style={{ cursor: "pointer" }}
            onClick={onSubmit}
          >
            <Text color="forceWhite">Show all results</Text>
          </Flex>
        )}
      </Flex>
      {showResult && (
        <Flex
          width="100%"
          heightM="200px"
          height="300px"
          position="absolute"
          maxWidth="375px"
          background="forceWhite"
          flexDirection="column"
          borderRadius="8px"
          justifyContent="flex-start"
          flexGap="4px 0"
          style={{ top: 40, left: 0, zIndex: 200, overflowY: "auto" }}
        >
          {!!data.length &&
            data.map((item) => (
              <Flex
                className="search-item"
                key={item.id}
                width="100%"
                padding="4px 8px"
                justifyContent="flex-start"
                flexGap="0 4px"
                style={{ cursor: "pointer" }}
              >
                <Image width="64px" height="64px" src={item.poster_path || ''} />
                <Flex flexDirection="column" alignItems="flex-start">
                  <Text color="forceBlack">{item.title || null}</Text>
                  <Text color="forceBlack">{item.release_date || null}</Text>
                </Flex>
              </Flex>
            ))}
        </Flex>
      )}
    </Wrapper>
  );
};

export default SearchInput;
