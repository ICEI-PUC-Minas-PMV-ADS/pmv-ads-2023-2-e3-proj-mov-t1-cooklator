CREATE TABLE RECIPE (
    id INT PRIMARY KEY NOT NULL,
    name VARCHAR(255) NOT NULL,
    hourValue FLOAT NOT NULL,
    appliesDefaultValue BOOLEAN DEFAULT false,
    comments VARCHAR(255),
    color VARCHAR(7),
    preparationTime VARCHAR(255),
    startDate DATETIME,
    isConcluded BOOLEAN DEFAULT false,
    userId INT NOT NULL,
    totalCost FLOAT
);

CREATE TABLE MATERIAL (
    id INT PRIMARY KEY NOT NULL,
    userId INT NOT NULL,
    recipeId INT NOT NULL,
    name VARCHAR(255) NOT NULL,
    comments VARCHAR(255),
    price FLOAT NOT NULL,
    amount INT NOT NULL
);

CREATE TABLE COSTS (
    id INT PRIMARY KEY NOT NULL,
    userId INT NOT NULL,
    recipeId INT NOT NULL,
    totalMaterialCost FLOAT,
    totalTimeValue INT,
    totalCost FLOAT
);

CREATE TABLE USERS (
    id INT PRIMARY KEY NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    hourValue FLOAT NOT NULL,
    applyToAllProjects BOOLEAN DEFAULT false
);
