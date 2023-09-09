import Categories from "./components/Categories";
import Icons from "./components/Icons";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
        <Navbar></Navbar>
        <Categories></Categories>
        <Icons></Icons>
        {/* <button className="btn" onClick={() => document.getElementById('my_modal_3').showModal()}>click</button>
        <Modal></Modal> */}
    </div>
  );
};

export default App;