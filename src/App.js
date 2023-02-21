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
import rgoli1 from "./images/rgoli1.png";
function App() {
  return (
    <div className="max-w-[1440px] m-0 mx-auto bg-black01 tablet:py-10 tablet:px-40 mobile:pl-[30px] mobile:py-[30px]">
      <header className="small:hidden mobile:block">
        <h2 className="text-white text-3xl font-bold">Megi Jabanashvili</h2>
      </header>
      <section className="w-full mobile:flex mobile:mt-16 mt-0">
        <div className="mobile:w-[60%] mobile:z-10 small:hidden mobile:block">
          <img
            className="bg-black01 ml-[-160px] hidden tablet:block"
            src={rgoli}
            alt=""
          />
          <img
            className="tablet:hidden mobile:block ml-[-50px]"
            src={rgoli1}
            alt=""
          />
          <h1 className="text-white tablet:text-[88px] font-bold mt-[-50px] mobile:text-7xl z-10">
            Nice to meet you!
          </h1>
          <h1 className="text-white tablet:text-[88px] font-bold mb-16 mobile:text-7xl">
            I’m{" "}
            <span className="tablet:border-b-8 tablet:border-solid tablet:border-green font-bold mobile:border-b-[6px] mobile:border-solid mobile:border-green">
              Megi Jabanashvili
            </span>
          </h1>
          <p className="text-grey text-lg tablet:w-1/2 font-medium mb-16 mobile:w-full">
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
        <div className="tablet:w-96 bg-black02 pt-[20px] mobile:pt-14 flex flex-col justify-center items-center mobile:justify-between mt-0 mobile:mt-[-150px] mobile:w-[322px] mobile:h-[600px] z-0 small:w-[174px] small:h-[383px] small:my-0 small:mx-auto">
          <h2 className="text-white text-xl mb-[20px] font-bold mobile:hidden">
            Megi Jabanashvili
          </h2>
          <div className="w-full flex justify-center mobile:justify-end">
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
        <div className="mobile:hidden small:flex flex-col justify-center items-center w-[95%] my-[40px] mx-auto">
          <h1 className="text-white font-bold text-4xl text-center">
            Nice to meet you!
          </h1>
          <h1 className="text-white font-bold text-3xl text-center mb-[20px]">
            I’m{" "}
            <span className="font-bold border-b-[4px] border-solid border-green">
              Megi Jabanashvili
            </span>
          </h1>
          <p className="text-grey text-[16px] font-medium mb-16 text-center">
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
      </section>
      <div className="w-[95%] bg-white h-px mt-16 small:mx-auto"></div>
      <section className="w-full mt-16 flex flex-wrap justify-between">
        {/* <div className="w-full flex flex-wrap"> */}
        <div className="tablet:w-[350px] h-[100px] mt-16 mobile:w-[300px] small:w-full small:mx-auto small:mt-6">
          <h3 className="text-white text-5xl font-bold mb-3.5 small:text-center small:text-3xl">
            HTML
          </h3>
          <p className="text-grey text-lg font-medium small:text-center small:text-base">
            2 Years Experience
          </p>
        </div>
        <div className="tablet:w-[350px] h-[100px] mt-16 mobile:w-[300px] small:w-full small:mx-auto small:mt-6">
          <h3 className="text-white text-5xl font-bold mb-3.5 small:text-center small:text-3xl">
            CSS
          </h3>
          <p className="text-grey text-lg font-medium small:text-center small:text-base">
            2 Years Experience
          </p>
        </div>
        <div className="tablet:w-[350px] h-[100px] mt-16 mobile:w-[300px] small:w-full small:mx-auto small:mt-6">
          <h3 className="text-white text-5xl font-bold mb-3.5 small:text-center small:text-3xl">
            Javascript
          </h3>
          <p className="text-grey text-lg font-medium small:text-center small:text-base">
            2 Years Experience
          </p>
        </div>
        {/* </div> */}
        {/* <div className="w-full flex mt-16 flex-wrap"> */}
        <div className="tablet:w-[350px] h-[100px] mt-16 mobile:w-[300px] small:w-full small:mx-auto small:mt-6">
          <h3 className="text-white text-5xl font-bold mb-3.5 small:text-center small:text-3xl">
            React
          </h3>
          <p className="text-grey text-lg font-medium small:text-center small:text-base">
            Less Than a Year Experiece
          </p>
        </div>
        <div className="tablet:w-[350px] h-[100px] mt-16 mobile:w-[300px] small:w-full small:mx-auto small:mt-6">
          <h3 className="text-white text-5xl font-bold mb-3.5 small:text-center small:text-3xl">
            Typescript
          </h3>
          <p className="text-grey text-lg font-medium small:text-center small:text-base">
            Less Than a Year Experiece
          </p>
        </div>
        <div className="tablet:w-[350px] h-[100px] mt-16 mobile:w-[300px] small:w-full small:mx-auto small:mt-6">
          <h3 className="text-white text-5xl font-bold mb-3.5 small:text-center small:text-3xl">
            Tailwind CSS
          </h3>
          <p className="text-grey text-lg font-medium small:text-center small:text-base">
            Less Than a Year Experiece
          </p>
        </div>
        {/* </div> */}
        {/* <div className="w-full flex mt-16 flex-wrap"> */}
        <div className="tablet:w-[350px] h-[100px] mt-16 mobile:w-[300px] small:w-full small:mx-auto small:mt-6">
          <h3 className="text-white text-5xl font-bold mb-3.5 small:text-center small:text-3xl">
            Styled Components
          </h3>
          <p className="text-grey text-lg font-medium small:text-center small:text-base">
            Less Than a Year Experiece
          </p>
        </div>
        <div className="tablet:w-[350px] h-[100px] mt-16 mobile:w-[300px] small:w-full small:mx-auto small:mt-6">
          <h3 className="text-white text-5xl font-bold mb-3.5 small:text-center small:text-3xl">
            GIT
          </h3>
          <p className="text-grey text-lg font-medium small:text-base small:text-center">
            1 Year Experiece
          </p>
        </div>
        <div className="tablet:w-[350px] h-[100px] mt-16 mobile:w-[300px] small:w-full small:mx-auto small:mt-6">
          <h3 className="text-white text-5xl font-bold mb-3.5 small:text-center small:text-3xl">
            SCSS
          </h3>
          <p className="text-grey text-lg font-medium small:text-base small:text-center">
            1 Year Experiece
          </p>
        </div>
        {/* </div> */}
      </section>
      <section className="w-full mt-36">
        <h1 className="text-white font-bold tablet:text-[88px] mb-20 mobile:text-7xl">
          Projects
        </h1>
        <div className="flex flex-wrap gap-y-16 justify-between mobile:pr-[30px] mobile:gap-y-32">
          <div className="tablet:w-[500px] h-[400px] relative mobile:w-[345px]">
            <div className="group absolute bg-black03 top-0 left-0 w-full h-[80%] hover:bg-black04 transition-all hidden justify-center flex-col items-center text-white02 hover:text-white cursor-pointer tablet:flex">
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
            <h5 className="text-white font-bold text-2xl mt-[20px] mb-[7px]">
              PLANETS FACT SITE
            </h5>
            <p className="text-grey font-medium text-lg">
              REACT, TYPESCRIPT, STYLED COMPONENTS
            </p>

            <div className="tablet:hidden mobile:block text-white mt-[20px]">
              <a
                className="hover:text-green pb-2.5 border-b-2 border-solid border-green tracking-[2.28px] mb-12 text-base"
                href="https://megi-j.github.io/planets-fact-site/"
                target="_blank"
              >
                VIEW PROJECT
              </a>
              <a
                className="hover:text-green pb-2.5 border-b-2 border-solid border-green tracking-[2.28px] ml-[32px] mt-[20px] text-base"
                href="https://github.com/megi-j/planets-fact-site"
                target="_blank"
              >
                VIEW CODE
              </a>
            </div>
          </div>
          <div className="tablet:w-[500px] h-[400px] relative mobile:w-[345px]">
            <div className="group absolute bg-black03 top-0 left-0 w-full h-[80%] hover:bg-black04 transition-all hidden justify-center flex-col items-center text-white02 hover:text-white cursor-pointer tablet:flex">
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
            <h5 className="text-white font-bold text-2xl mt-[20px] mb-[7px]">
              GITHUB USER SEARCH
            </h5>
            <p className="text-grey font-medium text-lg">REACT API</p>

            <div className="tablet:hidden mobile:block text-white mt-[20px]">
              <a
                className="hover:text-green pb-2.5 border-b-2 border-solid border-green tracking-[2.28px] mb-12 text-base"
                href="https://megi-j.github.io/planets-fact-site/"
                target="_blank"
              >
                VIEW PROJECT
              </a>
              <a
                className="hover:text-green pb-2.5 border-b-2 border-solid border-green tracking-[2.28px] ml-[32px] mt-[20px] text-base"
                href="https://github.com/megi-j/planets-fact-site"
                target="_blank"
              >
                VIEW CODE
              </a>
            </div>
          </div>
          <div className="tablet:w-[500px] h-[400px] relative mobile:w-[345px]">
            <div className="group absolute bg-black03 top-0 left-0 w-full h-[80%] hover:bg-black04 transition-all hidden justify-center flex-col items-center text-white02 hover:text-white cursor-pointer tablet:flex">
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
            <h5 className="text-white font-bold text-2xl mt-[20px] mb-[7px]">
              TIP CALCULATOR
            </h5>
            <p className="text-grey font-medium text-lg">HTML CSS REACT</p>

            <div className="tablet:hidden mobile:block text-white mt-[20px]">
              <a
                className="hover:text-green pb-2.5 border-b-2 border-solid border-green tracking-[2.28px] mb-12 text-base"
                href="https://megi-j.github.io/planets-fact-site/"
                target="_blank"
              >
                VIEW PROJECT
              </a>
              <a
                className="hover:text-green pb-2.5 border-b-2 border-solid border-green tracking-[2.28px] ml-[32px] mt-[20px] text-base"
                href="https://github.com/megi-j/planets-fact-site"
                target="_blank"
              >
                VIEW CODE
              </a>
            </div>
          </div>
          <div className="tablet:w-[500px] h-[400px] relative mobile:w-[345px]">
            <div className="group absolute bg-black03 top-0 left-0 w-full h-[80%] hover:bg-black04 transition-all hidden justify-center flex-col items-center text-white02 hover:text-white cursor-pointer tablet:flex">
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
            <h5 className="text-white font-bold text-2xl mt-[20px] mb-[7px]">
              RESTAURANT APP
            </h5>
            <p className="text-grey font-medium text-lg">HTML CSS REACT</p>

            <div className="tablet:hidden mobile:block text-white mt-[20px]">
              <a
                className="hover:text-green pb-2.5 border-b-2 border-solid border-green tracking-[2.28px] mb-12 text-base"
                href="https://megi-j.github.io/planets-fact-site/"
                target="_blank"
              >
                VIEW PROJECT
              </a>
              <a
                className="hover:text-green pb-2.5 border-b-2 border-solid border-green tracking-[2.28px] ml-[32px] mt-[20px] text-base"
                href="https://github.com/megi-j/planets-fact-site"
                target="_blank"
              >
                VIEW CODE
              </a>
            </div>
          </div>
          <div className="tablet:w-[500px] h-[400px] relative mobile:w-[345px]">
            <div className="group absolute bg-black03 top-0 left-0 w-full h-[80%] hover:bg-black04 transition-all hidden justify-center flex-col items-center text-white02 hover:text-white cursor-pointer tablet:flex">
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
            <h5 className="text-white font-bold text-2xl mt-[20px] mb-[7px]">
              TODO APP
            </h5>
            <p className="text-grey font-medium text-lg">
              HTML CSS REACT TYPESCRIPT
            </p>

            <div className="tablet:hidden mobile:block text-white mt-[20px]">
              <a
                className="hover:text-green pb-2.5 border-b-2 border-solid border-green tracking-[2.28px] mb-12 text-base"
                href="https://megi-j.github.io/planets-fact-site/"
                target="_blank"
              >
                VIEW PROJECT
              </a>
              <a
                className="hover:text-green pb-2.5 border-b-2 border-solid border-green tracking-[2.28px] ml-[32px] mt-[20px] text-base"
                href="https://github.com/megi-j/planets-fact-site"
                target="_blank"
              >
                VIEW CODE
              </a>
            </div>
          </div>
          <div className="tablet:w-[500px] h-[400px] relative mobile:w-[345px]">
            <div className="group absolute bg-black03 top-0 left-0 w-full h-[80%] hover:bg-black04 transition-all hidden justify-center flex-col items-center text-white02 hover:text-white cursor-pointer tablet:flex">
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
            <h5 className="text-white font-bold text-2xl mt-[20px] mb-[7px]">
              TBILISI BOOTCAMP
            </h5>
            <p className="text-grey font-medium text-lg">HTML CSS REACT</p>

            <div className="tablet:hidden mobile:block text-white mt-[20px]">
              <a
                className="hover:text-green pb-2.5 border-b-2 border-solid border-green tracking-[2.28px] mb-12 text-base"
                href="https://megi-j.github.io/planets-fact-site/"
                target="_blank"
              >
                VIEW PROJECT
              </a>
              <a
                className="hover:text-green pb-2.5 border-b-2 border-solid border-green tracking-[2.28px] ml-[32px] mt-[20px] text-base"
                href="https://github.com/megi-j/planets-fact-site"
                target="_blank"
              >
                VIEW CODE
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="w-[95%] bg-white h-px mt-16 mobile:mt-24"></div>
      <footer className="w-full mt-12 flex justify-between">
        <h2 className="text-white text-3xl font-bold">Megi Jabanashvili</h2>
        <div className="w-20 flex justify-between mr-[30px]">
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
