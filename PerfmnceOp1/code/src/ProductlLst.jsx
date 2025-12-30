export default function ProductList({ products, onSelect }) {
  console.log("ProductList rendered"); // Debugging to observe re-renders
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id} onClick={() => onSelect(product)}>
          {product.name} - ${product.price}
        </li>
      ))}
    </ul>
  );
}