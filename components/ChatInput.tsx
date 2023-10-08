"use client";

import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { FormEvent, useState } from "react";
import { useSession } from "next-auth/react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/firebase";
import { toast } from "react-hot-toast";
import ModelSelection from "./ModelSelection";
import useSWR from "swr";

type Props = {
  chatId: string;
};

function ChatInput({ chatId }: Props) {
  const [prompt, setPrompt] = useState("");
  const { data: session } = useSession();

  const { data: model } = useSWR("model", {
    fallbackData: "text-davinci-003",
  });

  const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!prompt) return;

    const input = prompt.trim();
    setPrompt("");

    const message: Message = {
      text: input,
      createdAt: serverTimestamp(),
      user: {
        _id: session?.user?.email!,
        name: session?.user?.name!,
        avatar:
          session?.user?.image ||
          `https://ui-avatars.com/api/?name=${session?.user?.name!}`,
      },
    };

    await addDoc(
      collection(
        db,
        "users",
        session?.user?.email!,
        "chats",
        chatId,
        "messages"
      ),
      message
    );

    //Toast Notification to say Loading
    const notification = toast.loading("FlatGPT is thinking...");

    await fetch("/api/askQuestion", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: input,
        chatId,
        model,
        session,
      }),
    })
      .then(() => {
        // Toast Notification to say successful
        toast.success("FlatGPT has responded 🗿", {
          id: notification,
        });
      })
      .catch((err) => {
        toast.error("Something demonic happened 👹", {
          id: notification,
        });
      });
  };
  return (
    <div className="bg-neutral-700/50 text-neutral-400 rounded-lg text-sm">
      <form onSubmit={sendMessage} className="p-4 space-x-5 flex">
        <input
          disabled={!session}
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          type="text"
          placeholder="Type your message here..."
          className="bg-transparent outline-none flex-1 disabled:cursor-not-allowed disabled:text-neutral-300"
        />
        <button
          type="submit"
          disabled={!prompt || !session}
          className={`bg-teal-600 hover:opacity-50 text-white font-bold px-4 py-4 rounded disabled:bg-neutral-400 disabled:cursor-not-allowed`}
        >
          <PaperAirplaneIcon className="h-4 w-4 -rotate-45" />
        </button>
      </form>
      <div className="md:hidden">
        <ModelSelection />
      </div>
    </div>
  );
}

export default ChatInput;
