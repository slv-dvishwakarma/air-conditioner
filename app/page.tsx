import { Banner } from "@/components/Banner";
import { Enquiry } from "@/components/Enquiry";
import jsonData from "./jsonData.json"

export default function Home() {
  return (
    <div>
      <Banner banner={jsonData.banner} banner_style={jsonData.banner_style}/>
      <Enquiry enquiry={jsonData.enquiry}/>
    </div>
  );
}
