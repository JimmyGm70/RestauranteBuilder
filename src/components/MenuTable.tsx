export default function MenuTable(){
    return(
        <>
            <table className="w-80 rounded-2xl bg-gray-100 shadow-lg">
                <thead className=" bg-brown mb-7">
                    <tr className="">
                        <span className="flex justify-center mt-5 mb-5 text-white font-bold text-xl">Menu solicitado</span>
                    </tr>
                </thead>
                <tbody className=" rounded-xl bg-pastel">
                    <tr className="flex cursor-pointer">
                        <span className="ml-5 mt-5 mb-5 ">
                            Menu 1
                        </span>
                    </tr>
                </tbody>               
            </table>
        </>
    );
}