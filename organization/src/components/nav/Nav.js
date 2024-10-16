import React from 'react'
import logo from ''

export default function Nav() {
    const navItems = [
        {
            label: 'Home',
            path: '/'
        },
        {
            label: 'About',
            path: '/about'
        },
        {
            label: 'Services',
            path: '/services'
        },
        {
            label:"Success Stories",
            path:'/success-stories'
        },{
            label:"FAQs",
            path:'/FAQs'
        },{
            label:"Contact us",
            path:'/Contact-us'
        },
    ]
  return (
    <div className='navigation-bar'>
        <div>
            <div className="logo">
               <img src={logo} alt="logo" />
            </div>
            <div className="navigation">
                <nav>
                    <ul>
                      
                    </ul>
                </nav>
            </div>
        </div>
    </div>
  )
}
