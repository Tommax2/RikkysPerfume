export const DEFAULT_CATEGORIES = [
  { id: "all",      label: "All",           short: "All"      },
  { id: "perfume",  label: "Perfume",        short: "Perfume"  },
  { id: "spray",    label: "Body Spray",     short: "Spray"    },
  { id: "roll-on",  label: "Roll On",        short: "Roll On"  },
  { id: "oil",      label: "Perfume Oil",    short: "Oil"      },
  { id: "diffuser", label: "Reed Diffuser",  short: "Diffuser" },
  { id: "gift-set", label: "Gift Set",       short: "Gift"     },
];

export function loadCategories() {
  try {
    const stored = localStorage.getItem("rikky_categories");
    if (stored) {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
  } catch {}
  return DEFAULT_CATEGORIES;
}

export default loadCategories();
