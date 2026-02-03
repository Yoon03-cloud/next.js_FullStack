import React from "react";

function Login() {
  return (
    <div>
      <h1>Login</h1>
      <button>
        Don`&lsquo;t have an account?{" "}
        <a href="/auth/register">Click to Register</a>
      </button>
    </div>
  );
}

export default Login;
