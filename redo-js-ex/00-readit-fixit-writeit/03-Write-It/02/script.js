
let movies = [
    'The Doctor',
    'Cruella',
    'Non',
    'Mais oui',
    'Mais non',
];

/*      No effect
const wrapWithTag = (content, tagname) => {
    return`<${tagname}>${content}</${tagname}>`;
};
*/


document.write("These are my movies:");

//to lower case
movies = movies.map(function(x){ return x.toLowerCase(); })

document.write('<ul>');

//to reverse

for (let i = 0; i < movies.length; i++) {
    document.write(`<li>${movies.reverse()[i]}</li>`);
};

document.write('</ul>');


//prev solution
// movies.forEach(movies=> document.write(wrapWithTag(movies, 'li')));