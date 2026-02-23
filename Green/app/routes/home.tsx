
import { Scroll } from "lucide-react";
import Conclusion from "~/Components/conclusion";
import ContactSection from "~/Components/contact";
import EquipmentSection from "~/Components/EquipSection";
import DiscoverSection from "~/Components/exploresection";

import FAQ from "~/Components/faq";
import GroupRide from "~/Components/groupride";

import Hero from "~/Components/hero";
import LearnFromRoad from "~/Components/learnfromroad";
import MomentsSection from "~/Components/moments";
import Navbar from "~/Components/navbar";
import ReadySection from "~/Components/readytoride";
import Testimonials from "~/Components/realstories";
import ScrollToTop from "~/Components/Scroll";
import Stepssection from "~/Components/Stepssection";
import TrustedSection from "~/Components/trustedsection";
import UpcomingRides from "~/Components/UpcomingRides";



export default function Home() {
   return (

     <>
     <Navbar />
     <Hero />
     <TrustedSection />
     <GroupRide />
      <UpcomingRides/>
     <EquipmentSection/>
      <DiscoverSection />
  
       <Stepssection/>
      
     <Testimonials/>
     <ReadySection />
     
     <FAQ/>
     <LearnFromRoad/>
     <ContactSection/>
     <MomentsSection/>
     <Conclusion/>
    
     <ScrollToTop />
      
     
     
     
     </>
  );
}
