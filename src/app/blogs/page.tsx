"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  ChevronDown,
  LayoutGrid,
  Monitor,
  Cpu,
  Code,
  Megaphone,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Calendar,
  Clock,
  Mail,
  Phone,
  MapPin,
  Send,
  X
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import { blogPosts, BlogPost } from "@/data/blogData";

const CATEGORIES = [
  { id: "all", label: "ALL BLOGS", icon: LayoutGrid },
  { id: "Technology", label: "TECHNOLOGY", icon: Monitor },
  { id: "AI", label: "AI", icon: Cpu },
  { id: "Web Development", label: "WEB DEVELOPMENT", icon: Code },
  { id: "Digital Marketing", label: "DIGITAL MARKETING", icon: Megaphone }
];

export default function BlogsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("latest"); // latest, oldest, alphabetical
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // Dynamically calculate category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: blogPosts.length };
    blogPosts.forEach((post) => {
      counts[post.category] = (counts[post.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Filter & Sort Blogs
  const filteredAndSortedPosts = useMemo(() => {
    let result = [...blogPosts];

    // Filter by Category
    if (selectedCategory !== "all") {
      result = result.filter((post) => post.category === selectedCategory);
    }

    // Filter by Search Query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.excerpt.toLowerCase().includes(query) ||
          post.category.toLowerCase().includes(query)
      );
    }

    // Sort
    if (sortBy === "latest") {
      result.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    } else if (sortBy === "oldest") {
      result.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    } else if (sortBy === "alpha") {
      result.sort((a, b) => a.title.localeCompare(b.title));
    }

    return result;
  }, [selectedCategory, searchQuery, sortBy]);

  // Pagination calculations
  const totalPages = Math.ceil(filteredAndSortedPosts.length / postsPerPage);
  const paginatedPosts = useMemo(() => {
    const start = (currentPage - 1) * postsPerPage;
    return filteredAndSortedPosts.slice(start, start + postsPerPage);
  }, [filteredAndSortedPosts, currentPage]);

  // Adjust page number if filters result in fewer pages than current
  useMemo(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(totalPages);
    }
  }, [totalPages, currentPage]);

  // 4 Recent Posts (always newest from all categories)
  const recentPosts = useMemo(() => {
    return [...blogPosts]
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 4);
  }, []);

  return (
    <>
      <Navbar />

      <main className="bg-white min-h-screen pb-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-white py-14 lg:py-20 border-b border-[#ECECFF]">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <span className="eyebrow bg-[#ECECFF] text-brand">OUR BLOG</span>
                <h1 className="mt-6 text-4xl font-bold leading-tight text-ink sm:text-5xl lg:text-6xl">
                  Insights, Trends & Ideas <br className="hidden sm:inline" />
                  to Keep <span className="bg-brand-gradient bg-clip-text text-transparent">You Ahead</span>
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-relaxed text-paragraph">
                  Stay updated with the latest technology trends, AI innovations, web development
                  tips, and digital marketing strategies from the experts at Techrytham.
                </p>
              </div>

              {/* Blog Hero Illustration */}
              <div className="relative flex justify-center lg:justify-end">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
                  transition={{
                    opacity: { duration: 0.6 },
                    scale: { duration: 0.6 },
                    y: { repeat: Infinity, duration: 6, ease: "easeInOut" }
                  }}
                  className="relative w-full max-w-[400px] aspect-square flex items-center justify-center"
                >
                  <Image
                    src="/images/blog-hero.png"
                    alt="Techrytham Blog Illustration"
                    width={400}
                    height={400}
                    priority
                    className="object-contain"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Layout Grid */}
        <section className="mx-auto max-w-7xl px-6 py-12 lg:px-10 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-[280px_1fr]">
            
            {/* Left Sidebar (Filters) */}
            <aside className="space-y-10">
              {/* Categories */}
              <div className="bg-white border border-[#ECECFF] rounded-[24px] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
                <h2 className="text-xs font-bold text-ink tracking-wider uppercase mb-6 border-b border-[#ECECFF] pb-3">
                  CATEGORIES
                </h2>
                <ul className="space-y-2">
                  {CATEGORIES.map((cat) => {
                    const Icon = cat.icon;
                    const isActive = selectedCategory === cat.id;
                    const count = categoryCounts[cat.id] || 0;

                    return (
                      <li key={cat.id}>
                        <button
                          onClick={() => {
                            setSelectedCategory(cat.id);
                            setCurrentPage(1);
                          }}
                          className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                            isActive
                              ? "bg-brand text-white shadow-[0_8px_16px_rgba(59,67,255,0.25)] scale-[1.02]"
                              : "text-paragraph hover:bg-brand/5 hover:text-brand"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <Icon size={16} />
                            <span>{cat.label}</span>
                          </div>
                          <span
                            className={`flex items-center justify-center px-2 py-0.5 rounded-full text-[10px] ${
                              isActive ? "bg-white/20 text-white" : "bg-[#F3F4FD] text-brand font-bold"
                            }`}
                          >
                            {count}
                          </span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Recent Posts */}
              <div className="bg-white border border-[#ECECFF] rounded-[24px] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
                <h2 className="text-xs font-bold text-ink tracking-wider uppercase mb-6 border-b border-[#ECECFF] pb-3">
                  RECENT POST
                </h2>
                <ul className="space-y-5">
                  {recentPosts.map((post) => (
                    <li key={post.id} className="group">
                      <Link href={`/blogs/${post.slug}`} className="flex gap-4">
                        <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl border border-[#ECECFF]">
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-110"
                            sizes="48px"
                          />
                        </div>
                        <div className="flex flex-col justify-center min-w-0">
                          <h3 className="text-xs font-semibold text-heading leading-snug line-clamp-2 group-hover:text-brand transition-colors">
                            {post.title}
                          </h3>
                          <span className="text-[10px] text-paragraph mt-1 flex items-center gap-1 font-medium">
                            <Calendar size={10} />
                            {post.date}
                          </span>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            {/* Right Main Panel */}
            <div className="space-y-8">
              
              {/* Search & Sort Panel */}
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                
                {/* Search Input */}
                <div className="relative flex-1 max-w-md">
                  <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-paragraph/50">
                    <Search size={18} />
                  </div>
                  <input
                    type="text"
                    placeholder="Search Articles"
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setCurrentPage(1);
                    }}
                    className="w-full bg-[#F8F9FF] border border-[#ECECFF] rounded-full py-3.5 pl-12 pr-10 text-sm placeholder-paragraph/60 text-heading focus:outline-none focus:border-brand/40 focus:ring-1 focus:ring-brand/40 transition-all shadow-[0_2px_8px_rgba(0,0,0,0.01)]"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute inset-y-0 right-4 flex items-center text-paragraph hover:text-brand"
                    >
                      <X size={16} />
                    </button>
                  )}
                </div>

                {/* Sort Dropdown */}
                <div className="relative shrink-0">
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-paragraph/60">
                    <ChevronDown size={16} />
                  </div>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none bg-white border border-[#ECECFF] rounded-full py-3.5 pl-6 pr-12 text-sm text-paragraph font-medium hover:border-brand/20 focus:outline-none focus:border-brand/40 transition-all cursor-pointer shadow-[0_2px_8px_rgba(0,0,0,0.01)]"
                  >
                    <option value="latest">Latest First</option>
                    <option value="oldest">Oldest First</option>
                    <option value="alpha">Alphabetical (A-Z)</option>
                  </select>
                </div>
              </div>

              {/* Filter feedback */}
              {(selectedCategory !== "all" || searchQuery) && (
                <div className="flex items-center flex-wrap gap-2 text-xs text-paragraph bg-[#F8F9FF] border border-[#ECECFF] px-4 py-2.5 rounded-2xl">
                  <span>Filtered by:</span>
                  {selectedCategory !== "all" && (
                    <span className="bg-brand/10 text-brand px-2.5 py-1 rounded-lg font-bold uppercase tracking-wide flex items-center gap-1.5">
                      {selectedCategory}
                      <button onClick={() => setSelectedCategory("all")}>
                        <X size={12} />
                      </button>
                    </span>
                  )}
                  {searchQuery && (
                    <span className="bg-brand/10 text-brand px-2.5 py-1 rounded-lg font-bold flex items-center gap-1.5">
                      Search: &ldquo;{searchQuery}&rdquo;
                      <button onClick={() => setSearchQuery("")}>
                        <X size={12} />
                      </button>
                    </span>
                  )}
                  <button
                    onClick={() => {
                      setSelectedCategory("all");
                      setSearchQuery("");
                    }}
                    className="text-brand hover:underline font-bold ml-auto"
                  >
                    Clear All
                  </button>
                </div>
              )}

              {/* Blog Card Grid */}
              {paginatedPosts.length > 0 ? (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <AnimatePresence mode="popLayout">
                    {paginatedPosts.map((post) => (
                      <motion.article
                        layout
                        key={post.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.4 }}
                        className="group flex flex-col justify-between overflow-hidden rounded-[24px] border border-[#ECECFF] bg-white transition-all hover:shadow-[0_12px_30px_-6px_rgba(59,67,255,0.08)] hover:-translate-y-1"
                      >
                        <div>
                          {/* Image Wrap */}
                          <div className="relative aspect-[16/10] overflow-hidden bg-backgroundLight">
                            <Image
                              src={post.image}
                              alt={post.title}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                            {/* Glassmorphism Category Overlay */}
                            <span className="absolute top-4 left-4 inline-block rounded-full bg-white/80 backdrop-blur-md px-3.5 py-1 text-[10px] font-bold tracking-wider text-brand shadow-sm uppercase border border-white/20">
                              {post.category}
                            </span>
                          </div>

                          {/* Content */}
                          <div className="p-6">
                            <div className="flex items-center gap-3 text-paragraph text-[11px] font-medium">
                              <span className="flex items-center gap-1">
                                <Calendar size={12} className="text-brand" />
                                {post.date}
                              </span>
                            </div>
                            <h3 className="mt-3 text-base font-bold text-heading leading-snug group-hover:text-brand transition-colors line-clamp-2">
                              <Link href={`/blogs/${post.slug}`}>{post.title}</Link>
                            </h3>
                            <p className="mt-2 text-xs leading-relaxed text-paragraph line-clamp-2">
                              {post.excerpt}
                            </p>
                          </div>
                        </div>

                        {/* Read More Footer */}
                        <div className="border-t border-[#ECECFF] p-6 pt-4 flex items-center justify-between">
                          <Link
                            href={`/blogs/${post.slug}`}
                            className="inline-flex items-center gap-1.5 text-xs font-bold text-brand group-hover:text-brand-light transition-colors"
                          >
                            Read More <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                          </Link>
                        </div>
                      </motion.article>
                    ))}
                  </AnimatePresence>
                </div>
              ) : (
                /* No search results fallback */
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-16 bg-[#F8F9FF] border border-dashed border-[#ECECFF] rounded-[24px]"
                >
                  <h3 className="text-lg font-semibold text-heading">No articles found</h3>
                  <p className="text-sm text-paragraph mt-2">
                    We couldn&apos;t find any posts matching your current filters.
                  </p>
                  <button
                    onClick={() => {
                      setSelectedCategory("all");
                      setSearchQuery("");
                    }}
                    className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-2.5 text-xs font-bold text-white shadow-card hover:bg-brand-light transition-colors"
                  >
                    Reset Filters
                  </button>
                </motion.div>
              )}

              {/* Pagination Controls */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 pt-6 border-t border-[#ECECFF]">
                  {/* Prev Button */}
                  <button
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#ECECFF] text-paragraph hover:border-brand/40 hover:text-brand disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                  >
                    <ChevronLeft size={16} />
                  </button>

                  {/* Page Numbers */}
                  {Array.from({ length: totalPages }).map((_, i) => {
                    const pageNum = i + 1;
                    const isActive = currentPage === pageNum;

                    return (
                      <button
                        key={pageNum}
                        onClick={() => setCurrentPage(pageNum)}
                        className={`flex h-10 w-10 items-center justify-center rounded-xl font-bold text-xs transition-all ${
                          isActive
                            ? "bg-brand text-white shadow-[0_4px_12px_rgba(59,67,255,0.25)]"
                            : "border border-[#ECECFF] text-paragraph hover:border-brand/35 hover:text-brand"
                        }`}
                      >
                        {pageNum}
                      </button>
                    );
                  })}

                  {/* Next Button */}
                  <button
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#ECECFF] text-paragraph hover:border-brand/40 hover:text-brand disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              )}

            </div>

          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
