import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Stack,
  Text,
  Tag,
} from "@chakra-ui/react";
// import { getTransactions } from '../../../utilities/dbAccess.js';
// import { useState } from "react";

export const tableData = [
  {
    id: 1,
    date: "2022-06-09",
    coin: "ETH",
    amount: 250.81,
    status: "completed",
    information: "Address: bhjgfAhdgf2124df24df587dfs4sdf44s2dd2f5s"
  },
  {
    id: 2,
    date: "2022-06-09",
    coin: "ETH",
    amount: 250.81,
    status: "completed",
    information: "Address: bhjgfAhdgf2124df24df587dfs4sdf44s2dd2f5s"
  },
  {
    id: 3,
    date: "2022-06-09",
    coin: "ETH",
    amount: 250.81,
    status: "completed",
    information: "Address: bhjgfAhdgf2124df24df587dfs4sdf44s2dd2f5s"
  },
  {
    id: 4,
    date: "2022-06-09",
    coin: "ETH",
    amount: 250.81,
    status: "completed",
    information: "Address: bhjgfAhdgf2124df24df587dfs4sdf44s2dd2f5s"
  },
  {
    id: 5,
    date: "2022-06-09",
    coin: "ETH",
    amount: 250.81,
    status: "completed",
    information: "Address: bhjgfAhdgf2124df24df587dfs4sdf44s2dd2f5s"
  },
  {
    id: 6,
    date: "2022-06-09",
    coin: "ETH",
    amount: 250.81,
    status: "completed",
    information: "Address: bhjgfAhdgf2124df24df587dfs4sdf44s2dd2f5s"
  },
  {
    id: 7,
    date: "2022-06-09",
    coin: "ETH",
    amount: 250.81,
    status: "completed",
    information: "Address: bhjgfAhdgf2124df24df587dfs4sdf44s2dd2f5s"
  },
  {
    id: 8,
    date: "2022-06-09",
    coin: "ETH",
    amount: 250.81,
    status: "completed",
    information: "Address: bhjgfAhdgf2124df24df587dfs4sdf44s2dd2f5s"
  }
];

const TransactionTable = () => {
  // getTransactions()
  // .then((transactions) => {
  //   setTransactionData(transactions);
  // })
  // .catch((err) => {
  //   console.error(err);
  // });

  const statusColor = {
    pending: "#797E82",
    processing: "#F5A50B",
    completed: "#059669",
    cancelled: "#DC2626",
  };

  return (
    <TableContainer>
      <Table variant="simple" colorScheme="gray">
        <Thead>
          <Tr>
            <Th>Date</Th>
            <Th>Coin</Th>
            <Th>Amount</Th>
            <Th>Status</Th>
            <Th>Information</Th>
          </Tr>
        </Thead>
        <Tbody color="p.black">
          {tableData.map((data) => (
            <Tr key={data.id}>
              <Td>
                <Stack spacing={0}>
                  <Text fontSize="sm" fontWeight="medium">
                    {data.date}
                  </Text>
                </Stack>
              </Td>
              <Td>
                {" "}
                <Stack spacing={0}>
                  <Text fontSize="sm" fontWeight="medium">
                    {data.coin}
                  </Text>
                </Stack>
              </Td>
              <Td fontSize="sm" fontWeight="medium">
                {data.amount}
              </Td>
              <Td fontSize="sm" fontWeight="medium">
                <Tag
                  bg={statusColor[data.status]}
                  color="white"
                  borderRadius="full"
                >
                  {data.status}
                </Tag>
              </Td>
              <Td>
                {" "}
                <Stack spacing={0}>
                  <Text fontSize="sm" fontWeight="medium">
                    {data.information}
                  </Text>
                </Stack>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default TransactionTable;
