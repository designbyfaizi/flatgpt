"use client";
import { PlusIcon } from "@heroicons/react/24/outline";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/firebase";

function NewChat() {
  const router = useRouter();
  const { data: session } = useSession();
  const createNewChat = async () => {
    const doc = await addDoc(
      collection(db, "users", session?.user?.email!, "chats"),
      {
        userId: session?.user?.email,
        createdAt: serverTimestamp(),
      }
    );

    router.push(`/chat/${doc.id}`);
  };
  return (
    <button
      onClick={createNewChat}
      className="border-neutral-700 border chatRow w-full flex justify-center mb-2"
    >
      <PlusIcon className="h-4 w-4" />
      <p>New Chat</p>
    </button>
  );
}

export default NewChat;
