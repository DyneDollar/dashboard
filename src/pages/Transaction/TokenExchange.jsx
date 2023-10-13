import React, { useState, useEffect } from 'react';
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

  // State to manage the number of DyneDolar Tokens
  const [dyneDolarTokens, setDyneDolarTokens] = useState(0);

  // State to manage the number of Themis Tokens (with 1% Bonus)
  const [themisTokens, setThemisTokens] = useState(0);

  // State to manage the loading state of the "Invest" button
  const [isLoading, setIsLoading] = useState(false);

  
  const [dyneDollarContractId, setDyneDollarContractId] = useState('');
  const [TGTTokens, setTGTTokens] = useState('');

  // Function to handle the Invest button click
  const handleInvest = () => {
    // Prevent further clicks while processing
    setIsLoading(true);

    // Simulate an asynchronous action (e.g., an API call)
    setTimeout(() => {
      // You can implement your logic here for handling the investment action

      // Reset loading state after the action is complete
      setIsLoading(false);

      console.log(`Investing ${amount} in ${selectedToken}`);
      console.log(`DyneDolar Tokens: ${dyneDolarTokens}`);
      console.log(`Themis Tokens (with 1% Bonus): ${themisTokens}`);
    }, 2000); // Simulated 2-second delay
  };

  // Reset loading state when amount or selectedToken changes
  useEffect(() => {
    setIsLoading(false);
    setDyneDolarTokens(amount);
    setThemisTokens(amount * 0.01)
  }, [amount, selectedToken]);

  return (
    <DashboardLayout title="Get DyneDollar">
      <Flex align="left">
        <Box>
          <Flex direction="column">
            <Flex align="left">
              <FormLabel htmlFor="amount">Amount: </FormLabel>
              <Input
                id="amount"
                placeholder="Enter amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </Flex>

            <Flex align="left" mt="5">
              <FormLabel htmlFor="token">Choose Token:</FormLabel>
              <Select
                id="token"
                placeholder="Select token"
                value={selectedToken}
                onChange={(e) => setSelectedToken(e.target.value)}
              >
                <option value="token1">USDT (Tether)</option>
                <option value="token2">USDC</option>
                <option value="token3">DAI</option>
                <option value="token3">Ether</option>
                <option value="token3">MATIC</option>
              </Select>
            </Flex>
            <Box mt="5" p="1rem">
              <Flex align="left"><FormLabel htmlFor="youWillReceive">You will receive:</FormLabel></Flex>
              <Flex align="left" mt="3">
                <Box flex="1">
                  <FormLabel htmlFor="dyneDolarTokens">DyneDolar Tokens:</FormLabel>
                  <Input
                    id="dyneDolarTokens"
                    placeholder="Enter DyneDolar Tokens"
                    value={dyneDolarTokens}
                    onChange={(e) => setDyneDolarTokens(e.target.value)}
                    type="number"
                  />
                </Box>
                <Box flex="1" ml="3">
                  <FormLabel htmlFor="themisTokens">Themis Tokens (1% Bonus):</FormLabel>
                  <Input
                    id="themisTokens"
                    placeholder="Enter Themis Tokens"
                    value={themisTokens}
                    onChange={(e) => setThemisTokens(e.target.value)}
                    type="number"
                  />
                </Box>
              </Flex>
            </Box>

            <Flex>
              <Button
                colorScheme="teal"
                mt="5"
                onClick={handleInvest}
                disabled={!amount || !selectedToken || !dyneDolarTokens || !themisTokens || isLoading}
                isLoading={isLoading}
                loadingText="Investing..."
              >
                Invest
              </Button>
            </Flex>
            <Box mt="5" p="1rem">
              <Flex align="left"><FormLabel htmlFor="dyneDollarAndGovernance">To see DyneDollar & Governance Tokens in your Metamask, Add: </FormLabel></Flex>
              <Flex align="left" mt="3">
                <Box flex="1">
                  <FormLabel htmlFor="dyneDollarContractId">DyneDolar Tokens:</FormLabel>
                  <Input
                    id="dyneDollarContractId"
                    placeholder="Enter DyneDolar Contract Id"
                    value={dyneDollarContractId}
                    onChange={(e) => setDyneDollarContractId(e.target.value)}
                    type="text"
                  />
                </Box>
                <Box align="left" flex="1" ml="3">
                  <FormLabel htmlFor="TGTTokens">TGT Tokens:</FormLabel>
                  <Input
                    id="TGTTokens"
                    placeholder="Enter Themis Tokens"
                    value={TGTTokens}
                    onChange={(e) => setTGTTokens(e.target.value)}
                    type="text"
                  />
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </DashboardLayout>
  );
};

export default TokenExchange;
