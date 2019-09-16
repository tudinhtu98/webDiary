const connectionString = "postgres://zkwhbfnz:6AJGrR6vdpuC3tbm8be_Ayr0lNEPJvHo@satao.db.elephantsql.com:5432/zkwhbfnz";
const {pool, Client}  = require("pg");

var createConnection = () =>{
    return new Client({connectionString: connectionString});
}

module.exports = {
    load: sql => {
        return new Promise((resolve, reject)=> {
            var connection = createConnection();
            connection.connect();
            connection.query(sql, (err, result) => {
                if(err) reject(err)
                else resolve(result);
                connection.end();
            });

        });
    }
}
