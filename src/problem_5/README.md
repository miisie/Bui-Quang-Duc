# Setup
### 1. Run command below to install packages.
+ ```npm install```
### 2. Set .env file based on ex.env.
### 3. Run command below to migrate database.
+ ```npm run migration:run```
### 4. Run command below to seed users database.
+ ```npm run seed```
### 5. Start server.
+ ```npm start dev```

<br><br>

# API Documentation

## 1. Get All Users

### Endpoint
+ ```GET http://localhost:5001/user```
### Query Parameters
+ `page` (optional): The page number for pagination. Default is `1` if not provided.
+ `limit` (optional): The number of users per page. Default is `5` if not provided.
### Example Request
+ ```curl --location 'http://localhost:5001/user/?page=1&limit=1'```
### Example Response
+ 
```
{
    "data": {
        "Users:": {
            "data": [
                {
                    "id": "995955af-b8c9-4076-a5eb-d0fba9f6cf39",
                    "username": "Ashtyn_Sipes",
                    "email": "Maribel_Koch@hotmail.com",
                    "phone": "5353423"
                }
            ],
            "page": 1,
            "pageCount": 1,
            "totalCount": 17
        }
    },
    "status": 200,
    "message": ""
}
```
<br>

## 2. Get User By Id

### Endpoint
+ ```GET http://localhost:5001/user/:id```
### Path Parameters
+ `id` (required): ID of user, must be uuid.
### Example Request
+ ```curl --location 'http://localhost:5001/user/995955af-b8c9-4076-a5eb-d0fba9f6cf39'```
### Example Response
+ 
```
{
    "data": {
        "username": "Ashtyn_Sipes",
        "email": "Maribel_Koch@hotmail.com",
        "phone": "5353423"
    },
    "status": 200,
    "message": ""
}
```
<br>

## 3. Create User

### Endpoint
+ ```POST http://localhost:5001/user```
### Body Parameters
+ `username` (required): must be string.
+ `password` (required): must be string.
+ `email` (required): must be email.
+ `phone` (optional): phone must be a string number range from 7 to 11.
### Example Request
+ 
```
curl --location 'http://localhost:5001/user/' --header 'Content-Type: application/json' \--data-raw '{
    "email": "duc1@gmail.com",
    "password": "123456",
    "username": "shiba",
    "phone": "090690"
}'
```
### Example Response
+ 
```
{
    "data": {},
    "status": 200,
    "message": "Create user successfully"
}
```
<br>

## 4. Delete User By Id

### Endpoint
+ ```DELETE http://localhost:5001/user/:id```
### Path Parameters
+ `id` (required): ID of user, must be uuid.
### Example Request
+ ```curl --location --request DELETE 'http://localhost:5001/user/995955af-b8c9-4076-a5eb-d0fba9f6cf39'```
### Example Response
+ 
```
{
    "data": {},
    "status": 200,
    "message": "Delete user successfully"
}
```

<br>

## 5. Update User By Id

### Endpoint
+ ```DELETE http://localhost:5001/user/:id```
### Path Parameters
+ `id` (required): ID of user, must be uuid.
### Body Parameters
+ `username` (optional): must be string.
+ `password` (optional): must be string.
+ `email` (optional): must be email.
+ `phone` (optional): phone must be a string number range from 7 to 11.
### Example Request
+ 
```
curl --location --request PUT 'http://localhost:5001/user/132b2593-1692-4776-951b-ed279a4361bc' \
--header 'Content-Type: application/json' \
--data-raw '{
    "email": "mike@gmail.com",
    "username": "Mike"
}'
```
### Example Response
+ 
```
{
    "data": {},
    "status": 200,
    "message": "Update user successfully"
}
```