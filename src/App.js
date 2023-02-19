import github from "./images/github.png";
import linkdin from "./images/linkdin.png";
import rgoli from "./images/rgoli.png";
import planet from "./images/planet.png";
import githubProject from "./images/githubProject.png";
import tipCalculator from "./images/tipCalculator.png";
import restaurant from "./images/restaurant.png";
import todo from "./images/todo.png";
import bootcamp from "./images/bootcamp.png";
import megi from "./images/megi.png";
function App() {
  return (
    <div className="container tablet:bg-black01 py-10 px-40">
      <header>
        <h2 className="text-white text-3xl font-bold">Megi Jabanashvili</h2>
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
        <div className="w-96 bg-black02 pt-10 flex flex-col justify-between mt-[-150px]">
          <div className="w-full flex justify-end">
            <a
              className="mr-8"
              href="https://github.com/megi-j"
              target="_blank"
            >
              <img src={github} alt="" />
            </a>
            <a
              className="mr-8"
              href="https://www.linkedin.com/in/megi-jabanashvili-3666251b3/"
              target="_blank"
            >
              <img src={linkdin} alt="" />
            </a>
          </div>
          <img className="w-full h-[80%]" src={megi} alt="" />
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
          <div className="w-[500px] h-[400px] relative">
            <div className="group absolute bg-black03 top-0 left-0 w-full h-[80%] hover:bg-black04 transition-all flex justify-center flex-col items-center text-white02 hover:text-white cursor-pointer">
              <a
                className="hover:text-green pb-2.5 border-b-2 border-solid border-green02 group-hover:border-green tracking-[2.28px] mb-12"
                href="https://megi-j.github.io/planets-fact-site/"
                target="_blank"
              >
                VIEW PROJECT
              </a>
              <a
                className="hover:text-green pb-2.5 border-b-2 border-solid border-green02 group-hover:border-green tracking-[2.28px]"
                href="https://github.com/megi-j/planets-fact-site"
                target="_blank"
              >
                VIEW CODE
              </a>
            </div>
            <img className="w-full h-[80%]" src={planet} alt="" />
            <h5 className="text-white font-bold text-2xl">PLANETS FACT SITE</h5>
            <p className="text-grey font-medium text-lg">
              REACT, TYPESCRIPT, STYLED COMPONENTS
            </p>
          </div>
          <div className="w-[500px] h-[400px] relative">
            <div className="group absolute bg-black03 top-0 left-0 w-full h-[80%] hover:bg-black04 transition-all flex justify-center flex-col items-center text-white02 hover:text-white cursor-pointer">
              <a
                className="hover:text-green pb-2.5 border-b-2 border-solid border-green02 group-hover:border-green tracking-[2.28px] mb-12"
                href="https://megi-j.github.io/github-user-search-app/"
                target="_blank"
              >
                VIEW PROJECT
              </a>
              <a
                className="hover:text-green pb-2.5 border-b-2 border-solid border-green02 group-hover:border-green tracking-[2.28px]"
                href="https://github.com/megi-j/github-user-search-app"
                target="_blank"
              >
                VIEW CODE
              </a>
            </div>
            <img className="w-full h-[80%]" src={githubProject} alt="" />
            <h5 className="text-white font-bold text-2xl">
              GITHUB USER SEARCH
            </h5>
            <p className="text-grey font-medium text-lg">REACT API</p>
          </div>
          <div className="w-[500px] h-[400px] relative">
            <div className="group absolute bg-black03 top-0 left-0 w-full h-[80%] hover:bg-black04 transition-all flex justify-center flex-col items-center text-white02 hover:text-white cursor-pointer">
              <a
                className="hover:text-green pb-2.5 border-b-2 border-solid border-green02 group-hover:border-green tracking-[2.28px] mb-12"
                href="https://megi-j.github.io/Tip-Calculator-App-/"
                target="_blank"
              >
                VIEW PROJECT
              </a>
              <a
                className="hover:text-green pb-2.5 border-b-2 border-solid border-green02 group-hover:border-green tracking-[2.28px]"
                href="https://github.com/megi-j/Tip-Calculator-App-"
                target="_blank"
              >
                VIEW CODE
              </a>
            </div>
            <img className="w-full h-[80%]" src={tipCalculator} alt="" />
            <h5 className="text-white font-bold text-2xl">TIP CALCULATOR</h5>
            <p className="text-grey font-medium text-lg">HTML CSS REACT</p>
          </div>
          <div className="w-[500px] h-[400px] relative">
            <div className="group absolute bg-black03 top-0 left-0 w-full h-[80%] hover:bg-black04 transition-all flex justify-center flex-col items-center text-white02 hover:text-white cursor-pointer">
              <a
                className="hover:text-green pb-2.5 border-b-2 border-solid border-green02 group-hover:border-green tracking-[2.28px] mb-12"
                href="https://megi-j.github.io/react-project/"
                target="_blank"
              >
                VIEW PROJECT
              </a>
              <a
                className="hover:text-green pb-2.5 border-b-2 border-solid border-green02 group-hover:border-green tracking-[2.28px]"
                href="https://github.com/megi-j/react-project"
                target="_blank"
              >
                VIEW CODE
              </a>
            </div>
            <img className="w-full h-[80%]" src={restaurant} alt="" />
            <h5 className="text-white font-bold text-2xl">RESTAURANT APP</h5>
            <p className="text-grey font-medium text-lg">HTML CSS REACT</p>
          </div>
          <div className="w-[500px] h-[400px] relative">
            <div className="group absolute bg-black03 top-0 left-0 w-full h-[80%] hover:bg-black04 transition-all flex justify-center flex-col items-center text-white02 hover:text-white cursor-pointer">
              <a
                className="hover:text-green pb-2.5 border-b-2 border-solid border-green02 group-hover:border-green tracking-[2.28px] mb-12"
                href="https://megi-j.github.io/todo/"
                target="_blank"
              >
                VIEW PROJECT
              </a>
              <a
                className="hover:text-green pb-2.5 border-b-2 border-solid border-green02 group-hover:border-green tracking-[2.28px]"
                href="https://github.com/megi-j/todo"
                target="_blank"
              >
                VIEW CODE
              </a>
            </div>
            <img className="w-full h-[80%]" src={todo} alt="" />
            <h5 className="text-white font-bold text-2xl">TODO APP</h5>
            <p className="text-grey font-medium text-lg">
              HTML CSS REACT TYPESCRIPT
            </p>
          </div>
          <div className="w-[500px] h-[400px] relative">
            <div className="group absolute bg-black03 top-0 left-0 w-full h-[80%] hover:bg-black04 transition-all flex justify-center flex-col items-center text-white02 hover:text-white cursor-pointer">
              <a
                className="hover:text-green pb-2.5 border-b-2 border-solid border-green02 group-hover:border-green tracking-[2.28px] mb-12"
                href="https://megi-j.github.io/tbilisi-bootcamp/"
                target="_blank"
              >
                VIEW PROJECT
              </a>
              <a
                className="hover:text-green pb-2.5 border-b-2 border-solid border-green02 group-hover:border-green tracking-[2.28px]"
                href="https://github.com/megi-j/tbilisi-bootcamp"
                target="_blank"
              >
                VIEW CODE
              </a>
            </div>
            <img className="w-full h-[80%]" src={bootcamp} alt="" />
            <h5 className="text-white font-bold text-2xl">TBILISI BOOTCAMP</h5>
            <p className="text-grey font-medium text-lg">HTML CSS REACT</p>
          </div>
        </div>
      </section>
      <div className="w-full bg-white h-px mt-16"></div>
      <footer className="w-full mt-12 flex justify-between">
        <h2 className="text-white text-3xl font-bold">Megi Jabanashvili</h2>
        <div className="w-20 flex justify-between">
          <a href="https://github.com/megi-j">
            <img src={github} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/megi-jabanashvili-3666251b3/">
            <img src={linkdin} alt="" />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
