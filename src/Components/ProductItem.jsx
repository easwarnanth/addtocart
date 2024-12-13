import { PropTypes } from "prop-types";
const ProductItem = ({ product, addToCart }) => {
  return (
    <div className="rounded-xl shadow-inner hover:shadow-2xl hover:shadow-gray-500 shadow-gray-300 hover:-rotate-2 hover:scale-105 transition  p-4 flex flex-col items-center  ">
      <img src={product.image} alt={product.title} className="h-40 mb-4 " />
      <h2 className="text-sm font-semibold mb-2 text-center ">
        {product.title}
      </h2>
      <p className="text-gray-400 mb-3">Price: ${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="bg-black border-2 border-black transition hover:border-black hover:border-2 hover:bg-transparent hover:text-black  text-white font-bold py-2 px-4 rounded mt-auto"
      >
        Add to Cart
      </button>
    </div>
  );
};

ProductItem.propTypes = {
  product: PropTypes.array.isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default ProductItem;