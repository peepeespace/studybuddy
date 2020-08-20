import psycopg2
from psycopg2 import sql
from psycopg2.extensions import ISOLATION_LEVEL_AUTOCOMMIT


def create_db_if_not_exists():
    db_name = 'studybuddy'

    conn = None

    try:
        conn = psycopg2.connect(
            dbname='postgres',
            host='localhost',
            port=5432
        )
    except:
        print('DB not connected')

    if conn is not None:
        conn.set_isolation_level(ISOLATION_LEVEL_AUTOCOMMIT)
        cur = conn.cursor()
        cur.execute('SELECT datname FROM pg_database;')
        dbs = cur.fetchall()

        if (db_name,) in dbs:
            print('DB exists')
        else:
            cur.execute(sql.SQL(f'CREATE DATABASE {db_name}'))
            print('Created DB')

        conn.close()


if __name__ == '__main__':
    create_db_if_not_exists()
