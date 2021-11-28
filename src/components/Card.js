import React from "react";

const Card=()=>{
    return (
        <section className='card'>
            <div className="container">
                <div className="card__grid">
                    <div className="card__content">
                        <h4 className="card__title">This is first card</h4>
                        <h5 className="card__desc">Card description</h5>
                    </div>
                    <div className="card__content">
                        <h4 className="card__title">This is second card</h4>
                        <h5 className="card__desc">Card description</h5>
                    </div>
                    <div className="card__content">
                        <h4 className="card__title">This is third card</h4>
                        <h5 className="card__desc">Card description</h5>
                    </div>
                    <div className="card__content">
                        <h4 className="card__title">This is fourth card</h4>
                        <h5 className="card__desc">Card description</h5>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Card