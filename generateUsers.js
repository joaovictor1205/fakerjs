const faker = require('faker');
const fs = require('fs');

function generateUsers(){
    
    let users = []

    for(let id = 0; id <= 100; id++){

        let firstName = faker.name.firstName();
        let lastName = faker.name.lastName();
        let email = faker.internet.email();
        let admissionDate = faker.date.past();

        users.push({

            "id": id,
            "first_name" : firstName,
            "last_name": lastName,
            "e-mail": email,
            "admission_date": admissionDate

        });

    }

    return { "data": users }

};

let dataObj = generateUsers();

fs.writeFileSync('data.json', JSON.stringify(dataObj, null, '\t'));