import { unstable_getCustomContext as getCustomContext } from 'waku/server';

export const getKV = async (key: string) => {
  const context = getCustomContext<{ bindings: Bindings }>();
  const val = await context.bindings?.WAKU_SAMPLE?.get(key);
  return val;
};
