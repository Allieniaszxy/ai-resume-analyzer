import { usePuterStore } from "~/lib/puter";
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router";

export const meta = () => {
  return [
    { title: "AI-Resume-Analyzer" },
    {
      name: "description",
      content: "Log in to your account",
    },
  ];
};

const auth = () => {
  const { isLoading, auth } = usePuterStore();
  const navigate = useNavigate();
  const location = useLocation();
  const next = location.search.split("next=")[1];

  useEffect(() => {
    if (auth.isAuthenticated) {
      navigate(next || "/");
    }
  }, [auth.isAuthenticated, next]);
  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover min-h-screen flex items-center justify-center">
      <div className="graident-border shadow-lg">
        <section className="flex flex-col gap-8 bg-white rounded-2xl p-10">
          <div className="flex flex-col gap-2 items-center text-center">
            <h1>Welcome</h1>
            <h2>Log In to Continue Your Job Journey</h2>
          </div>

          <div>
            {isLoading ? (
              <button className="auth-button animate-pulse">
                Signing you in
              </button>
            ) : (
              <>
                {auth.isAuthenticated ? (
                  <button className="auth-button" onClick={auth.signOut}>
                    <p>Log Out</p>
                  </button>
                ) : (
                  <button className="auth-button" onClick={auth.signIn}>
                    <p>Log In</p>
                  </button>
                )}
              </>
            )}
          </div>

          {/* <form className="flex flex-col gap-4">
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input type="password" name="password" id="password" />
            </div>
            <button
              type="submit"
              className="bg-[#000000] text-white py-2 rounded-lg"
            >
              Log In
            </button>
          </form> */}
        </section>
      </div>
    </main>
  );
};

export default auth;
