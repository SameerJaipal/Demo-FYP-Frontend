import { cn } from "../../components/utils/cn";
import { buttonVariants } from "../../components/ui/button";
import { UserAuthForm } from "../../components/user-auth-form2";
import { Link } from "react-router-dom";
import "../../index.css";
import TypewriterComponent from "typewriter-effect";
// import Logo from "../../public/Habib_University.png";
// import Habib from "../../public/habib.jpg";

export default function Login() {
  return (
    <>
      <div className="md:hidden">
        <img
          src="/examples/authentication-light.png"
          width={1280}
          height={843}
          alt="Authentication"
          className="block dark:hidden"
        />
        <img
          src="/examples/authentication-dark.png"
          width={1280}
          height={843}
          alt="Authentication"
          className="hidden dark:block"
        />
      </div>
      <div className="container relative hidden h-[100vh] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <Link
          to="/register"
          className={cn(
            buttonVariants({ variant: "default" }),
            "absolute right-4 top-4 md:right-8 md:top-8 bg-blue-950 hover:bg-blue-900 text-white"
          )}
        >
          Register
        </Link>
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div className="absolute inset-0 body" />
          <div className=" z-20 flex flex-col justify-center items-center text-lg font-medium">
            {/* <img alt="Logo" className="h-64 w-64 mt-48" /> */}
            <h1 className=" lg:text-7xlxl md:text-6xl text-white mt-[260px] font-bold">
              TAX TAJWEEZ
            </h1>
            <div className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-400 p-4 text-6xl">
              <TypewriterComponent
                options={{
                  strings: [
                    "for you.",
                    "for your businesses.",
                    "for tax filing.",
                    "for tax planning.",
                    "for tax deductions.",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
            <p className="text-sm md:text-xl font-light text-zinc-400 text-center w-[80%] mt-4">
              A platform that provides tax consultancy services to individuals
              and businesses. We are here to help you with your tax planning,
              tax deductions, and tax filing.
            </p>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">Login</h1>
              <p className="text-sm text-muted-foreground">
                Enter your email below to login to your account
              </p>
            </div>
            <UserAuthForm />
            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{" "}
              <Link
                to=""
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                to=""
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
