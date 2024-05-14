import { Banner } from "@/components/Banner";
import { Enquiry } from "@/components/Enquiry";
import jsonData from "./jsonData.json"
import { ProductBar } from "@/components/ProductBar";

export default function Home() {
  return (
    <div>
      <Banner banner={jsonData.banner} banner_style={jsonData.banner_style}/>
      <ProductBar data={jsonData.product}/>
      <Enquiry enquiry={jsonData.enquiry}/>
    </div>
  );
}
