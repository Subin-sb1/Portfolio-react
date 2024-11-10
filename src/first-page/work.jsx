function Work({im,titl,abt,lnk}){
    return(
        <div className="flex max-[800px]:items-center max-[800px]:justify-center">
<div class="max-w-lg max-[800px]:max-w-sm  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href={lnk} >
        <img className="rounded-t-lg h-64 w-[100%] " src={im} alt="" />
    </a>
    <div className="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{titl}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{abt}</p>
    </div>
</div>
        </div>
    )
}
export default Work