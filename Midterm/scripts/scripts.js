const timeDisplay = document.getElementById('time');
const progressBar = document.getElementById('progress');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');
const workDurationInput = document.getElementById('workDuration');
const breakDurationInput = document.getElementById('breakDuration');
const soundsContainer = document.getElementById('sounds');
const audioPlayer = document.getElementById('audioPlayer');
const audioStatus = document.getElementById('audioStatus');
const audioIcon = audioStatus.querySelector('i');
const audioText = audioStatus.querySelector('span');
//Timer variables
let timer;
let timeLeft = 0;
let isRunning = false;
let isWorkTime = true;
let totalTime = 0;

//Sound options array
const soundOptions = [
    { name: 'Birds', icon: 'crow', file: 'audio/Songbirds.mp3' },
    { name: 'Forest', icon: 'tree', file: 'audio/forest.mp3' },
    { name: 'Waves', icon: 'water', file: 'audio/waves.mp3' },
    { name: 'Bonfire', icon: 'fire', file: 'audio/campfire.mp3' },
    { name: 'Rain', icon: 'cloud-rain', file: 'audio/rain.mp3' },
    { name: 'None', icon: 'volume-mute', file: '' }
];

//Initialize the app
function init() {
    createSoundOptions();
    resetTimer();
    setupEventListeners();
    setupAudioListeners();
}

//Sound option buttons
function createSoundOptions() {
    soundOptions.forEach(sound => {
        const soundOption = document.createElement('div');
        soundOption.className = 'sound-option';
        soundOption.innerHTML = `<i class="fas fa-${sound.icon}"></i> ${sound.name}`;
        
        soundOption.addEventListener('click', () => {
            document.querySelectorAll('.sound-option').forEach(option => {
                option.classList.remove('active');
            });
            
            soundOption.classList.add('active');
            
            // Play selected sound or stop if "None" is selected
            if (sound.file) {
                audioPlayer.src = sound.file;
                audioPlayer.play().catch(e => {
                    console.log("Audio play failed:", e);
                    updateAudioStatus('error');
                });
                updateAudioStatus('playing', sound.name);
            } else {
                audioPlayer.pause();
                updateAudioStatus('stopped');
            }
        });
        
        soundsContainer.appendChild(soundOption);
    });
    
    soundsContainer.lastChild.classList.add('active');
}

//Event listeners
function setupEventListeners() {
    startBtn.addEventListener('click', startTimer);
    pauseBtn.addEventListener('click', pauseTimer);
    resetBtn.addEventListener('click', resetTimer);
    
    workDurationInput.addEventListener('change', () => {
        if (!isRunning) resetTimer();
    });
    
    breakDurationInput.addEventListener('change', () => {
        if (!isRunning) resetTimer();
    });
}

//Audio event listeners
function setupAudioListeners() {
    audioPlayer.addEventListener('ended', () => {
        updateAudioStatus('ended');
    });

    audioPlayer.addEventListener('error', () => {
        updateAudioStatus('error');
    });
}

//Updates audio status display
function updateAudioStatus(status, soundName = '') {
    switch(status) {
        case 'playing':
            audioStatus.classList.add('playing');
            audioIcon.classList.replace('fa-volume-mute', 'fa-volume-up');
            audioText.textContent = `Playing: ${soundName}`;
            break;
        case 'stopped':
            audioStatus.classList.remove('playing');
            audioIcon.classList.replace('fa-volume-up', 'fa-volume-mute');
            audioText.textContent = 'No sound playing';
            break;
        case 'ended':
            audioStatus.classList.remove('playing');
            audioIcon.classList.replace('fa-volume-up', 'fa-volume-mute');
            audioText.textContent = 'Sound ended';
            break;
        case 'error':
            audioStatus.classList.remove('playing');
            audioIcon.classList.replace('fa-volume-up', 'fa-volume-mute');
            audioText.textContent = 'Error playing sound';
            break;
    }
}

function startTimer() {
    if (isRunning) return;
    
    isRunning = true;
    startBtn.classList.add('hidden');
    pauseBtn.classList.remove('hidden');
    
    // Calculate total time in seconds
    const duration = isWorkTime ? 
        parseInt(workDurationInput.value) : 
        parseInt(breakDurationInput.value);
    totalTime = duration * 60;
    
    // Starts countdown
    timer = setInterval(updateTimer, 1000);
}

function pauseTimer() {
    if (!isRunning) return;
    
    isRunning = false;
    clearInterval(timer);
    pauseBtn.classList.add('hidden');
    startBtn.classList.remove('hidden');
}

// Reset the timer
function resetTimer() {
    pauseTimer();
    isWorkTime = true;
    const duration = parseInt(workDurationInput.value);
    timeLeft = duration * 60;
    updateDisplay();
    progressBar.style.width = '100%';
    document.querySelector('.container').style.backgroundColor = 'white';
}

// Update timer every second
function updateTimer() {
    timeLeft--;
    updateDisplay();
    
    // Update progress bar
    const duration = isWorkTime ? 
        parseInt(workDurationInput.value) * 60 : 
        parseInt(breakDurationInput.value) * 60;
    const progressPercent = (timeLeft / duration) * 100;
    progressBar.style.width = `${progressPercent}%`;
    
    // Timer complete
    if (timeLeft <= 0) {
        clearInterval(timer);
        timerComplete();
    }
}

// Update time display
function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timeDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function timerComplete() {
    isRunning = false;
    startBtn.classList.remove('hidden');
    pauseBtn.classList.add('hidden');
    
    // Plays notification sound
    const audio = new Audio('audio/notification.mp3');
    audio.play().catch(e => console.log("Notification sound failed:", e));
    
    // Switch between work/break time
    isWorkTime = !isWorkTime;
    
    // Visual feedback
    document.querySelector('.container').style.backgroundColor = isWorkTime ? '#f0fff0' : '#fff0f0';
    
    // Set next timer
    const duration = isWorkTime ? 
        parseInt(workDurationInput.value) * 60 : 
        parseInt(breakDurationInput.value) * 60;
    timeLeft = duration;
    
    // Show alert
    const mode = isWorkTime ? 'Work' : 'Break';
    alert(`${mode} time is over! ${isWorkTime ? 'Time to focus!' : 'Take a rest!'}`);
    
    updateDisplay();
    progressBar.style.width = '100%';
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', init);