import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../Cart/CartContext";

const selectProduct = {
  name: "Stylish Jacket",
  price: 120,
  orginalPrice: 150,
  description: "This is a stylish jacket perfect for any occasion",
  brand: "Leather",
  material: "Leather",
  sizes: ["S", "M", "L", "XL"],
  colors: ["Red", "Black"],
  images: [
    {
      url: "https://picsum.photos/500/500?random=1",
      altText: "Stylish Jacket 1",
    },
    {
      url: "https://picsum.photos/500/500?random=2",
      altText: "Stylish Jacket 2",
    },
  ],
};


const ProductDetails = () => {
  const { addToCart } = useContext(CartContext);
  const [mainImage, setMainImage] = useState("");
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [Quantity,setQuantity]=useState(1);

  useEffect(() => {
    if (selectProduct?.images?.length > 0) {
      setMainImage(selectProduct.images[0].url);
    }
  }, []);

  const handleQuantityChange =(action) =>{
    if(action === "plus") setQuantity ((prev) => prev+1);
    if(action === "minus" && Quantity >1) setQuantity((prev) => prev-1)
  }

const handleAddToCart = () => {
  console.log("clicked add to cart")
  const cartItem = {
    name: selectProduct.name,
    price: selectProduct.price,
    color: selectedColor,
    size: selectedSize,
    quantity: Quantity,
    image: mainImage,
  };

  addToCart(cartItem); 
  alert("Added to cart!");
};


  return (
    <div className="p-6">
      <div className="flex flex-col mx-auto bg-white p-8 rounded-lg">
        <div className="flex flex-col md:flex-row">
          {/* Desktop Thumbnails */}
          <div className="hidden md:flex flex-col space-y-4 mr-6">
            {selectProduct.images.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={image.altText || `Thumbnail ${index}`}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${
                  mainImage === image.url ? "border-black" : "border-gray-300"
                }`}
                onClick={() => setMainImage(image.url)}
              />
            ))}
          </div>
            {/* Main Image */}
            <div className="md:w-1/2">
              <div className="mb-4">
                <img
                  src={mainImage}
                  alt="Main Product"
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Mobile Thumbnails */}
            <div className="md:hidden flex overscroll-x-scroll space-x-4 mb-4">
              {selectProduct.images.map((image, index) => (
                <img
                  key={index}
                  src={image.url} 
                  alt={image.altText || `Thumbnail ${index}`}
                  className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${
                    mainImage === image.url ? "border-black" : "border-gray-300"
                  }`} 
                  onClick={() => setMainImage(image.url)} 
                />
              ))}
            </div>

          {/* Product Details */}
          <div className="md:w-1/2 md:ml-10">
            <h1 className="text-2xl md:text-3xl font-semibold mb-2">
              {selectProduct.name}
            </h1>
            <p className="text-lg text-gray-600 mb-1 line-through">
              ${selectProduct.orginalPrice}
            </p>
            <p className="text-xl text-gray-500 mb-2">
              ${selectProduct.price}
            </p>
            <p className="text-gray-700 mb-4">{selectProduct.description}</p>
            <div className="mb-4">
              <p className="text-gray-700">Color:</p>
              <div className="flex gap-2 mt-2">
                {selectProduct.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() =>setSelectedColor(color)}
                    className={`w-8 h-8 rounded-full cursor-pointer ${selectedColor === color ? "border-3 border-black" : "border border-gray-300"}`}
                    style={{ background: color.toLowerCase() }}
                  ></button>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <p className="text-gray-700">Size:</p>
              <div className="flex gap-2 mt-2">
                {selectProduct.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() =>setSelectedSize(size)}
                    className={`px-4 py-2 rounded border ${selectedSize === size ? "bg-black text-white" :""}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <div className="mb-6">
              <p className="text-gray-700">Quantity:</p>
              <div className="flex items-center space-x-4 mt-2">
                <button onClick={() => handleQuantityChange ('minus')} className="px-2 py-1 bg-gray-200 text-black hover:bg-black hover:text-white text-lg rounded transition-colors duration-200">
                  -
                </button>
                <span className="text-lg">{Quantity}</span>
                <button onClick={() => handleQuantityChange ('plus')} className="px-2 py-1 bg-gray-200 text-black hover:bg-black hover:text-white text-lg rounded transition-colors duration-200">
                  +
                </button>
              </div>
            </div>
            <button onClick={handleAddToCart}
              // disabled={!selectedColor || !selectedSize}
              className={`py-2 px-6 rounded w-full mb-8 text-white ${
                !selectedColor || !selectedSize ? "bg-black cursor-pointer" : "bg-black"
              }`}>
              Add To Cart
            </button>
            <div className="text-gray-700">
              <h3 className="text-xl font-bold">Characteristics:</h3>
              <table>
                <tbody>
                  <tr>
                    <td className="py-1">Brand</td>
                    <td className="py-1">{selectProduct.brand}</td>
                  </tr>
                  <tr>
                    <td className="py-1">Material</td>
                    <td className="py-1">{selectProduct.material}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;