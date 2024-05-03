import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

function University() {
  return (
    <section
      className="text-white bg-cover bg-center h-screen"
      style={{
        backgroundImage: 'url("/src/assets/ft.webp")',
        backgroundRepeat: "no-repeat",
        filter: "grayscale(30%)",
      }}
    >
      <div className="p-28 w-2/3">
        <h4 className="text-3xl">EDUCATION & SCHOOL</h4>
        <br />
        <h1 className="text-6xl font-bold">
          SHOWCASE COURSES, EVENTS AND MORE!
        </h1>
        <br />
        <h6 className="text-2xl">
          This is the first web page and the example page also the pages.
          Understanding and application of knowledge.{" "}
        </h6>
        <br />
        <Button className="text-xl bg-green-800 border-green-800  px-12 hover:bg-transparent hover:border-white rounded-none ">
          Get Started Now
        </Button>
      </div>
    </section>
  );
}

export default University;
