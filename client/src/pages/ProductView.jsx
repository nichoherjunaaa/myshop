import API from "../api"
import { useLoaderData } from 'react-router-dom'
import Filter from "../components/Filter"
import CartProduct from "../components/CartProduct"

// loader function
export const loader = async ({ request }) => {
    const url = new URL(request.url)  // Ambil URL dari request
    const params = Object.fromEntries(new URLSearchParams(url.search)) // Ambil query params

    try {
        const { data } = await API.get('/product/products', { params })
        console.log(request);
        const products = data.data
        return { products, params }
    } catch (error) {
        console.error("API Error:", error)
        throw error
    }
}

const ProductView = () => {
    const { products } = useLoaderData()

    return (
        <>
            <Filter />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5">
                {!products.length ? (
                    <div className="col-span-full flex justify-center items-center mt-5">
                        <h1 className="font-bold text-3xl">Sorry, Product Not Found!</h1>
                    </div>
                ) : (
                    products.map((item) => (
                        <CartProduct item={item} key={item._id} />
                    )
                    ))}
            </div>
        </>
    )
}

export default ProductView
