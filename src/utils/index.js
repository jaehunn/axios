import React from 'react';

export function usePromise(promiseCreator, deps = []) {
  const [loading, setLoading] = React.useState(false);
  const [resolve, setResolve] = React.useState(null);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const process = async () => {
      setLoading(true);

      try {
        const resolved = await promiseCreator();
        setResolve(resolved);
      } catch (e) {
        setError(e);
      }

      setLoading(false);
    };

    process();

    // eslint-disable-next-line
  }, deps);

  return [loading, resolve, error];
}
