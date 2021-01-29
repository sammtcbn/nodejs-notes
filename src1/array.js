var students = [];
students[0] = [1,2,3];
students[1] = [4,5,6];
students[2] = [7,8,9];
console.log("students.length = " + students.length);

for (var i=0; i<students.length; i++)
{
    for (var j=0; j<students[i].length; j++)
    {
        console.log (students[i][j]);
    }
}

/* Result:

$ node array.js
students.length = 3
1
2
3
4
5
6
7
8
9

*/
