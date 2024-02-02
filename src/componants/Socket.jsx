// Your React component
import React, { useState, useEffect } from 'react';

const Socket = () => {
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [message, setMessage] = useState('');
    const [socket, setSocket] = useState(null);

    useEffect(() => {
        const newSocket = new WebSocket('ws://your-django-backend/ws/some_path/');

        newSocket.onopen = () => {
            console.log('WebSocket connection opened');
        };

        newSocket.onmessage = (event) => {
            const data = JSON.parse(event.data);
            setMessage(`Message received from Django: ${data.message}`);
        };

        newSocket.onclose = () => {
            console.log('WebSocket connection closed');
        };

        setSocket(newSocket);

        return () => {
            // Close the WebSocket connection when the component unmounts
            newSocket.close();
        };
    }, []);

    const handleInputChange1 = (e) => {
        setInput1(e.target.value);
    };

    const handleInputChange2 = (e) => {
        setInput2(e.target.value);
    };

    const handleUpdate = () => {
        if (socket && socket.readyState === WebSocket.OPEN) {
            const data = {
                input1,
                input2,
            };
            socket.send(JSON.stringify(data));
        }
    };

    return (
        <div className="container mx-auto mt-8 p-4">
            <div className="mb-4">
                <label htmlFor="input1" className="block text-sm font-medium text-gray-700">
                    Input 1
                </label>
                <input
                    type="text"
                    id="input1"
                    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                    value={input1}
                    onChange={handleInputChange1}
                />
            </div>
            <div className="mb-4">
                <label htmlFor="input2" className="block text-sm font-medium text-gray-700">
                    Input 2
                </label>
                <input
                    type="text"
                    id="input2"
                    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                    value={input2}
                    onChange={handleInputChange2}
                />
            </div>
            <button
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
                onClick={handleUpdate}
            >
                Update
            </button>
            <div className="mt-4 text-gray-700">{message}</div>
        </div>
    );
};




export default Socket