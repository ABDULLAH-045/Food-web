import MainImg from "../components/mainimg";

export default function AboutUs (){
    return(
        <div className="">

          <MainImg pagename={"About US"} openedpage={"About"} ></MainImg>
            {/* next div */}
            <div className="px-64 bg-white text-black">
<div className="py-10  ">
<h3 className="text-center font-bold font-sans text-4xl ">Why Choose US </h3>
<p className="text-center  pt-9">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. </p>
</div>

<div><img className="p-10" src="about2.png"></img></div>
{/* ins div */}
<div className="flex   justify-center space-x-9 pb-8">
<div>
<img className="pl-36" src="person.png"></img>
<div><h3 className="text-lg text-center font-semibold">Clean Environment</h3>
<p className="text-center">  ipsam suscipit iure laboriosam rerum quasi dolores maxime magnam, veritatis perspiciatis pariatur! Saepe, rerum.
     </p>
</div>
</div>


<div>
<img className="pl-40" src="Student.png"></img>
<div><h3 className="text-lg text-center font-semibold">Best Chef</h3>
<p className="text-center"> Aliquid blanditiis porro nihil vitae vel, distinctio ad ipsam suscipit iure laboriosam rerum quasi dolores maxime magnam, veritatis perspiciatis pariatur! Saepe, rerum.
     </p>
</div>
</div>

<div>
<img className=" pl-40 " src="Coffee.png"></img>
<div ><h3 className="text-lg font-semibold text-center">140 Food Items</h3>
<p  className="text-center">  Aliquid blanditiis porro nihil vitae vel, distinctio ad ipsam suscipit iure laboriosam rerum quasi dolores maxime magnam, veritatis perspiciatis pariatur! Saepe, rerum.
     </p>
</div>
</div>

</div>
            </div>

            <div className="flex justify-center  space-x-9 items-center  bg-white text-black px-64 py-[100px]">
      <div className="grid grid-cols-2 gap-2 ">
        <div className="relative">
          <img className="h-[340px] w-[400px]" src="shop7.png" ></img>
        </div>
        <div className="space-y-4">
          <div className="relative">
          <img className="h-[200px] w-[300px]" src="shop3.png" ></img>
          </div>
          <div className="relative">
          <img src="shop2.png" ></img>
          </div>
        </div>
      </div>
      <div className="p-10 space-y-4">
        <h2 className="text-orange-500">About us</h2>
        <h1 className="text-4xl font-bold">Food is an important part<br/> Of a balanced Diet</h1>
        <p className="text-gray-600 text-start">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
        </p>
        <div className="flex space-x-4">
          <button className="bg-orange-500 p-3 rounded">Show more</button>
          <button className="flex items-center space-x-2">
            <div className="bg-gray-700 p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-6.016-3.448A1 1 0 007 8.999v6.002a1 1 0 001.736.681l6.016-3.448a1 1 0 000-1.682z" />
              </svg>
            </div>
            <span>Watch video</span>
          </button>
        </div>
      </div>
    </div>
        </div>
    )
}