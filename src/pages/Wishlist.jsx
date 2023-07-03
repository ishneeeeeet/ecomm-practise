import React, { useContext } from 'react'
import { cartContext } from '../context/context'

const Wishlist = () => {

    const {wishList} = useContext(cartContext)
  return (
    <div>

       { wishList.map((i) => i.title)}
    </div>
  )
}

export default Wishlist