import React from 'react'
import {HeaderWrapper} from './styledComponents'
const  Header = props => {
    const {title} = props
    return (
        <HeaderWrapper>
            <div className='header'>
                <div className='title'>{title}</div>
                <div className='datepicker'>Date Picker</div>
            </div>
            <div className='summary'>
                <div>Time Left:</div>
                <div>Highest On Peak Price:</div>
                <div>Highest Off Peak Price:</div>
                <div>Total Energy:</div>
            </div>
        </HeaderWrapper>
    )
}

export default Header