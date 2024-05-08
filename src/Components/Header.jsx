import React from 'react'

export default function Header() {
  return (
    <div>
      <header className='container'>
        <div className='flex py-[50px] justify-between items-center'>
        <div>
            <h2 className='logo text-[30px]'>Humanshi</h2>
        </div>
        <nav>
            <ul className='flex justify-between gap-[35px] items-center'>
                <li>Home</li>
                <li>About</li>
                <li>Service</li>
                <li>Projects</li>
                <li>Contact</li>
                <li>
                    <button className=''>Download CV</button>
                </li>
            </ul>
        </nav>
        </div>
      </header>
    </div>
  )
}
