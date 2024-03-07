import {connection as db} from "../Config/index.js"
class packages{
    fetchPackages(req, res){
        const qry = `
        SELECT packID, packName, packDescription,
        packavaiblity, packamount, packUrl, userID
        FROM Packages;
        `
        db.query(qry, (err, results)=>{
            if(err) throw err 
            res.json({
                status: res.statusCode,
                results
            })
        })
    }
    fetchProduct(req, res){
        const qry = `
        SELECT  packID, packName, packDescription,
        packavaiblity, packamount, packUrl
        FROM Packages
        WHERE PackID = ${req.params.id};
        `
        db.query(qry, (err, result)=>{
            if(err) throw err 
            res.json({
                status: res.statusCode,
                result: result[0]
            })
        })
    }
    addPackage(req, res) {
        const qry = `
        INSERT INTO Packages
        SET ?;
        `
        db.query(qry, [req.body], (err)=>{
            if(err) throw err 
            res.json({
                status: res.statusCode, 
                msg: 'New Package was added'
            })
        })
    }
    updatePackage(req, res) {
        const qry = `
        UPDATE packages
        SET ?
        WHERE PackID = ${req.params.id};
        `
        db.query(qry, [req.body], (err)=>{
            if(err) throw err
            res.json({
                status: res.statusCode, 
                msg: "The Package information has been updated."
            })
        })
    }
    deletePackage(req, res) {
        const qry = `
        DELETE FROM packages
        WHERE PackID = ${req.params.id};
        `
        db.query(qry, (err)=>{
            if(err) throw err 
            res.json({
                status: res.statusCode, 
                msg: "The Package information has been deleted."
            })
        })
    }
}
export { packages };