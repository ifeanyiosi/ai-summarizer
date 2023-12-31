import logo from "../../assets/logo.svg";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex w-full mb-10 pt-3 justify-between items-center flex-row">
        <button type="button" className="flex items-center  gap-2">
          {" "}
          <img className="w-[48px] " src={logo} alt="ifeanyiosi" />
          <h1 className="font-bold font-inter text-[20px]">Ifeanyiosi</h1>
        </button>

        <button
          type="button"
          className="black_btn"
          onClick={() =>
            window.open("https://github.com/ifeanyiosi?tab=repositories")
          }
        >
          {" "}
          Github
        </button>
      </nav>

      <h1 className="head_text">
        Article Summarizer with <br className="max-md:hidden" />{" "}
        <span className="orange_gradient">A.I</span>
      </h1>

      <h2 className="desc">
        This app lets you summarize long articles into clear and concise
        summaries.
      </h2>
    </header>
  );
};

export default Hero;
