import Image9 from "../assets/customers/image-9.svg";
import Arrows from "../assets/general/arrows.svg";
import Associate1 from "../assets/customers/associate1.svg";
import Associate2 from "../assets/customers/associate2.svg";
import Associate3 from "../assets/customers/associate3.svg";
import Associate4 from "../assets/customers/associate4.svg";
import Associate5 from "../assets/customers/associate5.svg";
import Associate6 from "../assets/customers/associate6.svg";

export default function Customers() {
  return (
    <section className="customers mt-[5.06rem] flex dm:flex-col md:gap-[2.88rem] md:justify-center">
      <img src={Image9} className="h-[15rem] rounded-lg shadow md:w-[326px] md:h-[326px]" />
      <div className="dm:flex dm:flex-col items-center ">
        <p className="w-[18rem] text-[0.8rem] text-neutral-500 font-medium leading-normal md:w-[748px] md:text-base">
          Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis
          sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus.
          Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut
          molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula
          molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue
          ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu
          turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim
          sapien, vitae placerat ante feugiat eget. Quisque vulputate odio
          neque, eget efficitur libero condimentum id. Curabitur id nibh id sem
          dignissim finibus ac sit amet magna.
        </p>
        <h4 className="w-[152px] mt-[1rem] text-green-500 text-xl font-semibold leading-7 md:w-[748px]">
          Tim Smith
        </h4>
        <p className="w-[12rem] text-gray-400 text-base font-normal leading-normal md:w-[748px]">
          British Dragon Boat Racing Association
        </p>
        <div className="w-[13rem] mt-[1.5rem] grid grid-cols-2 grid-rows-2 flex-wrap md:w-auto md:flex md:gap-x-[2.62rem]">
          <img className="col-start-1 row-start-1 h-[1rem] w-[1.5rem] dm:mb-[0.2rem] md:h-[2.5rem] md:w-[2.5rem]" src={Associate1} />
          <img className="col-start-1 row-start-1 h-[1rem] w-[1.5rem] dm:ml-7 md:h-[2.5rem] md:w-[2.5rem]" src={Associate2} />
          <img className="col-start-1 row-start-1 h-[1rem] w-[1.5rem] dm:ml-14 md:h-[2.5rem] md:w-[2.5rem]" src={Associate3} />
          <img className="col-start-1 row-start-2 h-[1rem] w-[1.5rem] md:h-[2.5rem] md:w-[2.5rem]" src={Associate4} />
          <img className="col-start-1 row-start-2 h-[1rem] w-[1.5rem] dm:ml-7 md:h-[2.5rem] md:w-[2.5rem]" src={Associate5} />
          <img className="col-start-1 row-start-2 h-[1rem] w-[1.5rem] dm:ml-14 md:h-[2.5rem] md:w-[2.5rem]" src={Associate6} />
          <a className="col-start-2 row-span-2 w-[228px] text-[0.6rem] flex items-center text-green-500 font-semibold leading-7 md:text-xl md:gap-x-[1rem]">
            Meet all customers <img src={Arrows} />
          </a>
        </div>
      </div>
    </section>
  );
}
