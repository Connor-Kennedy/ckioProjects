FROM postgres:latest
COPY init.sql /docker-entrypoint-initdb.d/
ENV POSTGRES_USER docker
ENV POSTGRES_PASSWORD docker
ENV POSTGRES_DB ebay_app_database
VOLUME /ebay_app_database