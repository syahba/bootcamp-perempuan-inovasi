// exercise: buat contact us form lalu tampilkan input ketika click button
const submit = document.getElementById('submit');
submit.addEventListener('click', (event) => {
    event.preventDefault();
    getInput();
});

const getInput = () => {
    const popup = document.getElementById('popup');
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const data = `Hi, my name is ${name} and my message is ${message}. You can contact me at ${email}`;
    // confirm(data);
    popup.style.cssText = `
        background-color: pink;
        text-align: center;
        padding: 12px;
        z-index: 10;
        position: fixed;
    `;
    popup.innerHTML = `
        <h2>Check your message!</h2>
        <p>${data}</p>
        <button type="button">Close</button>
    `;
};