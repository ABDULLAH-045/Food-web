interface MenuItm{
    title:string, description:string, calories:string, price:string
}


export default function MenuCom(props :MenuItm){
    const{ title, description, calories, price }=props
    return(
<div>
  <div className="flex justify-between items-start py-6 border-b border-gray-200">
    <div className="flex-1">
      <h3 className="text-xl font-semibold text-gray-900 mb-1">{title}</h3>
      <p className="text-gray-600 mb-1">{description}</p>
      <p className="text-sm text-gray-500">{calories} CAL</p>
    </div>
    <span className="text-2xl font-bold text-orange-500 ml-4">{price}$</span>
  </div>
</div>

    )
}