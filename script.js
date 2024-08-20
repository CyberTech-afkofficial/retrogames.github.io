// Get the game canvases and start buttons
const pacManCanvas = document.getElementById('pac-man');
const spaceInvadersCanvas = document.getElementById('space-invaders');
const pacManStartButton = document.getElementById('pac-man-start');
const spaceInvadersStartButton = document.getElementById('space-invaders-start');

// Initialize the games
pacManCanvas.width = 400;
pacManCanvas.height = 400;
pacManCanvas.getContext('2d').fillStyle = 'black';
pacManCanvas.getContext('2d').fillRect(0, 0, 400, 400);

spaceInvadersCanvas.width = 400;
spaceInvadersCanvas.height = 400;
spaceInvadersCanvas.getContext('2d').fillStyle = 'black';
spaceInvadersCanvas.getContext('2d').fillRect(0, 0, 400, 400);

// Add event listeners to the start buttons
pacManStartButton.addEventListener('click', () => {
	// Start Pac-Man game
	pacManGame();
});

spaceInvadersStartButton.addEventListener('click', () => {
	// Start Space Invaders game
	spaceInvadersGame();
});

// Pac-Man game logic
function pacManGame() {
	const ctx = pacManCanvas.getContext('2d');
	ctx.fillStyle = 'yellow';
	ctx.fillRect(50, 50, 20, 20);
}

// Space Invaders game logic
function spaceInvadersGame() {
	const ctx = spaceInvadersCanvas.getContext('2d');
	ctx.fillStyle = 'red';
	ctx.fillRect(50, 50, 20, 20);
}