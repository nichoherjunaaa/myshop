import React from 'react'
import { Link } from 'react-router-dom'
import { formatHarga } from '../utils'
import { FaTrash, FaPencilAlt } from 'react-icons/fa'

const CartProduct = ({ item, user }) => {
    // console.log(user);
    
    return (
        <>
            <div className="card bg-base-300 shadow-xl" key={item._id}>
                <figure>
                    <img
                        src={item.image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    {user && user.role === "owner" && (
                        <div className="flex justify-end gap-x-3">
                            <FaTrash className="text-red-500 cursor-pointer" />
                            <Link to={`/product/${item._id}/edit`}><FaPencilAlt className="text-info cursor-pointer" /></Link>
                        </div>
                    )}
                    <h2 className="card-title text-primary">{item.name}</h2>
                    <p className="font-bold text-accent">{formatHarga(item.price)}</p>
                    <p>{item.description.substring(0, 50)}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/product/detail/${item._id}`} className="btn btn-primary">Buy Now</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartProduct