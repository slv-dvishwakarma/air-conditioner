import { Banner } from "@/components/Banner";
import { Enquiry } from "@/components/Enquiry";
import jsonData from "./jsonData.json";
import { ProductBar } from "@/components/ProductBar";
import { BannerSlider } from "@/components/BannerSlider";
import { PaymentSuccess } from "@/components/PaymentSuccess";

export default function Home() {
  return (
    <div>
      <BannerSlider />
      {/* <Banner banner={jsonData.banner} banner_style={jsonData.banner_style} /> */}
      {/* <ProductBar data={jsonData.product}/> */}
      {/* <Enquiry enquiry={jsonData.enquiry} /> */}
      <PaymentSuccess />
    </div>
  );
}
