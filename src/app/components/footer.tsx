// components/Footer.jsx
const Footer = () => {
    return (
      <footer className="bg-black text-gray-400 pt-11 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
             {/* Newsletter Column */}
             <div className="flex row justify-between pb-6 ">
             <div> <h3 className="text-white text-lg font-semibold mb-4">Still You Need  our Support?</h3>
              <p className="text-sm mb-4">Subscribe to our newsletter for updates</p></div>

              <div className="flex ">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-[263px] h-[56px] bg-[#FF9F0D] text-white px-4 py-2  focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="w-[163px] h-[56px] bg-white text-[#FF9F0D] px-4 py-2  hover:bg-blue-700 transition-colors">
                  Subscribe
                </button>
              </div>
              
            </div>
            <hr className=" border-1 border-[#FF9F0D]"></hr> 

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-9 pt-9">
            {/* Logo and Info Column */}
            <div className="space-y-4">
              <div className="w-32 h-8 text-white text-lg font-semibold mb-4"><h3>About Us</h3></div>
              <div className="space-y-2">
                <p className="text-medium text-base text-white">orporate clients and leisure travelers hasbeen relying on Groundlink for dependablesafe, and professional chauffeured carservice in major cities across World.</p>
               
              </div>
            
            </div>
  
            {/* Quick Links Column */}
            <div className="space-y-8">
              <h3 className="text-white text-lg font-semibold mb-4">Useful Links</h3>
              <ul className="space-y-4 text-white">
                <li><a href="#" className="text-sm hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-sm hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="text-sm hover:text-white transition-colors">Services</a></li>
                <li><a href="#" className="text-sm hover:text-white transition-colors">Portfolio</a></li>
                <li><a href="#" className="text-sm hover:text-white transition-colors">Team</a></li>
                <li><a href="#" className="text-sm hover:text-white transition-colors">Menu</a></li>
              </ul>
            </div>
  
            {/* Resources Column */}
            <div className="space-y-8">
              <h3 className="text-white text-lg font-semibold mb-4">Help</h3>
              <ul className="space-y-4 text-white text-base">
                <li><a href="#" className="text-sm hover:text-white transition-colors">FAQ's</a></li>
                <li><a href="#" className="text-sm hover:text-white transition-colors">Rsepoting</a></li>
                <li><a href="#" className="text-sm hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="text-sm hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-sm hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-sm hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>
  
           {/* resent Post */}
<div className="space-y-2">
<h3 className="text-white text-lg font-semibold mb-4">Resent Post</h3>
<div className="flex space-x-2">
<img className="h-[80px] w-[80px] " src="footer1.png"></img>
<div><p>Is fastfood good for
your body?</p>
<p>feb-11-2024</p>
</div>
</div>

<div className="flex space-x-2">
<img className="h-[80px] w-[80px] " src="footer1.png"></img>
<div><p>Is fastfood good for
your body?</p>
<p>feb-11-2024</p>
</div>
</div>

<div className="flex space-x-2">
<img className="h-[80px] w-[80px] " src="footer1.png"></img>
<div><p>Is fastfood good for
your body?</p>
<p>feb-11-2024</p>
</div>
</div>

</div>






          </div>
  
         
        </div>
        <div className="h-[99px] bg-[#4F4F4F] px-60"> {/* Bottom Bar */}
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-white">&copy; 2024 Your Company. All rights reserved.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
              <div className="flex space-x-4 ">
                {/* Social Icons */}
                <a href="#" className="w-10 h-10  bg-white flex items-center justify-center hover:bg-gray-700">
                <img className="h-[18px] w-[18px]" src= " copy3.png "></img>
                </a>
                <a href="#" className="w-10 h-10  bg-white flex items-center justify-center hover:bg-gray-700">
                <img className="h-[18px] w-[18px]" src= " copy4.png "></img>
                </a>
                <a href="#" className="w-10 h-10  bg-white flex items-center justify-center hover:bg-gray-700">
                 <img className="h-[18px] w-[18px]" src= " copy1.png "></img>
                </a>
                <a href="#" className="w-10 h-10  bg-white flex items-center justify-center hover:bg-gray-700">
                  <img className="h-[18px] w-[18px]" src= " copy2.png "></img>
                </a>
                <a href="#" className="w-10 h-10  bg-white flex items-center justify-center hover:bg-gray-700">
                <img className="h-[18px] w-[18px]" src= " copy5.png "></img>
                </a>
                
              </div>
              </div>
            </div>
          </div></div>
      </footer>
    )
  }
  
  export default Footer