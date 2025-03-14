import React from "react";
import { KursiSType } from "../../types";
import editSeat from "./editSeat";
import Editseat from "./editSeat";
import Deleteseat from "./deleteSeat";

interface props {
  item: KursiSType;
}
const Seat = (myprops: props) => {
  return (
    <div className="size-24 rounded-lg flex flex-col items-center justify-center bg-sky-700">
      <div className="flex justify-between mt-[-2rem] gap-[10px]">
        <div>
          <Editseat
            seatId={myprops.item.id}
            seatName={myprops.item.seat_number}
          />
        </div>
        <div>
          <Deleteseat seatId={myprops.item.id} />
        </div>
      </div>
      <div>
        <span className="text-white font-semibold">
          {myprops.item.seat_number}
        </span>
      </div>
    </div>
  );
};

export default Seat;