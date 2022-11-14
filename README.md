# concerts-wishlist
TypeScipt POC for Driven Bootcamp. Back-end of an app that allows music fans organize bands they want to see live or already did it. 

# about
<h3>Features</h3>

  * Add a band you saw live or want to see
  * Bands you already saw live must contain date and city when and where the concert happened and your rate (1 - 10) of it.
  * Update a concert you initially added as unwatched to watched
  * A user name must be provided for each band added
  * Delete a existent band concert
  * List all bands provided by a user

<h3>Motivation</h3>

  The project is initially a introduction and way to trainning Typescript, but, considering my passion for music and live concerts, is the beggining of a future bigger 
  project that can help people organize their dreams about live concerts and save the good memories about the ones wich are now reality.

<h3>Technologies</h3>

  Typescript, Node.js, Express, Joi and PostgreSQL.

<h3>How to run</h3>

  1. Clone this repository
  2. Install all dependecies
  
       ```bash
           npm i
        ```
        
  3. Configure the .env file using the .env.example file
  4. Run app
  
      ```bash
        npx nodemon src/index.ts
      ```
  
  # Documentation (routes)
<h6>1. List all concerts </h6>
  
  GET: /concerts
  
<h6>2. List all concerts from a user by its username </h6>
  
  GET: /concerts/?user=userName
  
<h6>3. Add a unwatched or watched concert</h6>
  
  POST: /concerts
  
    {
      "userName": "John",
      "bandName": "Coldplay",
      "alreadyWatched": false
    }
    
    
    or (if "already watched" = true)
    
    
    {
      "userName": "John",
      "bandName": "Coldplay",
      "alreadyWatched": false,
      "concertDate": "03/05/2022",
      "concertCity": "Dublin",
      "concertRate": 9
    }
    
<h6>4. Update a unwatched concert to watched</h6>
    
   PUT: /concerts/concertId
    
     { 
      "alreadyWatched": true,
      "concertDate": "08/05/2020",
      "concertCity": "Natal",
      "concertRate": 8
    }
   
 <h6>5. Delete a concert by its id</h6>
   
   DELETE: /concerts/concertId
