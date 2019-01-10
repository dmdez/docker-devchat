import { useState, useEffect } from "react";

interface EmployeesResponse {
  name: string;
  title: string;
  image: string;
}

// https://github.com/benawad/react-hooks-examples/blob/2_api_useEffect/src/App.js
export function useFetchEmployees(queryString: string) {
  const [data, setData] = useState<EmployeesResponse[]>([]);
  const [loading, setLoading] = useState(true);

  async function doFetch() {
    setData([]);
    setLoading(true);
    const response = await fetch(
      `http://localhost:8000/employees?q=${queryString}`
    );
    const data = await response.json();
    setData(data);
    setLoading(false);
  }

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(
    () => {
      doFetch();
    },
    [queryString]
  );

  return { data, loading };
}
