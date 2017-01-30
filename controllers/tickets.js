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

class Ticket {

  static ticketsList(req, res) {
    // var users = _findAll('user');
    new Promise((resolve, reject) => {
      console.log('usersDeleteOne');
      res.json({users:'asdasd'});
    });
  }

  static ticketCreate(req, res) {
    var data = req.body;
    var newUser = _createUser(data);
    new Promise((resolve, reject) => {
      res.json(newUser);
    });
  }

  static ticketRead(req, res) {
    // var id = req.params;
    var user = _findById(tabletName, id);
    new promise((resolve, reject) => {
      res.json(user)
    });
  }
  
  static ticketUpdate(req, res) {
    // var data = req.body;
    // var id = req.params;
    var user = _updateSql(tabletName, columnName, data, id);
    console.log('usersUpdateOne');
  }

  static ticketDelete(req, res) {
    // var id = req.params;
    // var data = _delete(tableName, columnName, id);
    new Promise((resolve, reject) => {
      console.log('usersDeleteOne');
      res.json(data);
    });
  }
}

module.exports = Ticket;
