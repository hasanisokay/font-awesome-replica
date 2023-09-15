import { useContext, useState } from "react";
import GetIconByName from "./getIconsByNmaes";
import { MenuContext } from "../provider/Context";
import { FaArrowsRotate, FaFilm } from "react-icons/fa6";

const Modal = () => {

    const { clickedIcon, animation, setAnimation, rotation, setRotation } = useContext(MenuContext);
    return (
        <>
            <dialog id="my_modal_2" className="modal">
                <div className="modal-box min-w-[60%]">
                    <div className="flex items-center gap-4 lg:mb-10 mb-6">
                        <span className="lg:text-5xl md:text-3xl text-xl font-bold text-transform: lowercase">{clickedIcon?.name?.replace("Fa", "")}</span> {clickedIcon?.type === "pro" && <span className="px-2 font-semibold text-center rounded-xl bg-[#ffd43b] text-base">PRO</span>}
                    </div>
                    <div className="flex gap-4 lg:flex-row flex-col justify-center items-center lg:items-start lg:justify-normal">
                        <div className="rounded-lg border w-96 h-72 flex items-center justify-center" >
                            <GetIconByName name={clickedIcon?.name} fromModal={true} animation={animation} />
                        </div>
                        <div className="flex gap-4 justify-center items-center lg:items-start lg:justify-normal">
                            <div className="relative">
                                <FaFilm className="w-6 h-6 absolute top-3 left-2" />
                                <select onChange={(e) => setAnimation(e.target.value)} value={rotation !== "" ? "" : animation} disabled={rotation !== ""} className="select select-bordered border-2 font-medium px-10">
                                    <option value={""}>No Animation</option>
                                    <option value={"beat"}>Beat</option>
                                    <option value={"fade"}>Fade</option>
                                    <option value={"bounce"}>Bounce</option>
                                    <option value={"spin"}>Spin</option>
                                </select>
                            </div>
                            <div className="relative">
                                <FaArrowsRotate className="w-6 h-6 absolute top-3 left-2" />
                                <select onChange={(e) => setRotation((animation !== "" && "") || e.target.value)} value={animation !== "" ? "" : rotation} disabled={animation !== ""} className={`select select-bordered border-2 font-medium px-10`}>
                                    <option value={""}>No Rotation</option>
                                    <option value={"rotate-90"}>Rotate 90</option>
                                    <option value={"rotate-180"}>Rotate 180</option>
                                    <option value={"rotate-270"}>Rotate 270</option>
                                    <option value={"rotate-360"}>Rotate 360</option>
                                </select>
                            </div>
                        </div>

                    </div>

                </div>
                <form method="dialog" className="modal-backdrop">
                    <button className="cursor-default">close</button>
                </form>
            </dialog>
        </>
    );
};

export default Modal;