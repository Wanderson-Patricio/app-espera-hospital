build:
	docker build -t app_espera_hospital:1.0 .

up:
	docker compose up -d

down:
	docker compose down
	docker rmi app_espera_hospital:1.0