import React, { useState, useEffect } from 'react';
import {
  Box,
  Flex,
  Input,
  Button,
  Select,
  FormLabel,
  Text,
} from '@chakra-ui/react';
import DashboardLayout from '../../components/DashboardLayout';
import { Link } from "react-router-dom";

const TokenExchange = () => {
  const [amount, setAmount] = useState('');
  const [selectedToken, setSelectedToken] = useState('');
  const [dyneDolarTokens, setDyneDolarTokens] = useState(0);
  const [themisTokens, setThemisTokens] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [dyneDollarContractId, setDyneDollarContractId] = useState('');
  const [TGTTokens, setTGTTokens] = useState('');
  const [error, setError] = useState('');

  const handleInvest = () => {
    // Clear any previous error messages
    setError('');

    if (amount === '' || parseFloat(amount) <= 0) {
      setError('Amount must be greater than 0');
    } else {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        console.log(`Investing ${amount} in ${selectedToken}`);
        console.log(`DyneDolar Tokens: ${dyneDolarTokens}`);
        console.log(`Themis Tokens (with 1% Bonus): ${themisTokens}`);
      }, 2000);
    }
  };

  useEffect(() => {
    setIsLoading(false);
    setDyneDolarTokens(amount);
    setThemisTokens(amount * 0.01);
  }, [amount, selectedToken]);

  return (
    <DashboardLayout title="Get DyneDollar">
      <Flex>
        <Box>
          <FormLabel htmlFor="amount">Amount: </FormLabel>
          <Input
            id="amount"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            mb={4}
          />
          {error && (
            <Text color="red" mb={4}>
              {error}
            </Text>
          )}
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
            <option value="token4">Ether</option>
            <option value="token5">MATIC</option>
          </Select>
          
          <Box mt="5">
            <FormLabel htmlFor="youWillReceive">You will receive:</FormLabel>
            <Flex flexDirection="row" alignItems="center">
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

          <Button
            mt="5"
            onClick={handleInvest}
            disabled={!amount || !selectedToken || !dyneDolarTokens || !themisTokens || isLoading}
            isLoading={isLoading}
            loadingText="Investing..."
          >
            Invest
          </Button>

          <Box mt="5">
            <FormLabel htmlFor="dyneDollarAndGovernance">To see DyneDollar & Governance Tokens in your Metamask, Add:</FormLabel>
            <Flex flexDirection="row" alignItems="center">
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
              <Box flex="1" ml="3">
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
          <Button
            mt="5"
          >
            <Link to="/transactions">My Transactions History</Link>
          </Button>
        </Box>
      </Flex>
    </DashboardLayout>
  );
};

export default TokenExchange;