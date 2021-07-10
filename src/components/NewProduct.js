import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
//*actions
import { createProductAction } from '../redux/actions/productActions';

const NewProduct = () => {
    //state
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);

    // use dispatch
    const dispatch = useDispatch();

    const { products, error, loading } = useSelector((state) => state.products);

    const handleCreateProduct = (e) => {
        e.preventDefault();

        if (name.trim() === '' || price <= 0) {
            return;
        }

        dispatch(createProductAction({ name, price }));
    };

    return (
        <div className='row justify-content-center'>
            <div className='col-md-8'>
                <div className='card'>
                    <div className='card-body'>
                        <h2 className='text-center mb-4 font-weight-bold'>
                            Add product
                        </h2>
                        {loading && <h1>LOADING...</h1>}
                        {error && <h2>Ocurrio un error...</h2>}
                        {products.map((p) => (
                            <p key={name}>{p.name}</p>
                        ))}

                        <form onSubmit={handleCreateProduct}>
                            <div className='form-group'>
                                <label>Name</label>
                                <input
                                    type='text'
                                    className='form-control'
                                    placeholder='Name'
                                    name='name'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>

                            <div className='form-group'>
                                <label>Price</label>
                                <input
                                    type='number'
                                    className='form-control'
                                    placeholder='Price'
                                    name='price'
                                    value={price}
                                    onChange={(e) =>
                                        setPrice(Number(e.target.value))
                                    }
                                />
                            </div>

                            <button
                                type='submit'
                                className='btn btn-primary font-weight-bold text-uppercase d-block w-100'
                            >
                                Add
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewProduct;
