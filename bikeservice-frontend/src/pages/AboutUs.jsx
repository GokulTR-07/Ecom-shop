import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
// import { useSearchParams } from "react-router-dom";
import Header from "../components/Layout/Header";
import Loader from "../components/Layout/Loader";
import styles from "../styles/styles";
import Footer from "../components/Layout/Footer";

const AboutUs = () => {
  // const [data, setData] = useState([]);
  const {allProducts,isLoading} = useSelector((state) => state.products);

  return (
   <>
   {
    isLoading ? (
      <Loader />
    ) : (
      <div>
      <Header activeHeading={2} />
      <br />
      <br />
      <div className={`${styles.section}`}>
        <div className="border p-4 mb-10 bg-red-500 rounded-md">
          <p className="font-bold text-3xl mb-2 text-white">
            ABOUT US
          </p>
          <p className="text-white">Empowering millions of bike service professionals and making two-wheeler
          maintenance simple, cost effective & stress-free.</p>
        </div>

        <div className="border p-4 mb-10 bg-gray-300 rounded-md">
          <p className="font-bold text-2xl mb-5">
            ABOUT Biker's Garage 
          </p>
          <p className= " mb-3 font-medium">
            Welcome to Biker's Garage, where convenience meets expertise in the world of two-wheeler services. Our platform is dedicated to connecting passionate service providers with riders who deserve top-notch care for their motorcycles and scooters.
          </p>
          <p className= " mb-3 font-medium">
            At Biker's Garage, we believe that every ride matters, and that's why we've curated a network of diverse partners who are experts in their craft. From skilled mechanics and certified technicians to trusted workshops and reliable spare parts suppliers, our partners bring a wealth of experience and dedication to ensure your two-wheeler runs smoothly on every journey.
          </p>
          <p className= " mb-3 font-medium">
            Our mission is simple yet impactful: to provide a seamless platform where riders can access a wide range of services while empowering our partners to showcase their skills and grow their businesses. We understand the importance of trust and reliability when it comes to vehicle maintenance, which is why we go the extra mile to vet each partner rigorously, ensuring that only the best professionals join our platform.
          </p>
          <p className= " mb-3 font-medium">
            Becoming a partner on Biker's Garage comes with a plethora of benefits. Our partners gain access to a vast customer base, streamlined booking and scheduling tools, marketing support, and innovative solutions for managing their services efficiently. We believe in fostering a collaborative environment where partners can thrive, learn from each other, and collectively elevate the standards of two-wheeler servicing.
          </p>
          <p className= " mb-3 font-medium">
            Quality is at the core of everything we do. Our partners are held to high standards, backed by certifications, ratings, and customer reviews that reflect their expertise and commitment to excellence. When you choose Biker's Garage, you can trust that your two-wheeler is in capable hands, receiving top-quality care and attention.
          </p>
          <p className= " mb-3 font-medium">
            But Biker's Garage is more than just a platform – it's a community. We bring together riders, partners, and industry experts to share knowledge, insights, and experiences. Through events, workshops, and forums, we nurture a sense of belonging and collaboration that drives continuous improvement and innovation in the world of two-wheeler services.
          </p>
          <p className= " mb-3 font-medium">
            We're excited about the journey ahead and our vision for the future of Biker's Garage. We're constantly evolving, exploring new features, partnerships, and initiatives that will enhance your experience and further elevate the services provided by our partners. Join us as we revolutionize the way two-wheelers are serviced and cared for, one ride at a time.
          </p>
          <p className= " mb-3 font-medium">
            Thank you for choosing Biker's Garage. Let's ride together towards excellence!
          </p>
        </div>
      </div>
      <Footer />
    </div>
     )
   } 
   </>
  );
};

export default AboutUs;