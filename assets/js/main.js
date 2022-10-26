// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.

const { createApp } = Vue;

createApp({
    data() {
        return {
            message: "messaggio di benvenuto",
            imgUrl: "https://picsum.photos/200/300"
        }
    }
}).mount('#app');
