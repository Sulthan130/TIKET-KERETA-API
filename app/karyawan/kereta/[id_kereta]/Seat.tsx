import { KursiSType } from "../../types"

type props = {
    item: KursiSType
}

const Seat = (myProp: props) => {
    return (
        <div className="size-20 rounded-sm flex items-center justify-center bg-sky-700">
            <span className="text-white font-semibold">
                {myProp.item.seat_number}
            </span>
        </div>
    )
}
export default Seat