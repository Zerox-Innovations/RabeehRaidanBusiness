// 

import { useState } from "react";
import menuData from "../Data/menuData";
import MenuList from "../Components/MenuList";
import BranchSelector from "../Components/BranchSelector";

const MenuPage = () => {
  const [selectedBranch, setSelectedBranch] = useState(menuData.restaurants[0]); // Default to first branch

  const handleSelectBranch = (branchId) => {
    const branch = menuData.restaurants.find((branch) => branch.id === branchId);
    setSelectedBranch(branch);
  };

  return (
    <div>
      {selectedBranch ? (
        <MenuList menu={selectedBranch.menu} />
      ) : (
        <div className="text-center text-red-500 font-semibold">
          ⚠️ No branches available!
        </div>
      )}

      {/* Branch Selector */}
      {/* <BranchSelector
        branches={menuData.restaurants}
        onSelectBranch={handleSelectBranch}
      /> */}
    </div>
  );
};

export default MenuPage;
