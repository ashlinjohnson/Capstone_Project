import psycopg2
import os
from dotenv import load_dotenv

load_dotenv()

def setup_database():
    conn = psycopg2.connect(
        dbname="postgres",
        user=os.getenv("DB_USER"),
        password=os.getenv("DB_PASSWORD"),
        host=os.getenv("DB_HOST"),
        port=os.getenv("DB_PORT"),
    )

    conn.autocommit = True
    cursor = conn.cursor()

    db_name = os.getenv("DB_NAME")

    cursor.execute(
        "SELECT 1 FROM pg_database WHERE datname = %s",
        (db_name,)
    )

    if not cursor.fetchone():
        cursor.execute(f'CREATE DATABASE "{db_name}"')
        print(f"Database {db_name} created.")
    else:
        print(f"Database {db_name} already exists.")

    cursor.close()
    conn.close()