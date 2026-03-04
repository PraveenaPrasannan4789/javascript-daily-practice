# ✅ map() in JavaScript
👉 What is map()?

map() is used to transform each element of an array and return a new array.

## It does NOT modify original array

## Always returns a same-length array



# ✅ filter() — Conditional Selection

👉 Returns a new array with items that match a condition
👉 Does NOT modify original array

🧠 Think:

“Give me items that satisfy a rule”



# ✅ reduce() — Aggregation (Most Powerful)

👉 Reduces array to single value
👉 Used for totals, counts, grouping

🧠 Think:

“Combine everything into ONE result”


# forEach() – For Iteration

👉 Used to loop through an array.
👉 It does not return a new array.
👉 Mainly used for printing, logging, side-effects.
always return undefined if we try to return.


# find() – Locate First Matching Element

👉 Returns first element that matches condition
👉 Stops after finding first match
👉 Returns undefined if nothing found


# some() – At Least One Matches

👉 Returns true if any one element satisfies condition
👉 Returns false if none match


# every() – All Must Match

👉 Returns true if all elements satisfy condition
👉 Returns false if even one fails


# sort() – Sorting Arrays

By default, sort() converts elements to strings

So numeric sorting needs a compare function

## map() returns something
const result = [1,2,3].map(x => x + 1);
console.log(result); // [2,3,4]
## forEach() returns undefined
const result = [1,2,3].forEach(x => x + 1);
console.log(result); // undefined 