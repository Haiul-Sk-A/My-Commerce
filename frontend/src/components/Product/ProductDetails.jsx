import React, { useEffect, useState } from "react";

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
  const [mainImage, setMainImage] = useState("");
  const [selectedSize,setSelectedSize] = useState("");
  const [selectedColor,setSelectedColor] = useState("");
  const [Quantity,setQuantity]=useState(1);
  const [isButtonDisable,setIsButtonDisable]=useState(false);

  useEffect(() => {
    if (selectProduct?.images?.length > 0) {
      setMainImage(selectProduct.images[0].url);
    }
  }, []);

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
                    className="w-8 h-8 rounded-full border"
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
                    className="px-4 py-2 rounded border"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <div className="mb-6">
              <p className="text-gray-700">Quantity:</p>
              <div className="flex items-center space-x-4 mt-2">
                <button className="px-2 py-1 bg-gray-200 rounded text-lg">
                  -
                </button>
                <span className="text-lg">1</span>
                <button className="px-2 py-1 bg-gray-200 rounded text-lg">
                  +
                </button>
              </div>
            </div>
            <button className="bg-black text-white py-2 px-6 rounded w-full mb-8">
              Add To Cart
            </button>
            <div className="text-gray-700">
              <h3 className="text-xl font-bold">Characteristics:</h3>
              <table>
                <tr>
                  <td className="py-1">Brand</td>
                  <td className="py-1">{selectProduct.brand}</td>
                </tr>
                <tr>
                  <td className="py-1">Material</td>
                  <td className="py-1">{selectProduct.material}</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;