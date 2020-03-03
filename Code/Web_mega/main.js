import './data/magaInfo';

const http = require('http');
const fs = require('fs');
const url = require('url');
const template = require('./lib/template');


const app = http.createServer(
    function(request, response) {
        let url = request.url;
        if(request.url == '/') {
            url = 'index.html'

            const movieInfo = template.megaMovieChart(listMovieInfo);       // active module

            const templateHTML = template.templateHTML();

            response.writeHead(200);
            response.end(templateHTML);
        };
        if(request.url == '/favicon.ico'){
        return response.writeHead(404);
    };
  response.writeHead(200);
  response.end(fs.readFileSync(__dirname + url));
});
app.listen(3000);




// {/* <option value="오전 0:00">오전 0:00</option>
// <option value="오전 1:00">오전 1:00</option>
// <option value="오전 2:00">오전 2:00</option>
// <option value="오전 3:00">오전 3:00</option>
// <option value="오전 4:00">오전 4:00</option>
// <option value="오전 5:00">오전 5:00</option>
// <option value="오전 6:00">오전 6:00</option>
// <option value="오전 7:00">오전 7:00</option>
// <option value="오전 8:00">오전 8:00</option>
// <option value="오전 9:00">오전 9:00</option>
// <option value="오전 10:00">오전 10:00</option>
// <option value="오전 11:00">오전 11:00</option>
// <option value="오전 12:00">오전 12:00</option>
// <option value="오후 1:00">오후 1:00</option>
// <option value="오후 2:00">오후 2:00</option>
// <option value="오후 3:00">오후 3:00</option>
// <option value="오후 4:00">오후 4:00</option>
// <option value="오후 5:00">오후 5:00</option>
// <option value="오후 6:00">오후 6:00</option>
// <option value="오후 7:00">오후 7:00</option>
// <option value="오후 8:00">오후 8:00</option>
// <option value="오후 9:00">오후 9:00</option>
// <option value="오후 10:00">오후 10:00</option>
// <option value="오후 11:00">오후 11:00</option>
// <option value="오후 12:00">오후 12:00</option> */}




