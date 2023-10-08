import type { NextApiRequest, NextApiResponse } from "next";
import query from "@/lib/queryApi";
import admin from "firebase-admin";
import { adminDb } from "@/firebaseAdmin";
import openai from "@/lib/chatgpt";

type Option = {
  value: string;
  label: string;
};

type Data = {
  modelOptions: Option[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // FlatGPT query
  const models = await openai.models.list().then((res) => res.data);

  const modelOptions = models.map((model) => ({
    value: model.id,
    label: model.id,
  }));

  res.status(200).json({ modelOptions });
}
