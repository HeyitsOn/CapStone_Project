import express from 'express';
import bodyParser from 'body-parser';
import { BookingController } from "./weddingBookingController.js"; // Corrected import statement
const BookingRouter = express.Router();
const jsonParser = bodyParser.json();

// Fetch all bookings
BookingRouter.get('/', async (req, res) => {
    try {
        await BookingController.fetchBooking(req, res); // Corrected function call with await
    } catch (err) {
        res.status(res.statusCode).json({  // Corrected status code
           status: res.statusCode,
           msg: "Failed to fetch weddingBookings"
        });
    }
});

// Fetch a specific booking by ID
BookingRouter.get('/:id', async (req, res) => { // Added async
    try {
         await BookingController.fetchBooking(req, res); // Corrected function call with await
    } catch (e) {
        res.status(res.statusCode).json({  // Corrected status code
            status: res.statusCode,
             msg:"Failed to book"
        });
    }
});

// Add a new booking
BookingRouter.post('/addBooking', async (req, res) => { // Added async
    try {
         await BookingController.addBooking(req, res); // Corrected function call with await
    } catch (e) {
        res.status(res.statusCode).json({  // Corrected status code
            status: res.statusCode,
             msg:"Failed to add a new booking"
        });
    }
});

// Update a booking by ID
BookingRouter.patch('/update/:id', async (req, res) => { // Added async
    try {
         await BookingController.updateBooking(req, res); // Corrected function call with await
    } catch (e) {
        res.status(res.statusCode).json({  // Corrected status code
            status: res.statusCode,
             msg:"Failed to update a booking"
        });
    }
});

// Delete a booking by ID
BookingRouter.delete('/delete/:id', async (req, res) => { // Added async
    try {
         await BookingController.deleteBooking(req, res); // Corrected function call with await
    } catch (e) {
        res.status(res.statusCode).json({  // Corrected status code
             status: res.statusCode,
             msg: "Failed to delete booking."
            });
    }
});

export { BookingRouter };
