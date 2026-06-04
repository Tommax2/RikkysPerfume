import { useState, useEffect } from "react";
import staticProducts from "../data/products";

const API_BASE = import.meta.env.VITE_API_URL;

export function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading,  setLoading]  = useState(true);
  const [error,    setError]    = useState(null);

  useEffect(() => {
    if (!API_BASE) {
      setProducts(staticProducts);
      setLoading(false);
      return;
    }

    let cancelled = false;

    fetch(`${API_BASE}/api/products`)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (cancelled) return;
        // Ensure every product has a unique id even if the API omits it
        const list = Array.isArray(data)
          ? data.map((p, i) => ({ ...p, id: p.id ?? p._id ?? i + 1 }))
          : staticProducts;
        setProducts(list);
        setLoading(false);
      })
      .catch((err) => {
        if (cancelled) return;
        console.warn("[useProducts] Backend unreachable, using local data.", err.message);
        setProducts(staticProducts);
        setLoading(false);
        setError("offline");
      });

    return () => { cancelled = true; };
  }, []);

  const refresh = () => {
    setLoading(true);
    setError(null);
    setProducts([]);
  };

  return { products, loading, error, refresh };
}
