import { logo } from "../../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex w-full mb-10 pt-3 justify-between items-center flex-row">
        <img src={logo} alt="ifeanyiosi" />

        <button type="button" onClick={() => window.open("")}>
          {" "}
          Github
        </button>
      </nav>

      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden" />{" "}
        <span className="orange_gradient">A.I</span>
      </h1>

      <h2 className="desc">
        WIth this simple too you can simplify your reading, this app allows you summarize lengthy articles into clear and concise summaries
      </h2>
    </header>
  );
};

export default Hero;
