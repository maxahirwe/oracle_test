const oracledb = require('oracledb');
const db = require('./database');
console.log(process.env.DB_USER);

async function run() {
	let connection;

	console.log(db);
	console.log({ db });

	try {
		connection = await oracledb.getConnection(db);

		console.log('Successfully connected to Oracle Database');

		// Create a table

		// await connection.execute(`begin
		//                         execute immediate 'drop table todoitem';
		//                         exception when others then if sqlcode <> -942 then raise; end if;
		//                       end;`);

		// await connection.execute(`create table todoitem (
		//                         id number generated always as identity,
		//                         description varchar2(4000),
		//                         creation_ts timestamp with time zone default current_timestamp,
		//                         done number(1,0),
		//                         primary key (id))`);

		// Insert some data

		// const sql = `insert into todoitem (description, done) values(:1, :2)`;

		// const rows = [
		// 	['Task 1', 0],
		// 	['Task 2', 0],
		// 	['Task 3', 1],
		// 	['Task 4', 0],
		// 	['Task 5', 1],
		// ];

		// let result = await connection.executeMany(sql, rows);

		// console.log(result.rowsAffected, 'Rows Inserted');

		// connection.commit();

		// Now query the rows back

		// https://github.com/oracle/node-oracledb/tree/main/examples
		//github.com/oracle/node-oracledb/blob/main/examples/select2.js

		https: result = await connection.execute(`select * from dual`);
		console.log(result.rows);

		// const rs = result.resultSet;
		// let row;

		// await rs.close();
	} catch (err) {
		console.error(err);
	} finally {
		if (connection) {
			try {
				await connection.close();
			} catch (err) {
				console.error(err);
			}
		}
	}
}

run();
