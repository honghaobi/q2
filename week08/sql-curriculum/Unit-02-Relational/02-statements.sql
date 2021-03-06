SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET search_path = public, pg_catalog;

CREATE SCHEMA IF NOT EXISTS public;

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;

SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

CREATE TABLE customers (
    id integer NOT NULL,
    name text,
    email text,
    address text,
    city text,
    state text,
    zipcode text
);

CREATE SEQUENCE customers_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

ALTER SEQUENCE customers_id_seq OWNED BY customers.id;

CREATE TABLE items (
    id integer NOT NULL,
    name text,
    description text
);

CREATE SEQUENCE items_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

ALTER SEQUENCE items_id_seq OWNED BY items.id;

CREATE TABLE orderitems (
    id integer NOT NULL,
    order_id integer,
    item_id integer
);

CREATE SEQUENCE orderitems_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

ALTER SEQUENCE orderitems_id_seq OWNED BY orderitems.id;

CREATE TABLE orders (
    id integer NOT NULL,
    customer_id integer,
    amount numeric
);

CREATE SEQUENCE orders_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;



ALTER SEQUENCE orders_id_seq OWNED BY orders.id;


ALTER TABLE ONLY customers ALTER COLUMN id SET DEFAULT nextval('customers_id_seq'::regclass);


ALTER TABLE ONLY items ALTER COLUMN id SET DEFAULT nextval('items_id_seq'::regclass);


ALTER TABLE ONLY orderitems ALTER COLUMN id SET DEFAULT nextval('orderitems_id_seq'::regclass);

ALTER TABLE ONLY orders ALTER COLUMN id SET DEFAULT nextval('orders_id_seq'::regclass);

ALTER TABLE ONLY customers
    ADD CONSTRAINT customers_pkey PRIMARY KEY (id);

ALTER TABLE ONLY items
    ADD CONSTRAINT items_pkey PRIMARY KEY (id);

ALTER TABLE ONLY orderitems
    ADD CONSTRAINT orderitems_pkey PRIMARY KEY (id);

ALTER TABLE ONLY orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY (id);

INSERT INTO customers (name, email, address, city, state, zipcode) VALUES ('Donato Rempel','ladarius@waelchi.org','890 Ullrich Plains', 'Janachester', 'Virginia', '77714');
INSERT INTO customers (name, email, address, city, state, zipcode) VALUES ('Tyrell Von DDS','cleo_frami@bartondenesik.name','63337 Abdullah Camp', 'Verdieborough', 'Colorado', '69882-7027');
INSERT INTO customers (name, email, address, city, state, zipcode) VALUES ('Ms. Sofia Rowe','jacky_funk@bayerprosacco.name','1991 Kyler Village', 'Opheliaborough', 'Ohio', '15599-5395');
INSERT INTO customers (name, email, address, city, state, zipcode) VALUES ('Evert Pfeffer','alisa.luettgen@hoeger.org','1311 Khalil Shores', 'Port Ozella', 'Arizona', '34713');
INSERT INTO customers (name, email, address, city, state, zipcode) VALUES ('Elta Dicki','lesly@heaney.org','3878 Alyce Lock', 'Deckowtown', 'Montana', '42114-6195');
INSERT INTO customers (name, email, address, city, state, zipcode) VALUES ('Zelma Davis','osborne@mohr.biz','184 Hazel Lane', 'Alport', 'Ohio', '87119');
INSERT INTO customers (name, email, address, city, state, zipcode) VALUES ('Edna Hintz','elisha_mclaughlin@pouros.biz','2550 Hassan Pass', 'North Kelliestad', 'California', '40909-5637');
INSERT INTO customers (name, email, address, city, state, zipcode) VALUES ('Coleman Prohaska Jr.','taryn.becker@doyle.org','32202 Zemlak Ridge', 'Rigobertoside', 'Colorado', '95667-8653');
INSERT INTO customers (name, email, address, city, state, zipcode) VALUES ('Wilhelmine Huels','alexander_rice@ornjakubowski.com','44097 Elvie Divide', 'West Lauryntown', 'Maine', '55164-9178');
INSERT INTO customers (name, email, address, city, state, zipcode) VALUES ('Hulda Will III','ella_sanford@stracke.com','3746 Ashton Divide', 'Mikeberg', 'Florida', '22826');

