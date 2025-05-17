import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffeeData = useLoaderData();
  const { _id, name, price, quantity, supplier, taste, details, photo } =
    coffeeData;
  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedCoffee = Object.fromEntries(formData.entries());

    // Update Coffe Data to DB
    fetch(`http://localhost:3000/coffees/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            title: "Coffee Updated Successfully!",
            icon: "success",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div className="p-24">
      <div className="p-12 text-center space-y-4 bg-[#F4F3F0]">
        <h1 className="text-6xl">Update Coffee</h1>
        <p className="w-3xl mx-auto">
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
        <form onSubmit={handleUpdateCoffee}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <fieldset className="fieldset">
              <label className="label font-bold">Name</label>
              <input
                type="text"
                name="name"
                defaultValue={name}
                className="input w-full focus:outline-none"
                placeholder="Enter Coffee Name"
              />
            </fieldset>
            <fieldset className="fieldset">
              <label className="label font-bold">Quantity</label>
              <input
                type="text"
                name="quantity"
                defaultValue={quantity}
                className="input w-full focus:outline-none"
                placeholder="Enter Coffee Quantity"
              />
            </fieldset>
            <fieldset className="fieldset">
              <label className="label font-bold">Supplier</label>
              <input
                type="text"
                name="supplier"
                defaultValue={supplier}
                className="input w-full focus:outline-none"
                placeholder="Enter Coffee Supplier"
              />
            </fieldset>
            <fieldset className="fieldset">
              <label className="label font-bold">Taste</label>
              <input
                type="text"
                name="taste"
                defaultValue={taste}
                className="input w-full focus:outline-none"
                placeholder="Enter Coffee Taste"
              />
            </fieldset>
            <fieldset className="fieldset">
              <label className="label font-bold">Price</label>
              <input
                type="text"
                name="price"
                defaultValue={price}
                className="input w-full focus:outline-none"
                placeholder="Enter Coffee Price"
              />
            </fieldset>
            <fieldset className="fieldset">
              <label className="label font-bold">Details</label>
              <input
                type="text"
                name="details"
                defaultValue={details}
                className="input w-full focus:outline-none"
                placeholder="Enter Coffee Details"
              />
            </fieldset>
          </div>
          <fieldset className="fieldset my-4">
            <label className="label font-bold">Photo URL</label>
            <input
              type="text"
              name="photo"
              defaultValue={photo}
              className="input w-full focus:outline-none"
              placeholder="Enter Photo URL"
            />
          </fieldset>
          <input
            className="btn w-full btn-outline bg-[#D2B48C]"
            type="submit"
            value="Update Coffee"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
