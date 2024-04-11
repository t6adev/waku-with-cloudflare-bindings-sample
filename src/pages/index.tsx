import { Link } from 'waku';

import { Counter } from '../components/counter.js';
import { getKV } from '../kv.js';

export default async function HomePage() {
  const data = await getData();
  const val = await getKV('sample-key');

  return (
    <div>
      <title>{data.title}</title>
      <h1 className="text-4xl font-bold tracking-tight">{data.headline}</h1>
      <p>{data.body}</p>
      <Counter />
      <div>Sample KV value: {val}</div>
      <Link to="/about" className="mt-4 inline-block underline">
        About page
      </Link>
    </div>
  );
}

const getData = async () => {
  const data = {
    title: 'Waku',
    headline: 'Waku',
    body: 'Hello world!',
  };

  return data;
};

export const getConfig = async () => {
  return {
    render: 'dynamic',
  };
};
