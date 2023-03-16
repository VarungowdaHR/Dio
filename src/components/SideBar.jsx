import { channels } from '../utils/constants'
import "../utils/css/sideBar.css"



const SideBar = ({currentItem, setcurrentItem}) => {
    const handleItemBtnClick=(name)=>{
        setcurrentItem(name);
    }

    return (
        <div className="sidebar scroll-track">
            
            <p id='sidebar-header'>EXPLORE</p>
            {channels.map((item, index)=>(
                <button className='item-btn' key={index} onClick={()=> handleItemBtnClick(item.name)}
                style={{backgroundColor:item.name===currentItem && 'red'}}
                >
                    <span id='item-icon'>{item.icon}</span>
                    <span id='item-name'>{item.name}</span>
                </button>
            ) )}
        </div>
  )
}

export default SideBar