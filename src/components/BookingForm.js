import React from 'react'
import { useState } from 'react';

const BookingForm = () => {
  const [date, setDate] = useState("");
  const [times, setTimes] = useState("");
  const [guest, setGuest] = useState("");
  const [occasion, setOccasion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.submitForm(e);
  }
  const handleChange = (e) => {
    setDate(e);
    props.dispatch(e);

  }
  return (
    <header>
      <section>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <div>
              <label htmlFor='book-date'>Choose Date</label>
              <input type="date" id='book-date' value={date} onChange={(e) => handleChange(e.target.value)} required />
            </div>
            {/* time selection */}
              <div>
                <label htmlFor='book-time'>Choose Time:</label>
                <select id="book-time" value={times} onChange={(e)=>setTimes(e.target.value)}>
                  <option value="">Select a Time</option>
                  {props.availableTimes.availableTimes.map(availableTimes => {return <option key={availableTimes}>{availableTimes}</option>})}
                </select>
              </div>

              {/* number of guest */}
              <div>
              <label htmlFor='book-guests'>Number of Guests:</label>
              <input id='book-guests' min="1" value={guest} onChange={(e) => setGuest(e.target.value)} />
              </div>

              {/* occasion field */}
              <div>
              <label htmlFor='book-occasion'>Occasion:</label>
              <select id="book-occasion" key={occasion} value={occasion} onChange={e=>setOccasion(e.target.value)}>
                <option>Birthday</option>
                <option >Anniversary</option>
              </select>
              </div>
              {/* submit button */}
              <div className="btnReceive">
                <input aria-label='On Click' type='submit' value={"Make Your Reservation"} />
              </div>
          </fieldset>

        </form>
      </section>
    </header>
  )
}

export default BookingForm