import { useNavigate, Outlet } from "react-router-dom"

const Contact = () => {

  const navigate = useNavigate();


  function HandleHome(){
    navigate("/")
    
  }
  return (
    <div>Contact

      <button onClick={HandleHome}>Back to Home</button>
      <Outlet/>
    </div>

   
  )
}

export default Contact