import bgimg from "./assets/last.webp";

function Trust() {
  return (
    <section>
      <div className="grid grid-cols-2 ">
        <div className="">
          <center>
            {" "}
            <img className="w-screen h-screen" src={bgimg} alt="" />
          </center>
        </div>

        <div className=" bg-green-800 text-white p-20 pt-8 pr-40 pb-5">
          <h1 className="font-bold text-5xl ">
            TRUSTED BY OVER 6000+ STUDENTS
          </h1>

          <p className="text-left pt-8 bold text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            felis felis, vulputate sit amet mauris et, semper aliquam ligula.
            Integer efficitur tellus metus, sed feugiat leo posuere ac. Morbi
            vitae tincidunt malesuada massa.{" "}
          </p>

          <p className="text-left text-2xl pt-8">
            Maecenas felis felis, vulputate sit amet mauris et, semper aliquam
            ligula. Integer efficitur tellus metus, sed feugiat leo posuere ac.
            Morbi vitae tincidunt mi, et malesuada massa.
          </p>
          <br />
          <a href="#" className="link">
            <u className="inline-block transform transition-transform duration-200 ease-in hover:scale-110 hover:translate-x-1 text-white">
              Join Now
            </u>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Trust;
