import { useState } from "react"
import { IconContext } from "react-icons"
import * as FaIcons from "react-icons/fa"
import { Link } from "react-router-dom"
import { SidebarData } from "./sidebar-data"

export default function Navbar(){
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)
    return (

        <IconContext.Provider value={{color: "undefined"}}>
            <div className="navbar top-0 p-4 flex items-center bg-slate-500">
                <Link to="#" className={`menu-bars ${sidebar ?  'rotate-90': 'rotate-0'} ease-in-out duration-300 text-white`}>
                    <FaIcons.FaBars onClick={showSidebar}/>
                </Link>
                <p className="text-xl text-center mx-auto text-white">Front End Challenges</p>
            </div>

            <nav className={`top-15 left-0 fixed bg-slate-500 w-auto h-full ${sidebar ?  'translate-x-0': '-translate-x-full'} ease-in-out duration-300`}>
                <ul className="nav-menu-items mt-4 text-white" onClick={showSidebar}>
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={`${item.cName} pr-10 pl-4 py-1 hover:bg-slate-100 hover:text-slate-800`}>
                                <Link to={item.path}>
                                    <div className="flex items-center">
                                        <span className="text-xl">{item.icons}</span>
                                        <span className="text-xl ml-2">{item.title}</span>
                                    </div>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </IconContext.Provider>

    )
}