# 99Tech Code Challenge #1 #

Note that if you fork this repository, your responses may be publicly linked to this repo.  
Please submit your application along with the solutions attached or linked.   

It is important that you minimally attempt the problems, even if you do not arrive at a working solution.

## Submission ##
You can either provide a link to an online repository, attach the solution in your application, or whichever method you prefer.
We're cool as long as we can view your solution without any pain.

### Work as Back End Role

### Problem 4
The solutions in three way are
1. Loop each item from 1 to n, and then sum them.
    In this approach it takes time to sum O(n), it can be used if the n is small
2. Use recursion
    In this approach it takes time to sum O(n), it can be used if the n is small
3. Use math formula
    This is the best approach with O(1)

### Problem 5
#### Start App
1. Clone .env.example to .env
    The .env.example contains required keys or secrets to start the application, all of these values are empty. 
    However, in this senarior, I put the value inside for quickly start app. This is not recommended in real project.
2. Set up database
    We need to install docker at this step. Go here for installation https://www.docker.com/
    After installing docker, run the command below to start the database.
    ```
    docker-compose up -d
    ```
3. Install Required Package & Init
    *Install npm package*
    ```
    npm install
    ```
    *Init database*
    ```
    npm run migration:generate
    ```
    ```
    npm run migration:run
    ```
4. Run the server.
    ```
    npm run dev
    ```
#### Test App
1. Create Task
    ```
    curl --location 'http://localhost:3000/task' \
    --header 'Content-Type: application/json' \
    --data '{
        "name": "Go For Work",
        "description": "Work 5 days a week",
        "due": "2025-02-27T16:09:19.340Z"
    }'
    ```

2. Get Task
    ```
    curl --location 'http://localhost:3000/task'
    ```

2. Get Task Detail
    ```
    curl --location 'http://localhost:3000/task/5'
    ```

3. Update Task
    ```
    curl --location --request PUT 'http://localhost:3000/task/5' \
    --header 'Content-Type: application/json' \
    --data '{
        "due": "2025-02-27T16:09:19.340Z",
        "description": "Work 5 days a weeks"
    } '
    ```

4. Delete Task
    ```
    curl --location --request DELETE 'http://localhost:3000/task/5'
    ```
    
### Problem 6: Score Board Application
#### Overview
The Score Board Application allows user to monitor the scores. It provides key features:
- User interface to monitor the score in board.
- Score board update realtime
- API for updating each user score.

#### Security
- Use JWT token for authentication.
- Limit API call update.

#### Technical
- Server Framework: NestJS
- Database: postgres
- Cached & Queue: Redis

#### Flow Chart
*Live Update Score Flow*
![Diagram Live Board](https://github.com/ThanhPhanV/code-challenge/blob/main/assets/update-score-realtime.jpg)