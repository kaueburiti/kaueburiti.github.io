import fs from 'fs-extra';
import cheerio from 'cheerio';

fs.readFile('app/index.html', 'utf8', (err, markup) => {
  if (err) {
    return console.log(err);
  }

  const $ = cheerio.load(markup);
  $('head').prepend('');

  fs.writeFile('public/index.html', $.html(), 'utf8', function (err) {
    if (err) {
      return console.log(err);
    }
  });
});
