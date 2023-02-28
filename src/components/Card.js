import React from "react";

const Card = ({ contests }) => {
  function formatDate(str) {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2),
      hours = ("0" + date.getHours()).slice(-2),
      minutes = ("0" + date.getMinutes()).slice(-2),
      seconds = ("0" + date.getSeconds()).slice(-2),
      year = date.getFullYear();
    return `${year}/${mnth}/${day}, ${hours}:${minutes}:${seconds}`;
  }

  return (
    <>
      {contests.map((contest) => {
        const {
          name,
          start_time,
          end_time,
          duration,
          url,
          site,
          status
        } = contest;
        return (
          <div className="card">
            <h2>{name}</h2>
            <div className="card-item">
              <span className="title">Starting Time: </span>
              {formatDate(start_time)}
            </div>
            <div className="card-item">
              <span className="title">End Time: </span>
              {formatDate(end_time)}
            </div>
            <div className="card-item">
              <span className="title">Duration: </span>
              {duration}
            </div>
            <div className="card-status">
              <div className="card-status-details">
                <p className="title">Website</p>
                <a href={url}>{site}</a>
              </div>
              <div>
                <p className="title">Status</p>
                <p>{status}</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Card;
