import { getContext } from 'waku/server';

export const getKV = async (key: string) => {
  const context = getContext<{ bindings: Bindings }>();
  const val = await context.bindings?.WAKU_SAMPLE?.get(key);
  return val;
};
