import React, { useState } from 'react';
import axios from 'axios';

const CarpoolCard = ({ carpool, onEmpty }) => {
  const [capacity, setCapacity] = useState(carpool.capacity);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [isBooked, setIsBooked] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleBookNow = async (id, event) => {
    event.preventDefault();
    try {
      const response = await axios.put(`${import.meta.env.VITE_SERVER_URL}/api/carpool/book`, {id});
      console.log(response.data);
      const newCapacity = capacity - 1;
      setCapacity(newCapacity);
      if (newCapacity === 0) {
        onEmpty(id);
      }
      setBookingSuccess(true);
      setIsBooked(true);
      setSuccessMessage('Booked with success!');
      setTimeout(() => setBookingSuccess(false), 5000);
    } catch (error) {
      console.error('Error booking carpool:', error);
    }
  }

  const handleCancelBook = async (id, event) => {
    event.preventDefault();
    try {
      const response = await axios.put(`${import.meta.env.VITE_SERVER_URL}/api/carpool/cancel`, {id});
      console.log(response.data);
      const newCapacity = capacity + 1;
      setCapacity(newCapacity);
      setBookingSuccess(true);
      setIsBooked(false);
      setSuccessMessage('Canceled with success!');
      setTimeout(() => setBookingSuccess(false), 5000);
    } catch (error) {
      console.error('Error cancelling carpool:', error);
    }
  }

  return (
    capacity > 0 ? (
      <div className="card">
      {bookingSuccess && <div className="alert alert-success" role="alert">{successMessage}</div>}
        <div className="card-body">
        <h5 className="card-title">{carpool.depart}</h5>
        <h5 className="card-title">{carpool.destination}</h5>
          <p className="card-text">{`Schedule: ${carpool.schedule}`}</p>
          <p className="card-text">{`capacity: ${capacity}`}</p>
          <p className="card-text">{`Price: ${carpool.price}`}</p>
          <a href="#" className={isBooked ? "btn btn-danger" : "btn btn-primary"} onClick={(event) => isBooked ? handleCancelBook(carpool.id, event) : handleBookNow(carpool.id, event)}>{isBooked ? " Cancel " : "Book Now"}</a>
        </div>
      </div>
    ) : null
  )
};

export default CarpoolCard;