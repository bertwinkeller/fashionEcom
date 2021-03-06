import React from 'react'
import './menuitem.styles.scss'

const MenuItem = ({ title, imageUrl, size }) => {


    return (
        <div style={{
            backgroundImage: `url(${imageUrl})`
        }}
            className={`${size} menu-item`}>
            <div className='background-image'

                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <div className='content'>
                <div className='title'>{title}</div>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div >

    )
}

export default MenuItem
