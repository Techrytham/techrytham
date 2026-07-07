"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Calendar, 
  Clock, 
  ChevronLeft, 
  Twitter, 
  Linkedin, 
  Link2, 
  Check,
  User,
  ArrowRight
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { blogPosts } from "@/data/blogData";

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  const [copied, setCopied] = useState(false);
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return (
      <>
        <Navbar />
        <main className="bg-white min-h-[70vh] flex flex-col items-center justify-center py-20 px-6">
          <h1 className="text-3xl font-extrabold text-heading">Post Not Found</h1>
          <p className="text-paragraph mt-3 max-w-md text-center">
            Sorry, the blog article you are looking for does not exist or has been moved.
          </p>
          <Link
            href="/blogs"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-card hover:bg-brand-light transition-all"
          >
            <ChevronLeft size={16} /> Back to Blogs
          </Link>
        </main>
        <Footer />
      </>
    );
  }

  // Related Posts: Find up to 2 other posts in the same category or newest
  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id)
    .sort((a, b) => {
      // Prioritize same category, then date
      if (a.category === post.category && b.category !== post.category) return -1;
      if (a.category !== post.category && b.category === post.category) return 1;
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    })
    .slice(0, 2);

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Modern Markdown/Rich Text Renderer
  const parseMarkdown = (markdown: string) => {
    const lines = markdown.split("\n");
    let inCodeBlock = false;
    let codeLines: string[] = [];
    let codeLang = "";
    
    return lines.map((line, idx) => {
      // Code Blocks
      if (line.trim().startsWith("```")) {
        if (inCodeBlock) {
          inCodeBlock = false;
          const codeContent = codeLines.join("\n");
          codeLines = [];
          return (
            <pre key={idx} className="bg-[#F8F9FF] border border-[#ECECFF] rounded-2xl p-5 my-6 overflow-x-auto text-xs font-mono leading-relaxed text-heading">
              <code className={codeLang}>{codeContent}</code>
            </pre>
          );
        } else {
          inCodeBlock = true;
          codeLang = line.trim().substring(3);
          return null;
        }
      }
      
      if (inCodeBlock) {
        codeLines.push(line);
        return null;
      }

      const trimmed = line.trim();
      if (!trimmed) return <div key={idx} className="h-4" />;

      // Main Headers
      if (trimmed.startsWith("# ")) {
        return <h1 key={idx} className="text-3xl sm:text-4xl font-extrabold text-heading mt-10 mb-5 tracking-tight">{trimmed.substring(2)}</h1>;
      }
      if (trimmed.startsWith("## ")) {
        return <h2 key={idx} className="text-2xl sm:text-3xl font-bold text-heading mt-10 mb-4 tracking-tight border-b border-[#ECECFF] pb-2.5">{trimmed.substring(3)}</h2>;
      }
      if (trimmed.startsWith("### ")) {
        return <h3 key={idx} className="text-xl sm:text-2xl font-bold text-heading mt-8 mb-3 tracking-tight">{trimmed.substring(4)}</h3>;
      }

      // Blockquotes
      if (trimmed.startsWith("> ")) {
        return (
          <blockquote key={idx} className="border-l-4 border-brand bg-[#F8F9FF] rounded-r-2xl px-6 py-4.5 my-6 italic text-paragraph text-sm sm:text-base leading-relaxed">
            {trimmed.substring(2)}
          </blockquote>
        );
      }

      // Bullet Lists
      if (trimmed.startsWith("- ")) {
        return (
          <ul key={idx} className="list-disc pl-6 my-2 text-sm sm:text-base text-paragraph leading-relaxed">
            <li className="pl-1">{trimmed.substring(2)}</li>
          </ul>
        );
      }
      // Numbered Lists
      if (trimmed.match(/^\d+\.\s/)) {
        const text = trimmed.replace(/^\d+\.\s/, "");
        return (
          <ol key={idx} className="list-decimal pl-6 my-2 text-sm sm:text-base text-paragraph leading-relaxed">
            <li className="pl-1">{text}</li>
          </ol>
        );
      }

      // Horizontal Rules
      if (trimmed === "---") {
        return <hr key={idx} className="my-10 border-[#ECECFF]" />;
      }

      // Format bold text (**bold**) and inline code (`code`)
      const formatText = (text: string) => {
        const parts = text.split(/\*\*(.*?)\*\*/g);
        return parts.map((part, i) => {
          if (i % 2 === 1) {
            return <strong key={i} className="font-bold text-heading">{part}</strong>;
          }
          // Inline code
          const codeParts = part.split(/`(.*?)`/g);
          return codeParts.map((subPart, j) => {
            if (j % 2 === 1) {
              return <code key={j} className="bg-brand/5 text-brand px-1.5 py-0.5 rounded font-mono text-xs">{subPart}</code>;
            }
            return subPart;
          });
        });
      };

      return (
        <p key={idx} className="text-sm sm:text-base text-paragraph leading-relaxed my-4.5">
          {formatText(line)}
        </p>
      );
    });
  };

  return (
    <>
      <Navbar />

      <main className="bg-white min-h-screen pb-20">
        
        {/* Article Header & Cover */}
        <article className="mx-auto max-w-4xl px-6 pt-10 sm:pt-14">
          
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs font-semibold tracking-wide text-paragraph uppercase">
            <Link href="/" className="hover:text-brand transition-colors">Home</Link>
            <span className="text-paragraph/40">/</span>
            <Link href="/blogs" className="hover:text-brand transition-colors">Blogs</Link>
            <span className="text-paragraph/40">/</span>
            <span className="text-brand truncate max-w-[200px] sm:max-w-none">{post.title}</span>
          </nav>

          {/* Title */}
          <h1 className="mt-6 text-3xl font-extrabold text-heading sm:text-4xl lg:text-5xl leading-tight tracking-tight">
            {post.title}
          </h1>

          {/* Author & Meta */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-[#ECECFF] pb-8">
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 overflow-hidden rounded-full border border-[#ECECFF] bg-[#F8F9FF]">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                  sizes="40px"
                />
              </div>
              <div>
                <p className="text-xs font-bold text-heading">{post.author.name}</p>
                <p className="text-[10px] font-semibold text-paragraph mt-0.5">{post.author.role}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs font-semibold text-paragraph">
              <span className="flex items-center gap-1.5">
                <Calendar size={14} className="text-brand" />
                {post.date}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-[#ECECFF]" />
              <span className="flex items-center gap-1.5">
                <Clock size={14} className="text-brand" />
                {post.readTime}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-[#ECECFF] hidden sm:inline" />
              <span className="inline-block rounded-full bg-brand/5 border border-brand/10 px-3 py-1 text-[10px] font-bold text-brand uppercase tracking-wider hidden sm:inline">
                {post.category}
              </span>
            </div>
          </div>

          {/* Big Featured Image */}
          <div className="relative mt-10 aspect-[16/9] w-full overflow-hidden rounded-[24px] border border-[#ECECFF] shadow-[0_12px_40px_rgba(0,0,0,0.03)]">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1024px"
              priority
            />
          </div>

          {/* Content Layout */}
          <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_64px]">
            
            {/* Main Content Body */}
            <div className="prose max-w-none prose-headings:text-heading prose-p:text-paragraph prose-a:text-brand hover:prose-a:underline">
              {parseMarkdown(post.content)}
            </div>

            {/* Sharing Bar (Desktop Sidebar / Mobile Row) */}
            <div className="lg:sticky lg:top-32 h-fit flex lg:flex-col items-center justify-center gap-3 border-t border-b border-[#ECECFF] py-6 lg:border-none lg:py-0">
              <span className="text-[10px] font-bold tracking-wider text-paragraph/50 uppercase lg:mb-2">SHARE</span>
              
              {/* Copy Link */}
              <button
                onClick={handleCopyLink}
                aria-label="Copy article link"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#ECECFF] text-paragraph hover:border-brand/40 hover:text-brand transition-all bg-white hover:shadow-sm"
              >
                {copied ? <Check size={16} className="text-emerald-500" /> : <Link2 size={16} />}
              </button>

              {/* Twitter */}
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on Twitter"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#ECECFF] text-paragraph hover:border-brand/40 hover:text-brand transition-all bg-white hover:shadow-sm"
              >
                <Twitter size={16} />
              </a>

              {/* LinkedIn */}
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#ECECFF] text-paragraph hover:border-brand/40 hover:text-brand transition-all bg-white hover:shadow-sm"
              >
                <Linkedin size={16} />
              </a>
            </div>

          </div>

          <hr className="my-14 border-[#ECECFF]" />

          {/* Related Articles */}
          <div>
            <h2 className="text-xl font-extrabold text-heading tracking-tight mb-8">Related Articles</h2>
            
            <div className="grid gap-6 sm:grid-cols-2">
              {relatedPosts.map((related) => (
                <article
                  key={related.id}
                  className="group flex gap-4 overflow-hidden rounded-[20px] border border-[#ECECFF] bg-white p-4 transition-all hover:shadow-[0_8px_24px_rgba(59,67,255,0.05)] hover:-translate-y-0.5"
                >
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-backgroundLight border border-[#ECECFF]">
                    <Image
                      src={related.image}
                      alt={related.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="80px"
                    />
                  </div>
                  <div className="flex flex-col justify-between py-1">
                    <div>
                      <span className="text-[9px] font-bold text-brand uppercase tracking-wider">
                        {related.category}
                      </span>
                      <h3 className="mt-1 text-xs font-bold text-heading leading-snug line-clamp-2 group-hover:text-brand transition-colors">
                        <Link href={`/blogs/${related.slug}`}>{related.title}</Link>
                      </h3>
                    </div>
                    <span className="text-[10px] text-paragraph font-medium mt-2 flex items-center gap-1">
                      <Calendar size={10} />
                      {related.date}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Bottom Back Button */}
          <div className="mt-12 flex justify-center">
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 rounded-full border border-brand/30 hover:border-brand text-brand bg-white px-8 py-3 text-sm font-semibold hover:shadow-sm transition-all"
            >
              <ChevronLeft size={16} /> Back to All Blogs
            </Link>
          </div>

        </article>

      </main>

      <Footer />
    </>
  );
}
