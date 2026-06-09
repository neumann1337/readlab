# Etap 1 — Wprowadzenie do projektowania UI oraz analiza potrzeb użytkowników

Projekt: **ReadLab** — kolejka książek do przeczytania
Przedmiot: Projektowanie Interfejsów Użytkownika

---

## 1. Zasady dobrego UI przyjęte w projekcie

Cały projekt opieramy na czterech filarach. Nie są one ozdobą dokumentu — w Etapach 3–5
każda decyzja projektowa będzie uzasadniana odwołaniem do jednej z nich.

1. **Prostota** — na każdym ekranie jest jedna główna akcja i minimum wizualnego szumu.
   Ekran startowy odpowiada na jedno pytanie: „co mam czytać teraz?". Funkcje rzadziej używane
   (edycja, ustawienia) są schowane o jedno kliknięcie głębiej.
2. **Intuicyjność** — użytkownik nie zastanawia się, gdzie kliknąć. Przycisk „+" zawsze dodaje
   materiał, status zmienia się przez przeciągnięcie lub jeden klik, ikona kosza zawsze usuwa.
3. **Spójność** — jeden zestaw komponentów, kolorów i odstępów w całej aplikacji (design system
   zdefiniowany w Etapie 3). Ten sam typ informacji wygląda zawsze tak samo (np. tag = pigułka,
   priorytet = kolor akcentu).
4. **Dostępność** — kontrast tekstu min. WCAG AA, czytelna typografia, pełna obsługa z klawiatury,
   tryb ciemny jako realna funkcja, a nie gadżet (część użytkowników czyta wieczorem).

---

## 2. Problem projektowy

Osoby uczące się samodzielnie gromadzą książki **szybciej, niż są w stanie
je przeczytać**. Tytuły rozsypane są po notatkach w telefonie, zakładkach w przeglądarce, mailach
do siebie i kartkach. Brakuje **jednego miejsca**, które jasno pokazuje trzy rzeczy:

- **co przerabiam teraz** (i czy nie zacząłem za dużo naraz),
- **co czeka w kolejce** (z priorytetem / terminem),
- **co już skończyłem** (poczucie postępu).

