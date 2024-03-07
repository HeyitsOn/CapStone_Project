import { connection as db } from "../Config/index.js";

class WeddingBooking {
    fetchBooking(req, res) {
        const qry = `
        SELECT bookingID, brideName, groomName,
        weddingDate, venue, userID
        FROM WeddingBookings;
        `;
        db.query(qry, (err, results) => {
            if (err) throw err;
            res.json({
                status: res.statusCode,
                results
            });
        });
    }

    fetchBookingById(req, res) {
        const qry = `
        SELECT bookingID, brideName, groomName,
        weddingDate, venue
        FROM WeddingBookings
        WHERE bookingID = ${req.params.id};
        `;
        db.query(qry, (err, result) => {
            if (err) throw err;
            res.json({
                status: res.statusCode,
                result: result[0]
            });
        });
    }

    addBooking(req, res) {
        const qry = `
        INSERT INTO WeddingBookings
        SET ?;
        `;
        db.query(qry, [req.body], (err) => {
            if (err) throw err;
            res.json({
                status: res.statusCode,
                msg: 'New booking was added'
            });
        });
    }

    updateBooking(req, res) {
        const qry = `
        UPDATE WeddingBookings
        SET ?
        WHERE bookingID = ${req.params.id};
        `;
        db.query(qry, [req.body], (err) => {
            if (err) throw err;
            res.json({
                status: res.statusCode,
                msg: "The booking information has been updated."
            });
        });
    }

    deleteBooking(req, res) {
        const qry = `
        DELETE FROM WeddingBookings
        WHERE bookingID = ${req.params.id};
        `;
        db.query(qry, (err) => {
            if (err) throw err;
            res.json({
                status: res.statusCode,
                msg: "The booking information has been deleted."
            });
        });
    }
}

export { WeddingBooking };