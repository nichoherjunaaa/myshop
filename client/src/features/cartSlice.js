import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

const defaultValue = {
    CartItems: [],
    numItemsInCart: 0,
    cartTotal: 0
}
const getCartFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem('cart')) || defaultValue
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: getCartFromLocalStorage(),
    reducers: {
        addItem: (state, action) => {
            const { product } = action.payload
            const item = state.CartItems.find(i => i.cartId === product.cartId)

            if (item) {
                item.amount += product.amount
            } else {
                state.CartItems.push(product)
            }
            state.numItemsInCart += product.amount
            state.cartTotal += product.price * product.amount
            localStorage.setItem('cart', JSON.stringify(state))
            toast.success('Produk berhasil ditambahkan ke keranjang')
        }
    }
})
// console.log('Initial State from localStorage:', getCartFromLocalStorage())

export const { addItem } = cartSlice.actions

export default cartSlice.reducer

