import bumn from "./assets/bumn.jpg";
import cidb from "./assets/cidb.png";
import haier from "./assets/haier.png";
import syngenta from "./assets/syngenta.png";

import TopStoriesCard1Image from "./assets/graduation.webp";
import TopStoriesCard2Image from "./assets/machine.webp";
import TopStoriesCard3Image from "./assets/onlinel.webp";

function TopStories() {
  return (
    <section>
      <div className="flex justify-between m-20 mt-32  ">
        {" "}
        <h1>
          <b className="text-5xl font-bold ">TOP STORIES</b>
        </h1>
        <a href="#" className="link">
          <u className="inline-block transform transition-transform duration-200 ease-in hover:scale-110 hover:translate-x-[-10%] text-green-500">
            More Stories
          </u>
        </a>
      </div>

      <div className="grid grid-cols-3 m-20 gap-4">
        <TopStoryCard
          imageSrc={TopStoriesCard1Image}
          title="Linguistics alumna says recognizing Indigenous Languages Day is
              crucial to our histories"
        />
        <TopStoryCard1
          imageSrc={TopStoriesCard2Image}
          title="Linguistics alumna says recognizing Indigenous Languages Day is
              crucial to our histories"
        />
        <TopStoryCard2
          imageSrc={TopStoriesCard3Image}
          title="Linguistics alumna says recognizing Indigenous Languages Day is
              crucial to our histories"
        />
      </div>

      <hr />

      <div className=" mt-20 ml-80 mr-80 p-14 w-2/4 text-center">
        <h1>
          <b className="text-5xl ">OUR PARTNERS</b>
        </h1>
        <br />
        <p>
          Maecenas felis felis, vulputate sit amet mauris et, semper aliquam
          ligula. Integer efficitur tellus metus, sed feugiat leo posuere.
        </p>{" "}
        <div
          className="  flex justify-end space-x-4 container mx-auto mt-8"
          style={{
            padding: "50px",
            margin: "20px",
            display: "flex",
            justifyContent: "space-between",
            filter: "grayscale(90%)",
          }}
        >
          <img src={bumn} alt="" width={100} height={100} />
          <img src={cidb} alt="" width={100} height={100} />
          <img src={syngenta} alt="" width={100} height={100} />
          <img src={bumn} alt="" width={100} height={100} />
          <img src={haier} alt="" width={100} height={100} />
        </div>
      </div>
    </section>
  );
}
function TopStoryCard(prop) {
  return (
    <div className="hover:text-green-800">
      <a href="#" className="filink">
        <img className="w-96 h-72" src={prop.imageSrc} alt="" />
        <h4 className="text-2xl m-3 p-3 text-center">{prop.title}</h4>
      </a>
    </div>
  );
}

function TopStoryCard1(prop) {
  return (
    <div className="hover:text-green-800">
      <a href="#" className="filink">
        <img className="w-96 h-72" src={prop.imageSrc} alt="" />
        <h4 className="text-2xl m-3 p-3 text-center">{prop.title}</h4>
      </a>
    </div>
  );
}

function TopStoryCard2(prop) {
  return (
    <div className="hover:text-green-800">
      <a href="#" className="filink">
        <img className="w-96 h-72" src={prop.imageSrc} alt="" />
        <h4 className="text-2xl m-3 p-3 text-center ">{prop.title}</h4>
      </a>
    </div>
  );
}

export default TopStories;
