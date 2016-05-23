var pg = require('pg').native;
var connectionString = "/var/run/postgresql swen303marketplace";

var client = new pg.Client(connectionString);
client.connect();

var query = client.query('CREATE TABLE listings(id SERIAL PRIMARY KEY,'
  +' userid int not null,'
  +' title text not null,'
  +' description text not null,'
  +' category int not null,'
  +' imageurl text not null,'
  +' purchaserid int,'
  +' price decimal(9,2) not null)');

query = client.query('CREATE TABLE m_user(id SERIAL PRIMARY KEY,'
  +' email text not null,'
  +' name text not null)');

query = client.query('CREATE TABLE category(id SERIAL PRIMARY KEY,'
    +' name text not null)');

query.on('end', function() { client.end(); });

//insert into category(name) values('First Person Shooter');


//drop schema public cascade;
//create schema public;
