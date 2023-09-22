  
// /**
//  * To run this file in Gitpod, use the 
//  * command node filter.js in the terminal
//  */


// // Simple Filtering
// const people = [
//   {
//     name: 'Michael',
//     age: 23,
//   },
//   {
//     name: 'Lianna',
//     age: 16,
//   },
//   {
//     name: 'Paul',
//     age: 18,
//   },
// ];

// let oldEnough = people.filter(person => person.age >= 21);
// console.log(oldEnough)

// let Paul = people.filter(person => person.name === "Paul")
// console.log(Paul)

// // Complex Filtering
// const students = [
//   {
//     id: 1,
//     name: 'Mark',
//     profession: 'Developer',
//     skills: [
//       { name: 'javascript', yrsExperience: 1 },
//       { name: 'html', yrsExperience: 5 },
//       { name: 'css', yrsExperience: 3 },
//     ]
//   },
//   {
//     id: 2,
//     name: 'Ariel',
//     profession: 'Developer',
//     skills: [
//       { name: 'javascript', yrsExperience: 0 },
//       { name: 'html', yrsExperience: 4 },
//       { name: 'css', yrsExperience: 2 },
//     ]
//   },
//   {
//     id: 3,
//     name: 'Jason',
//     profession: 'Designer',
//     skills: [
//       { name: 'javascript', yrsExperience: 1 },
//       { name: 'html', yrsExperience: 1 },
//       { name: 'css', yrsExperience: 5 },
//     ]
//   },
// ];

// const yearsOfSkill = skill => skill.yrsExperience >= 5;
// const hasStrongSkills = student => student.skills.filter(yearsOfSkill). length > 0;
// let candidates = students.filter(hasStrongSkills)
// candidates = candidates.map(candidates => candidates.name)

//  console.log(candidates)

let students = [
    {
        name: 'John',
        subjects: ['maths', 'english', 'cad'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Emily',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 80, art: 95},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 84, maths: 97, art: 95},
    },
    {
        name: 'Fran',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 67, english: 87, art: 95},
    }
];

const result = r => r.maths >= 90

const topMaths = students.filter(student => student.results.maths >= 90)

console.log(topMaths)