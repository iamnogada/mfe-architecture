docker run -d \
  --name zmp-pgrest \
  --network zmp \
  -e PGRST_DB_URI=postgres://admin:cloudzcp12%23%24@zmp-pgsql:5432/zmp \
  -e PGRST_DB_SCHEMA=api \
  -e PGRST_DB_ANON_ROLE=web_anon \
  -p 3000:3000 \
  postgrest/postgrest


docker run -d \
	--name zmp-pgsql \
  --network zmp \
  -p 5432:5432 \
  -e POSTGRES_USER=admin \
	-e POSTGRES_PASSWORD=cloudzcp12#$ \
	-e PGDATA=/var/lib/postgresql/data \
	-v $(PWD)/pgdata:/var/lib/postgresql/data \
	postgres