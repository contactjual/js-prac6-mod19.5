
/** looping tecnique

1. for loop
2. while loop 
3. do while (not necessary)
4. for Of  --- array loop korar jonno
5. for in  --- object loop korar jonno
*/



const friends = ["mark", "elon", "bill", "waren"];

for (const friend of friends) {
    // console.log(friend)
}

for (i = 0; i < friends.length; i++) {
    console.log(i);
    console.log(friends[i]);
}

// by using while 

let n = 0;
while (n < friends.length) {
    console.log(friends[n]);
    n++;
}