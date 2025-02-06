"use client"

import Link from "next/link"
import { User} from "../types"
import EditAdmin from "./editAdmin"
import DropAdmin from "./dropAdmin"
import ResetPasswords from "./resetpasswords"

type props = {
    item: User
}
const Admin = (myProp: props) => {
    return (
        <div className="w-full flex flex-wrap my-2 border rounded-md">
            <div className="w-full md:w-4/12 p-2 flex flex-col">
                <small className="text-sm font-medium">
                    Nama Admin
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
                <div className="flex gap-2 items-center">'
                
                <EditAdmin admin={myProp.item}></EditAdmin>
                <DropAdmin admin={myProp.item}></DropAdmin>
                <ResetPasswords admin={myProp.item}></ResetPasswords>
                </div>
            </div>
        </div>
        
    )
}
export default Admin