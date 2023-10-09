import type { NextApiRequest, NextApiResponse } from "next";
import query from "@/lib/queryApi";
import admin from "firebase-admin";
import { adminDb } from "@/firebaseAdmin";

type Data = {
  answer: string;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const { prompt, chatId, model, session } = req.body;
    if (!prompt) {
      res.status(400).json({ answer: "Please provide a prompt!" });
      return;
    }

    if (!chatId) {
      res.status(400).json({ answer: "Please provide a valid chat ID!" });
      return;
    }

    // FlatGPT query
    const response = await query(prompt, model);

    const message: Message = {
      text: response || "FlatGPT couldn't find an answer for that!",
      createdAt: admin.firestore.Timestamp.now(),
      user: {
        _id: "FlatGPT",
        name: "FlatGPT",
        avatar: "https://links.papareact.com/89k",
      },
    };

    await adminDb
      .collection("users")
      .doc(session?.user?.email)
      .collection("chats")
      .doc(chatId)
      .collection("messages")
      .add(message);

    res.status(200).json({ answer: message?.text });
  } catch (err: any) {
    res
      .status(400)
      .json({
        answer: "FlatGPT couldn't find an answer for that!",
        error: err.message,
      });
  }
}
