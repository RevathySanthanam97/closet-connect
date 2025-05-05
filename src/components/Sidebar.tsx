import { SidebarProps } from '../types'
import './Sidebar.scss'
import CloseIcon from '../assets/close.svg'

const Sidebar = ({ open, onClose, title, children, className }: SidebarProps) => {
  return (
    <div className={`sidebar__overlay ${className ?? ""} ${open ? 'open' : ''}`}>
      <div className="sidebar__wrapper">
        <div className='sidebar__header'>
          <h2 className="sidebar__title">{title}</h2>
          <button className="close-btn" onClick={onClose}>
            <img src={CloseIcon} alt="Close" />
          </button>
        </div>
        {children}
      </div>
    </div>
  )
}

export default Sidebar