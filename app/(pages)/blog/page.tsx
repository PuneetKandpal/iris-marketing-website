import { BlogGrid } from "./components/BlogGrid";
import { BlogFaq } from "./components/BlogFaq";
import { BlogStartBuilding } from "./components/BlogStartBuilding";
import { BlogTestimonials } from "./components/BlogTestimonials";

export default function BlogPage() {
  return (
    <div className="flex flex-col w-full">
      <BlogGrid />
      <BlogTestimonials />
      <BlogStartBuilding />
      <BlogFaq />
    </div>
  );
}
