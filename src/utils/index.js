import React from 'react';

export function usePromise(promiseCreator, deps = []) {
  const [loading, setLoading] = React.useState(false);
  const [response, setResponse] = React.useState(null);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const process = async () => {
      setLoading(true);

      try {
        const response = await promiseCreator();
        setResponse(response);
      } catch (e) {
        setError(e);
      }

      setLoading(false);
    };

    process();

    // eslint-disable-next-line
  }, deps);

  return [loading, response, error];
}
