api:
	cd src/backend && .\.venv\Scripts\activate && python manage.py runserver

market:
	cd src/frontend_market && ionic serve -p 8200

client:
	cd src/frontend_client && ionic serve -p 8100

front:
	make market & make client
