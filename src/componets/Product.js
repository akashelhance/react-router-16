import { useSearchParams, useLocation} from "react-router-dom"


const Product = () => {

  const [sP] = useSearchParams();
  const location = useLocation();
  console.log(sP)
  console.log(location)
  return (
    <div>Product</div>
  )
}

export default Product