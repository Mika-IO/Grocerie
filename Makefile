db:
	sudo docker run -p 5432:5432 -e POSTGRES_PASSWORD=1234 postgres

dev:
	python manage.py runsslserver
