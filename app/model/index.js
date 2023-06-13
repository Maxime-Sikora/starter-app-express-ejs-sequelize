// Pour définir les associations de tables

// Un books peut avoir un author
// Un author peut avoir des books

const Author = require('./authorExample');
const Books = require('./booksExample')

Author.hasMany(Books, {
    foreignKey: 'author_id',
    as: 'books',
});

Books.belongsTo(Author, {
    foreignKey: 'author_id',
    as: 'author',
});

module.exports = { Author, Books };


