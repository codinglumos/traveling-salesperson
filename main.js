// You fill in some sample weekly miles traveled in this array
const weeklyMiles = [ 200, 10, 50, 70, 62, 450 ]
totalTravel = 0

// Declare a variable to store the total. Initial value is 0.

/*
	Iterate the array of miles with a for..of loop.
	Add each mileage to the total mileage variable.
*/
for (const miles of weeklyMiles) {
	totalTravel += miles
}

averageMiles = totalTravel / weeklyMiles.length 

// Declare a new variable to store the average miles over time

// Output the average miles and the total miles to the console
console.log(`I traveled a total of ${totalTravel} and an average of ${averageMiles} so far this year!`)

//listed my monthly expenses for groceries
//total is 0 right now
//then each value in the monthlyexpense array is called cost
//then I made the total equal to adding each cost together
//the average for all of my months is then calculated like above
//Then you can console.log the statement you want as above. 