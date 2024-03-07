import express from 'express';
import bodyParser from 'body-parser';
import { packages } from "../Model/package.js";

const PackageRouter = express.Router();
// const Packages = new packages(); // Initialize Packages outside of route handlers

// Fetch all Packages
PackageRouter.get('/', (req, res) => {
    try {
        packages.fetchPackages(req, res);
    } catch (e) {
        res.json({
            status: res.statusCode,
            msg: 'Failed to retrieve Packages. Please try again later.'
        });
    }
});

// Fetch a specific Package by ID
PackageRouter.get('/:id', (req, res) =>{
    try {
        packages.fetchPackage(req, res);
    } catch (e) {
        res.json({
            status: res.statusCode,
            msg: 'Failed to retrieve a Package. Please try again later.'
        });
    }
});

// Add a new Package
PackageRouter.post('/addPackage', bodyParser.json(), (req, res) => {
    try {
        packages.addPackage(req, res);
    } catch (e) {
        res.json({
            status: res.statusCode,
            msg: 'Failed to add a new Package. Please try again later.'
        });
    }
});

// Update a Package by ID
PackageRouter.update('/update/:id', (req, res) => {
    try {
        packages.deletePackage(req, res)
    } catch (e) {
      res.json ({
        status: res.statusCode,
        msg:"failed to update package"

      })
    }

    })

// Delete a Package by ID
packageRouter.delete('/delete/:id', (req, res) => {
    try {
        packages.deletePackage(req, res)
    } catch (e) {
      res.json ({
        status: res.statusCode,
        msg:"failed to delete package"

      })
    }

    })
export { PackageRouter };
