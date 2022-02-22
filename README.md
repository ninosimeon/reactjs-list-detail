# Full Stack Kata

- This project uses Node v14

## Starting the project

1. Install dependencies

```bash
npm install
```

2. Start the API

```bash
npm run start-be
```

3. Start the dev server

```bash
npm run start
```

4. Running the tests in watch mode

```bash
npm run test
```

# API Reference

#### Some considerations

- The API may fail anytime
- The API may take up to 3 seconds to respond

### [GET] /api/cars

> Returns a list of cars

```javascript
[
  {
    id: 1,
    make: "Mercedes-Benz",
    model: "E-Class",
    year: 1990,
    color: "#2e904d",
    thumbnail: "http://dummyimage.com/174x138.png/cc0000/ffffff",
    starred: false,
  },
  {...}
  {
    id: 25,
    make: "Suzuki",
    model: "Grand Vitara",
    year: 2005,
    color: "#f16882",
    thumbnail: "http://dummyimage.com/216x187.png/dddddd/000000",
    starred: true,
  },
];
```

### [GET] /api/cars/:carId

> Returns a car details

```javascript
{
  id:123,
  make:"Jeep",
  model:"Compass",
  year:2010,
  color:"#19b4b3",
  thumbnail:"http://dummyimage.com/101x229.png/5fa2dd/ffffff",
  starred: false,
}
```

### [PATCH] /api/cars/:carId

> Return the modified car

Body

```javascript
{
  starred: true | false;
}
```
