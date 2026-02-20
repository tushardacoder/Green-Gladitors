
import ContactSection from "~/Components/contact";
import FAQ from "~/Components/faq";
import GroupRide from "~/Components/groupride";
import Hero from "~/Components/hero";
import LearnFromRoad from "~/Components/learnfromroad";
import MomentsSection from "~/Components/moments";
import Navbar from "~/Components/navbar";
import ReadySection from "~/Components/readytoride";
import Testimonials from "~/Components/realstories";
import TrustedSection from "~/Components/trustedsection";



export default function Home() {
   return (

     <>
     <Navbar />
     <Hero />
     <TrustedSection />
     <GroupRide/>
     <Testimonials/>
     <ReadySection />
     
     <FAQ/>
     <LearnFromRoad/>
     <ContactSection/>
     <MomentsSection/>
     
     
     
     </>
  );
}
