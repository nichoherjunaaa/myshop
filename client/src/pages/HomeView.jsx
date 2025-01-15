import API from '../api'
import { useState, useEffect } from 'react'
import CartProduct from '../components/CartProduct'
const HomeView = () => {
    const [products, setProducts] = useState([])
    const getProducts = async () => {
        try {
            const { data } = await API.get('/product/products?limit=3')
            // console.log(data);
            setProducts(data.data);
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <>
            <div className="border-b border-primary pb-5">
                <h2 className="text-2xl font-bold capitalize">
                    Daftar Produk
                </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
                {products.map(item => (
                    <CartProduct item={item} key={item._id}/>
                ))}
            </div>
        </>
    )
}

export default HomeView