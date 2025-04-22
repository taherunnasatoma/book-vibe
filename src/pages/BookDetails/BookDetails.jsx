import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoreDB } from '../../utilities/addToDB';

const BookDetails = () => {

    const { id } = useParams();
    const bookId = parseInt(id);
    const data = useLoaderData()
    const singleBook = data.find(book => book.bookId === bookId)
    const { bookName, image } = singleBook

    const handelMarkAsRead=(id)=>{
        addToStoreDB(id)

    }
    return (
        <div className=' w-2/3 mx-auto'>
            <img className='w-48' src={image} alt="" />
            <h5>{bookName}</h5>

            <button onClick={()=>handelMarkAsRead(id)} className="btn btn-accent m-2">Mark as Read</button>
            <button className="btn btn-info m-2">Add To WishList</button>
        </div>
    );
};

export default BookDetails;