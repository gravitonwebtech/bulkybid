// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Bitpage = () => {
  const [bids, setBids] = useState([]);
  const [itemName, setItemName] = useState('');
  const [bidAmount, setBidAmount] = useState('');
  const [itemId, setItemId] = useState('');

  useEffect(() => {
    // Fetch all bids
    axios.get('http://your-api-url/bidding/')
      .then(response => setBids(response.data.data))
      .catch(error => console.error('Error fetching bids:', error));
  }, []);

  const placeBid = () => {
    // Place a bid for a specific item
    axios.post('http://your-api-url/place_bid/', {
      user_id: 1,  // replace with the actual user ID
      item: { id: itemId },
      amount: bidAmount,
    })
      .then(response => {
        console.log('Bid placed successfully:', response.data);
        // Update bids after placing a bid
        setBids([...bids, response.data.data]);
      })
      .catch(error => console.error('Error placing bid:', error));
  };

  const getHighestBid = () => {
    // Get the highest bid for a specific item
    axios.get(`http://your-api-url/get_highest_bid/${itemId}/`)
      .then(response => console.log('Highest bid:', response.data.data))
      .catch(error => console.error('Error fetching highest bid:', error));
  };

  return (
    <div className='my-40 border  border-gray-950'>
      <h1>Bidding App</h1>
      <div>
        <h2>Place a Bid</h2>
        <label>Item ID: </label>
        <input className=' border border-gray-950' type="number" value={itemId} onChange={(e) => setItemId(e.target.value)} />
        <br />
        <label>Bid Amount: </label>
        <input className=' border border-gray-950' type="number" value={bidAmount} onChange={(e) => setBidAmount(e.target.value)} />
        <br />
        <button className=' border border-gray-950' onClick={placeBid}>Place Bid</button>
      </div>

      <div>
        <h2>Get Highest Bid</h2>
        <label>Item ID: </label>
        <input className='border border-gray-950' type="number" value={itemId} onChange={(e) => setItemId(e.target.value)} />
        <br />
        <button onClick={getHighestBid}>Get Highest Bid</button>
      </div>

      <div>
        <h2>All Bids</h2>
        <ul>
          {bids.map(bid => (
            <li key={bid.id}>{`User ${bid.user_id} bid $${bid.amount} on Item ${bid.item.id}`}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Bitpage;
