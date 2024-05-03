import bgimg from "./assets/wn.webp";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { GrNext } from "react-icons/gr";

function FourthPage() {
  return (
    <section>
      <div className="grid grid-cols-2  pt-0   bg-blue-50">
        <div className="m-10 ">
          <h1 className="text-4xl font-bold p-2 ">ESSENTIAL RESOURCES</h1>
          <p className=" p-2 ">
            {" "}
            Maecenas felis felis, vulputate sit amet mauris et, semper aliquam
            ligula. <br />
            Integer efficitur tellus metus, sed feugiat leo posuere.{" "}
          </p>
          <div className="">
            <ResourcesCard
              title="First year students"
              discription="Integer efficitur tellus metus, sed feugiat leo posuere ac."
              discription1="Morbi vitae tincidunt mi, et malesuada massa."
            />
            <ResourcesCard1
              title="Tuition $ fees"
              discription="Integer efficitur tellus metus, sed feugiat leo posuere ac."
              discription1="Morbi vitae tincidunt mi, et malesuada massa."
            />
            <ResourcesCard2
              title="International students"
              discription="Integer efficitur tellus metus, sed feugiat leo posuere ac."
              discription1="Morbi vitae tincidunt mi, et malesuada massa."
            />
          </div>{" "}
        </div>
        <div className="resourc">
          <center>
            {" "}
            <img src={bgimg} alt="" width={"100%"} height={"auto"} />
          </center>
        </div>{" "}
      </div>
    </section>
  );
}
function ResourcesCard(prop) {
  return (
    <div className="p-7  m-2 border grid grid-cols-5fr 1fr hover:bg-blue-100 hover:text-green-800">
      {" "}
      <h3>
        <a href="#" className="text-2xl font-bold">
          {prop.title}{" "}
        </a>
      </h3>
      <p className="pt-2 text-black hover:text-black">
        {prop.discription}
        <Button className="border-green-800 text-green-800 hover:bg-green-800 hover:border-green-800 rounded-full p-3 ml-10 ">
          <GrNext />
        </Button>
        <br />
        {prop.discription1}
      </p>
    </div>
  );
}
function ResourcesCard1(prop) {
  return (
    <div className="p-7  m-2 border grid grid-cols-5fr 1fr hover:bg-blue-100 hover:text-green-800">
      <h3>
        <a href="#" className="text-2xl font-bold">
          {prop.title}{" "}
        </a>
      </h3>
      <p className="pt-2  text-black hover:text-black">
        {prop.discription}
        <Button className="border-green-800 text-green-800 box-bor hover:bg-green-800 hover:border-green-800 rounded-full p-3 ml-10">
          <GrNext />
        </Button>
        <br />
        {prop.discription1}
      </p>
    </div>
  );
}
function ResourcesCard2(prop) {
  return (
    <div className="p-7  m-2 border grid grid-cols-5fr 1fr hover:bg-blue-100 hover:text-green-800 ">
      <h3>
        <a href="#" className="text-2xl font-bold">
          {prop.title}{" "}
        </a>
      </h3>
      <p className="pt-2  text-black hover:text-black">
        {prop.discription}
        <Button className="border-green-800 text-green-800  hover:bg-green-800 hover:border-green-800 rounded-full p-3 ml-10">
          <GrNext />
        </Button>
        <br />
        {prop.discription1}
      </p>
    </div>
  );
}
export default FourthPage;
