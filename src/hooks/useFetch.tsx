import React from 'react';

const useFetch = (request: any, params: any) => {
  const [data, setData] = React.useState({});
  const [newParams, setParams] = React.useState(params);
  const fetchApi = React.useCallback(async () => {
    const res = await request(newParams);
    setData(res.data);
  }, [request]);

  React.useEffect(() => {
    fetchApi();
  }, [fetchApi]);
  return {
    data,
  };
};
export default useFetch;
