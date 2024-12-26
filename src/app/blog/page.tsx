import MainImg from "../components/mainimg";

export default function Blog(){
return (
<>
<div >
    <MainImg pagename={"Blog"} openedpage={"Blog"} ></MainImg>
</div>
    <div className="bg-white flex justify-between space-x-9 px-64 py-16">
<div >
    {/* first div */}
<div>
    <img className="w-[871px] h-521px" src="un1.png"></img>
<div>
<p className="text-black text-3xl font-semibold pt-5" >10 Reasons To Do A Digital Detox Challenge</p>
<p className="text-black pt-7">At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
    <br/> ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod </p>
<button className="mt-2 bg-white border-[#FF9F0D] w-[200px] h-[70px] text-[#FF9F0D] border-2 rounded-md">Read More</button>
</div>

    </div>

    <div className="pt-11">
    <img className="w-[871px] h-521px" src="un2.png"></img>
<div>
<p className="text-black text-3xl font-semibold pt-5" >Traditional Soft Pretzels with Sweet Beer Cheese</p>
<p className="text-black pt-7">At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
    <br/> ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor </p>
    <button className="mt-2 bg-white border-[#FF9F0D] w-[200px] h-[70px] text-[#FF9F0D] border-2 rounded-md">Read More</button>
</div>

    </div>

    <div className="pt-11">
    <img className="w-[871px] h-521px" src="un3.png"></img>
<div>
<p className="text-black text-3xl font-semibold pt-5" >10 Reasons To Do A Digital Detox Challenge</p>
<p className="text-black pt-7">At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
    <br/> ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>
    <button className="mt-2 bg-white border-[#FF9F0D] w-[200px] h-[70px] text-[#FF9F0D] border-2 rounded-md">Read More</button>
</div>

    </div>


    <div className="pt-11">
    <img className="w-[871px] h-521px" src="un4.png"></img>
<div>
<p className="text-black text-3xl font-semibold pt-5" >10 Reasons To Do A Digital Detox Challenge</p>
<p className="text-black pt-7">At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
    <br/> ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, </p>
    <button className="mt-2 bg-white border-[#FF9F0D] w-[200px] h-[70px] text-[#FF9F0D] border-2 rounded-md">Read More</button>
</div>

    </div>
</div>

{/* next div */}
<div>
<div className="space-y-14 text-black text-2xl">
        <h3>Reacent Posts</h3>
        <div className="flex items-center text-black">
          <img src="footer1.png" alt="Chicken Tikka Kabab" className="w-20 h-20" />
          <div className="ml-4">
            <h3>Chicken Tikka Kabab</h3>
            <p className="text-gray-600">nov/24/2024</p>
            
          </div>
        </div>
        <div className="flex items-center">
          <img src="footer1.png" alt="Chicken Tikka Kabab" className="w-20 h-20" />
          <div className="ml-4">
            <h3>Chicken Tikka Kabab</h3>
            <p className="text-gray-600">nov/24/2024</p>
            
          </div>
        </div>
        <div className="flex items-center">
          <img src="footer1.png" alt="Chicken Tikka Kabab" className="w-20 h-20" />
          <div className="ml-4">
            <h3>Chicken Tikka Kabab</h3>
            <p className="text-gray-600">nov/24/2024</p>
          
          </div>
        </div>

        <div className="flex items-center">
          <img src="footer1.png" alt="Chicken Tikka Kabab" className="w-20 h-20" />
          <div className="ml-4">
            <h3>Chicken Tikka Kabab</h3>
            <p className="text-gray-600">nov/24/2024</p>
          
          </div>
        </div>
        <hr ></hr>
        <hr ></hr>
      </div>
</div>

    </div>
    </>
)

}