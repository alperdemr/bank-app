import {
  Navbar,
  Hero,
  Stats,
  Businness,
  Billing,
  CardDeal,
  Testimonials,
  Clients,
  CTA,
  Footer,
} from "./components";
export default function Home() {
  return (
      <div className="bg-primary w-full overflow-hidden">
        <div className=" sm:px-16 px-6 flex justify-center items-center">
          <div className=" xl:max-w-[1280px] w-full">
            <Navbar />
          </div>
        </div>
        <div className=" bg-primary flex justify-center items-center">
          <div className=" xl:max-w-[1280px] w-full">
            <Hero />
          </div>
        </div>
        <div className=" bg-primary sm:px-16 px-6 flex justify-center items-center ">
          <div className=" xl:max-w-[1280px] w-full">
            <Stats />
            <Businness />
            <Billing />
            <CardDeal />
            <Testimonials />
            <Clients />
            <CTA />
            <Footer />
          </div>
        </div>
      </div>

  );
}
