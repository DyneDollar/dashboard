import {
  Button,
  Divider,
  Flex,
  Stack,
  Text,
} from "@chakra-ui/react";
import { CustomCard } from "../../../chakra/CustomCard";
import { Fragment } from "react";
import {tableData} from '../../Transaction/components/TransactionTable';
import { Link } from "react-router-dom";

const Transactions = () => {
  const transactions = tableData.slice(0,4);

  return (
    <CustomCard h="full">
      <Text mb="6" fontSize="sm" color="black.80">
        Recent Transactions
      </Text>
      <Stack spacing={4}>
        {transactions.map((transaction, i) => (
          <Fragment key={transaction.id}>
            {i !== 0 && <Divider />}
            <Flex gap="4">
              <Flex justify="space-between" w="full">
                <Stack spacing={0}>
                  <Text textStyle="h6">{transaction.coin}</Text>
                  <Text fontSize="sm" color="black.40">
                    {transaction.date}
                  </Text>
                </Stack>
                <Text textStyle="h6">{transaction.amount}</Text>
              </Flex>
            </Flex>
          </Fragment>
        ))}
      </Stack>
      <Button w="full" mt="6" colorScheme="gray">
        <Link to="/transactions">View All</Link>
      </Button>
    </CustomCard>
  );
};

export default Transactions;
