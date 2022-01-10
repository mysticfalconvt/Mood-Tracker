const { connectToDatabase } = require('../../lib/mongodb');
const ObjectId = require('mongodb').ObjectId;

export default async function handler(req, res) {
    console.log("YearData");
    console.log(req);

    // switch the methods
    switch (req.method) {
        case 'GET': {
            return getYearData(req, res);
        }

        case 'POST': {
            return addYearData(req, res);
        }

        case 'PUT': {
            return updateYearData(req, res);
        }

        case 'DELETE': {
            return deleteYearData(req, res);
        }
    }
}