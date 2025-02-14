import { useNavigate } from "react-router-dom";


const BranchSelector = ({ branches = [] }) => { // Default empty array
  const navigate = useNavigate();

  if (!branches.length) {
    return <div className="text-red-500">No branches available!</div>;
  }

  return (
    <div className="p-6 max-w-2xl">
      <ul>
        {branches.map((branch) => (
          <li
            key={branch.id}
            className="mb-2 p-1  rounded-lg cursor-pointer"
          >
            <button className="w-full text-left"
              onClick={() => {
                navigate(`/menu${branch.id}`);
                window.scrollTo(0, 0); // Scrolls to the top of the page
              }}>
              <h2 className="text-2xl font-bold text-softOrange">{branch.name}</h2>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};


export default BranchSelector;