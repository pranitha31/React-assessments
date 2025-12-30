import { useState, useMemo, useCallback } from "react";
import ProductList from "./ProductlLst";

export default function App() {
  const [counter, setCounter] = useState(0);

  const products = [
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Phone", price: 500 },
    { id: 3, name: "Tablet", price: 300 },
  ];

  // ✅ useMemo: total price only recalculated when products change
  const totalPrice = useMemo(() => {
    console.log("Recalculating total price...");
    return products.reduce((sum, p) => sum + p.price, 0);
  }, [products]);

  // ✅ useCallback: memoize handler to avoid new function reference
  const handleSelect = useCallback((product) => {
    alert(`Selected: ${product.name}`);
  }, []);

  return (
    <div>
      <h1>React Performance Optimization</h1>
      <h2>Total Price: ${totalPrice}</h2>

      <button onClick={() => setCounter(counter + 1)}>
        Counter: {counter}
      </button>

      <ProductList products={products} onSelect={handleSelect} />
    </div>
  );
}