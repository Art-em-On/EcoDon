function calculateEco() {
    const bottlesPerWeek = parseFloat(document.getElementById('bottles').value);
    const resultBox = document.getElementById('calc-result');
    
    if (isNaN(bottlesPerWeek) || bottlesPerWeek < 0) {
        resultBox.innerHTML = `Пожалуйста, введите корректное число.`;
        return;
    }

    if (bottlesPerWeek === 0) {
        resultBox.innerHTML = `
            🌱 <strong>Каждый путь начинается с первого шага!</strong> Вы пока не отказались от одноразовых бутылок, но экосистема Дона будет невероятно благодарна, если вы начнете с замены хотя бы 1-2 бутылок в неделю. Есть к чему стремиться!
        `;
        return;
    }
    
    // Считаем за месяц (4.33 недели в среднем в месяце)
    const bottlesPerMonth = Math.round(bottlesPerWeek * 4.33);
    
    // Вес одной стандартной бутылки 0.5л в граммах (~18 грамм)
    const plasticWeightGrams = bottlesPerMonth * 18;
    
    // Расчет предотвращенных микрочастиц и фрагментов
    const microparticlesEst = (plasticWeightGrams * 1.5).toFixed(1);

    resultBox.innerHTML = `
        ✨ За месяц вы сохранили: <strong>${bottlesPerMonth} бутылок</strong><br>
        📉 Вес предотвращенного пластика: <strong>${plasticWeightGrams} г</strong><br>
        🌊 Не допущено в экосистему Дона: ~<strong>${microparticlesEst} тыс. потенциальных частиц микропластика</strong>! Отличный вклад!
    `;
}

function submitForm(event) {
    event.preventDefault();
    
    const name = document.getElementById('userName').value;
    const location = document.getElementById('userLocation').value;
    
    // Подставляем имя и локацию в текст модального окна
    document.getElementById('modal-text').innerHTML = 
        `Спасибо, <strong>${name}</strong>! Вы успешно записаны на локацию: <em>«${location}»</em>. Мы свяжемся с вами по Email.`;
    
    // Показываем красивое модальное окно
    document.getElementById('customModal').classList.add('active');
}

function closeModal() {
    // Скрываем модальное окно и очищаем форму
    document.getElementById('customModal').classList.remove('active');
    document.getElementById('eco-form').reset();
}