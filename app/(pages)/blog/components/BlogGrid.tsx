import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container, Section } from "@/app/components/ui";

const posts = [
  {
    id: 1,
    title: "How to scale your engineering team in 2024",
    excerpt: "Learn the strategies top companies are using to grow their technical teams without losing velocity.",
    category: "Engineering",
    date: "Mar 15, 2024",
    imageUrl: "/images/blog/engineering.svg",
  },
  {
    id: 2,
    title: "The future of automated workflows",
    excerpt: "Why the next generation of automation isn&apos;t just about saving time, it&apos;s about making better decisions.",
    category: "Product",
    date: "Mar 10, 2024",
    imageUrl: "/images/blog/product.svg",
  },
  {
    id: 3,
    title: "Announcing Iriscale 2.0",
    excerpt: "We&apos;ve rebuilt our core engine from the ground up. Here&apos;s everything that&apos;s new in this release.",
    category: "News",
    date: "Mar 5, 2024",
    imageUrl: "/images/blog/news.svg",
  },
  {
    id: 4,
    title: "Building a culture of documentation",
    excerpt: "Documentation is often an afterthought. Here&apos;s how to make it a core part of your team&apos;s culture.",
    category: "Culture",
    date: "Feb 28, 2024",
    imageUrl: "/images/blog/culture.svg",
  },
  {
    id: 5,
    title: "Securing your data at scale",
    excerpt: "A deep dive into the security architecture that powers enterprise applications.",
    category: "Security",
    date: "Feb 20, 2024",
    imageUrl: "/images/blog/security.svg",
  },
  {
    id: 6,
    title: "Why we chose Next.js for our new frontend",
    excerpt: "The technical decisions behind our recent migration and what we learned along the way.",
    category: "Engineering",
    date: "Feb 12, 2024",
    imageUrl: "/images/blog/frontend.svg",
  },
];

export function BlogGrid() {
  return (
    <Section className="py-24">
      <Container>
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-light tracking-tight mb-6">
            Iriscale Blog
          </h1>
          <p className="text-lg text-muted max-w-2xl">
            Thoughts, insights, and news from the team building the future of work.
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-16 rounded-2xl overflow-hidden border border-border bg-background hover:shadow-lg transition-shadow">
          <Link href={`/blog/${posts[0].id}`} className="flex flex-col md:flex-row group">
            <div className="md:w-1/2 relative aspect-video md:aspect-auto">
              <Image
                src={posts[0].imageUrl}
                alt={posts[0].title}
                fill
                className="object-cover"
              />
            </div>
            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-4 text-sm">
                <span className="text-accent font-medium">{posts[0].category}</span>
                <span className="text-muted">{posts[0].date}</span>
              </div>
              <h2 className="text-3xl font-semibold mb-4 group-hover:text-accent transition-colors">
                {posts[0].title}
              </h2>
              <p className="text-muted text-lg mb-6">
                {posts[0].excerpt}
              </p>
              <div className="flex items-center text-accent font-medium">
                Read Article <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-10">
          {["All", "Engineering", "Product", "News", "Culture", "Security"].map((cat) => (
            <button
              key={cat}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                cat === "All"
                  ? "bg-foreground text-background"
                  : "bg-surface hover:bg-surface/80 text-muted"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.slice(1).map((post) => (
            <Link key={post.id} href={`/blog/${post.id}`} className="group flex flex-col">
              <div className="relative aspect-video rounded-xl overflow-hidden mb-4 border border-border">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex items-center gap-3 mb-3 text-sm">
                <span className="text-accent font-medium">{post.category}</span>
                <span className="text-muted">{post.date}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors line-clamp-2">
                {post.title}
              </h3>
              <p className="text-muted line-clamp-2">
                {post.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
