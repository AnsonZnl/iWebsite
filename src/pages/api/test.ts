import type { NextApiRequest, NextApiResponse } from "next";
import kv from "@vercel/kv";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  await kv.set("user_1_session", "session_token_value");
  const session: any = await kv.get("user_1_session");
  res.status(200).json({ session });
}