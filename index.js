
var trashMonster = 'Oscar'

let bird = 'big bird'

const sesameArray = [bird, trashMonster, 'Snufflufagus', 'Bert', 'Ernie']
const empty = []
const pi = 3.149435979735987235

function sesameStreet(data){
  if(data.length == 0){
    return 'there\'s nothing in your database'
  }
  for(let i = 0; i < data.length; i++){
    if(data[i] == 'hi'){
      return 'trash is great'
    }
    console.log(data[i])
    return 'trash is gross'
  }
  
}

sesameStreet(empty)