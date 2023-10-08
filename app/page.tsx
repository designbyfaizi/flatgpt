import { SunIcon, BoltIcon, ExclamationTriangleIcon } from "@heroicons/react/24/outline";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center text-white h-screen px-2">
      <h1 className="text-5xl font-bold mb-20">FlatGPT</h1>
      <div className="flex space-x-2 text-center">
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <SunIcon className="h-8 w-8" />
            <h2>Examples</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">&quot;Explain something to me&quot;</p>
            <p className="infoText">
            &quot;What is the difference between a dog and a wolf?&quot;
            </p>
            <p className="infoText">&quot;What is the color of the sun?&quot;</p>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <BoltIcon className="h-8 w-8" />
            <h2>Capabilities</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">Change the FlatGPT Model to use</p>
            <p className="infoText">
              Messages are stored in Firestore
            </p>
            <p className="infoText">Hot Toast Notifications when FlatGPT is thinking</p>
          </div>
        </div><div>
          <div className="flex flex-col items-center justify-center mb-5">
            <ExclamationTriangleIcon className="h-8 w-8" />
            <h2>Limitations</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">May occassionally generate incorrect information</p>
            <p className="infoText">
              May occassionally produce harmful instructions or biased content
            </p>
            <p className="infoText">Limited knowledge of world and events after 2021</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
