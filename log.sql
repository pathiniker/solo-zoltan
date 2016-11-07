Create 'player' table with:
1. ID
2. Name
3. Character
4. Red
5. Green
6. Mini-Game
7. Candy
8. Coins
9. Stars

CREATE TABLE player (
	id SERIAL PRIMARY KEY,
	name varchar(12) NOT NULL,
	character varchar(255) NOT NULL,
	red int DEFAULT 0,
	green int DEFAULT 0,
	minigame int DEFAULT 0,
	candy int DEFAULT 0,
	coins int DEFAULT 3,
	stars int DEFAULT 0
);

CREATE TABLE turncount (
	id SERIAL PRIMARY KEY,
	turn_num int DEFAULT 1
);
