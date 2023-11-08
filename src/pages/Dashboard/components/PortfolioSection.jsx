import { Button, HStack, Icon, Stack, Text, Image } from "@chakra-ui/react";
import React from "react";
import {
  AiOutlineInfoCircle,
  AiOutlineArrowDown,
} from "react-icons/ai";
import DDLogo from '../../../assets/D-Logo_BW_50px.png';
import { Link } from "react-router-dom";


const PortfolioSection = () => {
  return (
    <HStack
      justify="space-between"
      bg="white"
      borderRadius="xl"
      p="6"
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
            <Text fontSize="sm">Total Portfolio Value</Text>
            <Icon as={AiOutlineInfoCircle} />
          </HStack>
          <HStack>
            <Image src={DDLogo} alt="D$" className="dd-symbol"/>
            <Text textStyle="h2" fontWeight="medium">112,312.24</Text>
          </HStack>
        </Stack>

        <Stack>
          <HStack color="black.80">
            <Text fontSize="sm">Wallet Balances</Text>
          </HStack>
          <HStack
            spacing={2}
            align={{
              base: "flex-start",
              sm: "center",
            }}
            flexDir={{
              base: "column",
              sm: "row",
            }}
          >
            <HStack>
              <Image src={DDLogo} alt="D$" className="dd-symbol"/>
              <Text textStyle="h2" fontWeight="medium">22.39401000</Text>
            </HStack>
          </HStack>
        </Stack>
      </HStack>

      <HStack>
        <Button leftIcon={<Icon as={AiOutlineArrowDown} />}><Link to="/token-exchange">Deposit</Link></Button>
        {/* <Button leftIcon={<Icon as={AiOutlineArrowUp} />}>Withdraw</Button> */}
      </HStack>
    </HStack>
  );
};

export default PortfolioSection;
