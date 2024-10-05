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
import round1 from './data/round1_users.json';
import round2 from './data/round2_users.json';
import round3 from './data/round3_users.json';
import { useMemo } from 'react';

function App() {
  const presale = useMemo(
    () => [...round1, ...round2, ...round3],
    [round1, round2, round3]
  );
  const { total, uniq } = useMemo(() => {
    let total = 0;
    const uniq = {};
    presale.forEach((item) => {
      total += item.amount;
      if (uniq[item.id]) {
        uniq[item.id] = {
          ...uniq[item.id],
          amount: uniq[item.id].amount + item.amount,
        };
      } else {
        uniq[item.id] = item;
      }
    });
    return {
      total,
      uniq: Object.values(uniq).sort((a, b) => (a.amount < b.amount ? 1 : -1)),
    };
  }, [presale]);
  // const total1 = uniq.reduce((acc, item) => (acc += item.amount), 0);
  return (
    <Box py={16}>
      <Text fontSize={36} pl={16}>
        A5 Presale Stats
      </Text>
      <Text pl={16}>Total: {Math.round(total * 10) / 10} TON</Text>
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
                Amount TON
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {uniq.map((item, index) => (
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
