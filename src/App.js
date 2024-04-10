import { Routes, Route } from "react-router-dom"
import Home from "./componets/Home";
import Contact from "./componets/Contact";
import Product from "./componets/Product";
import ProductDetails from "./componets/ProductDetails";
import Footer from "./componets/Footer";
import Header from "./componets/Header";
import ContactIN from "./componets/ContactIn";
import ContactUK from "./componets/ContactUk";
import PageNotFound from "./componets/PageNotFound";
function App() {


  return (
    <>
      <Header />
      <main>
        <Routes>

          <Route path="/" element={<Home />}></Route>
          <Route path="/productlist" element={<Product />}></Route>
          <Route path="/product/:id" element={<ProductDetails />}></Route>
          <Route path="/contact" element={<Contact />}>
            <Route path="/in" element={<ContactIN />}/>
            <Route path="/uk" element={<ContactUK />}/>
          
          </Route>
          <Route path="*" element={<PageNotFound />}></Route>

        </Routes>
      </main>
      <Footer />

    </>
  );
}

export default App;
