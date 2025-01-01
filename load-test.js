import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  stages: [
    { duration: '30s', target: 10 }, // розігрів: 10 користувачів за 30 секунд
    { duration: '1m', target: 50 }, // тестове навантаження: 50 користувачів протягом 1 хвилини
    { duration: '30s', target: 0 }, // завершення тесту
  ],
};

export default function () {
  const BASE_URL = 'https://ace8-91-196-82-18.ngrok-free.app'; // URL вашого додатку
  let res = http.get(BASE_URL);

  // Перевірка статусу відповіді
  if (res.status !== 200) {
    console.error(`HTTP error: ${res.status}`);
  }

  sleep(1); // імітація затримки між запитами
}
