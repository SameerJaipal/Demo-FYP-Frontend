import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import TypewriterComponent from "typewriter-effect";
import "../../index.css"

const LandingPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
  };

  {
  }
  return (
    <>
      <div className="min-h-screen flex justify-center items-center body">
        <div className="font-bold py-36 text-center space-y-5">
          <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
            <h1 className=" lg:text-7xlxl md:text-6xl text-white">
              TAX TAJWEEZ
            </h1>

            <div className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-400 p-4 text-9xl">
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
          </div>
          <div className="text-sm md:text-xl font-light text-zinc-600">
            Tax Tajweez is a platform that provides tax consultancy services to
            individuals and businesses. We are here to help you with your tax
            planning, tax deductions, and tax filing.
          </div>

          <div>
            <Button
              onClick={handleClick}
              className="md:text-2xl p-6 md:p-8 rounded-full font-semibold mt-10 bg-slate-100 text-black hover:bg-slate-200 hover:text-black dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700 dark:hover:text-white"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
