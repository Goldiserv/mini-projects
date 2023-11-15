import React, { useState } from "react";
import { Handle, Position } from "reactflow";
import { shallow } from "zustand/shallow";
import { useStore } from "./store";
import { tw } from "twind";
import NodeHeader from "./NodeHeader";
import { useGenericNode } from "./NodeHooks";

const selector = (store) => ({
  getPreviousNodes: store.getPreviousNodes,
  storeValue: (id, data) => {
    store.updateNode(id, data);
  },
});

export default function Out({ id, data }) {
  // const { getPreviousNodes, storeValue } = useStore(selector(id), shallow);
  const { getPreviousNodes, storeValue } = useStore(selector, shallow);
  const { deleteNode, isNodeSelected } = useGenericNode(id);

  const [value, setValue] = useState(0);

  return (
    <div
      className={tw(
        "rounded-md bg-white shadow-xl border-1",
        isNodeSelected() ? "border-1 border-gray-300" : ""
      )}
    >
      <Handle
        className={tw("w-2 h-2")}
        type="target"
        position={Position.Left}
      />

      <NodeHeader title="Sum" onDelete={deleteNode} className="bg-yellow-600"/>

      <div className={tw("rounded-md bg-white shadow-xl px-4 py-2")}>
        <div className="flex justify-between">
          <p className={tw("text-xs font-bold mb-2")}>Result</p>
          <p className={tw("text-right text-xs")}>{value}</p>
        </div>

        <div className="block">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 text-xs rounded"
            onClick={() => {
              const sourceNodes = getPreviousNodes(id);
              // console.log(sourceNodes);

              const sum = sourceNodes.reduce((acc, node) => {
                if (node.data.value && typeof node.data.value === "number") {
                  return acc + node.data.value;
                }
                return acc;
              }, 0);

              setValue(sum);
              storeValue(id, { value: sum });
            }}
          >
            refresh
          </button>
        </div>
        <Handle
          className={tw("w-2 h-2")}
          type="source"
          position={Position.Right}
        />
      </div>
    </div>
  );
}
