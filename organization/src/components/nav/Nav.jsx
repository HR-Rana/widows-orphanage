import React from 'react'
// import logo from ''
import { Link, NavLink } from 'react-router-dom'
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";



export default function Nav() {
    const navItems = [
        {
            label: 'Home',
            path: '#'
        },
        {
            label: 'About',
            path: '#About'
        },
        {
            label: 'Programme',
            path: '#Programme'
        },
        {
            label:"Success Stories",
            path:'#success-stories'
        },{
            label:"Mission",
            path:'#Mission'
        },{
            label:"Contact us",
            path:'#Contact-us'
        },
    ]
  return (
    <div className='navigation-bar'>
        <div className='flex justify-between header-top'>
            <p>Together We Care, Together We Thrive.</p>
            <div className="socials ">
                <ul className='flex justify-between width-fit gap-10 list-none'>
                    <li><Link to={"/"}><FaLinkedin/></Link></li>
                    <li><Link to={"/"}><FaYoutube/></Link></li>
                    <li><Link to={"/"}><FaFacebookSquare/></Link></li>
                    <li><Link to={"/"}><FaSquareXTwitter/></Link></li>
                </ul>
            </div>
        </div>
        <div className='flex justify-between navs-container'>
            <div className="logo">
               <h3>Widows <span>&</span> Orphanage</h3>
            </div>
            <div className="navigation">
                <nav className=''>
                    <ul className='flex gap-15 justify-between'>
                      {
                        navItems.map(({ label, path }) => (
                          <li key={label}>
                            <a href={path}>{label}</a>
                          </li>
                        ))
                      }
                    </ul>
                </nav>
            </div>
        </div>
    </div>
  )
}
