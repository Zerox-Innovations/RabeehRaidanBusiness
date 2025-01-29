import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // To get the branch id from the URL
import menus from '../Data/menus.json';
import MenuList from "../Components/MenuList";

const MenuPage = () => {
  const { id } = useParams(); // Get the branch ID from the URL
  const [selectedBranch, setSelectedBranch] = useState(null);

  useEffect(() => {
    // Find the branch based on the ID from the URL
    const branch = menus.restaurants.find((branch) => branch.id === parseInt(id));
    setSelectedBranch(branch); // Set the selected branch to state
  }, [id]); // Re-run when the `id` changes

  return (
    <div>
      {selectedBranch ? (
        <MenuList menu={selectedBranch.menu} />
      ) : (
        <div>Loading...</div> // Show loading while the branch is being fetched
      )}
    </div>
  );
};

export default MenuPage;
