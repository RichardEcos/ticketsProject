var users = [
  {
    ci_usuario: 654987,
    Nombre_usuario: 'Richard',
    perfil_usuario: 'A',
    num_celular: 79788874,
    cargo: 'dev',
    area_trabajo: 'development'
  },
  {
    ci_usuario: 123456,
    Nombre_usuario: 'Juan',
    perfil_usuario: 'A',
    num_celular: 15973642,
    cargo: 'dev',
    area_trabajo: 'development'
  },
  {
    ci_usuario: 456912,
    Nombre_usuario: 'Rocio',
    perfil_usuario: 'A',
    num_celular: 74136925,
    cargo: 'dev',
    area_trabajo: 'development'
  }
];

function _findAll(tableName) {
  // return connection.query('SELECT * FROM '+ tableName);
}

function _findById(tabletName, id) {
  // return connection.query('SELECT * FROM '+ tableName + ' WHERE ID IN ( ' + id +')');
}

function _create(data) {
  var name = data.name;
//  INSERT INTO usuario (name)
//  VALUES (name);
}

function _update(tableName, columnName, data, id) {
  // return connection.query('UPDATE ' + tableName + ' SET' + value + data + ' WHERE ' + tableName + '=' + id);
}

function _delete(tableName, columnName, id) {
  // return connection.query('DELETE FROM ' + tableName + ' WHERE ' + columnName +'=' + id);
}

class User {

  static usersList(req, res) {
    var users = _findAll('user');
    new Promise((resolve, reject) => {
      res.json(users);
    });
  }

  static userCreate(req, res) {
    var data = req.body;
    var newUser = _createUser(data);
    new Promise((resolve, reject) => {
      res.json(newUser);
    });
  }

  static userRead(req, res) {
    // var id = req.params;
    var user = _findById(tabletName, id);
    new promise((resolve, reject) => {
      res.json(user)
    });
  }
  
  static userUpdate(req, res) {
    // var data = req.body;
    // var id = req.params;
    var user = _updateSql(tabletName, columnName, data, id);
    console.log('usersUpdateOne');
  }

  static userDelete(req, res) {
    // var id = req.params;
    // var data = _delete(tableName, columnName, id);
    new Promise((resolve, reject) => {
      console.log('usersDeleteOne');
      res.json(users);
    });
  }
}

module.exports = User;
