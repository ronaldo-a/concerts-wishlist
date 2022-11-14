--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: concerts; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.concerts (
    id integer NOT NULL,
    "userName" text NOT NULL,
    "bandName" text NOT NULL,
    "alreadyWatched" boolean NOT NULL,
    "concertCity" text,
    "concertDate" text,
    "concertRate" integer
);


--
-- Name: concerts_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.concerts_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: concerts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.concerts_id_seq OWNED BY public.concerts.id;


--
-- Name: concerts id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.concerts ALTER COLUMN id SET DEFAULT nextval('public.concerts_id_seq'::regclass);


--
-- Data for Name: concerts; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.concerts VALUES (2, 'Alan', 'Julia and Angus Stone', true, 'Recife', '21/07/2018', 8);
INSERT INTO public.concerts VALUES (3, 'Ronaldo', 'Flipturn', true, 'Chicago', '14/05/2022', 10);
INSERT INTO public.concerts VALUES (5, 'Alan', 'Joyride', false, NULL, NULL, NULL);
INSERT INTO public.concerts VALUES (6, 'Luana', 'Jonass', true, 'Recife', '27/08/2019', 4);


--
-- Name: concerts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.concerts_id_seq', 6, true);


--
-- Name: concerts concerts_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.concerts
    ADD CONSTRAINT concerts_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

