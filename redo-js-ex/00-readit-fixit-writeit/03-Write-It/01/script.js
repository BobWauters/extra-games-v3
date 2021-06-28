
let movies = [
    'The Doctor',
    'Cruella',
    'non',
    'mais oui',
    'mais non',
];

const wrapWithTag = (content, tagname) => {
    return`<${tagname}>${content}</${tagname}>`;
};

document.write("These are my movies");
document.write('<ul>');
movies.forEach(movies=> document.write(wrapWithTag(movies, 'li')));
document.write('</ul>');



/*      PREVIOUS EXAMPLE FOR HOW TO MAKE AN UL LIST
const wrapWithTag = (content, tagname) => {
  return`<${tagname}>${content}</${tagname}>`;
};

document.write(`<ol>`);
tvshows.forEach(tvshows => document.write(wrapWithTag(tvshows, `li`)));
document.write(`</ol>`);
*/