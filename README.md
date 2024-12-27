# final-lab-exam
Tourism Management System API
This is a backend API for a tourism management system built using Node.js, Express.js, and MongoDB. It allows you to manage tourist attractions, visitors, and reviews. It supports basic CRUD operations for attractions, visitors, and reviews.
Features

    - Attractions
      - Create a new attraction
      - Retrieve a list of all attractions
      - Retrieve an attraction by ID
      - Update an attraction by ID
      - Delete an attraction by ID
      - Get top-rated attractions

    - Visitors
      - Create a new visitor
      - Retrieve all visitors
      - Retrieve a visitor by ID
      - Update a visitor by ID
      - Delete a visitor by ID

    - Reviews
      - Create a review for an attraction
      - Retrieve all reviews for an attraction
      - Retrieve reviews by visitor ID
      - Delete a review by ID
    
Prerequisites
Before running this project, ensure you have the following installed:
- Node.js (version 14 or above)
- MongoDB (either locally or use MongoDB Atlas)
Installation

    1. Clone the repository:
       git clone https://github.com/yourusername/tourism-management-system.git

    2. Navigate to the project folder:
       cd tourism-management-system

    3. Install dependencies:
       npm install

    4. Create a .env file in the root of the project and add the following:
       MONGODB_URI=mongodb://localhost:27017/tourism_management
       PORT=3000

    5. Run the application:
       npm start

    The API will be running at http://localhost:3000.
    
API Endpoints
Attractions

    1. GET /attractions
       Retrieve all attractions.
       Response: List of all attractions.

    2. POST /attractions
       Create a new attraction.
       Request Body (JSON):
       {
         "name": "Attraction 1",
         "location": "Location A",
         "entryFee": 10,
         "rating": 4.5
       }
       Response: Created attraction.

    3. GET /attractions/:id
       Retrieve an attraction by ID.
       Response: Single attraction object.

    4. PUT /attractions/:id
       Update an attraction by ID.
       Request Body (JSON):
       {
         "name": "Updated Attraction",
         "location": "New Location",
         "entryFee": 15,
         "rating": 4.7
       }
       Response: Updated attraction.

    5. DELETE /attractions/:id
       Delete an attraction by ID.
       Response: Confirmation of deletion.

    6. GET /attractions/top-rated
       Get top-rated attractions based on their rating.
    
Visitors

    1. POST /visitors
       Create a new visitor.
       Request Body (JSON):
       {
         "name": "John Doe",
         "email": "john.doe@example.com",
         "visitedAttractions": ["676e7f9d7154ae70545804b2"]
       }
       Response: Created visitor.

    2. GET /visitors
       Retrieve all visitors.
       Response: List of all visitors.

    3. GET /visitors/:id
       Retrieve a visitor by ID.
       Response: Single visitor object.

    4. PUT /visitors/:id
       Update a visitor by ID.
       Request Body (JSON):
       {
         "name": "Johnathan Doe",
         "email": "johnathan.doe@example.com",
         "visitedAttractions": ["676e7f9d7154ae70545804b2", "another_attraction_id"]
       }
       Response: Updated visitor.

    5. DELETE /visitors/:id
       Delete a visitor by ID.
       Response: Confirmation of deletion.
    
Reviews

    1. POST /reviews
       Create a new review for an attraction.
       Request Body (JSON):
       {
         "attractionId": "676e7f9d7154ae70545804b2",
         "visitorId": "visitor_id_here",
         "rating": 4,
         "score": 4,
         "comment": "Great place to visit!"
       }
       Response: Created review.

    2. GET /reviews/:attractionId
       Retrieve all reviews for an attraction.
       Response: List of reviews for the attraction.

    3. GET /reviews/visitor/:visitorId
       Retrieve all reviews posted by a specific visitor.
       Response: List of reviews posted by the visitor.

    4. DELETE /reviews/:id
       Delete a review by ID.
       Response: Confirmation of deletion.
    
Testing with Postman

    1. Create Postman Collection:
       - Open Postman and create a new collection for this API.
       - Add requests for each endpoint (GET, POST, PUT, DELETE) with the correct method and URL.
       - Ensure that for POST and PUT requests, you include the appropriate JSON body.

    2. Testing:
       - For GET requests, check the responses for all attractions, visitors, and reviews.
       - For POST requests, verify that the data is being saved to the database.
       - For PUT and DELETE requests, verify that the updates and deletions are reflected.
    
Technologies Used
- Node.js: JavaScript runtime for building the backend.
- Express.js: Web framework for building the API.
- MongoDB: NoSQL database for storing data.
- Mongoose: ODM for MongoDB to model the data.
License
This project is licensed under the MIT License - see the LICENSE file for details.
