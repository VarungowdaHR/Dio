import { channels } from '../utils/constants'
import "../utils/css/sideBar.css"



const SideBar = ({currentItem, setcurrentItem, setVideos}) => {
    const handleItemBtnClick=(name)=>{
        setVideos([]);
        setcurrentItem(name);
    }

    return (
        <div className="sidebar scroll-track">
            
            <p id='sidebar-header'>EXPLORE</p>
            {channels.map((item, index)=>(
                <button className='item-btn' key={index} onClick={()=> handleItemBtnClick(item.name)}
                style={{backgroundColor:item.name===currentItem && 'red'}}
                >
                    <span className='item-icon'>{item.icon}</span>
                    <span className='item-name'>{item.name}</span>
                </button>
            ) )}
            
        </div>
  )
}

export default SideBar