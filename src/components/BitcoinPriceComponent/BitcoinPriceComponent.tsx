import { useEffect, useState, type JSX } from 'react';

interface CoinGeckoResponse {
  bitcoin: {
    usd: number;
  };
}

export default function Bitcoin(): JSX.Element {
  const [rate, setRate] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  async function loadBitcoinData(): Promise<void> {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(
        'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd'
      );

      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }

      const data: CoinGeckoResponse = await response.json();

      setRate(data.bitcoin.usd);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadBitcoinData();
  }, []);

  return (
    <div>
      <h1>Bitcoin Price</h1>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}

      {rate !== null && !loading && !error && (
        <p>USD: ${rate.toLocaleString()}</p>
      )}

      <button type="button" onClick={loadBitcoinData}>
        Refresh
      </button>
    </div>
  );
}