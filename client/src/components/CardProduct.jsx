import React from 'react'
import { Link, useRevalidator } from 'react-router-dom'
import { formatHarga } from '../utils'
import { FaTrash, FaPencilAlt } from 'react-icons/fa'
import API from '../api'
import { toast } from 'react-toastify'

const CartProduct = ({ item, user }) => {
    const { revalidate } = useRevalidator()
    const handleDelete = async () => {
        const confirm = window.confirm('Are you sure to delete this product?')
        if (confirm) {
            try {
                await API.delete(`/product/delete/${item._id}`)
                toast.success('Product Deleted')
                revalidate()
            } catch (error) {
                toast.error('Product gagal terhapus')
            }
        }
    }
    return (
        <>
            <div className="card bg-base-300 shadow-xl" key={item._id}>
                <figure>
                    <div className="relative aspect-square">
                        <img
                            src={item.image}
                            alt={item.name} 
                            className="w-full h-full object-cover"
                            />
                        {
                            item.stock < 1 && (
                                <span className="absolute top-0 right-0 bg-error text-xl rounded-md font-bold p-2">Sold Out</span>
                            )
                        }
                    </div>
                </figure>
                <div className="card-body">
                    {user && user.role === "owner" && (
                        <div className="flex justify-end gap-x-3">
                            <FaTrash onClick={handleDelete} className="text-red-500 cursor-pointer" />
                            <Link to={`/product/${item._id}/edit`}><FaPencilAlt className="text-info cursor-pointer" /></Link>
                        </div>
                    )}
                    <h2 className="card-title text-pretty">{item.name}</h2>
                    <p className="font-bold text-pretty">{formatHarga(item.price)}</p>
                    <p> {item.description.length > 50
                        ? `${item.description.substring(0, 50)}...`
                        : item.description}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/product/detail/${item._id}`} className="btn btn-primary">Buy Now</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartProduct