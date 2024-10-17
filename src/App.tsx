import './index.css';
import { useState } from 'react';
import Presale from '@pages/Presale.tsx';
import { Box, Button, Input, Text } from '@chakra-ui/react';

function App() {
  const [tab, setTab] = useState('token');
  const [token, setToken] = useState();
  const [input, setInput] = useState();

  return (
    <Box>
      <Text>Access token 0_0 0_o 0_-</Text>
      <Input onChange={(e) => setInput(e.target.value)} />
      <Button onClick={() => setToken(input)}>Fetch</Button>
      <Presale token={token} />
    </Box>
  );
}

export default App;
