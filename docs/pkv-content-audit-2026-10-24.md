# Аудит страницы PKV и пути клиента — 24.10.2026

**Статус: только анализ.** Код, тексты и настройки не менялись; в репозитории создан только этот файл. Звонков и отправок формы не было.

## 0. Что и как проверялось

| Что | Как |
|---|---|
| Состояние репозитория | ветка `main` = `origin/main` = `bf2d533` (последний слитый PR #27). Незакоммиченных изменений в отслеживаемых файлах нет; не отслеживаются (как раньше, не трогал): `design-source/ratgeber-unterlagen-besprechen-original.png`, `docs/`, `public/tonn-favicon-dark /`. PR #17 не затрагивался. |
| Исходники | `private-krankenversicherung/` (страница, подстраницы, `content.ts`), `data/home.ts`, `wissen/_lib/articles.ts`, `kontakt/`, `kontakt/danke`, `docs/redaktion/*` (согласованные формулировки, Erstinformation-Entwurf). |
| Реальный вид | локальный production-билд из `main` (http://localhost:3200), компьютер 1440 px и телефон 390 px; скриншоты: `~/Desktop/КЛОД/Страховки/audit-pkv/`. |
| Production | **доступен**, проверялся только чтением (HTTP-запросы): статус, title, description, canonical, hreflang, robots, h1. Это именно проверка опубликованного сайта (коммит `bf2d533`), а не локальная. |
| Не проверялось | **Search Console** (доступа нет; индексацию не запрашивал, sitemap не отправлял). По заметке `docs/launch-abschluss-2026-10-22.md` на 22.10 страница `/private-krankenversicherung` ещё не была в индексе — актуальный статус не проверен. Позиции, трафик, поведение пользователей — данных нет, всё, что об этом сказано ниже, помечено как гипотеза. |

Принятая терминология (по `docs/redaktion/*` и Impressum): Андреас Тонн — **Versicherungsvertreter (Mehrfachagent), § 34d Abs. 1 GewO**; не Makler, не Berater. Слова «unabhängig», «Makler», «Broker» на проверенных страницах не найдены (кроме Immobilienmakler в Impressum — это другая лицензия).

---

## 1. Краткий вывод

**Что уже хорошо**
- Страница PKV ясно называет тему (H1), на обоих устройствах кнопка «Kostenloses Erstgespräch» видна на первом экране.
- Тон честный и осторожный: «PKV ist nicht automatisch besser», «Eine pauschale Zahl wäre unseriös», в рассказе об анонимном запросе названы все возможные исходы, включая Ablehnung.
- Подстраницы (Angestellte / Selbstständige / Beamte) содержательные, с «Kurz beantwortet», примерами, оговорками и источниками (BaFin, SGB V, Verbraucherzentrale, PKV-Verband).
- Статус указан верно: «Versicherungsvertreter mit mehreren Versicherungspartnern».
- Техника без ошибок: все проверенные страницы отвечают 200, canonical и hreflang (de/en/ru/x-default) на месте, общего noindex нет, страница благодарности — `noindex`.
- Путь к контакту короткий: из любой страницы PKV в /kontakt — один клик; после формы пользователь видит срок ответа (15 минут в рабочее время).

**Что действительно мешает**
1. На первом экране PKV нет трёх вещей: **для кого**, **где** (регион) и **что я получу после разговора**. Подзаголовок «Persönlich beraten. Versicherungsangebote vergleichen. Langfristig gedacht.» — общий.
2. Клиент, **уже privat versichert**, на странице PKV не находит ничего для себя; единственный вход — карточка на главной, ведущая на статью.
3. Подписи кнопок не всегда совпадают с целью: «Online-Termin vereinbaren» ведёт на ту же страницу контактов без выбора «онлайн»; на подстраницах единственный призыв к действию стоит в самом конце.
4. Несколько терминов остаются без объяснения (Risikozuschlag, Leistungsausschluss, Normalannahme), один термин написан неверно.
5. Часть доверительных формулировок зависит от фактов, которые может подтвердить только Андреас (список в разделе 5).

---

## 2. Пять приоритетных улучшений

Обозначения: **[Факт]** — подтверждено исходником/проверкой; **[Гипотеза]** — предположение о пользе, данных нет.

### P1. Первый экран PKV: для кого, где, что получу

- **Место:** `private-krankenversicherung/_components/content.ts` → `hero.eyebrow`, `hero.subtitle`; тот же текст в `src/i18n/content/pkv.en.ts` и `pkv.ru.ts`.
- **Сейчас [Факт]:** eyebrow «Private Krankenversicherung» дублирует H1; подзаголовок «Persönlich beraten. Versicherungsangebote vergleichen. / Langfristig gedacht.». «Münster» и «deutschlandweit» появляются только в третьем пункте полосы доверия под героем («in Münster und deutschlandweit») и в `<title>`. Кому помогает Андреас (Angestellte, Selbstständige, Beamte), видно только со следующего экрана.
- **Проблема:** посетитель из поиска («PKV Münster») не получает на первом экране ответа на «для меня ли это» и «что будет после обращения». «Langfristig gedacht» — общая фраза без содержания.
- **Предлагаю:** eyebrow → «PKV-Beratung in Münster und deutschlandweit»; подзаголовок → «Für Angestellte, Selbstständige und Beamte. / Wir klären persönlich, ob die PKV zu Ihnen passt – und vergleichen Versicherungsangebote.» Все слова уже есть в согласованных текстах проекта («Vergleich verschiedener Versicherungsangebote», «Münster und deutschlandweit»).
- **Польза [Гипотеза]:** быстрее понятно «это про меня», регион виден сразу. Региональное слово «NRW» **не предлагаю**: в данных проекта его нет (см. раздел 5), «Münsterland» стоит только на странице Über uns.

### P2. Подписи и цели кнопок, ранний призыв на подстраницах

- **Места:** `content.ts` → `hero.secondary`, `faq.more`; `_sub/SubPage.tsx` (блок после «Kurz beantwortet»); `data/home.ts` → `processSection.cta`.
- **Наблюдения [Факт]:**
  - «Online-Termin vereinbaren» и «Kostenloses Erstgespräch» ведут на один и тот же `/kontakt`. В форме нет выбора «онлайн/на месте» и нет записи на конкретное время: поля — тема (необязательно), имя, e-mail, ответ по e-mail/звонком, телефон, сообщение. Метка обещает больше, чем делает страница; карточка на /kontakt называется «Termin anfragen».
  - На Angestellte-странице первая ссылка на контакт стоит на ≈5034 px из 5558 px (≈90 % прокрутки) — только после раздела «Quellen».
  - «Alle Fragen anzeigen» ведёт на /wissen — общий каталог (PKV, BU, Kapitalanlage), а не на «все вопросы».
  - «Mehr zum Ablauf» на главной ведёт на верх страницы PKV (у блока «Erst prüfen. Dann entscheiden» нет якоря), а не к процессу.
  - Тема в форме не подставляется: клик «Kostenloses Erstgespräch» с PKV-страницы приводит на /kontakt с пустым выбором темы.
- **Предлагаю:**
  - «Online-Termin vereinbaren» → «Termin anfragen» (совпадает с карточкой на /kontakt; формат — онлайн или на месте — уточняется в разговоре; видео-консультация подтверждена в текстах проекта).
  - Подстраницы: после «Kurz beantwortet» одна строка-ссылка «Ihre Situation persönlich besprechen →» на /kontakt; нижний блок оставить как есть.
  - «Alle Fragen anzeigen» → «Weitere Fragen im Ratgeber».
  - Якорь на блок процесса и ссылка «Mehr zum Ablauf» → `/private-krankenversicherung#ablauf` (небольшая правка кода).
  - Подстановку темы (`/kontakt?thema=…`) **отдельно и только по решению владельца**: это затрагивает форму, в рамках аудита не предлагаю менять.
- **Польза [Гипотеза]:** меньше ложных ожиданий («онлайн-запись»), ранний выход на контакт для читателей длинных страниц.

### P3. Путь «уже privat versichert»

- **Место:** `content.ts` → `secondOpinion`; `data/home.ts` → `situations.cards[3]`; `wissen/_lib/articles.ts` → `tarifwechsel-pkv` (поле `cta`).
- **Наблюдения [Факт]:**
  - PKV-страница не упоминает существующий договор, Tarifwechsel, рост взносов. Ссылок на `/wissen/tarifwechsel-pkv` и `/wissen/pkv-oder-gkv` со страницы нет (проверено по ссылкам), хотя на ней есть блок «PKV oder GKV?» с таблицей.
  - Путь: главная → карточка «Bereits privat versichert — Optimieren und besser aufstellen» → статья Tarifwechsel → кнопка «Persönliches Gespräch vereinbaren» (общая для всех статей).
  - «Optimieren» обещает результат, которого страница не гарантирует (статья сама оговаривает ограничения).
  - Страница Über uns уже говорит: Андреас помогает «bei Fragen … zu bestehenden Verträgen» — основание для этого пути есть.
- **Предлагаю:** в блок «Bereits ein Angebot?» добавить строку со ссылкой на статью Tarifwechsel; на карточке главной заменить подпись; в статье задать собственный `cta.label`. Тексты — в разделе 3. Без обещаний экономии.
- **Польза [Гипотеза]:** у посетителя с действующим договором появляется понятный вход со страницы PKV; ссылка на статью также усиливает внутреннюю перелинковку (см. раздел 4).

### P4. Объяснить термины и убрать ошибку

- **Место:** `content.ts` → `risk.results`, `faq.items[2]`; `articles.ts` → `anonyme-risikovoranfrage` (пример).
- **Наблюдения [Факт]:**
  - Исходы запроса (Normalannahme, Risikozuschlag, Leistungsausschluss, Ablehnung) перечислены без пояснений на PKV-странице, в подстраницах и в статье.
  - FAQ: «Altersrückstellungen»; в подстраницах, статьях и по закону — «**Alterungsrückstellung**» (6 вхождений в статьях, 0 вхождений «Altersrückstellung» вне FAQ). Это ошибка термина.
  - Ссылка «Mehr zur Risikovoranfrage» с PKV-страницы ведёт в статью, единственный пример в которой — **BU** (Rückenbehandlung, Berufsunfähigkeit), хотя читатель пришёл по PKV.
- **Предлагаю:** одна строка пояснения под перечнем исходов; исправить термин; добавить в статью второй короткий пример для PKV (структура та же, что у BU-примера, но с проверкой владельцем — раздел 5).
- **Польза [Гипотеза]:** меньше непонимания в самом чувствительном месте воронки (здоровье), согласованность терминологии.

### P5. Доверие и процесс: что происходит после первого разговора

- **Место:** `content.ts` → `trust[0]`, `process`, `about`.
- **Наблюдения [Факт]:**
  - Заголовок полосы доверия «Persönliche Versicherungsberatung» (и «Personal insurance advice» / «Персональная страховая консультация» в EN/RU). В списке согласованных формулировок (`formulierungen-zur-freigabe.md`, п. 10 и п. 14) для этого места согласовано «Persönliche Beratung», а слово «-beratung» отмечено как риск (близость к защищённому званию Versicherungsberater, § 34e GewO). Текущий текст отличается от согласованного.
  - Блок процесса объясняет четыре шага, но не сообщает: где проходит разговор (Münster / видео — это подтверждено в проекте), сколько он длится, что нужно подготовить, как долго ждать результат запроса.
  - В блоке «Ansprechpartner» нет подтверждённых владельцем фактов, которые уже используются на главной («Seit 1991 in der Versicherungsbranche», «über 1.600 Kundinnen und Kunden»).
- **Предлагаю:** вернуть согласованную формулировку «Persönliche Beratung — ohne Verpflichtung»; в шаг 1 добавить «vor Ort in Münster oder per Video»; остальное (длительность, документы, сроки) — только после ответов владельца (раздел 5). Факты 1991 / 1.600 можно повторить в блоке «Ansprechpartner» дословно из главной, не приписывая их PKV («Kundinnen und Kunden», не «PKV-Kunden»).
- **Польза [Гипотеза]:** согласованность с утверждённым статусом, меньше «чёрного ящика» в процессе.

---

## 3. Таблица «Сейчас → Предлагаю» (немецкий вариант и перевод на русский)

Все варианты — предложения для согласования владельцем; EN/RU-версии страницы (`pkv.en.ts`, `pkv.ru.ts`) нужно обновлять синхронно.

| # | Место | Сейчас (DE) | Предлагаю (DE) | Перевод предложения (RU) |
|---|---|---|---|---|
| 1 | PKV, Hero, eyebrow | Private Krankenversicherung | PKV-Beratung in Münster und deutschlandweit | Консультация по PKV в Мюнстере и по всей Германии |
| 2 | PKV, Hero, подзаголовок | Persönlich beraten. Versicherungsangebote vergleichen. Langfristig gedacht. | Für Angestellte, Selbstständige und Beamte. Wir klären persönlich, ob die PKV zu Ihnen passt – und vergleichen Versicherungsangebote. | Для наёмных работников, самозанятых и госслужащих. Мы лично выясняем, подходит ли вам PKV, и сравниваем страховые предложения. |
| 3 | PKV, Hero, вторая кнопка | Online-Termin vereinbaren | Termin anfragen | Запросить встречу |
| 4 | PKV, полоса доверия | Persönliche Versicherungsberatung / ohne Verpflichtung | Persönliche Beratung / ohne Verpflichtung | Личная консультация / без обязательств |
| 5 | PKV, процесс, шаг 1 | Kurzes Gespräch – Ihre Situation und Ziele verstehen. | Kurzes Gespräch – vor Ort in Münster oder per Video: Ihre Situation und Ziele verstehen. | Короткий разговор — в Мюнстере или по видео: понять вашу ситуацию и цели. |
| 6 | PKV, FAQ «Beitrag im Alter» | …fließen Altersrückstellungen ein… | …fließen Alterungsrückstellungen ein… | …учитываются Alterungsrückstellungen (резервы на старение)… |
| 7 | PKV, блок «Gesundheitliche Vorgeschichte?» (новая строка под перечнем исходов) | – | Risikozuschlag: Aufschlag auf den Beitrag. Leistungsausschluss: Bestimmte Leistungen sind vom Schutz ausgenommen. | Risikozuschlag — надбавка к взносу. Leistungsausschluss — отдельные услуги исключены из страховой защиты. |
| 8 | PKV, блок «Bereits ein Angebot?» (дополнение) | Wir schauen uns Ihr PKV-Angebot, die Leistungen, Selbstbeteiligung und wichtige Vertragsdetails gemeinsam mit Ihnen an. | … *(текст как сейчас)* + Sie sind bereits privat versichert? Wie ein Tarifwechsel im bestehenden Vertrag grundsätzlich funktioniert, erklären wir hier: *Tarifwechsel in der PKV*. Ihre Möglichkeiten besprechen wir gern persönlich. | Вы уже застрахованы в PKV? Как в принципе работает смена тарифа в действующем договоре, объясняем здесь: «Tarifwechsel in der PKV». Ваши возможности мы с удовольствием обсудим лично. |
| 9 | PKV, FAQ, ссылка | Alle Fragen anzeigen | Weitere Fragen im Ratgeber | Другие вопросы в разделе «Ратгебер» |
| 10 | Главная, карточка | Bereits privat versichert – Optimieren und besser aufstellen | Bereits privat versichert – Bestehenden Vertrag prüfen | Уже в PKV — проверить действующий договор |
| 11 | Статья Tarifwechsel, кнопка | Persönliches Gespräch vereinbaren | Bestehenden Vertrag besprechen | Обсудить действующий договор |
| 12 | Подстраницы, после «Kurz beantwortet» (новая строка) | – | Ihre Situation persönlich besprechen → | Обсудить вашу ситуацию лично → |
| 13 | Главная, «Mehr zum Ablauf» | ведёт на `/private-krankenversicherung` (верх) | ведёт на `/private-krankenversicherung#ablauf` | (текст кнопки не меняется) |
| 14 | Статья «Anonyme Risikovoranfrage», пример | только пример BU | + Eine Person mit einer früheren Rückenbehandlung möchte in die PKV wechseln. Über die anonyme Voranfrage erfährt sie vorab, welche Versicherer sie ohne Zuschlag, mit Risikozuschlag oder mit Leistungsausschluss annehmen würden. | Человек с прошлым лечением спины хочет перейти в PKV. Анонимный предварительный запрос показывает заранее, какие страховщики приняли бы его без надбавки, с надбавкой или с исключением услуг. |

---

## 4. SEO по содержанию

**Подтверждено (production, 24.10.2026)**

| Страница | title | description | canonical / hreflang / robots |
|---|---|---|---|
| `/` | 63 зн., «Versicherungsvermittler Münster \| PKV, BU, Kapitalanlage \| TONN» | 150 зн. | canonical ✓, hreflang de/en/ru/x-default ✓, без robots (индексируется) |
| `/private-krankenversicherung` | 59 зн., «PKV Münster \| Private Krankenversicherung & Beratung \| TONN» | 150 зн. | ✓ ✓, индексируется |
| `/private-krankenversicherung/angestellte` | 53 зн. | 164 зн. | ✓ ✓ |
| `/…/selbststaendige` | 55 зн. | 165 зн. | ✓ ✓ |
| `/…/beamte` | 50 зн. | 153 зн. | ✓ ✓ |
| `/berufsunfaehigkeitsversicherung` | 59 зн. | 156 зн. | ✓ ✓ |
| `/wissen/anonyme-risikovoranfrage`, `/wissen/tarifwechsel-pkv`, `/wissen/pkv-oder-gkv` | 53–56 зн. | 137–155 зн. | ✓ ✓ |
| `/kontakt` | 37 зн. | 128 зн. | ✓ ✓ |
| `/kontakt/danke` | «Vielen Dank \| TONN» | (общее описание сайта) | `noindex, follow`, hreflang нет — как задумано |
| `/en`, `/ru`, `/en|ru/private-krankenversicherung` | 66–76 зн. | EN 168–184, **RU 207–238** | canonical ✓, hreflang ✓, `index, follow` |
| `/en/kontakt/danke` | «Thank you \| TONN» | нет | `noindex, nofollow` |

Заголовки: у каждой проверенной страницы один H1; структура H2/H3 на PKV, на главной и в статьях логична (проверено по рендеру).

**Подтверждённые наблюдения (не ошибки, а точки внимания)**
- Страница PKV не ссылается на `/wissen/pkv-oder-gkv` (при том что содержит блок «PKV oder GKV?») и на `/wissen/tarifwechsel-pkv`. Внутренняя перелинковка: PKV → 3 подстраницы + 1 статья + /wissen + /ueber-uns.
- FAQ на PKV почти дословно повторяет разделы выше: ответ «Was ist eine anonyme Risikovoranfrage?» дублирует блок «Das muss kein Ausschlusskriterium sein»; ответ про Einkommen — первый абзац страницы Angestellte. Само по себе не вредно; можно сократить ответ и поставить ссылку на статью.
- Главная: H1 «Private Krankenversicherung», а title — «Versicherungsvermittler Münster | PKV, BU, Kapitalanlage» — H1 и title говорят о разном; H1 главной и H1 страницы PKV совпадают.

**Гипотезы (данных Search Console нет, не подтверждено)**
- Совпадение H1 главной и страницы PKV может создавать внутреннюю конкуренцию за запрос «Private Krankenversicherung». Проверить стоит по Search Console, а не менять заранее.
- Пересечение намерений между страницей PKV, подстраницами и статьёй «PKV oder GKV» (каннибализация) — на текущем различии контента и ссылок маловероятно; без данных не менять.
- Длинные RU/EN description (до 238 зн.) обрезаются в выдаче — косметика, не приоритет.
- В H1 строки лежат в отдельных `<span>` без пробела: текстовое извлечение даёт «PrivateKrankenversicherung…». Для Google, скорее всего, безразлично (блочные элементы), для скринридеров — проверить; не приоритет.

**Что не предлагаю:** вставлять ключевые слова, переписывать подстраницы (они хороши и содержательны), менять title/description PKV (корректны и соответствуют содержанию).

---

## 5. Утверждения, которые должен подтвердить владелец

| # | Утверждение (где) | Что нужно уточнить |
|---|---|---|
| 1 | «Anonyme Risikovoranfrage … bei mehreren Versicherern» (PKV: полоса доверия, процесс, блок риска, FAQ; главная) | У скольких и каких страховщиков запрос делается; делает ли Андреас сам или через сервис; всегда ли это возможно для PKV; сроки ответа. Влияет и на фразу «Ihre Gesundheitsdaten bleiben vertraulich» (главная). |
| 2 | «Kostenloses Erstgespräch», «Kostenlos» | Что именно бесплатно (только первый разговор или вся консультация); формулировка о вознаграждении. Проект Erstinformation (§ 15 VersVermV, `docs/redaktion/erstinformation-entwurf.md`) **не опубликован**, в нём открыты вопросы: прочие вознаграждения, подтверждение консультации, список страховщиков (§ 60 Abs. 2 VVG). |
| 3 | «Versicherungspartner», «Zusammenarbeit mit mehreren Versicherern», «Vergleich verschiedener Angebote» | Число и названия партнёров; на какой рыночной основе даются рекомендации. |
| 4 | Регион: «Münster und deutschlandweit», «Münsterland» (Über uns) | Является ли NRW заявленным регионом работы. В данных проекта «NRW» отсутствует, поэтому не использовал. |
| 5 | «Bereits privat versichert» / помощь по действующему договору | Оказывает ли Андреас консультации по действующим PKV-договорам (в Über uns это уже сказано: «bei Fragen … zu bestehenden Verträgen») и для любых страховщиков ли. |
| 6 | «Das muss kein Ausschlusskriterium sein» (блок риска) | Не слишком ли обнадёживающий тон при четвёртом исходе «Ablehnung». |
| 7 | «Seit 1991 …», «über 1.600 Kundinnen und Kunden» | Уже подтверждено для главной (22.10.2026). Подтвердить повтор на странице PKV дословно. |
| 8 | «Zufriedene Kundinnen und Kunden» (главная, полоса доверия) | Пункт 4 списка согласований остался без изменений. |
| 9 | JSON-LD `serviceType`: «Versicherungsberatung und -vermittlung» (PKV, BU, Versicherungen) | Пункт 15 списка согласований оставлен без изменений; решение за владельцем. |
| 10 | Привязанные к году данные на подстраницах (JAEG 77.400 €, BBG 69.750 €, Öffnungsaktion) | Назначить ответственного за ежегодное обновление (каждый январь); без этого цифры устареют. |
| 11 | Формат и время консультации (длительность, документы, сроки) | Нужны для усиления блока процесса (P5); без ответа ничего не добавлять. |

---

## 6. Пути клиента (пройдено кликами, без отправки форм и звонков)

**Сценарий 1 — новый посетитель:** Главная → пункт «PKV» в шапке → `/private-krankenversicherung` → карточка «Angestellte» → `/private-krankenversicherung/angestellte` → «Kostenloses Erstgespräch vereinbaren» → `/kontakt` (форма). Итого 4 перехода; на странице Angestellte единственная ссылка на контакт находится у самого конца (≈90 %). Тема в форме не выбрана, формата «онлайн/на месте» в форме нет. Форма начинается на ≈947 px (на компьютере чуть ниже первого экрана), срок ответа (15 минут) виден только под кнопкой формы.

**Сценарий 2 — уже в PKV:** Главная → карточка «Bereits privat versichert» → `/wissen/tarifwechsel-pkv` → «Persönliches Gespräch vereinbaren» (общая кнопка статей) → `/kontakt`. Со страницы `/private-krankenversicherung` пути нет (нет ни ссылки, ни упоминания действующего договора).

| Кнопка / ссылка | Цель | Соответствие |
|---|---|---|
| Kostenloses Erstgespräch (Hero, процесс, финал) | /kontakt | ✓ |
| Online-Termin vereinbaren | /kontakt | ⚠ та же страница; онлайн-записи и выбора формата нет |
| Mehr erfahren (3 карточки) | подстраницы | ✓ (доступное имя «Mehr erfahren zu …») |
| Mehr zur Risikovoranfrage | /wissen/anonyme-risikovoranfrage | ✓, но в статье пример только по BU |
| Mehr über Andreas Tonn | /ueber-uns | ✓ |
| Angebot prüfen lassen | /kontakt | ✓ |
| Alle Fragen anzeigen | /wissen | ⚠ каталог всех тем, не «все вопросы» |
| Главная: Mehr zum Ablauf | /private-krankenversicherung (верх) | ⚠ нет якоря на блок процесса |
| Главная: Bereits privat versichert | /wissen/tarifwechsel-pkv | ✓ по сути, ⚠ «Optimieren» обещает результат |

---

## 7. Что предлагаю сделать первым небольшим PR

**«PKV: тексты первого экрана и подписи кнопок»** — только тексты, без изменения разметки, логики формы и стилей:

1. Hero: eyebrow и подзаголовок (строки 1–2 таблицы);
2. вторая кнопка Hero → «Termin anfragen» (3);
3. заголовок полосы доверия → «Persönliche Beratung» (4, возврат к согласованному);
4. FAQ: «Alterungsrückstellungen» (6) и подпись ссылки «Weitere Fragen im Ratgeber» (9).

Файлы: `private-krankenversicherung/_components/content.ts` и синхронно `src/i18n/content/pkv.en.ts`, `pkv.ru.ts`. Перед началом нужно согласование текстов владельцем (пп. 4 и 7 раздела 5 для региона и фактов). Остальные пункты (процесс, действующие договоры, ссылки, якорь, пояснения исходов) — отдельными PR после ответов на раздел 5.

*Скриншоты и измерения: `~/Desktop/КЛОД/Страховки/audit-pkv/` (PKV, главная, Angestellte, Kontakt, статьи — первый экран компьютер/телефон, PKV целиком). Данные Search Console в аудите не использовались.*
