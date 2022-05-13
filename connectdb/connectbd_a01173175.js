var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "parcial2_A01173175"
});


//Conectar a base de datos y crear tabla alumnos
con.connect(function(err) {
  
  console.log("Connected to Database: parcial2_A01173175!");
  var sql = "CREATE TABLE Alumnos (Id INT NOT NULL AUTO_INCREMENT, Nombre CHAR(150) NOT NULL, Identificador CHAR(15) NOT NULL, Email CHAR(80), Carrera CHAR(50), PRIMARY KEY (id))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Tabla Alumnos creada con exito.");
  });


  //Agregar primer alumno
  var sql = "INSERT INTO Alumnos (Nombre, Identificador, Email, Carrera) VALUES ('Maria Zurita', 'A01173175', 'a01173175@tec.mx','ISD')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Agregando primer alumno: Maria");
    console.log(result);
  });

  //Agregar segundo alumno
  var sql = "INSERT INTO Alumnos (Nombre, Identificador, Email, Carrera) VALUES ('Isaac Jordan', 'A01176780', 'a01176780@tec.mx','ISD')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Agregando segundo alumno: Isaac");
    console.log(result);
  });

  //Conectar a base de datos y mostrar el contenido
  con.query("SELECT * FROM Alumnos", function (err, result, fields) {
    if (err) throw err;
    console.log("Consultar información de la tabla Alumnos: SELECT");
    console.log(result);
  });

  //Hacer el UPDATE para el segundo nombre basado en el Id
  var sql = "UPDATE Alumnos SET Nombre = 'BORRAR ALUMNO' WHERE Id = 2";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Actualizar información de la tabla Alumnos: UPDATE");
    console.log(result.affectedRows + " dato actualizado");
  });

  //Conectar a base de datos y mostrar el contenido
  console.log("Consultar información de la tabla Alumnos: SELECT");
  con.query("SELECT * FROM Alumnos", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });


  //hacer el DELETE del segundo alumno basado en su Id
  var sql = "DELETE FROM Alumnos WHERE Id = 2";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Borrar información de la tabla Alumnos: DELETE");
    console.log("Numero de datos eliminados: " + result.affectedRows);
  });

  
  //Conectar a base de datos y mostrar el contenido
  console.log("Consultar información de la tabla Alumnos: SELECT");
  con.query("SELECT * FROM Alumnos", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });

});

