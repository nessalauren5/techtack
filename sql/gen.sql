﻿CREATE TABLE tt_schema.records
(
    id int8range NOT NULL,
    category text NOT NULL,
    subcategory text NOT NULL,
    title character varying(25) NOT NULL,
    description text,
    count character varying(5),
    name text NOT NULL,
    pseudonyms text,
    related_terms text,
    url text,
    updatedat date,
    createdat date,
    PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
);

ALTER TABLE tt_schema.records
    OWNER to postgres;

    ﻿CREATE TABLE tt_schema.tt_categories
    (
        id smallint NOT NULL,
        cat_level_1 character varying(50) COLLATE pg_catalog."default" NOT NULL,
        cat_level_2 character varying(50) COLLATE pg_catalog."default" NOT NULL,
        cat_level_3 character varying COLLATE pg_catalog."default" NOT NULL,
        cat_level_4 character varying COLLATE pg_catalog."default" NOT NULL,
        cat_level_5 character varying(50) COLLATE pg_catalog."default" NOT NULL,
        CONSTRAINT tt_categories_pkey PRIMARY KEY (id)
    )
    WITH (
        OIDS = FALSE
    )
    TABLESPACE pg_default;

    ALTER TABLE tt_schema.tt_categories
        OWNER to postgres;