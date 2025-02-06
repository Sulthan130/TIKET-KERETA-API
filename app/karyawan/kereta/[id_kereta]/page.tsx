/** function to call detail kereta
 * that include gerbong dan kursi
 */

import { getServerCookie } from "@/helper/server-cookie";
import { KeretaType } from "../../types";
import axiosInstance from "@/helper/api";
import Gerbong from "./Gerbong";
import AddGerbong from "./addGerbong";
import DropGerbong from "./dropGerbong";

const getDetailKereta = async (
    id_kereta: string
): Promise<KeretaType | null> => {
    try {
        /** get token from cookie */
        const TOKEN = await getServerCookie(`token`)
        const url = `/train/${id_kereta}`
        /** hit endpoint */
        const response: any = await axiosInstance
        .get(url, {
            headers: {
                authorization: `Bearer ${TOKEN}`
            }
        })
    if(response.data.success === true) {
        return response.data.data
    }
        return null
    } catch (error) {
        console.log(error);
        return null
    }
}

type props = {
    params: {
        id_kereta: string
        // sesuai dengan nama foldernya
    }
}

const DetailKeretaPage = async (
    myprop: props
) => {
    // get value of selected "id_kereta"
    const id_kereta = myprop.params.id_kereta
    /** get data from backend */
    const datakereta =
        await getDetailKereta(id_kereta)

    return (
        <div className="w-full bg-yellow-100 rounded-md p-3">
            {
                datakereta === null ?
                <div>
                    <h1 className="text-lg font-semibold">
                        Informasi
                    </h1>
                    <p className="text-sm text-slate-500">
                        Data Kereta Tidak Ditemukan
                    </p>
                </div>:
                <div>
                    <h1 className="text-lg font-semibold">
                        {datakereta.name}
                    </h1>
                    <p className="text-sm">
                        {datakereta.descriptions}
                    </p>

                    <h2 className="text-base font-medium">
                        Daftar Gerbong
                    </h2>

                    <AddGerbong id_kereta={Number(id_kereta)} />

                    <div className="my-5">
                        {
                            datakereta.wagons.map((gerbong, index) => (
                                <Gerbong item={gerbong}
                                key={`keyGerbong-${index}`}
                                />
                            )) 
                        }
                    </div>
                </div>
            }
        </div>
    )
}
export default DetailKeretaPage