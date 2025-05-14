import React from 'react'
import './Nike.css'

const Nike = () => {
  return (
    <>
      <div className="nike">
        <div className="container">
            <div className="nike__wrapper">
                <div className="nike-top">
                    <h1>Взгляните на</h1>
                    <div className="img">
                        <img className='line-1' src="./line.svg" alt="" />
                        <img className="strel-1" src="./str1.png" alt="" />
                        <img className='main-img' src="./NIKE.png" alt="" />
                        <img className="strel-1" src="./str2.png" alt="" />
                        <img className='line-1' src="./line.svg" alt="" />
                    </div>
                </div>
                <div className="nike-bottom">
                    <ul className='ull1'> 
                        <li className='ul1'>
                            <h1 className='h0'>bred Fr <br /> mixer </h1>
                        </li >
                        <li className='ul2'>
                            <h1>nike air <br /> jordan 1</h1>
                        </li>
                        <li className='ul3' >
                            <h1 className='h0'>nike air <br /> Maximus</h1>
                        </li>
                    </ul>
                    <ul className='uu1'>
                        <p>спецпредложения</p>
                        <h1>Гарантия лучшей <br /> цены</h1>
                    </ul>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}


export default Nike

