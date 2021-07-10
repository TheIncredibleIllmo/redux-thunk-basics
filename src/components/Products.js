import React from 'react';

const Products = () => {
    return (
        <>
            <h2 className='text-center my-5'>Products</h2>

            <table className='table table-striped'>
                <thead className='bg-primary table-dark'>
                    <tr>
                        <th scope='col'>Name</th>
                        <th scope='col'>Price</th>
                        <th scope='col'>Actions</th>
                    </tr>
                </thead>
            </table>
        </>
    );
};

export default Products;
