import { useMemo, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import CategoryBar from "../components/CategoryBar";
import ProductGrid from "../components/ProductGrid";
import { useProducts } from "../hooks/useProducts";
import { loadCategories } from "../data/categories";

const categories = loadCategories();

const SORT_OPTIONS = [
  { value: "default",    label: "Featured"          },
  { value: "price-asc",  label: "Price: Low → High" },
  { value: "price-desc", label: "Price: High → Low" },
  { value: "name-asc",   label: "Name: A → Z"       },
  { value: "name-desc",  label: "Name: Z → A"       },
];

const parsePrice = (price) => Number(String(price).replace(/[^0-9.]/g, ""));

const SearchIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const ChevronIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

function SkeletonCard() {
  return (
    <div className="animate-pulse rounded-[14px] bg-brand/[.07] overflow-hidden">
      <div className="aspect-[3/4] bg-brand/[.09]" />
      <div className="px-6 py-6 space-y-3">
        <div className="h-2 w-1/3 rounded bg-brand/[.08]" />
        <div className="h-6 w-2/3 rounded bg-brand/[.1]" />
        <div className="h-2 w-full rounded bg-brand/[.06]" />
        <div className="h-2 w-4/5 rounded bg-brand/[.06]" />
        <div className="mt-4 flex justify-between pt-4">
          <div className="h-5 w-16 rounded bg-brand/[.1]" />
          <div className="h-8 w-24 rounded bg-brand/[.07]" />
        </div>
      </div>
    </div>
  );
}

export default function CollectionPage() {
  const { onAdd } = useOutletContext();
  const { products, loading, error } = useProducts();

  const [category, setCategory] = useState("all");
  const [search,   setSearch]   = useState("");
  const [sort,     setSort]     = useState("default");

  const filtered = useMemo(() => {
    let list = category === "all"
      ? products
      : products.filter((p) => p.category === category);

    if (search.trim()) {
      const q = search.trim().toLowerCase();
      list = list.filter((p) =>
        [p.name, p.sub, p.family, p.notes].some((f) => f?.toLowerCase().includes(q))
      );
    }

    switch (sort) {
      case "price-asc":  return [...list].sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
      case "price-desc": return [...list].sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
      case "name-asc":   return [...list].sort((a, b) => a.name.localeCompare(b.name));
      case "name-desc":  return [...list].sort((a, b) => b.name.localeCompare(a.name));
      default:           return list;
    }
  }, [products, category, search, sort]);

  const hasFilters = search.trim() !== "" || sort !== "default" || category !== "all";

  return (
    <section className="relative z-[1] min-h-screen pt-[calc(var(--banner-h,44px)+56px)]">

      {/* Page header */}
      <div className="px-4 pb-6 pt-10 text-center sm:px-[4vw] sm:pt-14">
        <motion.p
          className="sectionLabel mb-3"
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          Rikky's Perfumes
        </motion.p>
        <motion.h1
          className="font-serif text-[clamp(2rem,6vw,3.8rem)] font-light leading-none text-ink"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.08 }}
        >
          The <em className="italic text-brand">Collection</em>
        </motion.h1>
        <motion.p
          className="mx-auto mt-4 max-w-[40ch] text-[.75rem] leading-[1.85] tracking-[.04em] text-muted"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.18 }}
        >
          Authentic fragrances at unbeatable prices — delivered fast across Nigeria.
        </motion.p>
      </div>

      {/* Collection shell */}
      <div
        className="mx-auto mb-16 mt-4 overflow-hidden rounded-[14px] border border-brand/[.12] sm:rounded-[22px]"
        style={{
          width: "min(1200px,95vw)",
          background: "linear-gradient(180deg,rgba(255,255,255,.55),rgba(237,231,246,.58))",
          boxShadow: "0 20px 52px rgba(106,13,173,.08)",
        }}
      >
        {/* ── Search + Sort bar ──────────────────────────── */}
        <div className="flex flex-col gap-2 border-b border-brand/[.1] px-3 py-3 sm:flex-row sm:items-center sm:gap-3 sm:px-[4vw] sm:py-4">

          {/* Search */}
          <div className="relative flex-1">
            <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-brand/40">
              <SearchIcon />
            </span>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search fragrances, brands, notes…"
              className="w-full rounded-full border border-brand/20 bg-white/60 py-[.52rem] pl-9 pr-8 font-sans text-[.65rem] tracking-[.06em] text-ink outline-none transition-[border-color_.25s] placeholder:text-muted/55 focus:border-brand/45 focus:bg-white/80"
            />
            <AnimatePresence>
              {search && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.7 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer border-none bg-transparent text-[.7rem] text-muted/60 hover:text-brand"
                  onClick={() => setSearch("")}
                  aria-label="Clear search"
                >
                  ✕
                </motion.button>
              )}
            </AnimatePresence>
          </div>

          {/* Sort */}
          <div className="relative shrink-0">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="w-full appearance-none rounded-full border border-brand/20 bg-white/60 py-[.52rem] pl-4 pr-9 font-sans text-[.65rem] tracking-[.06em] text-ink outline-none transition-[border-color_.25s] focus:border-brand/45 focus:bg-white/80 cursor-pointer sm:w-auto"
            >
              {SORT_OPTIONS.map(({ value, label }) => (
                <option key={value} value={value}>{label}</option>
              ))}
            </select>
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-brand/50">
              <ChevronIcon />
            </span>
          </div>

          {/* Active filter count chip */}
          <AnimatePresence>
            {hasFilters && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
                className="shrink-0 cursor-pointer rounded-full border border-brand/30 bg-brand/[.07] px-3 py-[.45rem] font-sans text-[.6rem] tracking-[.1em] text-brand hover:bg-brand/[.12] transition-colors border-none sm:border"
                onClick={() => { setSearch(""); setSort("default"); setCategory("all"); }}
              >
                Clear filters
              </motion.button>
            )}
          </AnimatePresence>
        </div>

        {/* ── Category tabs ──────────────────────────────── */}
        <CategoryBar
          active={category}
          onChange={setCategory}
          count={loading ? "…" : filtered.length}
          categories={categories}
        />

        {/* ── Backend offline badge ──────────────────────── */}
        <AnimatePresence>
          {error === "offline" && (
            <motion.p
              initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
              className="px-[1.1rem] pb-1 pt-0 text-center text-[.6rem] tracking-[.1em] text-muted/70"
            >
              ⚠ Showing local data — backend offline
            </motion.p>
          )}
        </AnimatePresence>

        {/* ── Loading skeletons ──────────────────────────── */}
        {loading ? (
          <div className="grid grid-cols-1 gap-4 px-[1.1rem] pb-5 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)}
          </div>
        ) : (
          <>
            {/* Search result summary */}
            {search.trim() && (
              <p className="px-[1.1rem] pb-2 pt-1 text-[.62rem] tracking-[.1em] text-muted/70">
                {filtered.length === 0
                  ? `No results for "${search}"`
                  : `${filtered.length} result${filtered.length !== 1 ? "s" : ""} for "${search}"`}
              </p>
            )}
            <ProductGrid products={filtered} onAdd={onAdd} />
          </>
        )}
      </div>
    </section>
  );
}
