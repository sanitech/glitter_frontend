import React from "react";
import { productData } from "../../Data";
import ProductCard from "./ProductCard";

const ProductSection = () => {
  return (
    <div>
      <div class="text-center p-10">
        <h1 class="font-bold text-4xl mb-4">Responsive Product card grid</h1>
        <h1 class="text-3xl">Tailwind CSS</h1>
      </div>

      <section
        id="Projects"
        class="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
      >
      {
        productData?.map((product) => {
          return (
            <ProductCard
              key={product.key}
              name={product.name}
              description={product.description}
              imageUrl={product.imageUrl}
              category={product.category}
              price={product.price}
              quantity={product.quantity}
            />
          );
        })
      }
       

       
      </section>

     

      {/* <!-- Support Me 🙏🥰 -->he
    <script src="https://storage.ko-fi.com/cdn/scripts/overlay-widget.js"></script>
    <script>
        kofiWidgetOverlay.draw('mohamedghulam', {
                'type': 'floating-chat',
                'floating-chat.donateButton.text': 'Support me',
                'floating-chat.donateButton.background-color': '#323842',
                'floating-chat.donateButton.text-color': '#fff'
            });
    </script> */}
    </div>
  );
};

export default ProductSection;
