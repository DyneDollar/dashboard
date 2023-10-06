import React, { useState } from 'react';
import {
  Box,
  Flex,
  Input,
  Button,
  Select,
  FormLabel
} from '@chakra-ui/react';
import DashboardLayout from "../../components/DashboardLayout";

const TokenExchange = () => {
  // State to manage the amount entered by the user
  const [amount, setAmount] = useState('');

  // State to manage the selected token from the dropdown
  const [selectedToken, setSelectedToken] = useState('');

  // Function to handle the Invest button click
  const handleInvest = () => {
    // You can implement your logic here for handling the investment action
    console.log(`Investing ${amount} in ${selectedToken}`);
  };

  return (
    <DashboardLayout title="Token Exchange">
      <Box p="4" borderWidth="1px" borderRadius="md">
        <Flex align="center" direction="column">
          <Flex align="center">
            <FormLabel htmlFor="amount">Amount:</FormLabel>
            <Input
              id="amount"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              ml="2"
            />
          </Flex>

          <Flex align="center" mt="2">
            <FormLabel htmlFor="token">Choose Token:</FormLabel>
            <Select
              id="token"
              placeholder="Select token"
              value={selectedToken}
              onChange={(e) => setSelectedToken(e.target.value)}
              ml="2"
            >
              <option value="token1">Token 1</option>
              <option value="token2">Token 2</option>
              <option value="token3">Token 3</option>
            </Select>
          </Flex>

          <Button
            colorScheme="teal"
            mt="2"
            onClick={handleInvest}
            disabled={!amount || !selectedToken}
          >
            Invest
          </Button>
        </Flex>
      </Box>
    </DashboardLayout>
  );
};

export default TokenExchange;
