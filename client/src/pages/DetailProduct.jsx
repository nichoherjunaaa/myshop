import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import API from '../api'
import { FaPlus } from 'react-icons/fa'
const DetailProduct = () => {
    let { id } = useParams()
    const [product, setProduct] = useState("")
    const productData = async () => {
        const { data } = await API.get(`/product/detail/${id}`)
        // console.log(data.data);
        setProduct(data.data)
    }

    const formatHarga = (harga) => {
        const rupiahFormat = new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR'
        }).format(harga)
        return rupiahFormat
    }

    useEffect(() => {
        productData()
    })

    return (
        <section>
            <div className="card bg-base-300 shadow-xl lg:card-side">
                <figure>
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-[400px] h-[500px] object-cover" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{product.name}</h2>
                    <span className="text-3xl text-accent mt-2 font-bold">{formatHarga(product.price)}</span>
                    <span className="badge badge-primary mt-2">{product.category}</span>
                    <span className="mt-3 font-bold">Stok : {product.stock} </span>
                    <p className="mt-3">{product.description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary btn-lg"><FaPlus/>Keranjang</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DetailProduct