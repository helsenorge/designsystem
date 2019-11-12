import { useEffect, useState } from "react";

function useLatestNPMVersion(tags: string | string[]): any {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  async function fetchUrl(): Promise<void> {
    const response = await fetch('https://cors-anywhere.herokuapp.com/https://registry.npmjs.org/@helsenorge/designsystem');
    const json = await response.json();
    setData(json);
    setLoading(false);
  }
  useEffect((): void => {
    fetchUrl();
  }, []);
  return [data, loading];
}

export default useLatestNPMVersion;