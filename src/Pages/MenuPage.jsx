import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import menuData from "../Data/menuData";
import MenuList from "../Components/MenuList";
import BranchSelector from "../Components/BranchSelector";

const MenuPage = () => {
  const { id } = useParams(); // Get the branch ID from the URL
  const [selectedBranch, setSelectedBranch] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
  
    const branch = menuData.restaurants.find(
      (branch) => branch.id === parseInt(id)
    );
  
    if (branch) {
      console.log(branch.menu); // Check the structure of the menu
      setSelectedBranch(branch);
    } else {
      setSelectedBranch(null);
    }
  
    setLoading(false);
  }, [id]);
  

  const handleSelectBranch = (branchId) => {
    const branch = menuData.restaurants.find((branch) => branch.id === branchId);
    setSelectedBranch(branch);
  };

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : selectedBranch ? (
        <MenuList menu={selectedBranch.menu} />
      ) : (
        <div className="text-center text-red-500 font-semibold">
          ⚠️ Branch not found!
        </div>
      )}

      {/* Branch Selector */}
      {!selectedBranch && (
        <BranchSelector
          branches={menuData.restaurants}
          onSelectBranch={handleSelectBranch}
        />
      )}
    </div>
  );
};

export default MenuPage;
