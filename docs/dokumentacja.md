# ReadLab — dokumentacja projektowa

**Przedmiot:** Projektowanie Interfejsów Użytkownika · **Prowadzący:** mgr inż. Bartłomiej Kizielewicz
**Temat:** interfejs aplikacji typu _Task Management App_ · **Technologie:** React + Tailwind CSS + localStorage
**_Wykonanie:_** Gracjan Prusik, Neumann Bartłomiej
ReadLab to aplikacja do zarządzania **kolejką książek do przeczytania**, ze statusami
**Kolejka → W trakcie → Skończone**.

## Linki do oddania

- **Repozytorium (kod źródłowy):** ...
- **Prototyp w Figmie:** ...
- **Uruchomienie lokalne:** `cd app && npm install && npm run dev` → http://localhost:3000

---

## 1. Opis problemu projektowego

Osoby uczące się samodzielnie gromadzą książki szybciej, niż są w stanie je przeczytać. Tytuły
rozsypane są po notatkach, zakładkach i kartkach; brakuje jednego miejsca, które jasno pokazuje:
**co czytam teraz, co czeka w kolejce, co już skończyłem**. Istniejące narzędzia są albo zbyt
ciężkie (Notion, Goodreads), albo zbyt ubogie (zwykła lista to-do nie rozróżnia „w trakcie" od
„w kolejce"). ReadLab rozwiązuje dokładnie ten problem — bez zbędnych funkcji, w lekki sposób.

## 2. Persony

**Persona A — „Samouk po godzinach" (28–32 lata, pracuje na etacie).** Uczy się wieczorami na
laptopie. Zapisuje kolejne książki szybciej, niż je kończy; zaczyna kilka naraz i gubi, co było
w połowie. Potrzebuje: statusu „W trakcie" z limitem, priorytetów, tagów, kolejki. Urządzenie:
głównie **desktop**.

**Persona B — „Student w biegu" (20–23 lata).** Miesza lektury obowiązkowe z własnymi, zapomina
o terminach, dodaje materiały „na szybko". Potrzebuje: terminów, filtrowania, szybkiego dodawania,
wyszukiwarki. Urządzenie: **mobile-first**.

Kontrast person uzasadnia zakres funkcji i wymóg responsywności (desktop + mobile).

## 3. Główny przepływ użytkownika (User Flow)

> Użytkownik otwiera aplikację → widzi, co ma „W trakcie" → klika **„+ Dodaj"** → wpisuje tytuł
> i autora → **Zapisz** → książka trafia do **Kolejki** → później przeciąga ją do **„W trakcie"**
> → po przeczytaniu do **„Skończone"**.

Przepływ obejmuje pełny wymagany CRUD (dodawanie, edycja, usuwanie, zmiana statusu, lista).
Pełna mapa: `assets/user-flow.svg`. Ekrany: lista (kanban / taby na mobile), modal dodawania,
modal edycji (z usuwaniem i potwierdzeniem), ustawienia.

## 4. Zakres funkcjonalny

**Wymagany (CRUD):** dodawanie, edycja, usuwanie książki, zmiana statusu (Kolejka → W trakcie →
Skończone), wyświetlanie listy.
**Rozszerzony:** wyszukiwarka, filtrowanie (tag, priorytet), sortowanie, tagi, priorytety, terminy
z ostrzeżeniem, tryb ciemny, walidacja formularza, zapis w `localStorage`.

## 5. Wnioski z testów użyteczności

Testy przeprowadzono z **3 osobami** metodą „think aloud" (scenariusz: `docs/etap-4-testy.md`).

> _Uzupełnij po testach: 3–5 zdań — co działało, jakie problemy się powtórzyły, jakie poprawki
> wprowadzono (np. wyraźniejsza podpowiedź przeciągania kart, czytelniejszy stan błędu)._

## 6. Uzasadnienie najważniejszych decyzji projektowych

- **Statusy Kolejka → W trakcie → Skończone** zamiast prostego „wykonane" — to realny cykl życia
  książki i rdzeń wartości („coś więcej niż to-do"). Wynika z frustracji Persony A.
- **Widok kanban (desktop) / zakładki (mobile)** — ta sama logika, dwa układy = responsywność
  bez utraty spójności.
- **Minimalizm wizualny (styl Apple)** — monochromatycznie, kolor tylko funkcjonalnie (czerwień
  terminu/usuwania), dużo przestrzeni, hairline'y. Realizuje zasady: _prostota_, _spójność_.
- **Tylko tytuł wymagany** w formularzu — szybkie dodawanie (Persona B), reszta opcjonalna.
- **Potwierdzenie usuwania** — ochrona przed utratą danych (_dostępność_/bezpieczeństwo użycia).
- **Ograniczenie zakresu** — świadomie odrzucono statystyki, funkcje społecznościowe, integracje
  z API; nie wynikają z potrzeb person i naruszałyby _prostotę_.
- **localStorage zamiast backendu** — zgodne z wymaganiami; cały wysiłek idzie w UX/UI, nie w
  architekturę.

## 7. Zasady dobrego UI przyjęte w projekcie

**Prostota** (jedna główna akcja na ekranie), **intuicyjność** („+" zawsze dodaje, kosz zawsze
usuwa), **spójność** (jeden zestaw komponentów i kolorów), **dostępność** (kontrast, obsługa
klawiatury, tryb ciemny). Do tych filarów odwołują się decyzje z sekcji 6.

---

_Dokumenty powiązane: `etap-1-analiza.md` (analiza), `etap-2-wireframes.md` (szkice + User Flow),
`szkice-cechy.md` i `etap-3-figma-przewodnik.md` (projekt wizualny), `etap-4-testy.md` (testy)._
