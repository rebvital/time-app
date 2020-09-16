

function carry () {
    let msg = document.getElementById('msg');
    let pic = window.document.getElementById('img');
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes()
    msg.innerHTML = `Now it's ${hour} hours and ${min} minutes. `
    if (hour >= 4 && hour < 12){
        msg.innerHTML += '<p>Good Morning!</p>';
        pic.innerHTML = '<img src="../assets/morning.jpg" alt="morning"></img>'
        document.body.style.background = '#e2cd9f';
    } else if (hour >= 12 && hour < 20 ) {
        msg.innerHTML += '<p>Good Afternoon!</p>';
        pic.innerHTML = '<img src="../assets/afternoon.jpg" alt="morning"></img>';
        document.body.style.background = '#b9846f'
    } else {
        msg.innerHTML += '<p>Good Night!</p>';
        pic.innerHTML = '<img src="../assets/night.jpg" alt="morning"></img>'
        document.body.style.background = '#515154'
    }
}