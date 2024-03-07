import express from 'express';
import bodyParser from 'body-parser';
import { packages } from "../model/packages.js";

const PackageRouter = express.Router();
const Packages = new packages(); // Initialize Packages outside of route handlers

// Fetch all Packages
PackageRouter.get('/', (req, res) => {
    try {
        packages.fetchPackages(req, res);
    } catch (e) {
        console.error("Failed to retrieve Packages:", e);
        res.status(500).json({
            status: res.statusCode,
            msg: 'Failed to retrieve Packages. Please try again later.'
        });
    }
});

// Fetch a specific Package by ID
PackageRouter.get('/:id', (req, res) => {
    try {
        packages.fetchPackage(req, res);
    } catch (e) {
        console.error("Failed to retrieve a Package:", e);
        res.status(500).json({
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
        console.error("Failed to add a new Package:", e);
        res.status(500).json({
            status: res.statusCode,
            msg: 'Failed to add a new Package. Please try again later.'
        });
    }
});

// Update a Package by ID
PackageRouter.patch('/update/:id', bodyParser.json(), (req, res) => {
    try {
        packages.updatePackage(req, res);
    } catch (e) {
        console.error("Failed to update a Package:", e);
        res.status(500).json({
            status: res.statusCode,
            msg: 'Failed to update a Package. Please try again later.'
        });
    }
});

// Delete a Package by ID
PackageRouter.delete('/delete/:id', (req, res) => {
    try {
        packages.deletePackage(req, res);
    } catch (e) {
        console.error("Failed to delete a Package:", e);
        res.status(500).json({
            status: res.statusCode,
            msg: 'Failed to delete a Package. Please try again later.'
        });
    }
});

export { PackageRouter };
