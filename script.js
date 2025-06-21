<script type="module">
    // ... (rest of your existing global variables and game logic) ...

    // Moved these to be assigned inside DOMContentLoaded
    let moveLeftBtn;
    let shootBtn;
    let moveRightBtn;

    // ... (rest of your existing game logic) ...

    document.addEventListener('DOMContentLoaded', () => {
        // Assign desktop control buttons AFTER the DOM is fully loaded
        moveLeftBtn = document.getElementById('moveLeftBtn');
        shootBtn = document.getElementById('shootBtn');
        moveRightBtn = document.getElementById('moveRightBtn');

        // ... (your existing mobile control assignments) ...
        joystickArea = document.getElementById('joystick-area');
        joystickBase = document.getElementById('joystick-base');
        joystickThumb = document.getElementById('joystick-thumb');
        mobileShootBtn = document.getElementById('mobileShootBtn');

        // Now, attach event listeners for desktop controls inside here too
        if (moveLeftBtn) {
            moveLeftBtn.addEventListener('mousedown', () => { if (gameRunning) player.dx = -player.speed; });
            moveLeftBtn.addEventListener('mouseup', () => { if (gameRunning) player.dx = 0; });
            moveLeftBtn.addEventListener('mouseleave', () => { if (gameRunning) player.dx = 0; });
            moveLeftBtn.addEventListener('touchstart', (e) => { e.preventDefault(); if (gameRunning) player.dx = -player.speed; }, { passive: false });
            moveLeftBtn.addEventListener('touchend', (e) => { e.preventDefault(); if (gameRunning) player.dx = 0; }, { passive: false });
        }

        if (moveRightBtn) {
            moveRightBtn.addEventListener('mousedown', () => { if (gameRunning) player.dx = player.speed; });
            moveRightBtn.addEventListener('mouseup', () => { if (gameRunning) player.dx = 0; });
            moveRightBtn.addEventListener('mouseleave', () => { if (gameRunning) player.dx = 0; });
            moveRightBtn.addEventListener('touchstart', (e) => { e.preventDefault(); if (gameRunning) player.dx = player.speed; }, { passive: false });
            moveRightBtn.addEventListener('touchend', (e) => { e.preventDefault(); if (gameRunning) player.dx = 0; }, { passive: false });
        }

        if (shootBtn) {
            shootBtn.addEventListener('click', () => { if (gameRunning) shootNet(); });
            shootBtn.addEventListener('touchstart', (e) => { e.preventDefault(); if (gameRunning) shootNet(); }, { passive: false });
        }
        
        // ... (rest of your existing DOMContentLoaded code) ...

        if (joystickArea && joystickBase && joystickThumb && mobileShootBtn) {
            // ... (your existing mobile control event listeners) ...
        }

        startGameBtn.addEventListener('click', startGame);
        restartGameBtn.addEventListener('click', restartGame);

        visitSolidUAVsIntroBtn.addEventListener('click', () => {
            window.open('https://soliduavs.com/', '_blank');
        });

        visitSolidUAVsGameOverBtn.addEventListener('click', () => {
            window.open('https://soliduavs.com/', '_blank');
        });

        initGame(); // Call initGame after all elements are loaded and assigned
    });

    // ... (rest of your existing functions) ...
</script>