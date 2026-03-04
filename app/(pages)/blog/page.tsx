import { BlogGrid } from "./components/BlogGrid";
import { BlogFaq } from "./components/BlogFaq";
import { BlogStartBuilding } from "./components/BlogStartBuilding";
import { BlogTestimonials } from "./components/BlogTestimonials";
import { SlantSeparator } from "../about/components/SlantSeparator";

export default function BlogPage() {
  return (
    <div className="flex flex-col w-full">
      <BlogGrid />
      <SlantSeparator/>
      <BlogTestimonials />
      <BlogStartBuilding />
      <BlogFaq />
    </div>
  );
}
