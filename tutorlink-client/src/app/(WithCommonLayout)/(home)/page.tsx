import Banner from "@/components/modules/Home/Banner";
import FeatureStudent from "@/components/modules/Home/FeatureStudent";
import FeatureTutor from "@/components/modules/Home/FeatureTutor";

import ServiceCard from "@/components/modules/Home/ServiceCard";
import Subscription from "@/components/modules/Home/Subscription";
import Testimonial from "@/components/modules/Home/Testimonial";

const page = () => {
  return (
    <div className="p-3 md:py-6 md:px-10">
      <Banner />
      <ServiceCard />
      <FeatureTutor />
      <FeatureStudent />
      <Testimonial />
      <Subscription />
    </div>
  );
};

export default page;
