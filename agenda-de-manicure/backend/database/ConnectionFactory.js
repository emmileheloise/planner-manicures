const mysql = require('mysql2');

class ConnectionFactory {
  constructor() {
    this.connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '1234',
      database: 'planner_manicure'
    });
  }

  connect() {
    this.connection.connect((err) => {
      if (err) {
        console.error('Erro ao conectar:', err);
      } else {
        console.log('✅ Conectado com sucesso!');
      }
    });
    return this.connection;
  }

  end() {
    this.connection.end((err) => {
      if (err) console.error('Erro ao encerrar conexão:', err);
      else console.log('✅ Conexão encerrada.');
    });
  }
}

module.exports = ConnectionFactory;
