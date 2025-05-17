import { useState } from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import CoffeeCard from "./CoffeeCard";

const Home = () => {
  const [coffees, setCoffees] = useState(useLoaderData());

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/coffees/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          Swal.fire({
            title: "Deleted!",
            text: "Coffee has been deleted.",
            icon: "success",
            showConfirmButton: false,
            timer: 1500,
          });
          setCoffees(coffees.filter((coffee) => coffee._id !== id));
        }
      });
  };

  return (
    <div className="px-4 py-8 md:px-12 lg:px-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {coffees.map((coffee) => (
          <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            onDelete={handleDelete}
          ></CoffeeCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
