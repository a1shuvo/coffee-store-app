import { useState } from "react";
import { MdDelete, MdEdit, MdRemoveRedEye } from "react-icons/md";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const Users = () => {
  const [users, setUsers] = useState(useLoaderData());
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Delete User from MongoDB
        fetch(`http://localhost:3000/users/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              setUsers(users.filter((user) => user._id !== id));

              // ToDo Delete user from firebase

              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {users.map((user, index) => (
            <tr key={user._id}>
              <th>{index + 1}</th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src={user.photo}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{user.name}</div>
                    <div className="text-sm opacity-50">{user.address}</div>
                  </div>
                </div>
              </td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <th className="space-x-2">
                <button className="btn btn-sm">
                  <MdRemoveRedEye size={16} />
                </button>
                <button className="btn btn-sm">
                  <MdEdit size={16} />
                </button>
                <button
                  onClick={() => handleDelete(user._id)}
                  className="btn btn-sm text-red-500"
                >
                  <MdDelete size={16} />
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
