# graphql-playlist
Course files initially from The Net Ninja and his wonderful GraphQL Tutorial. 

GraphQL is a new technology that I've been using in a professional environment the past few weeks, so I thought I'd code my own demonstration to use and to help further my understanding.

# Set Up 

In your terminal, 
- Run `npm install ` 
- Run `npm install graphql express-grahql`
- Run `npm install lodash`
- Run `npm install nodemon` (optional - watches for changes so you don't have to reboot your server for speedier development)

- cd server
- node app / nodemon app 


# Mock Data

There is Mock data about dinosaurs to test the query using the Graphiql tool, up to an ID of 8.

The Port is currently set to '4000', so to use the tool go to

- [http://localhost:4000/graphql]

# Query Structure 

The basic query structure is as follows; 
```
{
  dino(id: 1){
    name
    diet
    temperament
    info {
      temporalRange
      size
    }
  }
}
```

Take out any information you don't wish to see, such as 'diet', 'size', etc. 

