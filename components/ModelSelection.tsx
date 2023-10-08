"use client";
import useSWR from "swr";
import Select from "react-select";

const fetchModels = () => fetch("/api/getEngines").then((res) => res.json());
function ModelSelection() {
  const { data: models, isLoading } = useSWR("models", fetchModels);
  const { data: model, mutate: setModel } = useSWR("model", {
    fallbackData: "text-davinci-003",
  });

  return (
    <div>
      <Select
        options={models?.modelOptions}
        onChange={(e) => setModel(e.value)}
        placeholder={model}
        defaultValue={model}
        className="mt-2 !text-neutral-400"
        isSearchable
        isLoading={isLoading}
        menuPosition="fixed"
        classNames={{
          singleValue: (state) => "!text-neutral-400",
          input: (state) => "!text-neutral-400",
          control: (state) => "!bg-neutral-700 !text-neutral-400",
          valueContainer: (state) => "!bg-neutral-700 !text-neutral-400",
          menuList: (state) => "!bg-neutral-700 !text-neutral-400",
          multiValueLabel: (state) => "!hover:bg-neutral-600 !text-neutral-400",
        }}
      />
    </div>
  );
}

export default ModelSelection;
