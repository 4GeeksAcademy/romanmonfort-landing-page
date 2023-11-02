import React from 'react'

const Card = () => {
  return (
<div className="card h-100 d-flex flex-column justify-content-center align-items-center">
  <img
    src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBhUIBwgWFhUWFRsWFhYXGBcdGRkXFRsXFhgWFR0dHSggGBolGxodITEjJTUrLi4uFyszOjMtNzQtLi8BCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIALUBFwMBIgACEQEDEQH/xAAaAAEAAwEBAQAAAAAAAAAAAAAAAwQFAgEH/8QALhABAAEEAAQFAgUFAAAAAAAAAAECAwQREhMhQQUUMVFhsfBScYGRwSIyguHx/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/APogAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACll3r/mqbGNMbmJmdrrOvWMqrPm7amIjWoqn9N6j3BJbjxDmRzK6Nb669v2dZuTVZmLVmjdVXpH8oOdlYd2Iya4qpqnW/aXc9fGevaj7+oOZycvGqicumJpmdbjssZuT5eiOCndVU6pj7++rnxWN4FX6fWFeZ4s2zxfg3+uv9A9ryM7GjmZFFM099dmjTVFVPFTPSUOdETh17/DLnw+d4VEz7AsiDLx6cmxNE+vafaWfz7+RbjC1qr0qn4gGuhyr9ONYm7V2+ru1bos24t246Q6mImNTAM+bviMW+dNunXrw99LFOXROH5mY6a9Pn01+6POjMqiYsRHDr/L506wJs3cOKbdPSOkxPv69QQ0XfEb1PNt0UxE9YifXSxhZPmbc8VOqonUw9ysm3i29z69qY7o/D7Ny1bm5dj+qqdzH8AhpvZt+7V5eqnVNWuqzixlxVPmaqddtf8VMbFzqLU0xcinrM+8zMp8PIvc+cbK/uiNxMd4BdAAAAAAAAAAAAAAAAAAUL2VdxcmZvxM0T6TER0/NfeAzLt2fEblNuzRPDE7mqUudFdjKpy6KNxEaqiPb7leegysjJ8/TGPjUT1mNzPaITZ9qu3NF+zTvg7fH39V56DLyM2Mu1yMa3MzV0n492hZt8qzFuO0aSAK+ZkxjWeLvPSI95UKsW9jWoy4qma4ndUfE9ms9BHYu0X7UXLc9J+9I82L848zjVaqjr+ceyd6DOjxWjg1yquL8Py8sTVgYFV27HWZ3r5n0aIDGxcrFoq5+RVNVc99dI+IaVjKoy6KuRM7jvMd59E+o9gGda8RqsRy82ieKO8RHV1hxXkZc5ddExGtUxP1X3oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/9k="
    className="card-img-top" alt="..."
  />
  <div className="card-body text-center">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">
      This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
    </p>
  </div>
  <div className="card-footer text-center">
    <button className="btn btn-primary">Find out more!</button>
  </div>
</div>

  )
}

export default Card