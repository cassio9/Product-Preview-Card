import "./App.css";
import ProductImage from "./assets/image-product-desktop.jpg";
import Cart from "./assets/icon-cart.svg";
function App() {
	return (
		<div className="bg-Cream p-4 font-Montserrat  flex justify-center items-center h-fit min-h-screen">
			<div className="rounded-xl min-h-fit bg-white max-w-[350px] md:flex md:max-w-xl md:items-center">
				<img
					className="rounded-t-xl object-cover w-full h-[300px] md:w-1/2 md:h-full md:rounded-none md:rounded-l-lg"
					src={ProductImage}
					alt="Chanel Paris Gabrielle perfume"
				/>
				<div className="p-4">
					<p className="text-DarkGrayishBlue  tracking-[0.4rem] text-sm font-[500] uppercase pt-2">
						Perfume
					</p>
					<h1 className="font-bold font-Fraunces text-3xl text-[2rem] py-4 md:pr-6">
						Gabrielle Essence Eau De Parfum
					</h1>
					<p className="text-DarkGrayishBlue text-sm pr-4">
						A floral, solar and voluptuous interpretation composed by Olivier Polge,
						Perfumer-Creator for the House of CHANEL.
					</p>
					<div className="flex gap-4 mt-6 items-center ">
						<p className="text-DarkCyan text-4xl font-Fraunces">$149.99</p>
						<p className="text-DarkGrayishBlue line-through"> $169.99</p>
					</div>
					<button className="text-white bg-DarkCyan py-4 w-full rounded-xl flex gap-4 justify-center items-center my-4">
						<span>
							<img className="w-5" src={Cart} alt="" />
						</span>
						Add to Cart
					</button>
				</div>
			</div>
		</div>
	);
}

export default App;
