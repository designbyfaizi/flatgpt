import { DocumentData } from "firebase/firestore";

type Props = {
  message: DocumentData;
};
function Message({ message }: Props) {
    const isFlatGPT = message.user.name === "FlatGPT";
  return (
    <div className={`py-5 text-white ${isFlatGPT && 'bg-neutral-700/50'}`}>
      <div className="flex space-x-5 px-10 max-w-2xl mx-auto">
        <img src={message?.user?.avatar} alt="" className="h-8 w-8" />
        <p className="pt-1 text-small">{message.text}</p>
      </div>
    </div>
  );
}

export default Message;
