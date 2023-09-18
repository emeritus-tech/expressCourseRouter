AWS Course Router

The AWS Course Router is a Node.js application built with Express.js that takes a URL of a specific format, processes query parameters, calls external APIs to find matching courses based on the provided parameters, and reroutes the user to the launch URL of the matching course.
Prerequisites

Before you can run this application, make sure you have the following installed:

    Node.js
    npm

Installation

    Clone this repository to your local machine:


```git clone <repository-url>```

Navigate to the project directory:

```cd aws-course-router```

Install the project dependencies:

```npm install```

Start the Express server:

```npm start```

The server will run on port 3000 by default. You can change the port by setting the PORT environment variable.

Usage
Accessing the Application

To use the AWS Course Router, access it through a web browser with the following URL format:

```http://localhost:3000/?courseId=<courseId>&courseDisplayName=<courseDisplayName>```

    Replace <courseId> with the ID of the course you want to find.
    Replace <courseDisplayName> with the display name of the course you want to find.

Application Workflow

    When you access the application URL, it will display a message, "Routing to AWS Course, this may take a few seconds..."

    The application will then make an API request to fetch an authentication token by calling the /gettoken endpoint of the Express server.

    After obtaining the token, the application will make another API request to the Express server by calling the /getlearningobjects endpoint. This request will include the token in the Authorization header.

    The Express server, in turn, makes an external API request to find learning objects that match the provided query parameters.

    The server responds with a list of matching learning objects to the application.

    The application will search for the learning object that matches the provided courseId or courseDisplayName. If a match is found, it will redirect the user to the launch URL of the course.

    If multiple matching items are found, it will display a warning message indicating multiple matches.

    If no matching item is found, it will display an error message suggesting that the user contacts the course support team.

Configuration

    You can configure the port on which the Express server runs by setting the PORT environment variable.

    If you need to modify the API endpoints, client IDs, client secrets, or API keys used in the application, update the corresponding values in the Express app's code (app.js) and the HTML file (public/index.html).

    If the response format changes from the AWS side, then code will need to be updated in the index.html script where we handle the responses from either endpoint. If AWS changes their API keys, client_id, or client_secret, then that will need to be updated in the app.js file.