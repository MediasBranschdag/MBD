import React, { FC } from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
// Note: All CSS is controlled in navbar.css

// Component for Navigation options in navbar

export interface DropdownItem {
    label: React.ReactNode
    path: string
   
}

interface NavItemProps {
    label: React.ReactNode
    path: string
    items: DropdownItem[]
    mobileMenuOpen: boolean
    onClick?: () => void
}

const NavItem: FC<NavItemProps> = (props) => {
    const [isOpen, setIsOpen] = useState(false); //UseState for open or closed dropdown menu

    const hasItems = props.items && props.items.length > 0;

    return (
        <div
            className='navbar-item'
            onMouseEnter={() => hasItems && setIsOpen(true)} //Hover effect for dropdown menu
            onMouseLeave={() => hasItems && setIsOpen(false)}
            style={{ position: 'relative' }}
        >
            {/* Main button */}
            <NavLink
                exact
                className='navbar-link'
                activeClassName='navbar-link active'
                to={props.path}
                onClick={props.onClick}
            >
                {props.label}
            </NavLink>

            {/* Dropdown menu children */}
            {(props.mobileMenuOpen || isOpen) && hasItems && (
                <ul
                    className={
                        props.mobileMenuOpen ? 'mobile-dropdown-menu' : 'dropdown-menu'
                    }
                >
                    {props.items.map((item) => (
                        <li key={item.path}>
                            <NavLink
                                exact
                                className='navbar-link'
                                activeClassName='navbar-link active'
                                to={item.path}
                                onClick={props.onClick}
                            >
                                {item.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default NavItem
