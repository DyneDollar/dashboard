import { Button, HStack, Icon, Stack, Tag, Text, Image } from "@chakra-ui/react";
import React from "react";
import {
  AiOutlineInfoCircle,
  AiOutlineArrowDown,
  AiOutlineArrowUp,
} from "react-icons/ai";
import { formatTime, formatWithCommas } from '../../../utilities/helper';
import DDLogo from '../../../assets/D-Logo_BW_50px.png';


const BasicStats = () => {
    const hours = 5;
    const minutes = 32;
    const seconds = 10;
    const marketPrice = 0.05;
    const priceTarget = 1.16;
    const totalSupply = 22473021.10;

    return (
    <HStack justify="space-between" bg="white" borderRadius="xl" p="6"
      align={{
        base: "flex-start",
        xl: "center",
      }} 
      flexDir={{
        base: "column",
        xl: "row",
      }}
      spacing={{
        base: 4,
        xl: 0,
      }}
    >
      <HStack
        spacing={{
          base: 0,
          xl: 16,
        }}
        align={{
          base: "flex-start",
          xl: "center",
        }}
        flexDir={{
          base: "column",
          xl: "row",
        }}
      >
        <Stack>
          <HStack color="black.80">
            <Text fontSize="sm">Next Rebase</Text>
            <Icon as={AiOutlineInfoCircle} />
          </HStack>
          <Text textStyle="h2" fontWeight="medium">
            {formatTime(hours, minutes, seconds)}
          </Text>
        </Stack>

        <Stack>
          <HStack color="black.80">
            <Text fontSize="sm">Market Price</Text>
            <Icon as={AiOutlineInfoCircle} />
          </HStack>
          <HStack>
            <Image src={DDLogo} alt="D$" className="dd-symbol"/>
            <Text textStyle="h2" fontWeight="medium">{marketPrice}</Text>
          </HStack>
        </Stack>
        <Stack>
          <HStack color="black.80">
            <Text fontSize="sm">Price Target</Text>
            <Icon as={AiOutlineInfoCircle} />
          </HStack>
          <HStack>
            <Image src={DDLogo} alt="D$" className="dd-symbol"/>
            <Text textStyle="h2" fontWeight="medium">{priceTarget}</Text>
          </HStack>
        </Stack>

        <Stack>
          <HStack color="black.80">
            <Text fontSize="sm">Total Supply</Text>
            <Icon as={AiOutlineInfoCircle} />
          </HStack>
          <Text textStyle="h2" fontWeight="medium">
            {formatWithCommas(totalSupply)}
          </Text>
        </Stack>
      </HStack>
    </HStack>
  );
};

export default BasicStats;
