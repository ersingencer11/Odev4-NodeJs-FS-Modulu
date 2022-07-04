const fs = require('fs')

/*fs.writeFile('employee.json' , '{"name": "Employee 1 Name", "salary": 2000}' ,  (err) => {
    if(err) console.log(err)
})*/

fs.readFile('employee.json', 'utf-8', (err, data) => {
    if(err) console.log(err)
    console.log(data)
})

fs.appendFile('employee.json', '\nEmployee2', (err) => {
    if(err) console.log(err)  
})

fs.unlink('employee.json', (err) => {
    if(err) console.log(err)
})