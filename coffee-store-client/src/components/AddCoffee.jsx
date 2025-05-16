const AddCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newCoffee = Object.fromEntries(formData.entries());

    // Send coffee data to the db
    fetch("http://localhost:3000/coffees", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => console.log("After adding to db", data));
  };
  return (
    <div className="p-24">
      <div className="p-12 text-center space-y-4 bg-[#F4F3F0]">
        <h1 className="text-6xl">Add Coffee</h1>
        <p className="w-3xl mx-auto">
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
        <form onSubmit={handleAddCoffee}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <fieldset className="fieldset">
              <label className="label font-bold">Name</label>
              <input
                type="text"
                name="name"
                className="input w-full focus:outline-none"
                placeholder="Enter Coffee Name"
              />
            </fieldset>
            <fieldset className="fieldset">
              <label className="label font-bold">Quantity</label>
              <input
                type="text"
                name="quantity"
                className="input w-full focus:outline-none"
                placeholder="Enter Coffee Quantity"
              />
            </fieldset>
            <fieldset className="fieldset">
              <label className="label font-bold">Supplier</label>
              <input
                type="text"
                name="supplier"
                className="input w-full focus:outline-none"
                placeholder="Enter Coffee Supplier"
              />
            </fieldset>
            <fieldset className="fieldset">
              <label className="label font-bold">Taste</label>
              <input
                type="text"
                name="taste"
                className="input w-full focus:outline-none"
                placeholder="Enter Coffee Taste"
              />
            </fieldset>
            <fieldset className="fieldset">
              <label className="label font-bold">Category</label>
              <input
                type="text"
                name="category"
                className="input w-full focus:outline-none"
                placeholder="Enter Coffee Category"
              />
            </fieldset>
            <fieldset className="fieldset">
              <label className="label font-bold">Details</label>
              <input
                type="text"
                name="details"
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
              className="input w-full focus:outline-none"
              placeholder="Enter Photo URL"
            />
          </fieldset>
          <input
            className="btn w-full btn-outline bg-[#D2B48C]"
            type="submit"
            value="Add Coffee"
          />
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
