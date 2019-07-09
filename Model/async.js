const sql = require('mssql');

(async function() {
  try {
    let pool = await sql.connect(config);
    let result1 = await pool.request()
      .input('input_parameter', sql.Int, value)
      .query('select * form mytable where id = @input_parameter')
  } catch (e) {
    console.log(e);
  }
})()