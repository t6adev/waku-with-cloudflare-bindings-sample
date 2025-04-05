import { getHonoContext } from './hono';

export const getKV = async (key: string) => {
  const context = getHonoContext();
  const val = await context?.env.WAKU_SAMPLE?.get(key);
  return val ?? null;
};
