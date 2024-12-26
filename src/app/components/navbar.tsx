export default function Navbar(){
return (
    <div>


<div className="bg-black text-white px-[300px] top-[29px] ">


    <nav className="flex items-center justify-between p-4 bg-black">
        {/* the logoooo */}
        <div className="flex text-xl font-bold">
            <label ><h1 className="text-3xl">Food</h1></label>
            <label className="text-[#FF9F0D] text-3xl"><h1 ></h1>tuck</label>
        </div>
        {/* the pages  */}
        <ul className="flex space-x-8">
            <li><a href="./" className="hover:text-gray-400">Home</a></li>
            <li><a href="./menu" className="hover:text-gray-400">Menu</a></li>
            <li><a href="./blog" className="hover:text-gray-400">Blog</a></li>
           
            <li><a href="./about" className="hover:text-gray-400">About</a></li>
            <li><a href="./shop" className="hover:text-gray-400">Shop</a></li>
            <li><a href="./checkout" className="hover:text-gray-400">Checkout</a></li>
         
        </ul>
{/* third the icons  */}
        <div className=" flex space-x-4 "> 
<div className="w-[24px] h-[24px]" ><img src="find.png"></img></div>
<div className="w-[24px] h-[24px]"><img src="shopping.png"></img></div>
<div className="w-[24px] h-[24px]"><img src="user.png"></img></div>
        </div>
    </nav>


    </div>
    </div>
)

}