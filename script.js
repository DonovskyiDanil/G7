const leaderInput = document.getElementById('leaderInput');
const flagImage = document.getElementById('flagImage');

leaderInput.addEventListener('input', async () => {
    const leaderName = leaderInput.value.trim().toLowerCase();

    const leaderFlags = {
        biden: 'usa.png',
        scholz: 'germany.png',
        draghi: 'italy.png',
        trudeau: 'canada.png',
        macron: 'france.png',
        johnson: 'uk.png',
        kisida: 'japan.png',
        zelensky: 'ukraine.png'
    };

    if (leaderFlags.hasOwnProperty(leaderName)) {
        const flagPath = `assets/imgs/flags/${leaderFlags[leaderName]}`;
        loadFlag(flagPath);
    } else {
        const euFlagPath = 'assets/imgs/flags/eu.png';
        loadFlag(euFlagPath);
    }
});

function loadFlag(flagPath) {
    fetch(flagPath)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.blob();
        })
        .then(blob => {
            flagImage.src = URL.createObjectURL(blob);
        })
        .catch(error => {
            console.error('Error loading flag:', error);
        });
}
