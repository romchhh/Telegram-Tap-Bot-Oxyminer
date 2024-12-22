# Telegram-Tap-Bot-Oxyminer

Telegram-Tap-Bot-Oxyminer — це інтерактивна гра для користувачів Telegram, яка дозволяє гравцям видобувати віртуальні монети, взаємодіяти з друзями та збільшувати пасивний дохід за допомогою NFT.

## Особливості

- **Видобування монет**: Гравці взаємодіють з ботом Telegram, виконують дії й отримують нагороди.
- **NFT інтеграція**: Покращення пасивного доходу за рахунок підключення NFT.
- **Взаємодія з друзями**: Гравці можуть створювати спільноти, обмінюватися досягненнями або допомагати один одному виконувати завдання.

## Вимоги до системи

- **Node.js**: Остання стабільна версія.
- **npm**: Постачається разом з Node.js.

## Встановлення та запуск

1. **Клонування репозиторію:**
   ```bash
   git clone https://github.com/romchhh/Telegram-Tap-Bot-Oxyminer.git
   ```
2. **Перехід до директорії:**
   ```bash
   cd Telegram-Tap-Bot-Oxyminer
   ```
3. **Встановлення залежностей:**
   ```bash
   npm install
   ```
4. **Запуск бота:**
   ```bash
   node bot.js
   ```

## Лабораторні роботи

### **Лабораторна робота 1: Вибір ідеї та ініціалізація репозиторію**

- Виконано: створено репозиторій та визначено основну ідею проєкту.

### **Лабораторна робота 2: Налаштування проєкту та інструментів**

Мета: Забезпечення стандартизації та автоматизації перевірок коду.

Наступні кроки:

1.  Ініціалізовано ESLint та Prettier для перевірки та форматування коду.
2.  Інтегровано Husky для автоматичної перевірки коду перед комітом.
3.  Додано скрипти до package.json для перевірки та форматування:

"scripts": {
"lint": "eslint . --fix",
"format": "prettier --write ."
}

4.  Тестування налаштувань ESLint:

- Перевірено коректність роботи ESLint за допомогою команди:
  ```bash
  npm run lint
  ```
- Виконано виправлення знайдених помилок автоматично:
  ```bash
  npm run lint --fix
  ```

6.  Тестування форматування Prettier:

- Запуск команди для перевірки форматування:
  ```bash
  npm run format
  ```
- Усі файли було переформатовано згідно з налаштуваннями, вказаними у `.prettierrc`.

  7.  _Інтеграція Husky:_

- Додано гук `pre-commit` у Husky, який запускає скрипти `lint` і `format`:
  ```bash
  npx husky add .husky/pre-commit "npm run lint && npm run format"
  ```
- Перевірено роботу хуків Husky під час виконання комітів:
  ```bash
  git add .
  git commit -m "Test Husky integration"
  ```

---

#### Результати роботи

- Успішно налаштовано ESLint для перевірки синтаксису, Prettier для форматування коду та Husky для автоматизації перевірок перед комітом.
- Забезпечено стабільну інтеграцію між інструментами, що дозволяє підтримувати якість коду на високому рівні.
- Перед кожним комітом автоматично виконуються перевірки, що запобігає внесенню некоректного коду в репозиторій.

---

#### Висновок

Під час виконання лабораторної роботи було реалізовано базову інфраструктуру для забезпечення стандартизації та автоматизації роботи з кодом. Це сприяє підвищенню надійності та спрощенню підтримки проекту в майбутньому.

---

### **Лабораторна робота 3: Розробка структури застосунку для Telegram-Tap-Bot-Oxyminer**

#### **1. Компоненти/модулі та їх взаємодія**

##### **Основні компоненти**

1. **Telegram Bot:**

   - Відповідає за прийом команд від користувачів через Telegram API.
   - Передає запити до Backend для обробки.
   - Відправляє користувачам відповіді (баланс, інформацію про NFT тощо).

2. **Backend:**

   - Реалізує бізнес-логіку програми.
   - Виконує обчислення, оновлює баланс користувача, обробляє дані про NFT.
   - Працює з базою даних через API-запити.

3. **Frontend:**

   - Графічний інтерфейс для користувачів (опціонально, наприклад, для управління профілем або перегляду NFT).
   - Комунікує з Backend через API.

4. **База даних:**
   - Зберігає інформацію про користувачів, NFT, транзакції, друзів тощо.

##### **ER діаграма(буде доповнюватись)**

![ER Diagram](./docs/ER-diagram.png)

---

#### **2. Структура даних та зв’язки (ER-діаграма)**

##### **Сутності:**

1. **Users (Користувачі):**

   - Зберігає інформацію про користувачів.
   - Поля: `id`, `name`, `avatar`, `level`, `points`, `created_at`.

2. **NFT:**

   - Зберігає дані про цифрові активи.
   - Поля: `id`, `name`, `description`, `image`, `owner_id`, `getting_date`.

3. **Transactions (Транзакції):**

   - Реєструє всі операції з балансом користувачів.
   - Поля: `id`, `user_id`, `amount`, `type`, `date`.

4. **Friends (Друзі):**
   - Відображає зв’язки між користувачами.
   - Поля: `id`, `user_id`, `friend_id`.

##### **Зв’язки:**

- Один користувач може мати багато NFT (зв’язок 1:N).
- Користувач може мати багато транзакцій (зв’язок 1:N).
- Зв’язок між друзями (таблиця `friends`) є N:M.

