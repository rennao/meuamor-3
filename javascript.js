// DATA DE INÍCIO: 20/11/2025
const startDate = new Date(2025, 10, 20); // Novembro é mês 10 no JS

function getElapsed() {
    const now = new Date();
    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();
    let days = now.getDate() - startDate.getDate();

    if (days < 0) {
        months--;
        const lastDay = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
        days += lastDay;
    }
    if (months < 0) {
        years--;
        months += 12;
    }
    return { years, months, days };
}

function updateUI() {
    const time = getElapsed();
    const title = document.getElementById('reveal-title');
    const row = document.getElementById('time-row');

    // Montando a frase exata que você pediu
    let frase = "Namorando há ";
    if (time.years > 0) frase += `${time.years} ${time.years === 1 ? 'ano' : 'anos'}, `;
    frase += `${time.months} ${time.months === 1 ? 'mês' : 'meses'} e ${time.days} ${time.days === 1 ? 'dia' : 'dias'}`;
    
    title.innerText = frase;

    // Atualizando os quadradinhos de números
    row.innerHTML = `
        <div class="time-unit"><span class="time-number">${String(time.years).padStart(2,'0')}</span><span class="time-label-small">Anos</span></div>
        <div class="time-unit"><span class="time-number">${String(time.months).padStart(2,'0')}</span><span class="time-label-small">Meses</span></div>
        <div class="time-unit"><span class="time-number">${String(time.days).padStart(2,'0')}</span><span class="time-label-small">Dias</span></div>
    `;
}

// Botão principal
document.getElementById('love-btn').addEventListener('click', () => {
    updateUI();
    document.getElementById('bg-screen').classList.add('hidden');
    document.getElementById('reveal-screen').classList.add('visible');
    spawnParticles();
});

// Botão voltar
document.getElementById('back-btn').addEventListener('click', () => {
    document.getElementById('bg-screen').classList.remove('hidden');
    document.getElementById('reveal-screen').classList.remove('visible');
});

// Animação da Waveform
const wave = document.getElementById('waveform');
for (let i = 0; i < 12; i++) {
    const bar = document.createElement('div');
    bar.className = 'waveform-bar';
    bar.style.height = (Math.random() * 20 + 10) + 'px';
    bar.style.animationDelay = (i * 0.1) + 's';
    wave.appendChild(bar);
}

// Partículas
function spawnParticles() {
    const container = document.getElementById('particles');
    container.innerHTML = '';
    for (let i = 0; i < 20; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        p.style.left = Math.random() * 100 + '%';
        p.style.bottom = '0';
        p.style.width = p.style.height = (Math.random() * 5 + 2) + 'px';
        p.style.animationDelay = (Math.random() * 3) + 's';
        container.appendChild(p);
    }
}