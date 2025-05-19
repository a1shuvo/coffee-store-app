import { use } from "react";
import { AuthContext } from "../contexts/AuthContext";

const SignIn = () => {
  const { signInUser } = use(AuthContext);
  const handleSignin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    // Firebase SignIn Send
    signInUser(email, password)
      .then((result) => {
        console.log(result.user);

        // update last signin time into mongodb
        const signInInfo = {
          email,
          lastSignInTime: result.user?.metadata?.lastSignInTime,
        };

        fetch("http://localhost:3000/users", {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(signInInfo),
        })
          .then((res) => res.json())
          .then((data) => console.log("After update", data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <form
      onSubmit={handleSignin}
      className="fieldset bg-base-200 border-base-300 rounded-box w-sm border p-4 mx-auto mt-8"
    >
      <h1 className="text-5xl font-bold text-center mb-8">Sign In</h1>

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

      <div>
        <a className="link link-hover">Forgot password?</a>
      </div>

      <button className="btn btn-neutral mt-4">Sign In</button>
    </form>
  );
};

export default SignIn;
