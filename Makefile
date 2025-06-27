build:
	docker build -t api_espera_hospital:1.0 api
	docker build -t app_espera_hospital:1.0 app

up:
	docker compose up -d

down:
	docker compose down
	docker rmi api_espera_hospital:1.0
	docker rmi app_espera_hospital:1.0