# Life Care API

This repo contains a Rest API that we built to interact with our front end. It contains the models to interact with the database and the routes with the endpoints that the app uses.


## Deployment

Life Care has been deployed [here](https://life-care.onrender.com/) on Render. Go check it out!


## Installation

Install dependencies with npm

```bash
  npm i
```

To run the integration tests

```bash
  npm test
```

To run the server

```bash
  npm run dev
```

    
## API Reference

| HTTP REQUEST | Endpoint | Parameter | Type     | Description    |
| :-------- | | :--------  :-------- | :------- | :---------------|
| GET |  /api/carers | `id`      | `integer` | Gets all carers | 
| GET | /api/carer/id | `carer_id` | `integer` | Give's you one carer |
| GET | /api/carer/id/patient | `carer_id` | `integer` | Gives you client assigned to that carer |
| GET | /api/patient/id/notes | `patient_id` | `integer` | Gives you notes for client |
| POST | /api/patient/id/notes | `patient_id` | `integer` | Adds note to assigned client ID |






## Authors

- [Steve](https://github.com/Hacktinium)
- [Ash](https://github.com/AshrafAKRahman)
- [Oli](https://github.com/OliLoftun)
- [Robin](https://github.com/Robin-LT)
- [Damian](https://github.com/CodingDonk)
- [Fabbi](https://github.com/fabbihas)
