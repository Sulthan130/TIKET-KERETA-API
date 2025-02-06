"use client"

import Link from "next/link"
import { User} from "../types"
import EditPelanggan from "./editPelanggan"
import DropPelanggan from "./dropPelanggan"
import ResetPassword from "./resetpasswords"
// import DropKereta from "./dropKereta"
// import EditKereta from "./editKereta"

type props = {
    item: User
}
const Pelanggans = (myProp: props) => {
    return (
        <div className="w-full flex flex-wrap my-2 border rounded-md">
            <div className="w-full md:w-4/12 p-2 flex flex-col">
                <small className="text-sm font-medium">
                    Nama Pelanggan
                </small>
                <span>
                    <Link href={`/karyawan/kereta/${myProp.item.id}`}>
                    {myProp.item.name}
                    </Link>
                </span>
            </div>
            <div className="w-full md:w-4/12 p-2 flex flex-col">
                <small className="text-sm font-medium">
                    Address
                </small>
                <span>
                    {myProp.item.address}
                </span>
            </div>
            <div className="w-full md:w-2/12 p-2 flex flex-col">
                <small className="text-sm font-medium">
                    Phone
                </small>
                <span>
                    {myProp.item.phone}
                </span>
            </div>
            <div className="w-full md:w-2/12 p-2 flex flex-col">
                <small className="text-sm font-medium">
                    Opsi
                </small>
                <div className="flex gap-2 items-center">
                    <EditPelanggan pelanggan={myProp.item}></EditPelanggan>
                    <DropPelanggan pelanggan={myProp.item}></DropPelanggan>
                    <ResetPassword pelanggan={myProp.item}></ResetPassword>
                </div>
            </div>
        </div>
        
    )
}
export default Pelanggans