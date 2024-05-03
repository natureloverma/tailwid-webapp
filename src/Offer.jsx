import OfferCardImage from "./assets/gr.webp";
import OfferCard1Image from "./assets/gr2.webp";

function Offer() {
  return (
    <section>
      <div className="p-32 pb-10">
        {" "}
        <center>
          <h1 className="text-4xl font-bold pb-10">PRODRAMS WE OFFER</h1>
          <h5 className="w-1/2 ">
            Maecenas felis felis, vulputate sit amet mauris et, semper aliquam
            ligula. Integer efficitur tellus metus, sed feugiat leo posuere ac.
            Morbi vitae tincidunt mi, et malesuada massa.
          </h5>
        </center>
      </div>
      <div className="grid grid-cols-2 p-32 pt-0  gap-8 ">
        <OfferCard
          imageSrc={OfferCardImage}
          title="Faculty of Science"
          discription="Integer efficitur tellus metus, sed feugiat leo posuere ac. Morbi
          vitae tincidunt mi, et malesuada massa. Sed blandit placerat elit
          sit amet condimentum."
        />
        <OfferCard1
          imageSrc={OfferCard1Image}
          title="Faculty of Arts"
          discription="Integer efficitur tellus metus, sed feugiat leo posuere ac. Morbi
          vitae tincidunt mi, et malesuada massa. Sed blandit placerat elit
          sit amet condimentum."
        />
      </div>
    </section>
  );
}
function OfferCard(prop) {
  return (
    <div className="border-1 border-green-200 hover:border-green-800 p-2  overflow-hidden group hover:text-green-500">
      <img
        className="transition-transform transform duration-100 group-hover:scale-105"
        src={prop.imageSrc}
        alt=""
        style={{
          width: "95%",
          height: "auto",
          margin: "10px",
        }}
      />

      <div className="">
        <h3>
          <a href="#" className="text-3xl p-2">
            {prop.title}
          </a>{" "}
        </h3>
        <p className="p-2 text-black hover:text-black">{prop.discription} </p>
        <a href="#" className="text-green-700 p-2">
          <u className="inline-block transform transition-transform duration-200 ease-in hover:scale-110 hover:translate-x-1 text-green-500">
            Learn More
          </u>
        </a>
      </div>
    </div>
  );
}

function OfferCard1(prop) {
  return (
    <div className="border-1 border-green-200 hover:border-green-800 p-2 overflow-hidden group hover:text-green-500">
      <img
        className="transition-transform transform duration-100 group-hover:scale-105 "
        src={prop.imageSrc}
        alt=""
        style={{
          width: "95%",
          height: "auto",
          margin: "10px",
        }}
      />

      <div className="">
        <h3>
          <a href="#" className="text-3xl p-2 ">
            {prop.title}
          </a>{" "}
        </h3>
        <p className="p-2 text-black hover:text-black">{prop.discription} </p>
        <a href="#" className="text-green-700 p-2">
          <u className="inline-block transform transition-transform duration-200 ease-in hover:scale-110 hover:translate-x-1 text-green-500">
            Learn More
          </u>
        </a>
      </div>
    </div>
  );
}

export default Offer;
