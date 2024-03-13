// import Hero from "./componants/Hero";
// import Section1 from "./componants/Section1";
// import Section2 from "./componants/Section2";
// import Section3 from "./componants/Section3";
// import Section4 from "./componants/Section4";
// import EmblaCarousel from "./componants/Section5";
// // import Section5 from "./componants/Section5";
// const OPTIONS = {{ loop: false }, [Autoplay()]};
// const SLIDE_COUNT = 5;
// const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
// function App() {
//   return (
//     <div className=" w-full h-full flex justify-center items-center flex-col gap-14">
//       <Hero />
//       <Section1 />
//       <Section2 />
//       <Section3 />
//       <Section4 />
//       <EmblaCarousel slides={SLIDES} options={OPTIONS} />
//     </div>
//   );
// }

// export default App;
import Hero from "./componants/Hero";
import Section1 from "./componants/Section1";
import Section2 from "./componants/Section2";
import Section3 from "./componants/Section3";
import Section4 from "./componants/Section4";

import EmblaCarousel from "./componants/Section5"; // Adjust the import statement
import Section6 from "./componants/Section6";
import Section7 from "./componants/Section7";

// const OPTIONS = { loop: false, autoplay: { delay: 4000 } }; // Correct the OPTIONS constant
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

function App() {
  return (
    <div className="w-full h-full flex justify-center items-center flex-col gap-14">
      <Hero />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <EmblaCarousel slides={SLIDES} />
      <Section6 />
      <Section7 />
    </div>
  );
}

export default App;
