import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import menuData from "../Data/menuData";
import MenuList from "../Components/MenuList";

const MenuPage = ({ branchId }) => {
  const { id } = useParams();
  const [selectedBranch, setSelectedBranch] = useState(null);

  useEffect(() => {
    const branch = menuData.restaurants.find(
      (branch) => branch.id === parseInt(branchId || id)
    );
    setSelectedBranch(branch);
  }, [branchId, id]);

  return (
    <div>
      {selectedBranch ? (
        <MenuList menu={selectedBranch.menu} />
      ) : (
        <div className="text-center text-red-500 font-semibold">
          ⚠️ No branches available!
        </div>
      )}
    </div>
  );
};

export default MenuPage;
