import github from "./images/github.png";
import linkdin from "./images/linkdin.png";
import rgoli from "./images/rgoli.png";
import planet from "./images/planet.png";
import githubProject from "./images/githubProject.png";
import tipCalculator from "./images/tipCalculator.png";
import restaurant from "./images/restaurant.png";
import todo from "./images/todo.png";
import bootcamp from "./images/bootcamp.png";

function App() {
  return (
    <div className="container max-w-screen-2xl bg-black01 py-10 px-40">
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
            className="border-b-2 border-solid border-green font-bold text-white pb-2.5"
            href="mailto:jabanashvilimegi@gmail.com"
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
      <div className="w-full bg-white h-px mt-16"></div>
      <section className="w-full mt-16">
        <div className="w-full flex">
          <div className="w-1/3">
            <h3 className="text-white text-5xl font-bold mb-3.5">HTML</h3>
            <p className="text-grey text-lg font-medium">2 Years Experience</p>
          </div>
          <div className="w-1/3">
            <h3 className="text-white text-5xl font-bold mb-3.5">CSS</h3>
            <p className="text-grey text-lg font-medium">2 Years Experience</p>
          </div>
          <div className="w-1/3">
            <h3 className="text-white text-5xl font-bold mb-3.5">Javascript</h3>
            <p className="text-grey text-lg font-medium">2 Years Experience</p>
          </div>
        </div>
        <div className="w-full flex mt-16">
          <div className="w-1/3">
            <h3 className="text-white text-5xl font-bold mb-3.5">React</h3>
            <p className="text-grey text-lg font-medium">
              Less Than a Year Experiece
            </p>
          </div>
          <div className="w-1/3">
            <h3 className="text-white text-5xl font-bold mb-3.5">Typescript</h3>
            <p className="text-grey text-lg font-medium">
              Less Than a Year Experiece
            </p>
          </div>
          <div className="w-1/3">
            <h3 className="text-white text-5xl font-bold mb-3.5">
              Tailwind CSS
            </h3>
            <p className="text-grey text-lg font-medium">
              Less Than a Year Experiece
            </p>
          </div>
        </div>
        <div className="w-full flex mt-16">
          <div className="w-1/3">
            <h3 className="text-white text-5xl font-bold mb-3.5">
              Styled Components
            </h3>
            <p className="text-grey text-lg font-medium">
              Less Than a Year Experiece
            </p>
          </div>
          <div className="w-1/3">
            <h3 className="text-white text-5xl font-bold mb-3.5">GIT</h3>
            <p className="text-grey text-lg font-medium">1 Year Experiece</p>
          </div>
          <div className="w-1/3">
            <h3 className="text-white text-5xl font-bold mb-3.5">SCSS</h3>
            <p className="text-grey text-lg font-medium">1 Year Experiece</p>
          </div>
        </div>
      </section>
      <section className="w-full mt-36">
        <h1 className="text-white font-bold text-7xl mb-20">Projects</h1>
        <div className="flex flex-wrap gap-y-16 justify-between">
          <div className="w-[500px] h-[400px]">
            <img className="w-full h-[80%]" src={planet} alt="" />
            <h5 className="text-white font-bold text-2xl">PLANETS FACT SITE</h5>
            <p className="text-grey font-medium text-lg">
              REACT, TYPESCRIPT, STYLED COMPONENTS
            </p>
          </div>
          <div className="w-[500px] h-[400px]">
            <img className="w-full h-[80%]" src={githubProject} alt="" />
            <h5 className="text-white font-bold text-2xl">
              GITHUB USER SEARCH
            </h5>
            <p className="text-grey font-medium text-lg">REACT</p>
          </div>
          <div className="w-[500px] h-[400px]">
            <img className="w-full h-[80%]" src={tipCalculator} alt="" />
            <h5 className="text-white font-bold text-2xl">TIP CALCULATOR</h5>
            <p className="text-grey font-medium text-lg">HTML CSS REACT</p>
          </div>
          <div className="w-[500px] h-[400px]">
            <img className="w-full h-[80%]" src={restaurant} alt="" />
            <h5 className="text-white font-bold text-2xl">RESTAURANT APP</h5>
            <p className="text-grey font-medium text-lg">HTML CSS REACT</p>
          </div>
          <div className="w-[500px] h-[400px]">
            <img className="w-full h-[80%]" src={todo} alt="" />
            <h5 className="text-white font-bold text-2xl">TODO APP</h5>
            <p className="text-grey font-medium text-lg">
              HTML CSS REACT TYPESCRIPT
            </p>
          </div>
          <div className="w-[500px] h-[400px]">
            <img className="w-full h-[80%]" src={bootcamp} alt="" />
            <h5 className="text-white font-bold text-2xl">TBILISI BOOTCAMP</h5>
            <p className="text-grey font-medium text-lg">HTML CSS REACT</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
