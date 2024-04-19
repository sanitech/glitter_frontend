import React from 'react'

const EventSingleCard = ({scale, merge, zindex}) => {
  return (
    <div>
    <div class={`e-card w-96  ${scale} ${merge} ${zindex}`}>
    <section class="top"></section>
    <div class="event-info">
      <p class="price">70$</p>
      <p class="title">NY Music Festival</p>

      <div class="additional-info">
        <p class="info">
          <i class="fas fa-map-marker-alt"></i>
          Palace Theather
        </p>
        <p class="info">
          <i class="fas fa-calendar-alt"></i>
          Sat, Sep 19, 10:00 AM
        </p>
      </div>
      <button class="action">Book it</button>
    </div>
  </div>
    </div>
  )
}

export default EventSingleCard
