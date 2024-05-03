import bgimg from "./assets/sd.webp";

function Approach() {
  return (
    <section className="bg-red-50">
      <div className="  grid grid-cols-2 p-32 gap-28 ">
        <div className="side-by-side">
          <center>
            {" "}
            <img src={bgimg} alt="" className="w-full h-full" />
          </center>
        </div>

        <div className="side-by-side">
          <h2 className="text-5xl font-bold m-1 ">
            A COMPREHENSIVE TEACHIG APPROACH
          </h2>
          <p className="p-3 text-align-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            felis felis, vulputate sit amet mauris et, semper aliquam ligula.
            Integer efficitur tellus metus, sed feugiat leo posuere ac. Morbi
            vitae tincidunt malesuada massa.{" "}
          </p>
          <p className="p-3 text-align-left">
            Maecenas felis felis, vulputate sit amet mauris et, semper aliquam
            ligula. Integer efficitur tellus metus, sed feugiat leo posuere ac.
            Morbi vitae tincidunt mi, et malesuada massa.
          </p>

          <a href="#" className="p-3 text-green-800">
            <u className="inline-block transform transition-transform duration-200 ease-in hover:scale-110 hover:translate-x-1 text-green-500">
              Learn More
            </u>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Approach;
