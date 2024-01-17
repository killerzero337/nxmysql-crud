CREATE TABLE
    articulos (
        id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        nombre VARCHAR(200) NOT NULL,
        descripcion VARCHAR(200),
        precio DECIMAL(10, 2),
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    );

-- Añade a la BD una tabla proveedores con los siguientes campos:
CREATE TABLE
    PROVEEDORES (
        ID INT unsigned auto_increment primary KEY,
        NOMBRE_PROV VARCHAR(100) NOT NULL,
        TELEFONO INT
    );

--id: numérico con autoincremento (clave primaria)
--nombre
--telefono
-- ALTER TABLE articulos ADD COLUMN imagen VARCHAR(200) AFTER descripcion;