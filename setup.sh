docker run -d --name vaultify \
  -p 5432:5432 \
  -e POSTGRES_PASSWORD=password \
  -e POSTGRES_DB=vaultify \
  -v my_postgres_data:/var/lib/postgresql/data \
  postgres
