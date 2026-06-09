# Etap 3 — Prototyp Hi-Fidelity: przewodnik „Low-Fi → Figma"

Projekt: **ReadLab**. Cel etapu: szczegółowy projekt wizualny + interaktywny prototyp w Figmie.

Masz już wszystko, by zrobić to odtwórczo:
- szkice Low-Fi (`assets/*.svg`) — szkielet układu,
- działającą aplikację jako wzorzec 1:1 (`cd app && npm run dev`),
- pełną specyfikację wizualną poniżej.

Czas: ~2–3 h. Robisz to raz, „ubierając" wireframe'y w style.

---

## 0. Konfiguracja pliku
1. Nowy plik w Figmie → nazwa **ReadLab — Hi-Fi**.
2. Utwórz dwie ramki (Frame): **Desktop 1280×800** i **Mobile 390×844** (presety w panelu po prawej).

## 1. Style kolorów (Local styles → Color)
Zdefiniuj jako style, żeby zachować spójność (i łatwy tryb ciemny):

| Nazwa stylu | Light | Dark |
|---|---|---|
| `bg` | `#FBFBFD` | `#000000` |
| `surface` | `#FFFFFF` | `#1C1C1E` |
| `fg` (tekst główny) | `#1D1D1F` | `#F5F5F7` |
| `fg2` (tekst drugorzędny) | `#6E6E73` | `#86868B` |
| `line` (hairline) | `#D2D2D7` | `#38383A` |
| `hover` | `#F5F5F7` | `#2C2C2E` |
| `danger` | `#D70015` | `#FF453A` |

## 2. Style tekstu (Local styles → Text)
Font: **SF Pro Text/Display** (lub Inter, jeśli brak SF). Wszystkie z `letter-spacing: -1%` na nagłówkach.

| Styl | Rozmiar / waga |
|---|---|
| Wordmark | 17 / Semibold |
| Tytuł modala | 18 / Semibold |
| Tytuł karty | 15 / Medium |
| Body / przyciski | 14 / Medium |
| Tekst drugorzędny (autor) | 13 / Regular |
| Meta | 12 / Regular |
| Chip / etykieta | 11 / Regular |
| Nagłówek sekcji (UPPERCASE) | 10–11 / Semibold, letter-spacing +6% |

## 3. Efekty i promienie
- **Promienie:** karta `18`, modal `24`, input `12`, przyciski i filtry `999` (pill).
- **Cień modala:** `0 24 64 rgba(0,0,0,0.24)`; backdrop overlay `#000` 30% + blur.
- **Cień karty (hover):** `0 6 24 rgba(0,0,0,0.07)`. Domyślnie karta bez cienia, tylko hairline.

## 4. Import szkieletu
Przeciągnij `assets/wireframe-01-lista.svg` itd. na kanwę — posłużą jako podkład/miarka.
Buduj na nich docelowe elementy, potem usuń podkład.

## 5. Komponenty (Create component — `⌥⌘K`)
Zbuduj raz, używaj wszędzie:
- **Button / Primary** — pill, fill `fg`, tekst `surface`, padding 16×10.
- **Button / Secondary** — pill, obrys `line`, tekst `fg`.
- **Chip (tag)** — pill, obrys `line`, tekst 11 `fg2`.
- **Input** — h 40, radius 12, obrys `line`, label 12 `fg2` nad polem.
- **Card** — radius 18, fill `surface`, obrys `line`; warianty: *default* / *done* (opacity 55%).
- **Toggle** — 50×30, on = fill `fg`, knob biały.
- **Segmented control** (mobile) — track `hover`, aktywny segment `surface`.

## 6. Złożenie ekranów (zastąp bloki Low-Fi komponentami)
- **Lista (desktop):** TopBar (wordmark + search pill + ikona ⚙ + Button/Primary „+ Dodaj”), pasek filtrów (3 pille + „Sortuj”), 3 kolumny z nagłówkiem UPPERCASE + licznik, karty (Card). Tło `bg`.
- **Lista (mobile):** TopBar kompaktowy, search, segmented control, karty na pełną szerokość.
- **Dodaj / Edytuj:** overlay (przyciemnione tło) + modal `surface` radius 24; pola Input; stopka z Button/Primary + Secondary (w edycji dodatkowo „Usuń” `danger`).
- **Ustawienia:** modal, 3 sekcje z nagłówkami UPPERCASE, wiersze rozdzielone `line`, Toggle + select „limit” + przycisk „Wyczyść”.
- **Potwierdzenie usunięcia:** mały modal, Button/Secondary + przycisk `danger`.

## 7. (Opcjonalnie) tryb ciemny
Zduplikuj stronę, podmień style kolorów na wartości Dark z tabeli — to atut wizualny.

## 8. Prototyp (zakładka Prototype) — wg `assets/user-flow.svg`
Połącz „On click”:
- „+ Dodaj” → **Open overlay** „Dodaj książkę”.
- karta → Open overlay „Edytuj książkę”.
- ikona ⚙ → Open overlay „Ustawienia”.
- „Zapisz”/„Anuluj”/„✕” → **Close overlay** (powrót do listy).
- „Usuń” → Open overlay „Potwierdź usunięcie”; „Usuń” → Close (powrót do listy).
Ustaw animację „Dissolve / Move in” dla naturalnego wejścia modali.

## 9. Udostępnienie (link do oddania)
**Share** (prawy górny róg) → **Anyone with the link → can view** → **Copy link**.
Wklej link do `README.md` (sekcja „Linki do oddania”) i do dokumentacji.

---

**Wskazówka:** najszybciej jest mieć obok otwartą działającą aplikację (`npm run dev`) i odwzorować
1:1 — kolory, odstępy i typografia są w niej dokładnie takie, jak w tabelach wyżej.
