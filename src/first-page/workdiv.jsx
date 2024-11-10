import Work from "./work";


function Workdiv(){
    return(
        <div className="flex justify-around max-[800px]:flex-col max-[800px]:m-10 max-[800px]:gap-4">
           <Work im="p1.png"
           titl="E-commerce Website"  
           abt="Aura is an ecommerce shopping website using nodejs and mongodb"
           lnk="https://github.com/Subin-sb1/Ecommerce-aura.git"
           ></Work>
           <Work im="p2.jpg" 
           titl="Video Violence Detection"
            lnk="https://github.com/Subin-sb1"
           abt="Detect violence in video as real time using cnn and rnn can find real time violence"
           ></Work>
        </div>
    )
}

export default Workdiv;