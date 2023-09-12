export default function MenuTable(props: { menu: number[] }){
    let total:number = props.menu.reduce((acumulador,numero) => acumulador + numero,0);
    return(
        <>
            <table className="w-80 rounded-2xl bg-gray-300 shadow-lg">
                <thead className=" bg-[#3F2305] mb-7">
                    <tr className="">
                        <span className="flex justify-center mt-5 mb-5 text-white  font-bold text-xl">Precio menú actual</span>
                    </tr>
                </thead>
                <tbody className=" rounded-xl bg-[#F2EAD3]">
                    <tr className="flex cursor-default">
                        <span className="ml-5 mt-5 mb-5 font-bold ">
                        {"Entrada "+"$"+props.menu[0]} 
                        </span>
                    </tr>
                    <tr className="flex cursor-default">
                        <span className="ml-5 mt-5 mb-5 font-bold ">
                            {"Plato fuerte "+"$"+props.menu[1]}
                        </span>
                    </tr>
                    <tr className="flex cursor-default">
                        <span className="ml-5 mt-5 mb-5 font-bold ">
                            {"Postre "+"$"+props.menu[2]} 
                        </span>
                    </tr>
                    <tr className="flex cursor-default">
                        <span className="ml-5 mt-5 mb-5 font-bold ">
                            {"Bebida "+"$"+props.menu[3]}
                        </span>
                    </tr>
                    <tr className="flex cursor-default">
                        <span className="ml-5 mt-5 mb-5 font-bold ">
                            {"Total "+"$"+total}
                        </span>
                    </tr>
                </tbody>               
            </table>
        </>
    );
}