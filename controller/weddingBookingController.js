import express from 'express';
import bodyParser from 'body-parser';
import { weddingBooking } from "/weddingBookingController";

const BookingRouter = express.Router();
const jsonParser = bodyParser.json();

// Fetch all bookings
BookingRouter.get('/', async (req, res) => {
    try {
        const bookings = await BookingController.fetchAll();
        res.json(bookings);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Fetch a specific booking by ID
BookingRouter.get('/:id', async (req, res) => {
    try {
        const booking = await BookingController.fetchById(req.params.id);
        res.json(booking);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Add a new booking
BookingRouter.post('/addBooking', jsonParser, async (req, res) => {
    try {
        const newBooking = await BookingController.addBooking(req.body);
        res.status(201).json(newBooking);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Update a booking by ID
BookingRouter.patch('/update/:id', jsonParser, async (req, res) => {
    try {
        const updatedBooking = await BookingController.updateBooking(req.params.id, req.body);
        res.json(updatedBooking);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete a booking by ID
BookingRouter.delete('/delete/:id', async (req, res) => {
    try {
        await BookingController.deleteBooking(req.params.id);
        res.json({ message: 'Booking deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

export { BookingRouter };
