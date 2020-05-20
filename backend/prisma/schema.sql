CREATE TABLE "public"."Stay" (
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(255),
    price INTEGER,
    host_is_superhost VARCHAR(255),
    country VARCHAR(255),
    reviews_per_month FLOAT,
    number_of_reviews INTEGER,
    picture_url VARCHAR(255),
    imglow VARCHAR(255),
    host_thumbnail_url VARCHAR(255),
    host_picture_url VARCHAR(255),
    size VARCHAR(255),
    description TEXT,
    street VARCHAR(255),
    space TEXT,
    access TEXT,
    notes TEXT,
    host_name VARCHAR(255),
    host_since VARCHAR(255),
    host_description TEXT,
    during_stay TEXT,
    host_response_time VARCHAR(255),
    host_response_rate VARCHAR(255),
    accommodates INTEGER,
    beds INTEGER,
    bedrooms INTEGER,
    bathrooms FLOAT
);

CREATE TABLE "public"."Adventure" (
    id SERIAL PRIMARY KEY NOT NULL,
    title VARCHAR(255),
    period INTEGER,
    cost INTEGER,
    country VARCHAR(255),
    img VARCHAR(255)
);

CREATE TABLE "public"."Experience" (
    id SERIAL PRIMARY KEY NOT NULL,
    title VARCHAR(255),
    cost INTEGER,
    ratings FLOAT,
    reviews INTEGER,
    country VARCHAR(255),
    img VARCHAR(255),
    location VARCHAR(255),
    category VARCHAR(255),
    available VARCHAR(255)
);