import React from "react";

const BranchSelector = ({ branches, onSelectBranch }) => {
  return (
    <div className="p-6 max-w-2xl">
      <ul>
        {branches.map((branch) => (
          <li
            key={branch.id}
            className="mb-2 p-1 bg-cream-100 rounded-lg cursor-pointer"
            onClick={() => onSelectBranch(branch.id)}
          >
            <h2 className="text-2xl font-bold text-softOrange">{branch.name}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BranchSelector;
