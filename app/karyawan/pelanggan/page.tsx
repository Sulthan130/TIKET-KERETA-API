// function to get all data kereta\
import { getServerCookie } from "@/helper/server-cookie";
import { User } from "../types";
import axiosInstance from "@/helper/api";
import Pelanggans from "./Pelanggans";
import AddPelanggan from "./addPelanggan";
// import AddKereta from "./addKerera";

const getPelanggan = async (): Promise<User[]> => {
    try {
        /** get token from cookie */
        const TOKEN =
            await getServerCookie(`token`)
        const url = `/customer`
        /** hit endpoint */
        const response: any = await axiosInstance.get(url, {headers: {authorization: `Bearer ${TOKEN}`}})
        if(response.data.success == true){
            return response.data.data
        }
        return []
    } catch (error) {
        console.log(error);
        return []
    }
}

const PelangganPage = async() => {
    /** call function to load data kereta from backend */
    const dataKereta = await getPelanggan()
    return (
        <div className="w-full p-5 bg-white">
            <h1 className="text-xl font-semibold">
                Data Pelanggan
            </h1>
            <span className="text-sm">
                Halaman ini memuat daftar pelanggan yang tersedia
            </span>
            <AddPelanggan></AddPelanggan>
            <div className="my-3">
                {/* mapping data kereta */}
                {
                    dataKereta.map((Pelanggan, index) => (
                        <Pelanggans
                            item={Pelanggan}
                            key={`pelanggan-${index}`}
                        />
                    ))
                }
            </div>
        </div>
    )
}
export default PelangganPage