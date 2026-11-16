import jsonfile from 'jsonfile';   
import moment from 'moment';
import { simpleGit } from 'simple-git';


const filePath = './data.json';
const date = moment().format();

const markCommit = (x,y ) => {
  const date = moment()
    .subtract(x, y)
    .add (1, 'seconds')
    .add(1, 'milliseconds')
    .add(1, 'microseconds')
    .format();
  

const data = {
  date: date,
  
};

jsonfile.writeFile(filePath, data, () => {
  
 simpleGit().add([filePath]).commit(date, {'--date': date}).push();
});
};