import { FC, useState } from 'react';
import './App.css';
import { executeHelloWorld } from '../../shared/api-tools';

export const App: FC = () => {
  const [isExecutionLoading, setIsExecutionLoading] = useState<boolean>(false);
  const [executionResult, setExecutionResult] = useState<string>('');

  return (
    <main className="main">
      <h1>Welcome to my app</h1>
      <button
        disabled={isExecutionLoading}
        onClick={async () => {
          setIsExecutionLoading(true);

          try {
            setExecutionResult(await executeHelloWorld());
          } catch (error) {
            setExecutionResult(String(error));
          } finally {
            setIsExecutionLoading(false);
          }
        }}
      >
        Execute Hello world program
      </button>
      {executionResult && <p>{`Execution result: "${executionResult}".`}</p>}
    </main>
  );
};
