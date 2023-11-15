import { useState } from 'react';
import './App.css';
import { Tile, Button, Stack } from '../lib';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </Button>

      <Stack alignItems="flex-start">
        <Button variant="rect-primary" isLoading={count % 2 === 0}>
          Test
        </Button>
        <Button variant="pill-secondary" isLoading={count % 2 === 0}>
          Test
        </Button>
        <Tile alignSelf="flex-end">
          <p>Super tile</p>
          <p>Hyper tile</p>
        </Tile>
      </Stack>
    </>
  );
}

export default App;
