const { connectToDatabase } = require('../../lib/mongodb');
const ObjectId = require('mongodb').ObjectId;
import { getSession } from "next-auth/react"

export default async function handler(req, res) {
    // console.log("YearData");
    // console.log(req);
    const session = await getSession({ req })
    console.log(session);
    // switch the methods
    switch (req.method) {
        case 'GET': {
            return getUser(req, res);
        }

        case 'POST': {
            return addUser(req, res);
        }

        case 'PUT': {
            return updateUser(req, res);
        }

        case 'DELETE': {
            return deleteUser(req, res);
        }
    }
}

function addUser(req, res) {
    return connectToDatabase('users')
        .then(({ client, db }) => {
            // get the data from the request
            const data = req.body;

            // insert the data
            return db.collection('users').insertOne(data)
                .then(() => {
                    // close the connection
                    client.close();

                    // return the data
                    return res.json(data);
                });
        });
}

function getUser(req, res) {
    // if id get one user
    if (req.query.id) {
        return connectToDatabase('users')
            .then(({ client, db }) => {
                // get the id from the request
                const id = req.query.id;

                // get the data
                return db.collection('users').findOne({ _id: ObjectId(id) })
                    .then(data => {
                        // close the connection
                        client.close();

                        // return the data
                        return res.json(data);
                    });
            });
    }
    // if no id get all users
    else {
        return connectToDatabase('users')
            .then(({ client, db }) => {
                // get the data
                return db.collection('users').find().toArray()
                    .then(data => {
                        // close the connection
                        client.close();

                        // return the data
                        return res.json(data);
                    });
            });
    }
}

function updateUser(req, res) {
    //check if current user is this user then update the user otherwise return error

    // console.log(userID);
    return connectToDatabase('users')
        .then(({ client, db }) => {
            // get the id from the request
            const id = req.query.id;

            // get the data from the request
            const data = req.body;

            // update the data
            return db.collection('users').updateOne({ _id: ObjectId(id) }, { $set: data })
                .then(() => {
                    // close the connection
                    client.close();

                    // return the data
                    return res.json(data);
                });
        }
        );



}