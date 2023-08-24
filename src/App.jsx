import "./App.css";
import product_image from "./assets/images/image-product-desktop.jpg";
import logo_cart from "./assets/images/icon-cart.svg";

function App() {
  return (
    <main className="w-full h-screen flex justify-center items-center">
      <div className="sm:w-[570px] sm:h-[450px] mx-6 w-full h-[700px] bg-slate-300 flex rounded-md flex-col sm:flex-row">
        <div className="sm:flex-1 h-2/5 p-[30px] w-full sm:h-full bg-cover bg-center rounded-l-lg" style={{ backgroundImage: `url(${product_image})` }}>
        </div>
        <div className="sm:flex-1 h-3/5 sm:h-full p-[30px] bg-white flex flex-col justify-between rounded-tr-lg">
          <h2 className=" text-grayish-blue tracking-[5px] text-sm">PERFUME</h2>
          <h1 className="font-fraunces text-3xl text-dark-blue">Gabrielle Essence Eau De Parfum</h1>
          <p className="text-grayish-blue text-sm ">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <div className="flex items-center ">
            <h2 className="font-fraunces text-3xl mr-4 text-dark-cyan">$149.99</h2>
            <h3 className="text-grayish-blue text-sm">$169.99</h3>
          </div>
          <button className="text-sm rounded-lg bg-dark-cyan p-[15px] hover:bg-hover-cyan text-white flex justify-center font-bold">
            <span className="mr-[10px]"><img src={logo_cart} alt="logo_cart" /></span>
            Add to Cart
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;
