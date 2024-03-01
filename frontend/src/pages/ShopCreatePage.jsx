import React, { useEffect } from 'react'
import ShopCreate from "../components/Shop/ShopCreate.jsx"
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function ShopCreatePage() {
  const navigate = useNavigate();
  const { seller, isSeller } = useSelector((state) => state.seller);

  useEffect(() => {
    if(isSeller === true){
      navigate(`/dashboard`);
      navigate(`/shop/${seller._id}`)
    }
  }, [])
  // isLoading,isSeller
  return (
    <div>
       <ShopCreate/> 
    </div>
  )
}

export default ShopCreatePage