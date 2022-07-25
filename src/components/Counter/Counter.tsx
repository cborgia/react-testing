import { useState } from "react";

export interface CounterProps {
  description: string;
  defaultCount: number;
}

export function Counter({ description, defaultCount }: CounterProps) {
  const [count, setCount] = useState(defaultCount);
  const [incrementor, setIncrementor] = useState(1);

  return (
    <div>
      <h2>
        DESC:{description}- DC: {defaultCount}
      </h2>
      <label htmlFor="incrementor-input">Incrementor</label>
      <input
        type="text"
        id="incrementor-input"
        value={incrementor || ""}
        onChange={(e) => {
          setIncrementor(parseInt(e.target.value));
        }}
      />
      <br />
      <button
        aria-label="Decrement Counter"
        onClick={() => setCount(count - incrementor)}
      >
        -
      </button>
      Current Count: {count}
      <button
        aria-label="Increment Counter"
        onClick={() => setCount(count + incrementor)}
      >
        +
      </button>
    </div>
  );
}
