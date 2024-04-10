import { useParams } from "react-router-dom"

const ProductDetails = () => {

    const params = useParams();

    console.log(params.id)
  return (
    <div>ProductDetails</div>
  )
}

export default ProductDetails