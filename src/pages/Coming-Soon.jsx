import comming from "../assets/comming.jpeg";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ComingSoon() {
  return (
    <>
      <Header />
      <div
        style={{
          backgroundImage: `url(${comming})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          width: "100%",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <Footer />
    </>
  );
}
