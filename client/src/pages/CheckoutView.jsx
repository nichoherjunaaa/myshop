import React from 'react'
import CartTotal from '../components/CartTotal'
import { Form } from 'react-router-dom'
import { useSelector } from 'react-redux'
import FormInput from '../components/Form/FormInput'
const CheckoutView = () => {
    const user = useSelector((state) => state.userState.user)
    const carts = useSelector((state) => state.cartState.CartItems)
    // console.log(carts);
    // console.log(user);
    return (
        <>
            <div className="border-b border-primary pb-5 mt-5">
                <h2 className="text-2xl font-bold capitalize">Checkout Products</h2>
            </div>
            <div className="mt-8 grid gap-y-8 gap-x-2 lg:grid-cols-12">
                <div className="lg:col-span-8">
                    <Form method="POST" className="bg-base-300 grid gap-y-5 p-5 items-center rounded-2xl">
                        <div className="grid grid-cols-2 gap-x-4">
                            <FormInput label="first name" type="name" name="firstname" />
                            <FormInput label="last name" type="name" name="lastname" />
                        </div>
                        <FormInput label="email" type="email" name="email" defaultValue={user.email} />
                        <FormInput label="phone" type="phone" name="phone" />
                        <button type="submit" className="btn btn-primary mt-8">Bayar</button>
                    </Form>
                </div>
                <div className="lg:col-span-4 lg:pl-4">
                    <CartTotal />
                </div>
            </div>
        </>
    )
}

export default CheckoutView