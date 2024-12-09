function calculateDeliveryTime(houses, speed) {
  // Function to calculate distance between two points
  function calculateDistance(x1, y1, x2, y2) {
      return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  }

  let totalDistance = 0;

  // Start from [0, 0]
  let currentX = 0, currentY = 0;

  for (let [x, y] of houses) {
      // Add distance from current location to the house
      totalDistance += calculateDistance(currentX, currentY, x, y);
      // Move to the house's location
      currentX = x;
      currentY = y;
  }

  // Add distance to return to [0, 0]
  totalDistance += calculateDistance(currentX, currentY, 0, 0);

  // Calculate time in hours
  const totalTime = totalDistance / speed;

  return totalTime;
}

// Example Usage
const houses = [[1, 2], [3, 4], [5, 6]];
const speed = 10; // in km/h

console.log("Total Delivery Time:", calculateDeliveryTime(houses, speed), "hours");
