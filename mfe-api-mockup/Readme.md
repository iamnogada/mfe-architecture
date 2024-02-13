# Tooling

## PostgreSQL & PostgRest
> Image : docker pull dpage/pgadmin4, docker pull postgres


docker run -d \
	--name zmp-postgres \
  -p 5432:5432 \
  -e POSTGRES_USER=admin \
	-e POSTGRES_PASSWORD=cloudzcp12#$ \
	-e PGDATA=/var/lib/postgresql/data/pgdata \
	-v $(PWD):/var/lib/postgresql/data \
	postgres


docker run -p 80:80 \
    --name zmp-pgadmin4 \
    -e 'PGADMIN_DEFAULT_EMAIL=admin@kubepia.net' \
    -e 'PGADMIN_DEFAULT_PASSWORD=cloudzcp12#$' \
    -d dpage/pgadmin4