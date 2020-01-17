Welcome to my JS rest api base:

Here's how you get up and running.

1) Open up .env

2) Add your secret key (add recomendation for places to generate or how to generate one)

3) Add the port you would like the api to serve on 

4) Add your Database name,username, and password

5) Add the domain of the client and the api eg. www.domainone.com,www.domaintwo.com ( Is this redudant ? )

6) Create mongodb DB and Users Col
    In atlas:
    Go into Collections
    Click on Create Database
    In the dbName add your prefered dbName
    In the collection name 
    
7) Create index for unique users in atlas:
    In atlas:
    Go into the Users collections
    Click on indexes
    Click on create index

    In the fields input paste this:
    { "UserName": 1 }

    In the options input paste this
    { unique: true }

