CREATE TABLE items(
    id bigserial NOT NULL,
    name text NOT NULL,
    email character varying(20) NOT NULL,
    CONSTRAINT item_pkey PRIMARY KEY (id)
);