Istniejące narzędzia są albo zbyt ciężkie (Notion, Goodreads — przeładowane funkcjami,
social, oceny, rekomendacje), albo zbyt ubogie (zwykła lista to-do nie rozróżnia „w trakcie"
od „w kolejce" i nie radzi sobie z różnymi typami materiałów).

**Jobs to be done:** „Pomóż mi widzieć, nad czym faktycznie pracuję, i co jest następne —
bez zarządzania samym narzędziem."

Ten problem świadomie **ogranicza zakres**: nie budujemy statystyk czytania, kanału społecznościowego,
integracji z API księgarni ani systemu powtórek. To chroni projekt przed rozrostem funkcji,
którego dokument wymagań wprost nie nagradza.

---

## 3. Persony

Persony są **anonimowymi archetypami** (bez imion mapujących na realną osobę), celowo
kontrastującymi — różne urządzenia, różny kontekst i różne potrzeby. Dzięki temu **każda funkcja
w Etapie 2 ma za sobą konkretną personę**, a nie „bo fajnie wygląda".

### Persona A — „Samouk po godzinach" (28–32 lata, pracuje na etacie)

- **Kontekst:** osoba pracująca poza branżą docelową, która rozwija się samodzielnie po godzinach.
  Uczy się wieczorami na laptopie, 1–2 godziny dziennie, w blokach kilkudniowych.
- **Cel:** systematycznie przerabiać zróżnicowaną kolekcję materiałów rozwojowych. Realny przekrój
  takiej biblioteczki:
  - **ekonomia** — np. Thomas Sowell, *Basic Economics*,
  - **biografie** — życiorysy przedsiębiorców i postaci historycznych,
  - **biznes i self-development** — książki o produktywności i przedsiębiorczości,
  - **psychologia i filozofia** — np. Robert Greene, Fiodor Dostojewski,
  - **nauka** — pozycje popularnonaukowe (np. Carl Sagan).
- **Frustracja:** zapisuje kolejne książki szybciej, niż je kończy. Zaczyna 4 naraz; po
  miesiącu nie wie, który tytuł był w połowie, a który ledwo ruszył. Czuje, że „dużo się uczy",
  ale mało domyka.
- **Potrzeby (→ funkcje):**
  - widoczny status **„W trakcie" z sugerowanym limitem** (ostrzeżenie przy >3 pozycjach),
  - **priorytety** — co jest teraz najważniejsze,
  - **tagi** (ekonomia / biznes / psychologia / nauka) do grupowania mieszanej kolekcji,
  - **kolejka**, z której wyciąga następną rzecz po skończeniu poprzedniej.
- **Urządzenie:** głównie **desktop** wieczorem.

### Persona B — „Student w biegu" (20–23 lata, studia dzienne)

- **Kontekst:** student dzienny, dużo materiałów na zaliczenia plus własne lektury
  (popularnonaukowe, branżowe). Życie w biegu, między zajęciami.
- **Cel:** nie zapomnieć o materiałach obowiązkowych z deadline'ami i jednocześnie nie zgubić
  rzeczy, które chce przeczytać dla siebie.
- **Frustracja:** miesza obowiązkowe z przyjemnościowymi, zapomina o terminach oddania,
  dodaje coś „na szybko" i potem tego nie znajduje.
- **Potrzeby (→ funkcje):**
  - **terminy / deadline** z wyróżnieniem zbliżających się,
  - **filtrowanie** (obowiązkowe vs. własne — realizowane przez tagi/filtr),
  - **szybkie dodawanie** w 2–3 polach, bez wymaganego wypełniania wszystkiego,
  - **wyszukiwarka**, gdy lista urośnie.
- **Urządzenie:** **mobile-first**, dodaje materiały w biegu z telefonu.

**Po co ten kontrast:** Persona A uzasadnia *priorytety + tagi + limit „w trakcie"*, Persona B
uzasadnia *terminy + filtrowanie + szybkie dodawanie + mobile*. Razem pokrywają desktop i mobile,
czyli wymóg responsywności z Etapu 5.

---

## 4. Minimalny zakres funkcjonalności (mapowanie wymaganego CRUD na domenę)

| Wymaganie z dokumentu | Realizacja w ReadLab |
|-----------------------|----------------------|
| Dodawanie nowego zadania | Dodanie książki: tytuł, autor, opcjonalnie tag, priorytet, termin |
| Edycja istniejącego zadania | Edycja wszystkich pól książki |
| Usuwanie zadania | Usunięcie książki (z potwierdzeniem) |
| Oznaczanie jako wykonane | **Status: Kolejka → W trakcie → Skończone** (rozszerzenie zamiast prostego „done" — to nasze „coś więcej niż to-do") |
| Wyświetlanie listy zadań | Lista / tablica z podziałem na trzy statusy w ReadLab |

### Rozszerzony zakres — wybrany świadomie (każdy element ma personę w plecach)

- **filtrowanie i sortowanie** → Persona B (obowiązkowe vs. własne), Persona A (po priorytecie),
- **priorytety i terminy** → priorytet = Persona A, termin = Persona B,
- **kategorie / tagi** → Persona A (grupowanie tematów),
- **wyszukiwarka** → Persona B (gdy lista urośnie),
- **tryb ciemny** → obie persony (nauka wieczorem) + filar dostępności,
- **walidacja formularzy** → szybkie, bezbłędne dodawanie (Persona B),
- **localStorage** → trwałość danych bez backendu (wprost w wymaganiach).

Świadomie **odrzucone** (poza zakresem, mimo że kuszące): statystyki/wykresy czytania,
funkcje społecznościowe, integracja z API książek, system powtórek (SRS), oceny gwiazdkowe.
Uzasadnienie: nie wynikają z potrzeb person i naruszałyby filar prostoty.

---

## Cel Etapu 1 (zrealizowany)

Zrozumienie potrzeb użytkowników (2 persony) oraz zdefiniowanie założeń projektu: problemu,
zasad UI i minimalnego + rozszerzonego zakresu funkcji. To fundament, do którego odwołują się
kolejne etapy (uzasadnianie decyzji projektowych — punktowane w kryteriach oceny).
