import ilustrasi from "../assets/Illustration.png";
import ilustrasi2 from "../assets/rafiki.png";
import ilustrasi3 from "../assets/pana.png";
import ilustrasi4 from "../assets/tesla.jpg";
import { Carousel } from "flowbite-react";
import { semuaClient, semuaMarketing } from "../assets/data";
import {
  PiUsersThreeLight,
  PiHandshakeLight,
  PiHandshake,
  PiBuildingsLight,
  PiUsersThree,
  PiWallet,
  PiArrowRight,
} from "react-icons/pi";
import { MdOutlineTouchApp } from "react-icons/md";

const homepage = () => {
  return (
    <div>
      <div className="bg-neutralSilver">
        <div className="max-w-screen-2xl mx-auto min-h-screen h-screen">
          <Carousel className="container w-full mx-auto" leftControl=" " rightControl=" ">
            <div className=" my-28 md:my-8 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
              <div>
                <img src={ilustrasi} alt="Ilustrasi" className="animate__animated animate__fadeInUp" />
              </div>
              <div className="hero md:w-1/2">
                <h1 className="text-4xl lg:text-5xl font-bold mb-4 animate__animated animate__fadeInDown">
                  Lessons and insights <br />{" "}
                  <span className="text-brandPrimary">from 8 years</span>
                </h1>
                <p className="text-sm lg:text-base mb-8 text-gray-500 animate__animated animate__fadeInUp animate__delay-1s">
                  Where to grow your business as a photographer: site or social
                  media?
                </p>
                <button className="bg-brandPrimary px-8 py-3 rounded-lg text-neutralSilver hover:bg-brandPrimaryshade animate__animated animate__fadeInUp animate__delay-1s">
                  Register
                </button>
              </div>
            </div>
            <div className=" my-28 md:my-8 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
              <div>
                <img src={ilustrasi} alt="Ilustrasi" />
              </div>
              <div className="md:w-1/2">
                <h1 className="text-4xl lg:text-5xl font-bold mb-4 ">
                  Lessons and insights <br />{" "}
                  <span className="text-brandPrimary">from 8 years</span>
                </h1>
                <p className="text-sm lg:text-base mb-8 text-gray-500 ">
                  Where to grow your business as a photographer: site or social
                  media?
                </p>
                <button className="bg-brandPrimary px-8 py-3 rounded-lg text-neutralSilver hover:bg-brandPrimaryshade">
                  Register
                </button>
              </div>
            </div>
            <div className=" my-28 md:my-8 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
              <div>
                <img src={ilustrasi} alt="Ilustrasi" />
              </div>
              <div className="md:w-1/2">
                <h1 className="text-4xl lg:text-5xl font-bold mb-4 ">
                  Lessons and insights <br />{" "}
                  <span className="text-brandPrimary">from 8 years</span>
                </h1>
                <p className="text-sm lg:text-base mb-8 text-gray-500 ">
                  Where to grow your business as a photographer: site or social
                  media?
                </p>
                <button className="bg-brandPrimary px-8 py-3 rounded-lg text-neutralSilver hover:bg-brandPrimaryshade">
                  Register
                </button>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
      <div className="flex flex-col items-center py-10">
        <div className="container">
        <div className="text-center mb-8">
          <h1 className="font-bold text-2xl lg:text-4xl" data-aos="fade-up" data-aos-duration="500">Our Clients</h1>
          <p className="text-base text-gray-500 my-2" data-aos="fade-up" data-aos-duration="1500">
            We have been working with some Fortune 500+ clients
          </p>
        </div>
        <div className="flex justify-center items-center">
          {semuaClient.map((client) => (
            <a key={client.id} className="mx-3 mb-4 px-11" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={client.delay}>
              <img src={client.image} alt="unsplash.com" className="w-full" />
            </a>
          ))}
        </div>
          </div>
      </div>
      <div className="flex flex-col items-center py-2">
        <div className="container">

        <div className="text-center mb-8">
          <h1 className="font-bold text-2xl lg:text-4xl" data-aos="fade-up" data-aos-duration="500">
            Manage your entire community
            <br /> in a single system
          </h1>
          <p className="text-base text-gray-500 my-2" data-aos="fade-up" data-aos-duration="1000">
            Who is Nextcent suitable for?
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-row justify-between">
            <div className="grid grid-cols-3 gap-4 ">
              <div className="flex flex-col items-center text-center px-6 py-2 shadow-lg" data-aos="fade-up" data-aos-duration="1000">
                <div className="bg-backicon rounded-tl-2xl rounded-br-2xl w-12 h-12">
                  <PiUsersThreeLight className="w-12 h-12 -ml-5 -mt-1 z-50 text-brandPrimaryshade5" />
                </div>
                <h3 className="font-bold text-neutralDgrey text-2xl text-center pt-4 mx6 px-7">
                  Membership Organisations
                </h3>
                <p className="text-center text-neutralDgrey pt-2">
                  Our membership management software provides full automation of
                  membership renewals and payments
                </p>
              </div>
              <div className="flex flex-col items-center text-center px-6 py-2 shadow-lg" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                <div className="bg-backicon rounded-tl-2xl rounded-br-2xl w-12 h-12">
                  <PiBuildingsLight className="w-12 h-12 -ml-5 -mt-1 z-50 text-brandPrimaryshade5" />
                </div>
                <h3 className="font-bold text-neutralDgrey text-2xl text-center pt-4 mx-6 px-7">
                National Associations
                </h3>
                <p className="text-center text-neutralDgrey pt-2">
                  Our membership management software provides full automation of
                  membership renewals and payments
                </p>
              </div>
              <div className="flex flex-col items-center text-center px-6 py-2 shadow-lg" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="800">
                <div className="bg-backicon rounded-tl-2xl rounded-br-2xl w-12 h-12">
                  <PiHandshakeLight className="w-12 h-12 -ml-5 -mt-1 z-50 text-brandPrimaryshade5" />
                </div>
                <h3 className="font-bold text-neutralDgrey text-2xl text-center pt-4 mx-10 px-8">
                  Clubs And Groups
                </h3>
                <p className="text-center text-neutralDgrey pt-2">
                  Our membership management software provides full automation of
                  membership renewals and payments
                </p>
              </div>
        </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center py-20 overflow-hidden">
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-row justify-between">
            <div className="container grid grid-cols-2 gap-4">
              <div className="flex items-center justify-center">
                <div className="w-full flex  justify-center" data-aos="fade-right" data-aos-duration="1000">
                  <img src={ilustrasi2} alt="" />
                </div>
              </div>
              <div className="flex flex-col px-6 py-6 items-start">
                <h3 className="font-bold text-neutralDgrey text-4xl pt-4" data-aos="fade-up" data-aos-duration="1000">
                  The unseen of spending three years at Pixelgrade
                </h3>
                <p className=" text-neutralDgrey pt-4" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  sit amet justo ipsum. Sed accumsan quam vitae est varius
                  fringilla. Pellentesque placerat vestibulum lorem sed porta.
                  Nullam mattis tristique iaculis. Nullam pulvinar sit amet
                  risus pretium auctor. Etiam quis massa pulvinar, aliquam quam
                  vitae, tempus sem. Donec elementum pulvinar odio.
                </p>
                <button className="bg-brandPrimary mt-8 px-8 py-3 rounded-lg text-neutralSilver hover:bg-brandPrimaryshade" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="800">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center py-5 bg-neutralSilver overflow-hidden">
        <div className="container">
        <div className="flex flex-col justify-center">
          <div className="flex flex-row justify-between">
            <div className="grid grid-cols-2 gap-4 justify-center">
              <div className="flex flex-col px-6 py-6 justify-center">
                <h3 className="font-bold text-neutralDgrey text-4xl pt-4" data-aos="fade-up" data-aos-duration="1000">
                  Helping a local <br />
                  <span className="text-brandPrimary">
                    business reinvent itself
                  </span>
                </h3>
                <p className=" text-black pt-4" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                  We reached here with our hard work and dedication
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 px-12">
                <div className="flex flex-col px-6 py-6" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                  <div className="flex flex-row items-center gap-4">
                    <PiUsersThree className="w-12 h-12 text-brandPrimary" />
                    <div className="flex flex-col">
                      <h3 className="font-bold text-3xl">2,245,341</h3>
                      <p className="text-neutralGrey text-base">Members</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col px-6 py-6 justify-center" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="700">
                  <div className="flex flex-row items-center gap-4">
                    <PiHandshake className="w-12 h-12 text-brandPrimary" />
                    <div className="flex flex-col">
                      <h3 className="font-bold text-3xl">46,328</h3>
                      <p className="text-neutralGrey text-base">Clubs</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col px-6 py-6 justify-center" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="900">
                  <div className="flex flex-row items-center gap-4">
                    <MdOutlineTouchApp className="w-12 h-12 text-brandPrimary" />
                    <div className="flex flex-col">
                      <h3 className="font-bold text-3xl">828,867</h3>
                      <p className="text-neutralGrey text-base">
                        Event Bookings
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col px-6 py-6 justify-center" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1100">
                  <div className="flex flex-row items-center gap-4">
                    <PiWallet className="w-12 h-12 text-brandPrimary" />
                    <div className="flex flex-col">
                      <h3 className="font-bold text-3xl">1,926,436</h3>
                      <p className="text-neutralGrey text-base">Payments</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
      <div className="flex flex-col items-center py-20 overflow-hidden">
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-row justify-between">
            <div className="container grid grid-cols-2 gap-4">
              <div className="flex items-center justify-center">
                <div className="w-full flex  justify-center" data-aos="fade-right" data-aos-duration="1000">
                  <img src={ilustrasi3} alt="" />
                </div>
              </div>
              <div className="flex flex-col px-6 py-6 items-start">
                <h3 className="font-bold text-neutralDgrey text-4xl pt-4" data-aos="fade-up" data-aos-duration="1000">
                  How to design your site footer like we did
                </h3>
                <p className=" text-neutralDgrey pt-4" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                  Donec a eros justo. Fusce egestas tristique ultrices. Nam
                  tempor, augue nec tincidunt molestie, massa nunc varius arcu,
                  at scelerisque elit erat a magna. Donec quis erat at libero
                  ultrices mollis. In hac habitasse platea dictumst. Vivamus
                  vehicula leo dui, at porta nisi facilisis finibus. In euismod
                  augue vitae nisi ultricies, non aliquet urna tincidunt.
                  Integer in nisi eget nulla commodo faucibus efficitur quis
                  massa. Praesent felis est, finibus et nisi ac, hendrerit
                  venenatis libero. Donec consectetur faucibus ipsum id gravida.
                </p>
                <button className="bg-brandPrimary mt-8 px-8 py-3 rounded-lg text-neutralSilver hover:bg-brandPrimaryshade" data-aos="fade-up" data-aos-duration="1000">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center py-10 bg-neutralSilver overflow-hidden">
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-row justify-between">
            <div className="container grid grid-cols-1 ">
              <div className="flex items-center justify-center gap-4">
                <div className=" flex  justify-center" data-aos="fade-right" data-aos-duration="1000">
                  <img src={ilustrasi4} alt="" className="w-3/4 rounded-lg" />
                </div>
                <div className="flex flex-col items-start" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                  <p className=" text-gray-500">
                    Maecenas dignissim justo eget nulla rutrum molestie.
                    Maecenas lobortis sem dui, vel rutrum risus tincidunt
                    ullamcorper. Proin eu enim metus. Vivamus sed libero ornare,
                    tristique quam in, gravida enim. Nullam ut molestie arcu, at
                    hendrerit elit. Morbi laoreet elit at ligula molestie, nec
                    molestie mi blandit. Suspendisse cursus tellus sed augue
                    ultrices, quis tristique nulla sodales. Suspendisse eget
                    lorem eu turpis vestibulum pretium. Suspendisse potenti.
                    Quisque malesuada enim sapien, vitae placerat ante feugiat
                    eget. Quisque vulputate odio neque, eget efficitur libero
                    condimentum id. Curabitur id nibh id sem dignissim finibus
                    ac sit amet magna.
                  </p>
                  <h3 className="font-bold text-brandPrimary text-2xl  pt-4 ">
                    Tim Smith
                  </h3>
                  <p className="text-base text-gray-400">
                    British Dragon Boat Racing Association
                  </p>
                  <div className="flex justify-center items-center space-x-2 mt-8" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
                    <div className="flex items-center">
                      {semuaClient.map((client) => (
                        <a key={client.id} className="mr-4 justify-center">
                          <img
                            src={client.image}
                            alt="unsplash.com"
                            className="w-full"
                          />
                        </a>
                      ))
                      }
                    </div>
                      <button className="bg-transparent font-semibold text-xl text-brandPrimary flex flex-row items-center">
                      Meet all customers <PiArrowRight className="w-6 h-6 ml-4"/>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-12">
        <div className="flex flex-col justify-center px-28">
        <div className="container">
        <h1 className="font-bold text-4xl text-center mb-2" data-aos="fade-up" data-aos-duration="1000">Caring is the new marketing</h1>
        <p className="text-base text-gray-500 text-center px-60" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
            The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​</p>
        </div>
        <div className="flex flex-col justify-center items-center py-4">
          <div className="flex flex-row justify-between">
            <div className="grid grid-cols-3 gap-6">
            {semuaMarketing.map((market) => {
                return (
                    <div className="flex items-center justify-center" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={market.delay}>
                    <div className=" flex flex-col items-center">
                    <img src={market.image} alt="" className="w-full rounded-lg"/>
                    <div className="flex flex-col bg-neutralSilver mx-10 py-4 rounded-lg -mt-16 shadow-lg">
                    <div className="">
                <a className="block lg:inline-block lg:mb-0 py-4 mx-4 text-lg font-semibold text-center" key={market.id}>{market.text}
                </a>
                <button className="bg-transparent font-semibold text-xl text-brandPrimary flex flex-row items-center justify-center mx-auto">
                     Readmore <PiArrowRight className="w-5 h-5 ml-4"/>
                    </button>
                    </div>
                    </div>
                </div>
                    </div>
              );
            })}
            </div>
            </div>
            </div>
        </div>
      </div>
      <div className="flex items-center py-10 bg-neutralSilver">
        <div className="container text-center mx-auto px-15">
            <h1 className="font-bold text-center text-6xl" data-aos="fade-up" data-aos-duration="1000">Pellentesque suscipit<br/> fringilla libero eu.</h1>
            <div className="flex items-center justify-center" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
            <button className="mt-9 flex flex-row items-center bg-brandPrimary px-5 py-3.5 rounded-lg text-white hover:bg-brandPrimaryshade font-medium">Get a Demo<PiArrowRight className="w-5 h-5 ml-4"/></button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default homepage;
