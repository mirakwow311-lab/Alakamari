const alkamari = document.getElementById('alkamari');

// Fecha de hoy
const today = new Date();
const gradDate = new Date(today.getFullYear(), 10, 27); // 10 = noviembre

// Total de días hasta el 27
const totalDays = (gradDate - today) / (1000 * 60 * 60 * 24);

let progress = 0;
if (totalDays > 0) {
    const daysPassed = 27 - today.getDate();
    progress = daysPassed / 27;
}

alkamari.style.left = `${progress * 100}%`;
