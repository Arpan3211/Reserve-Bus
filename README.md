
# Reserve Bus

It's reserve bus project give by the almabetter ,
in this project user can see the available buses and able to book the ticket for available with the seats selection and also add a face payment feature to get the realtime payment booking exprience 



## Deployment

click on the line to see the project

Frontend host on netlify.com

- https://busreserveproject.netlify.app/

Backend host on render.com

- https://reservebus-dti2.onrender.com


## Tech Stack

**Frontend:** React, bootstrap 

**Backend:** Node, Express , mongoose

**Database:** mongoDb 


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

**Backend env file:**

`API_KEY`
```base
MONGO_URL: "your mongodb connection string"
```

**Frontend  env file:**

`API_KEY`
```base
REACT_APP_API = http://localhost:8080
```


## API Documentation

#### Get all Trips

```http
  GET /api/v1/gettrips
```

#### Get Trips by Date

```http
  GET /api/v1/tripsbydate
```

| Parameter | Type     | Description                                           |
| :-------- | :------- | :---------------------------------------------------- |
| `date`    | `Number` | **Required**. Date of trip in timestamp to fetch trip |

#### Get Trips by query

```http
  GET /api/v1/tripsbyquery
```

| Parameter | Type     | Description                                    |
| :-------- | :------- | :--------------------------------------------- |
| `query`   | `string` | add query to fetch trip according to your need |

#### Post Trips

```http
  Post /api/v1/posttrips
```

| Body   | Type   | Description                         |
| :----- | :----- | :---------------------------------- |
| `data` | `json` | add the data to post it in database |

#### Booking Tickets by post

```http
  Post /api/v1/bookingticket
```

| Body   | Type   | Description                                    |
| :----- | :----- | :--------------------------------------------- |
| `data` | `json` | add the data to post booked ticket in database |