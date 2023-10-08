import Chat from "@/components/Chat";
import ChatInput from "@/components/ChatInput";

type Props = {
  params: {
    id: string;
  };
};
function ChatPage({ params }: Props) {
  const { id } = params;
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Chat chatId={id} />
      <ChatInput chatId={id} />
    </div>
  );
}

export default ChatPage;
