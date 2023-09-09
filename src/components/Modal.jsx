import { useContext } from "react";
import GetIconByName from "./getIconsByNmaes";
import { MenuContext } from "../provider/Context";

const Modal = () => {
    const {clickedIcon} = useContext(MenuContext)
    return (
        <>
        <dialog id="my_modal_2" className="modal">
            <div className="modal-box">
                <div className="flex items-center gap-4 lg:mb-10 mb-6">
                <span className="lg:text-5xl md:text-3xl text-xl font-bold text-transform: lowercase">{clickedIcon?.name?.replace("Fa","")}</span> {clickedIcon?.type ==="pro" && <span className="px-2 font-semibold text-center rounded-xl bg-[#ffd43b] text-base">PRO</span>}
                </div>
                <GetIconByName name={clickedIcon?.name} fromModal={true}/>
            </div>
            <form method="dialog" className="modal-backdrop">
                <button className="cursor-default">close</button>
            </form>
        </dialog>
        </>
    );
};

export default Modal;