---

#### **3. Опис оновлення та зміни даних**

##### **Ключові сценарії:**

1. **Оновлення балансу користувача:**

   - Користувач отримує нагороду за взаємодію з ботом.
   - **Процес:**
     1. Бот приймає команду користувача.
     2. Backend обчислює новий баланс.
     3. Дані зберігаються у таблицях `users` (оновлення поля `points`) і `transactions` (створення нового запису).

2. **Додавання друга:**

   - Користувач додає іншого користувача в друзі.
   - **Процес:**
     1. Бот отримує команду від користувача.
     2. Backend перевіряє наявність обох користувачів у системі.
     3. Додає запис у таблицю `friends`.

3. **Додавання NFT:**

   - Користувач отримує або купує NFT.
   - **Процес:**
     1. Бот передає дані про транзакцію на Backend.
     2. Backend додає запис у таблицю `nft`.
     3. Оновлюється баланс у таблиці `users` (зменшення після покупки).

4. **Перегляд профілю:**
   - Користувач переглядає свій профіль.
   - **Процес:**
     1. Бот запитує дані користувача у Backend.
     2. Backend отримує дані з таблиці `users` та `nft`.
     3. Відправляє їх користувачеві через бот.

##### **Приклад зміни даних:**

- **Сценарій:** Користувач отримує 100 балів за виконання дії.

  - **Таблиця `users`:** Поле `points` оновлюється на +100.
  - **Таблиця `transactions`:** Додається запис:
    ```
    { id: 1, user_id: 1, amount: 100, type: "reward", date: "2024-12-18" }
    ```

- **Сценарій:** Користувач купує NFT за 50 балів.
  - **Таблиця `nft`:** Додається запис:
    ```
    { id: 1, owner_id: 1, name: "Rare NFT", description: "Unique item", image: "url", getting_date: "2024-12-18" }
    ```

## Лабораторна робота №4

### Імплементація інтерактивного прототипу

**Мета**: Розробити інтерактивний прототип Telegram-бота, що використовує статичні (тимчасові) дані замість бази даних. Продемонструвати основні сценарії взаємодії користувача з ботом.

---

### Завдання

1. **Створити бота на основі Telegram Bot API**

   - Підключити бібліотеку `node-telegram-bot-api`
   - Реалізувати бот у режимі `polling`, щоб він реагував на повідомлення й команди в реальному часі.

2. **Реалізувати статичні дані (без БД)**

   - Дані про користувача (ім’я, рівень, очки тощо).
   - Дані про друзів.
   - Список NFT (з назвою, описом і зображенням).
   - Статичний список транзакцій (дата, сума, тип).

3. **Описати основні команди**

   - **/start** — вітальне повідомлення, кнопки:
     - **Play** (посилання на Web App або будь-який URL для демонстрації)
     - **Subscribe** (посилання на Telegram-канал)
     - **How to play** та **Registration** (callback-кнопки)
   - **/profile** — показ даних користувача (ім’я, рівень, очки).
   - **/friends** — відправка списку друзів.
   - **/nfts** — відправка списку NFT.
   - **/transactions** — відправка історії транзакцій.

4. **Імплементувати обробку callback-кнопок**

   - Наприклад, для кнопки «How to play» — вивести текстову інструкцію.
   - Для кнопки «Registration» — вивести тестове повідомлення чи форму реєстрації (демонстраційна логіка).

5. **Перевірити роботу бота**
   - Запустити бот командою `node bot.js`.
   - У Telegram знайти свого бота, надіслати `/start` та інші команди.
   - Переконатися, що бот відповідає за логікою з п.2-4.

---

### Короткий опис виконаної роботи

1. **Підготували середовище**: встановили Node.js, додали пакет `node-telegram-bot-api` у `package.json`.
2. **Створили сценарій бота** (`bot.js`):
   - Оголосили константу з токеном бота, створили екземпляр `TelegramBot` із параметром `{ polling: true }`.
   - Задали _статичні змінні_ для користувача, друзів, NFT і транзакцій.
   - Налаштували обробники команд `/start`, `/profile`, `/friends`, `/nfts`, `/transactions`.
   - У `/start` вивели привітання й інтерактивні кнопки (inline_keyboard).
   - Для колбеків «How to play» і «Registration» створили обробник `bot.on('callback_query', ...)`.
3. **Перевірили роботу бота**:

   - Запустили його локально за допомогою `node bot.js`.
   - При натискані на "Play" з'являється інтерфейс програми:

      | /start | /profile | /friends |
      |--------|----------|----------|
      | ![/start](./docs/image1Lab4.png)  | ![Mining](./docs/image2Lab4.png) | ![RoadMap](./docs/image3Lab4.png) |
   
      | /nfts | /transactions |  |
      |-------|---------------|--|
      | ![Friends](./docs/image4Lab4.png) | ![Profile](./docs/image5Lab4.png) | |

---

### Висновки

У межах Лабораторної роботи №4 було створено базовий інтерактивний прототип Telegram-бота без підключення до бази даних. Бот відповідає на команди, надсилає повідомлення зі статичними даними та реалізує кілька callback-кнопок. Це демонструє основи роботи з Telegram Bot API, принципи обробки команд, callback-запитів і побудови простих інтерфейсів на прикладі inline-кнопок.
