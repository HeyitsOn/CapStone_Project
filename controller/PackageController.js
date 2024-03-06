import express from 'express';
import bodyParser from 'body-parser';
import { Packages } from "../model/Packages.js";

const PackageRouter = express.Router();

// Fetch all Packages
PackageRouter.get('/', (req, res) => {
    try {
        const packages = new Packages(); // Create an instance of the Packages class
        packages.fetchPackages(req, res);
    } catch (e) {
        res.json({
            status: res.statusCode,
            msg: 'Failed to retrieve Packages'
        });
    }
});

PackageRouter.get('/:id', (req, res) => {
    try {
        const packages = new Packages(); // Create an instance of the Packages class
        packages.fetchPackage(req, res);
    } catch (e) {
        res.json({
            status: res.statusCode,
            msg: 'Failed to retrieve a Package'
        });
    }
});

PackageRouter.post('/addPackages', bodyParser.json(), (req, res) => {
    try {
        const packages = new Packages(); // Create an instance of the Packages class
        packages.addPackage(req, res);
    } catch (e) {
        res.json({
            status: res.statusCode,
            msg: 'Failed to add a new Package.'
        });
    }
});

PackageRouter.patch('/update/:id', bodyParser.json(), (req, res) => {
    try {
        const packages = new Packages(); // Create an instance of the Packages class
        packages.updatePackage(req, res);
    } catch (e) {
        res.json({
            status: res.statusCode,
            msg: "Failed to update a Package."
        });
    }
});

PackageRouter.delete('/delete/:id', (req, res) => {
    try {
        const packages = new Packages(); // Create an instance of the Packages class
        packages.deletePackage(req, res);
    } catch (e) {
        res.json({
            status: res.statusCode,
            msg: "Failed to delete a Package."
        });
    }
});

export {
    PackageRouter
};
