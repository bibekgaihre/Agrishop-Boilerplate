# Bikerent-Boilerplate

<strong>EN:</strong><br/>
A simple demo application for rabbitmq and docker learners in Typescript.
This is only intended to show demo and not to be used on production.
Tech Stacks used:<br/>

<ul>
<li>Typescript</li>
<li>Nodejs</li>
<li>NextJs</li>
<li>Mongodb</li>
<li>Websocket</li>
<li>Rabbitmq</li>
<li>Docker</li>

</ul>

<p>
The idea is simple. We have a Gateway service which acts as a door or proxy for other apis. It will contain basic authentication and authorization. It connects with other services using REST apis. Auth Service has functions related to user registration and login. Product service has functions related to product. Meanwhile it is also connected with Order and Payment service using Messaging queues. Notification Service will emit event using websocket once payment is processed using payment service. Payment and notification are also connected using message queues. 
If you want to decouple more. You can follow clean architecture/SOLID principle on each services.
</p>

<br/>
.env example:<br/>
PORT= 8081<br/>
DATABASE= mongodb://mongo:27017/bikerent-order<br/>
<br/>
<strong>How to Run:</strong> <br/>
-- Clone the project <br/>
-- On each service directory set .env file with PORT and DATABASE as variables. If you want to run database container then you need to set your service name inside hostname instead of localhost on env file.<br/>
-- Run command "docker-compose up" or run command "make run-dev"
<br/>
You can use the uploaded postman collection. For testing websocket, postman has an availability on beta.

<strong>%%Demo purpose only%%</strong>
<br/>
Feedbacks using issues and features updates using pull request are appreciated
<br/>
Thank you. :)

<strong>Currently in verge of extension to frontend</strong>

// things to fix:

<ul>
<li>Message Peristency in the queue</li>
</ul>
