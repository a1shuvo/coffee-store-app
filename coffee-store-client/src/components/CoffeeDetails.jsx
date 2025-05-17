import { useLoaderData } from "react-router";

const CoffeeDetails = () => {
  const coffeeData = useLoaderData();
  const { name, price, quantity, supplier, taste, details, photo } = coffeeData;

  return (
    <div>
      <div className="p-2 md:p-24">
        <div className="p-4 md:p-12 flex flex-col md:flex-row justify-center gap-12 items-center bg-[#F4F3F0]">
          <figure className="w-60 h-60">
            <img className="object-contain w-full h-full" src={photo} alt={name} />
          </figure>
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
            <p>
              <span className="font-bold">Supplier:</span> {supplier}
            </p>
            <p>
              <span className="font-bold">Taste:</span> {taste}
            </p>
            <p>
              <span className="font-bold">Details:</span> {details}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;
