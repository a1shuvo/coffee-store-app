import { use } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../contexts/AuthContext";

const SignUp = () => {
  const { createUser } = use(AuthContext);

  const handleSignup = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const { email, password, ...restFormData } = Object.fromEntries(
      formData.entries()
    );

    // Create User in the firebase
    createUser(email, password)
      .then((result) => {
        // Signed in
        console.log(result.user);
        const userProfile = {
          email,
          ...restFormData,
          creationTime: result.user?.metadata?.creationTime,
          lastSignInTime: result.user?.metadata?.lastSignInTime,
        };

        // Save data to the DB
        fetch("http://localhost:3000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userProfile),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              Swal.fire({
                title: "User Account created Successfully!",
                icon: "success",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form
      onSubmit={handleSignup}
      className="fieldset bg-base-200 border-base-300 rounded-box w-sm border p-4 mx-auto mt-8"
    >
      <h1 className="text-5xl font-bold text-center mb-8">Sign Up</h1>

      <label className="label">Name</label>
      <input
        type="text"
        name="name"
        className="input w-full"
        placeholder="Name"
      />
      <label className="label">Address</label>
      <input
        type="text"
        name="address"
        className="input w-full"
        placeholder="Address"
      />
      <label className="label">Phone</label>
      <input
        type="number"
        name="phone"
        className="input w-full"
        placeholder="Phone"
      />
      <label className="label">Photo URL</label>
      <input
        type="text"
        name="photo"
        className="input w-full"
        placeholder="Photo URL"
      />
      <label className="label">Email</label>
      <input
        type="email"
        name="email"
        className="input w-full"
        placeholder="Email"
      />

      <label className="label">Password</label>
      <input
        type="password"
        name="password"
        className="input w-full"
        placeholder="Password"
      />

      <button className="btn btn-neutral mt-4">Sign Up</button>
    </form>
  );
};

export default SignUp;
