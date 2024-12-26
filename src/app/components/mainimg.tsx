interface TheMain{
pagename:string,
openedpage:string,

}


export default function MainImg(props: TheMain) {
const {pagename,openedpage} =props
  return (
    <div >
<div className="relative">
  <img className="h-[410px] w-full" src="mainimg.png" alt="Main Image" />
  <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl font-bold text-white">
    {pagename}
    {/* OurShop */}
  </h2>
  <div className="flex mt-4 absolute top-1/2  left-1/2 transform -translate-x-1/2 -translate-y-1/2 pt-11">
    <label>Home</label>
    <img className= " pt-1 w-[20px] h-[20px]  text-white" src="arrow.png" alt="Arrow" />
    <label>{openedpage}</label>
  </div>
</div>



      
    </div>
  );
}
