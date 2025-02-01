import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // To get the branch ID from the URL
import menuData from "../Data/menuData"; // Importing the menu data
import MenuList from "../Components/MenuList";

const MenuPage = () => {
  const { id } = useParams(); // Get the branch ID from the URL
  const [selectedBranch, setSelectedBranch] = useState(null);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    setLoading(true); // Set loading before fetching

    // Find the branch based on the ID from the URL
    const branch = menuData.restaurants.find(
      (branch) => branch.id === parseInt(id)
    );

    if (branch) {
      setSelectedBranch(branch); // Set the selected branch
    } else {
      setSelectedBranch(null); // Handle case where no branch is found
    }

    setLoading(false); // Stop loading after fetching
  }, [id]); // Re-run when the `id` changes

  return (
    <div>
      {loading ? (
        <div>Loading...</div> // Show loading while the branch is being fetched
      ) : selectedBranch ? (
        <MenuList menu={selectedBranch.menu} />
      ) : (
        <div className="text-center text-red-500 font-semibold">
          ⚠️ Branch not found!
        </div>
      )}
    </div>
  );
};

export default MenuPage;
