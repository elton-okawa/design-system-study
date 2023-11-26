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

      <Stack alignItems="center" width="500px">
        <Button
          variant="rect-primary"
          isLoading={count % 2 === 0}
          alignSelf="flex-start"
        >
          Test
        </Button>
        <Button
          variant="pill-secondary"
          isLoading={count % 2 === 0}
          alignSelf="flex-end"
        >
          Test
        </Button>
        <Tile alignSelf={[null, 'flex-start', 'center', 'flex-end']}>
          <p>Super tile</p>
          <p>Hyper tile</p>
        </Tile>
      </Stack>
    </>
  );
}

export default App;
