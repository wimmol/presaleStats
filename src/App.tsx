import './index.css';
import {
  Box,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import presale from '../data/presalers.json';

function App() {
  return (
    <Box py={16}>
      <Text fontSize={36} pl={16}>
        A5 Presale Stats
      </Text>
      <Text pl={16}>Total: {Math.round(presale.total * 10) / 10} TON</Text>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th textAlign="start">№</Th>
              <Th textAlign="start">Name</Th>
              <Th textAlign="start" pl={8}>
                Username
              </Th>
              <Th textAlign="start" pl={16}>
                TON
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {presale.presalers.map((item, index) => (
              <Tr>
                <Td pr={16}>{index}</Td>
                <Td maxW={100} overflow="scroll">
                  {item.user_data.first_name +
                    ' ' +
                    (item.user_data.last_name || '')}
                </Td>
                <Td maxW={120} overflow="scroll" pl={8}>
                  {item.user_data.username ? (
                    <a
                      href={`https://t.me/${item.user_data.username}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.user_data.username}
                    </a>
                  ) : (
                    '-'
                  )}
                </Td>
                <Td isNumeric pl={16}>
                  <a
                    href={`https://tonviewer.com/${item.wallet}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {Math.round(item.amount * 10) / 10}
                  </a>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default App;