INSERT INTO items (name, description) VALUES ('ski01', 'downhill ski');
INSERT INTO items (name, description) VALUES ('ski02', 'cross country ski');
INSERT INTO items (name, description) VALUES ('ski03', 'snow board');
INSERT INTO items (name, description) VALUES ('bike01', 'mountain bike');
INSERT INTO items (name, description) VALUES ('bike02', 'road bike');
INSERT INTO items (name, description) VALUES ('bike03', 'tricycle');
INSERT INTO items (name, description) VALUES ('boot01', 'hiking boots');
INSERT INTO items (name, description) VALUES ('boot02', 'ski boots');
INSERT INTO items (name, description) VALUES ('boot03', 'moon boots');

INSERT INTO orderitems (order_id, item_id) VALUES ('1', '3');
INSERT INTO orderitems (order_id, item_id) VALUES ('1', '2');
INSERT INTO orderitems (order_id, item_id) VALUES ('1', '4');
INSERT INTO orderitems (order_id, item_id) VALUES ('2', '5');
INSERT INTO orderitems (order_id, item_id) VALUES ('2', '4');
INSERT INTO orderitems (order_id, item_id) VALUES ('2', '8');
INSERT INTO orderitems (order_id, item_id) VALUES ('2', '9');
INSERT INTO orderitems (order_id, item_id) VALUES ('3', '3');
INSERT INTO orderitems (order_id, item_id) VALUES ('3', '4');
INSERT INTO orderitems (order_id, item_id) VALUES ('3', '8');
INSERT INTO orderitems (order_id, item_id) VALUES ('4', '6');
INSERT INTO orderitems (order_id, item_id) VALUES ('4', '5');
INSERT INTO orderitems (order_id, item_id) VALUES ('4', '9');
INSERT INTO orderitems (order_id, item_id) VALUES ('4', '2');
INSERT INTO orderitems (order_id, item_id) VALUES ('5', '5');
INSERT INTO orderitems (order_id, item_id) VALUES ('5', '8');
INSERT INTO orderitems (order_id, item_id) VALUES ('5', '3');
INSERT INTO orderitems (order_id, item_id) VALUES ('5', '9');
INSERT INTO orderitems (order_id, item_id) VALUES ('6', '9');
INSERT INTO orderitems (order_id, item_id) VALUES ('6', '6');
INSERT INTO orderitems (order_id, item_id) VALUES ('6', '1');
INSERT INTO orderitems (order_id, item_id) VALUES ('6', '5');
INSERT INTO orderitems (order_id, item_id) VALUES ('7', '2');
INSERT INTO orderitems (order_id, item_id) VALUES ('7', '3');
INSERT INTO orderitems (order_id, item_id) VALUES ('7', '4');
INSERT INTO orderitems (order_id, item_id) VALUES ('7', '5');
INSERT INTO orderitems (order_id, item_id) VALUES ('8', '6');
INSERT INTO orderitems (order_id, item_id) VALUES ('8', '5');
INSERT INTO orderitems (order_id, item_id) VALUES ('8', '2');
INSERT INTO orderitems (order_id, item_id) VALUES ('8', '7');
INSERT INTO orderitems (order_id, item_id) VALUES ('9', '1');
INSERT INTO orderitems (order_id, item_id) VALUES ('9', '8');
INSERT INTO orderitems (order_id, item_id) VALUES ('9', '7');
INSERT INTO orderitems (order_id, item_id) VALUES ('9', '3');
INSERT INTO orderitems (order_id, item_id) VALUES ('10', '1');
INSERT INTO orderitems (order_id, item_id) VALUES ('10', '2');
INSERT INTO orderitems (order_id, item_id) VALUES ('11', '4');
INSERT INTO orderitems (order_id, item_id) VALUES ('11', '3');
INSERT INTO orderitems (order_id, item_id) VALUES ('11', '8');
INSERT INTO orderitems (order_id, item_id) VALUES ('12', '9');
INSERT INTO orderitems (order_id, item_id) VALUES ('12', '4');
INSERT INTO orderitems (order_id, item_id) VALUES ('12', '5');
INSERT INTO orderitems (order_id, item_id) VALUES ('13', '6');
INSERT INTO orderitems (order_id, item_id) VALUES ('13', '2');
INSERT INTO orderitems (order_id, item_id) VALUES ('13', '4');
INSERT INTO orderitems (order_id, item_id) VALUES ('13', '3');
INSERT INTO orderitems (order_id, item_id) VALUES ('14', '9');
INSERT INTO orderitems (order_id, item_id) VALUES ('14', '8');
INSERT INTO orderitems (order_id, item_id) VALUES ('14', '1');
INSERT INTO orderitems (order_id, item_id) VALUES ('15', '3');
INSERT INTO orderitems (order_id, item_id) VALUES ('15', '5');
INSERT INTO orderitems (order_id, item_id) VALUES ('16', '9');
INSERT INTO orderitems (order_id, item_id) VALUES ('16', '5');
INSERT INTO orderitems (order_id, item_id) VALUES ('16', '4');
INSERT INTO orderitems (order_id, item_id) VALUES ('17', '7');
INSERT INTO orderitems (order_id, item_id) VALUES ('17', '6');
INSERT INTO orderitems (order_id, item_id) VALUES ('17', '1');
INSERT INTO orderitems (order_id, item_id) VALUES ('17', '4');
INSERT INTO orderitems (order_id, item_id) VALUES ('18', '3');
INSERT INTO orderitems (order_id, item_id) VALUES ('18', '2');
INSERT INTO orderitems (order_id, item_id) VALUES ('18', '4');
INSERT INTO orderitems (order_id, item_id) VALUES ('19', '3');
INSERT INTO orderitems (order_id, item_id) VALUES ('19', '8');
INSERT INTO orderitems (order_id, item_id) VALUES ('19', '2');
INSERT INTO orderitems (order_id, item_id) VALUES ('19', '9');
INSERT INTO orderitems (order_id, item_id) VALUES ('20', '5');
INSERT INTO orderitems (order_id, item_id) VALUES ('20', '9');
INSERT INTO orderitems (order_id, item_id) VALUES ('20', '2');
INSERT INTO orderitems (order_id, item_id) VALUES ('20', '7');
INSERT INTO orderitems (order_id, item_id) VALUES ('21', '7');
INSERT INTO orderitems (order_id, item_id) VALUES ('21', '9');
INSERT INTO orderitems (order_id, item_id) VALUES ('21', '2');
INSERT INTO orderitems (order_id, item_id) VALUES ('21', '5');
INSERT INTO orderitems (order_id, item_id) VALUES ('22', '4');
INSERT INTO orderitems (order_id, item_id) VALUES ('22', '5');
INSERT INTO orderitems (order_id, item_id) VALUES ('22', '6');
INSERT INTO orderitems (order_id, item_id) VALUES ('23', '8');
INSERT INTO orderitems (order_id, item_id) VALUES ('23', '2');
INSERT INTO orderitems (order_id, item_id) VALUES ('24', '8');
INSERT INTO orderitems (order_id, item_id) VALUES ('24', '6');
INSERT INTO orderitems (order_id, item_id) VALUES ('24', '9');
INSERT INTO orderitems (order_id, item_id) VALUES ('25', '9');
INSERT INTO orderitems (order_id, item_id) VALUES ('25', '3');
INSERT INTO orderitems (order_id, item_id) VALUES ('25', '7');
INSERT INTO orderitems (order_id, item_id) VALUES ('25', '6');
INSERT INTO orderitems (order_id, item_id) VALUES ('26', '7');
INSERT INTO orderitems (order_id, item_id) VALUES ('26', '5');
INSERT INTO orderitems (order_id, item_id) VALUES ('26', '1');
INSERT INTO orderitems (order_id, item_id) VALUES ('26', '4');
INSERT INTO orderitems (order_id, item_id) VALUES ('27', '6');
INSERT INTO orderitems (order_id, item_id) VALUES ('27', '3');
INSERT INTO orderitems (order_id, item_id) VALUES ('27', '1');
INSERT INTO orderitems (order_id, item_id) VALUES ('27', '7');
INSERT INTO orderitems (order_id, item_id) VALUES ('28', '5');
INSERT INTO orderitems (order_id, item_id) VALUES ('28', '6');
INSERT INTO orderitems (order_id, item_id) VALUES ('29', '2');
INSERT INTO orderitems (order_id, item_id) VALUES ('29', '9');
INSERT INTO orderitems (order_id, item_id) VALUES ('29', '4');
INSERT INTO orderitems (order_id, item_id) VALUES ('30', '2');
INSERT INTO orderitems (order_id, item_id) VALUES ('30', '4');
INSERT INTO orderitems (order_id, item_id) VALUES ('30', '8');
INSERT INTO orderitems (order_id, item_id) VALUES ('31', '5');
INSERT INTO orderitems (order_id, item_id) VALUES ('31', '9');
INSERT INTO orderitems (order_id, item_id) VALUES ('31', '4');
INSERT INTO orderitems (order_id, item_id) VALUES ('31', '3');
INSERT INTO orderitems (order_id, item_id) VALUES ('32', '6');
INSERT INTO orderitems (order_id, item_id) VALUES ('32', '4');
INSERT INTO orderitems (order_id, item_id) VALUES ('32', '2');
INSERT INTO orderitems (order_id, item_id) VALUES ('32', '8');
INSERT INTO orderitems (order_id, item_id) VALUES ('33', '1');
INSERT INTO orderitems (order_id, item_id) VALUES ('33', '4');
INSERT INTO orderitems (order_id, item_id) VALUES ('33', '5');
INSERT INTO orderitems (order_id, item_id) VALUES ('34', '2');
INSERT INTO orderitems (order_id, item_id) VALUES ('34', '4');
INSERT INTO orderitems (order_id, item_id) VALUES ('34', '9');
INSERT INTO orderitems (order_id, item_id) VALUES ('34', '7');
INSERT INTO orderitems (order_id, item_id) VALUES ('35', '2');
INSERT INTO orderitems (order_id, item_id) VALUES ('35', '3');
INSERT INTO orderitems (order_id, item_id) VALUES ('35', '9');
INSERT INTO orderitems (order_id, item_id) VALUES ('35', '8');
INSERT INTO orderitems (order_id, item_id) VALUES ('36', '6');
INSERT INTO orderitems (order_id, item_id) VALUES ('36', '7');
INSERT INTO orderitems (order_id, item_id) VALUES ('36', '8');
INSERT INTO orderitems (order_id, item_id) VALUES ('37', '5');
INSERT INTO orderitems (order_id, item_id) VALUES ('37', '2');
INSERT INTO orderitems (order_id, item_id) VALUES ('37', '1');
INSERT INTO orderitems (order_id, item_id) VALUES ('38', '8');
INSERT INTO orderitems (order_id, item_id) VALUES ('38', '5');
INSERT INTO orderitems (order_id, item_id) VALUES ('38', '9');
INSERT INTO orderitems (order_id, item_id) VALUES ('38', '3');
INSERT INTO orderitems (order_id, item_id) VALUES ('39', '2');
INSERT INTO orderitems (order_id, item_id) VALUES ('39', '8');
INSERT INTO orderitems (order_id, item_id) VALUES ('39', '3');
INSERT INTO orderitems (order_id, item_id) VALUES ('40', '7');
INSERT INTO orderitems (order_id, item_id) VALUES ('40', '5');
INSERT INTO orderitems (order_id, item_id) VALUES ('40', '2');
INSERT INTO orderitems (order_id, item_id) VALUES ('41', '6');
INSERT INTO orderitems (order_id, item_id) VALUES ('41', '2');
INSERT INTO orderitems (order_id, item_id) VALUES ('41', '5');
INSERT INTO orderitems (order_id, item_id) VALUES ('42', '1');
INSERT INTO orderitems (order_id, item_id) VALUES ('42', '5');
INSERT INTO orderitems (order_id, item_id) VALUES ('42', '3');
INSERT INTO orderitems (order_id, item_id) VALUES ('42', '6');
INSERT INTO orderitems (order_id, item_id) VALUES ('43', '7');
INSERT INTO orderitems (order_id, item_id) VALUES ('43', '8');
INSERT INTO orderitems (order_id, item_id) VALUES ('43', '5');
INSERT INTO orderitems (order_id, item_id) VALUES ('44', '7');
INSERT INTO orderitems (order_id, item_id) VALUES ('44', '4');
INSERT INTO orderitems (order_id, item_id) VALUES ('44', '6');
INSERT INTO orderitems (order_id, item_id) VALUES ('44', '8');
INSERT INTO orderitems (order_id, item_id) VALUES ('45', '5');
INSERT INTO orderitems (order_id, item_id) VALUES ('45', '1');
INSERT INTO orderitems (order_id, item_id) VALUES ('45', '2');
INSERT INTO orderitems (order_id, item_id) VALUES ('46', '6');
INSERT INTO orderitems (order_id, item_id) VALUES ('46', '1');
INSERT INTO orderitems (order_id, item_id) VALUES ('47', '3');
INSERT INTO orderitems (order_id, item_id) VALUES ('47', '7');
INSERT INTO orderitems (order_id, item_id) VALUES ('47', '4');
INSERT INTO orderitems (order_id, item_id) VALUES ('48', '7');
INSERT INTO orderitems (order_id, item_id) VALUES ('48', '2');
INSERT INTO orderitems (order_id, item_id) VALUES ('48', '1');
INSERT INTO orderitems (order_id, item_id) VALUES ('48', '3');
INSERT INTO orderitems (order_id, item_id) VALUES ('49', '9');
INSERT INTO orderitems (order_id, item_id) VALUES ('49', '1');
INSERT INTO orderitems (order_id, item_id) VALUES ('49', '6');
INSERT INTO orderitems (order_id, item_id) VALUES ('50', '8');
INSERT INTO orderitems (order_id, item_id) VALUES ('50', '2');

