"use client";

import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { useSession } from "next-auth/react";

type Props = {
  chatId: string;
};

function ChatInput({ chatId }: Props) {
  const [prompt, setPrompt] = useState("");
  const { data: session } = useSession();
  return (
    <div className="bg-neutral-700/50 text-neutral-400 rounded-lg text-sm">
      <form className="p-4 space-x-5 flex">
        <input
          disabled={!session}
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          type="text"
          placeholder="Type your message here..."
          className="bg-transparent outline-none flex-1 disabled:cursor-not-allowed disabled:text-neutral-300"
        />
        <button type="submit" disabled={!prompt || !session} className={`bg-teal-600 hover:opacity-50 text-white font-bold px-4 py-4 rounded disabled:bg-neutral-400 disabled:cursor-not-allowed`}>
          <PaperAirplaneIcon className="h-4 w-4 -rotate-45" />
        </button>
      </form>
      <div>{/* Model Selection */}</div>
    </div>
  );
}

export default ChatInput;
