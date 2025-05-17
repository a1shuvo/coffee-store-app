import { MdDelete, MdEdit, MdRemoveRedEye } from "react-icons/md";
import { Link } from "react-router";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee }) => {
  const { _id, name, price, quantity, photo } = coffee;
  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#D2B48C",
      cancelButtonColor: "#EA4744",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/coffees/${_id}`, {
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
            }
          });
      }
    });
  };

  return (
    <div>
      <div className="card card-side bg-[#F5F4F1] shadow-sm">
        <figure>
          <img
            className="w-48 h-48 object-contain p-4"
            src={photo}
            alt="Movie"
          />
        </figure>
        <div className="w-full flex justify-between items-center p-6">
          <div>
            <p>
              <span className="font-bold">Name:</span> {name}
            </p>
            <p>
              <span className="font-bold">Price:</span> {price}
            </p>
            <p>
              <span className="font-bold">Quantity:</span> {quantity}
            </p>
          </div>
          <div className="card-actions">
            <div className="join join-vertical space-y-2">
              <Link to={`/coffee/${_id}`}>
                <button className="btn p-2 bg-[#D2B48C] rounded-md text-white">
                  <MdRemoveRedEye size={20} />
                </button>
              </Link>
              <Link to={`/update/${_id}`}>
                <button className="btn p-2 bg-[#3C393B] rounded-md text-white">
                  <MdEdit size={20} />
                </button>
              </Link>
              <button
                onClick={() => handleDelete(_id)}
                className="btn p-2 bg-[#EA4744] rounded-md text-white"
              >
                <MdDelete size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