INSERT INTO orders (customer_id, amount) VALUES (6, 63.35);
INSERT INTO orders (customer_id, amount) VALUES (5, 55.42);
INSERT INTO orders (customer_id, amount) VALUES (7, 91.7);
INSERT INTO orders (customer_id, amount) VALUES (4, 49.52);
INSERT INTO orders (customer_id, amount) VALUES (4, 4.81);
INSERT INTO orders (customer_id, amount) VALUES (5, 65.82);
INSERT INTO orders (customer_id, amount) VALUES (4, 25.91);
INSERT INTO orders (customer_id, amount) VALUES (8, 64.59);
INSERT INTO orders (customer_id, amount) VALUES (3, 68.89);
INSERT INTO orders (customer_id, amount) VALUES (7, 85.04);
INSERT INTO orders (customer_id, amount) VALUES (1, 19.67);
INSERT INTO orders (customer_id, amount) VALUES (6, 29.74);
INSERT INTO orders (customer_id, amount) VALUES (5, 61.56);
INSERT INTO orders (customer_id, amount) VALUES (6, 30.24);
INSERT INTO orders (customer_id, amount) VALUES (1, 5.67);
INSERT INTO orders (customer_id, amount) VALUES (9, 31.45);
INSERT INTO orders (customer_id, amount) VALUES (2, 1.69);
INSERT INTO orders (customer_id, amount) VALUES (10, 30.91);
INSERT INTO orders (customer_id, amount) VALUES (3, 97.11);
INSERT INTO orders (customer_id, amount) VALUES (2, 5.4);
INSERT INTO orders (customer_id, amount) VALUES (1, 55.97);
INSERT INTO orders (customer_id, amount) VALUES (4, 44.42);
INSERT INTO orders (customer_id, amount) VALUES (10, 80.77);
INSERT INTO orders (customer_id, amount) VALUES (7, 11.16);
INSERT INTO orders (customer_id, amount) VALUES (10, 26.37);
INSERT INTO orders (customer_id, amount) VALUES (1, 39.48);
INSERT INTO orders (customer_id, amount) VALUES (9, 13.33);
INSERT INTO orders (customer_id, amount) VALUES (4, 19.72);
INSERT INTO orders (customer_id, amount) VALUES (6, 73.06);
INSERT INTO orders (customer_id, amount) VALUES (10, 81.17);
INSERT INTO orders (customer_id, amount) VALUES (10, 56.66);
INSERT INTO orders (customer_id, amount) VALUES (4, 84.81);
INSERT INTO orders (customer_id, amount) VALUES (6, 36.94);
INSERT INTO orders (customer_id, amount) VALUES (6, 35.54);
INSERT INTO orders (customer_id, amount) VALUES (3, 94.27);
INSERT INTO orders (customer_id, amount) VALUES (5, 81.47);
INSERT INTO orders (customer_id, amount) VALUES (7, 86.86);
INSERT INTO orders (customer_id, amount) VALUES (4, 58.23);
INSERT INTO orders (customer_id, amount) VALUES (5, 52.57);
INSERT INTO orders (customer_id, amount) VALUES (10, 34.62);
INSERT INTO orders (customer_id, amount) VALUES (1, 35.28);
INSERT INTO orders (customer_id, amount) VALUES (3, 77.16);
INSERT INTO orders (customer_id, amount) VALUES (8, 37.08);
INSERT INTO orders (customer_id, amount) VALUES (8, 99.0);
INSERT INTO orders (customer_id, amount) VALUES (7, 37.9);
INSERT INTO orders (customer_id, amount) VALUES (10, 3.05);
INSERT INTO orders (customer_id, amount) VALUES (8, 31.07);
INSERT INTO orders (customer_id, amount) VALUES (7, 80.36);
INSERT INTO orders (customer_id, amount) VALUES (3, 50.1);
INSERT INTO orders (customer_id, amount) VALUES (5, 59.5);
