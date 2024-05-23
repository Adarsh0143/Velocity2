import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { baseUrl } from "../axios/baseUrl.js";
import Divider from "../components/ui/Divider.jsx";
import { loadStripe } from "@stripe/stripe-js";
const ProductDetail = () => {
    const navigate = useNavigate();
    const { productId } = useParams();

    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [size, setSize] = useState("6");

    const sizes = ["6", "7", "8", "9", "10", "11"];

    const isAuthenticated = useSelector((state) => state.auth.isLoggedIn);

    const fetchProduct = async () => {
        const res = await baseUrl.get(`/products/${productId}`);
        setProduct(res.data);
    }
    const handleDecreaseQuantity = () => {
        if (quantity === 1) {
            return;
        }
        setQuantity(quantity - 1);
    }
    const handleIncreaseQuantity = () => {
        setQuantity(quantity + 1);
    }

    const addToCart = async () => {
        if (!isAuthenticated) {
            navigate('/login');
            return;
        }

        try {
            await baseUrl.post(`/carts`, {
                productId: productId,
                quantity: quantity,
                size: size
            })
            alert('Product added to cart');
            navigate('/products');
        } catch (e) {
            console.log(e)
        }
    }

    const makePayment = async () => {
        const stripe = await loadStripe('pk_test_51NU6M8SGc2BOiEgPZKkvaZpCD0GHWfOruWn4gyy4myO8DhWm8PA9UxKW0FyfnAYUeEPiYlZlE9upH8h1j2065kex00M0uT8eIc');

        const body = {
            product: product,
        }
        console.log(body);
        const response = await baseUrl.post(`/payments/create-checkout-session`, body);

        await stripe.redirectToCheckout({
            sessionId: response.data.id,
        });
    }

    useEffect(() => {
        fetchProduct();
    }, [])

    return (
        <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2">
  <div className="p-8 md:p-12 lg:px-16 lg:py-24">
    <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
      <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
        {product.title}
      </h2>

      <p className="hidden text-gray-500 md:mt-4 md:block">
       {product.description}
      </p>
        
      <p className="hidden text-red-500 md:mt-4 md:block ">
       {product.category}
      </p>
      <div className="mt-4 md:mt-8">
      <button onClick={makePayment}
          className="mt-8 inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
        >
          Buy Now
        </button>
      </div>
    </div>
  </div>

  <img
    alt=""
    src={product.image}
    className="h-[100vh] w-[82vh] object-contain"
  />
</section>
        
    )
}

export default ProductDetail;
