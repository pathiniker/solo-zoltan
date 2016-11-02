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
	name varchar(12),
	character varchar(255),
	red int,
	green int,
	minigame int,
	candy int,
	coins int,
	stars int
);
