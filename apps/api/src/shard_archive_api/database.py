from sqlalchemy import create_engine, event
from sqlalchemy.engine import Engine


def create_database_engine(database_url: str) -> Engine:
    """Create a database engine with the required SQLite connection settings."""
    engine = create_engine(database_url)

    if engine.dialect.name == "sqlite":

        @event.listens_for(engine, "connect")
        def enable_sqlite_foreign_keys(dbapi_connection, _connection_record) -> None:
            # SQLite ignores declared foreign keys unless every connection
            # explicitly enables their enforcement.
            previous_autocommit = dbapi_connection.autocommit
            dbapi_connection.autocommit = True

            try:
                cursor = dbapi_connection.cursor()
                try:
                    cursor.execute("PRAGMA foreign_keys = ON")
                finally:
                    cursor.close()
            finally:
                # Preserve the transaction mode selected by SQLAlchemy.
                dbapi_connection.autocommit = previous_autocommit

    return engine
