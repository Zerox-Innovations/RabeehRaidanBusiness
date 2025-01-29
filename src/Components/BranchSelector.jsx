import React from "react";

const BranchSelector = ({ branches, onSelectBranch }) => {
  return (
    <>
      <div>
        <ul>
          {branches.map((branch) => (
            <li
              key={branch.id}
              className="mb-2 p-1 bg-cream-100 rounded-lg cursor-pointer"
              onClick={() => onSelectBranch(branch.id)}
            >
              <h3 className="text-xl font-bold text-gray-900">{branch.name}</h3>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default BranchSelector;
