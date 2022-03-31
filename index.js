import express from 'express';
import dotenv from 'dotenv';
import fs from 'fs';

dotenv.config();
const app = express();
app.use(express.json());

const PORT = process.env.PORT;

// fs.writeFile('arun.txt', 'hi there');
let today = new Date();
let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
let time = today.getHours() + '.' + today.getMinutes() + '.' + today.getSeconds();
let timeStamp = date + ' - ' + time;

let fileString = ' This file is created at ' + timeStamp;

fs.appendFile(`251we/${timeStamp}.txt`, fileString, function (err) {
	if (err) throw err;
	console.log('Saved!', timeStamp);
});

fs.readFile(`./251we/${timeStamp}.txt`, function (err, data) {
	if (err) throw err;
	console.log('reading', data.toString());
});

app.get('/', (req, res) => {
	res.send('Hi');
});

app.listen(PORT, () => console.log('Server started', PORT));
