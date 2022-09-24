import React from "react";
import './purchase_container.css'

function PurchaseContainer({bucket}){
    return(
        <>
        <div className="container-main">
        <div className="container-inner purchase">
                <p>Purchase {bucket.label}</p>
            </div>
        </div>
            
        </>
    )
}

export default PurchaseContainer