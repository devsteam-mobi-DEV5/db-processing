const fs = require('fs');


// const filter1 = JSON.parse(fs.readFileSync('./poems_poets/index.json', 'utf8'));


var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./recipes.db', (err ,res) => {
    // console.log(err);
    // console.log(res);


    const content = fs.readFileSync(`./recipes/quotes.txt`, 'utf8')
                        .split('\n')
                        .filter(str => !str.includes('---'))
                        .forEach((str, i) => {
                            const parts = str.split(':');

                            if(parts.length === 3){
                                db.run('INSERT INTO content (filter1, text) VALUES (?, ?)', [parseInt(parts[1]), parts[2].trim()] ,(err, res) => {
                                    console.log(err);
                                    console.log(res);
                                });
                            }


                        });

    // console.log(content);


    db.all('SELECT * from filter1 ', [], (err0, filter) => {
        // console.log(filter);



        // content.forEach(element => {
        //     db.run('INSERT INTO content (title, text, filter1) VALUES (?, ?, ?)', [element.title, element.poem, filter[0].id] ,(err, res) => {
        //         console.log(err);
        //         console.log(res);
        //     });
        // });

    });




});



 
