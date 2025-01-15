import API from "../api"
import { useLoaderData } from 'react-router-dom'
import Filter from "../components/Filter"
import CartProduct from "../components/CartProduct"
export const loader = async (request) => {
    const { data } = await API.get('/product/products')
    console.log(request);
    const products = data.data
    return { products }
}
const ProductView = () => {
    const { products } = useLoaderData()
    console.log(products);
    return (
        <>
            <Filter />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5">
                {products.map(item => (
                    <CartProduct item={item} key={item._id} />
                ))}
            </div>
        </>
    )
}

export default ProductView
ProductView