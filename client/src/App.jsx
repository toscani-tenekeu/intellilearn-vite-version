import React, { useState } from 'react';
import './App.css';

function App() {
    const [comment, setComment] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:3001/comments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text: comment }),
        });
        const data = await response.json();
        alert(data.message);
        setComment(''); // Clear the input after submission
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
                <h2 className="text-2xl mb-4">Leave a Comment</h2>
                <input
                    type="text"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Your comment"
                    className="border border-gray-300 p-2 w-full mb-4"
                />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default App;
