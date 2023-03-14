import React from 'react'

const Home = (products) => {
    return (
        <>
            <div className="p-4">
                <div className="container">
                    <h1>Hi User!</h1>
                </div>
            </div>
            <div>
                {products && products.map(product => (
                    <>
                        <div>
                            <span>Name: </span><span>{product.name}</span>
                        </div>
                        <div>
                            <span>Type: </span><span>{product.type}</span>
                        </div>
                        <div>
                            <span>Price: </span><span>{product.price}</span>
                        </div>
                    </> 
                ))}
            </div>
        </>
    )
}

export default Home