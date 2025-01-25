# Specification

## 1. Update User Score:

+ Endpoint to handle the API call triggered when a user completes an action.

+ Verifies the user's identity and authorization before updating the score.

+ Updates the user's score in the database.

## 2. Fetch Top 10 Scores:

+ Endpoint to retrieve the top 10 users’ scores for display on the scoreboard.

+ Ensures that data is fetched and delivered efficiently.

## 3. Real-Time Score Updates:

+ Broadcasts updates to the scoreboard in real-time using WebSocket.

## 4. Prevent Unauthorized Access:

+ Implements security mechanisms to ensure that only authorized users can update their scores (such as JWT).

<br>

# Improvement

+ 1. Implement caching for the top 10 scores to reduce database call.
+ 2. Add a feature to notify users when they enter or drop out of the top 10 scores.
+ 3. Add filter to leaderboard by custom criteria.
+ 4. Validate action to ensure it corresponds to a legitimate action performed by the user.


