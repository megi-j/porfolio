import github from "./images/github.png";
import linkdin from "./images/linkdin.png";
import rgoli from "./images/rgoli.png";

function App() {
  return (
    <div
      className="container max-w-screen-2xl bg-black01 py-10 px-40"
      // style={{ height: "100vh" }}
    >
      <header>
        <div className="text-white text-3xl font-bold">Megi Jabanashvili</div>
      </header>
      <section className="w-full flex mt-16">
        <div>
          <img className="bg-black01 ml-[-160px]" src={rgoli} alt="" />
          <h1 className="text-white text-7xl font-bold mt-[-50px]">
            Nice to meet you!
          </h1>
          <h1 className="text-white text-7xl font-bold mb-16">
            I’m{" "}
            <span className="border-b-8 border-solid border-green font-bold">
              Megi Jabanashvili
            </span>
          </h1>
          <p className="text-grey text-lg w-1/3 font-medium mb-16">
            Based in the Tbilisi, Georgia, I’m a front-end developer passionate
            about building accessible web apps that users love.
          </p>
          <a
            className="border-b-2 border-solid border-green font-bold text-white"
            href=""
          >
            CONTACT ME{" "}
          </a>
        </div>
        <div className="w-96 bg-black02 p-10 flex justify-end mt-[-150px]">
          <div className="w-20 flex justify-between">
            <a href="">
              <img src={github} alt="" />
            </a>
            <a href="">
              <img src={linkdin} alt="" />
            </a>
          </div>
        </div>
      </section>
      <div className="w-full bg-white h-1 mt-16"></div>
    </div>
  );
}

export default App;
