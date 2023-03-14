import React from "react";
import { Button, Flex, Image, Text, Link } from "@chakra-ui/core";

import arrowRight from "../../images/arrow-right.svg";
import checkIcon from "../../images/check-icon.svg";

const ListItem = (props) => {
  const { text } = props;

  return (
    <Flex gridGap={{ base: "12px", md: "8px" }}>
      <Image w="26px" h="26px" src={checkIcon} alt="check icon" />

      <Text>{text}</Text>
    </Flex>
  );
};

const LearnMoreButton = (props) => {
  const { buttonLink } = props;

  return (
    <Link href={buttonLink} _hover={{ cursor: "pointer" }}>
      <Button
        p={{ base: "5px 24px", lg: "7px 24px" }}
        border="1.5px solid #4838E4"
        borderRadius="10px"
        backgroundColor="#FFFFFF"
        _hover={{
          backgroundColor: "#EEECFF",
        }}
      >
        <Text color="#4838E4" fontSize="16px" lineHeight="20px">
          Learn more
        </Text>

        <Image w="35px" h="35px" src={arrowRight} alt="arrow" />
      </Button>
    </Link>
  );
};

export const CommonSection = (props) => {
  const { title, text, iconSrc, imageSrc, buttonLink, list = [], reverse = false } = props;

  return (
    <Flex
      mx={{ base: "24px", xl: "auto" }}
      maxW="1278px"
      direction="column"
      gridGap={{ base: "32px", xl: "40px" }}
      alignItems="center"
    >
      <Flex
        direction={{ base: "column", lg: reverse ? "row-reverse" : "row" }}
        alignItems="center"
        gridGap={{ base: "40px", md: "50px 75px", xl: reverse ? "132px" : "200px" }}
      >
        <Flex direction="column" gridGap="8px">
          {iconSrc && <Image w="48px" h="48px" src={iconSrc} alt="icon" />}

          <Flex direction="column" gridGap={{ base: "8px", md: "16px" }}>
            <Text
              color="#232426"
              fontFamily="Garnet Medium"
              fontSize={{ base: "24px", lg: "36px" }}
              lineHeight={{ base: "32px", lg: "48px" }}
            >
              {title}
            </Text>

            {text && (
              <Text
                color="#232426"
                fontSize={{ base: "16px", lg: "18px" }}
                lineHeight={{ base: "22px", lg: "26px" }}
              >
                {text}
              </Text>
            )}

            {list.length > 0 && (
              <Flex mt="8px" direction="column" gridGap={{ base: "8px", md: "16px" }}>
                {list.map((listItem, index) => (
                  <ListItem key={index} {...listItem} />
                ))}
              </Flex>
            )}
          </Flex>
        </Flex>

        <Image
          src={imageSrc}
          alt="content image"
          maxW={{ base: "100%", lg: "550px", xl: "627px" }}
          maxH={{ base: "340px", lg: "unset" }}
        />
      </Flex>

      {buttonLink && <LearnMoreButton buttonLink={buttonLink} />}
    </Flex>
  );
};
