const connection = require("./connection.js");

let orm = {
    selectAll: function(tableName, cb) {
        let queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableName], function(err, data) {
            if (err) throw err;
            cb(data);
        });
    },
    insertOne: function(tableName, colName, valueToInsert, cb) {
        let queryString = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(queryString, [tableName, colName, valueToInsert], function(err, data) {
            if (err) throw err;
            cb(data);
        });
    },
    updateOne: function(tableName, colToUpdate, newColVal, colToRefRow, refColVal, cb) {
        let queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
        let query = connection.query(queryString, [tableName, colToUpdate, newColVal, colToRefRow, refColVal], function(err, data) {
            if (err) throw err;
            cb(data);
        });
        console.log(query.sql);
    }
}

module.exports = orm;