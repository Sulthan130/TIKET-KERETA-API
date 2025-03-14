import { GerbongType } from "../../types"
import AddSeat from "./addSeat"
import DropGerbong from "./dropGerbong"
import Editgerbong from "./editGerbong"
import Seat from "./Seat"

type props = {
    item: GerbongType
}

const Gerbong = (myProp: props) => {
    return (
        <div className="w-full my-2 bg-slate-50 rounded-md shadow-md flex flex-wrap justify-between">
            <div className="p-3">
                <small className="text-xs">Nama Gerbong</small>
                <br />
                {myProp.item.name}
                <br />
                Jumlah Kursi: {myProp.item.seat_count}

                <div className="w-full my-2">
                {
            myProp.item.seats.length == 0? 
            <div className="flex flex-col space-y-5">
               <div className="bg-sky-200 p-5 rounded-md">
              Gerbong ini belum mempunyai kursi
            </div>
            <AddSeat wagonId={myProp.item.id} id={myProp.item.id}/>
            </div>
            :
            <div className="flex flex-wrap gap-3">
               <AddSeat wagonId={myProp.item.id} id={myProp.item.id}/>
              {
                myProp.item.seats.map((seat, index) => (
                  <Seat key={`seat-${index}`}
                  item={seat}
                  />
                ))
              }
            </div>
          }
                </div>
            </div>
            <div className="p-3 flex gap-2">
                <Editgerbong item={myProp.item} />
                <DropGerbong item={myProp.item} />
            </div>
        </div>
    )
}
export default Gerbong