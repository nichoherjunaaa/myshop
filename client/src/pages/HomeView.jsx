import axios from 'axios'

try {
    const data = await axios.get('/api/v1/product/products')
    console.log(data);
} catch (error) {
    console.error(error);
}
const HomeView = () => {
    return (
        <div>HomeView</div>
    )
}

export default HomeView