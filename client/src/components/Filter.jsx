import React from 'react'
import { Form, Link } from 'react-router-dom'
import FormInput from './Form/FormInput'
import FormSelect from './Form/FormSelect'
const Filter = () => {
    const categories = ["Sepatu", "Baju", "Kemeja", "Celana"]
    return (
        <Form method="get" className="bg-base-200 rounded-r-md px-8 py-4 grid items-center gap-x-4 gap-y-3 grid-cols-2">
            <FormInput
            label = "Search Product"
            type = "search"
            name = "name"
            />
            <FormSelect
            label = "Select Category"
            list = {categories}
            name = "category"
            />
            <button type="submit" className="btn btn-primary">Search</button>
            <Link to="/products" className="btn btn-accent">Reset</Link>
        </Form>
    )
}

export default Filter