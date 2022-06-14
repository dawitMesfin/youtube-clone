import React from 'react'
import './SideBarRow.css'


function SidebarRow({selected,Icon,title}) {
    return (
       <div className={`Sidebar-row ${selected &&"selected"}`}>
            <Icon className = 'Sidebar-row-icon'/>
            <h1 className='Sidebar-row-title'>{title}</h1>
       </div>
    )
}

export default SidebarRow
