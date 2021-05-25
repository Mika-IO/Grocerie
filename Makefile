active:
	cd src/ && python -m pipenv shell
	
run:active
	cd src/ &&  python manage.py runserver & cd frontend_market && ionic serve -p 8200 & cd frontend_client && ionic serve -p 8100
