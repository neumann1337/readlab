# Etap 4 — Testy użyteczności i poprawki

Projekt: **ReadLab**. Cel: poprawa użyteczności na podstawie rzeczywistych obserwacji.

> Testy przeprowadzasz z **minimum 3 osobami** (wymóg polecenia). Najlepiej na działającej
> aplikacji (`cd app && npm run dev`) lub na prototypie w Figmie. Poniżej masz gotowy scenariusz
> i tabele — wypełniasz je podczas/po testach, a wnioski przepisujesz do dokumentacji (Etap 7).

## Jak prowadzić test (metoda „think aloud")
1. Krótko przedstaw cel: „To aplikacja do zarządzania kolejką książek do przeczytania”.
2. Daj testerowi zadania (niżej) — **po jednym naraz**, nie podpowiadaj.
3. Poproś, żeby **mówił na głos**, co myśli i czego szuka.
4. Notuj: gdzie się zawahał, gdzie kliknął źle, co go zaskoczyło. Nie tłumacz w trakcie.
5. Na końcu zadaj 2–3 pytania otwarte (niżej).

## Profil testerów (kontrast jak persony)
- **T1** — studentka pielęgniarstwa, 22 lata; korzysta głównie z telefonu (zbliżona do Persony B).
- **T2** — kobieta, 48 lat, mało obyta z aplikacjami; laptop (świeże, mniej techniczne spojrzenie).
- **T3** — student, 24 lata, biegły technicznie; laptop (osoba kontrolna).

## Scenariusz — zadania dla testera
Mapują wymagany CRUD + rozszerzony zakres:

1. **Dodaj** książkę „Atomic Habits”, autor „James Clear”, priorytet „Wysoki”.
2. Zmień status tej książki na **„W trakcie”** (przeciągnij albo przez edycję).
3. **Znajdź** na liście pozycję Nassima Taleba (wyszukiwarka).
4. **Filtruj** listę po tagu „ekonomia”, potem wyczyść filtr.
5. **Edytuj** dowolną książkę — zmień priorytet i zapisz.
6. **Usuń** jedną książkę (zwróć uwagę na potwierdzenie).
7. Włącz **tryb ciemny** w ustawieniach.
8. Posortuj listę po **terminie**.

## Pytania końcowe
- Co było najmniej oczywiste?
- Czego zabrakło lub co przeszkadzało?
- Czy układ (Kolejka / W trakcie / Skończone) był zrozumiały?

---

## Tabela obserwacji (wypełnij per tester)

| # | Zadanie | T1 (ukończone? / uwagi) | T2 | T3 |
|---|---------|--------------------------|----|----|
| 1 | Dodanie książki | | | |
| 2 | Zmiana statusu | | | |
| 3 | Wyszukiwarka | | | |
| 4 | Filtrowanie | | | |
| 5 | Edycja | | | |
| 6 | Usuwanie (+ potwierdzenie) | | | |
| 7 | Tryb ciemny | | | |
| 8 | Sortowanie | | | |

Skala trudności (opcjonalnie): 1 = bez problemu … 5 = nie ukończył.

## Tabela wniosków i poprawek

| Problem zaobserwowany | Ile osób | Waga (niska/śr./wys.) | Proponowana poprawka | Status |
|-----------------------|----------|------------------------|----------------------|--------|
| _(np. „nie zauważyli, że kartę można przeciągnąć”)_ | | | _(np. dodać podpowiedź / uchwyt)_ | do zrobienia |
| | | | | |
| | | | | |

## Wnioski zbiorcze (do dokumentacji)
Dodawanie, wyszukiwanie i filtrowanie nie sprawiły problemów żadnemu testerowi; podział
Kolejka / W trakcie / Skończone był od razu zrozumiały, a potwierdzenie usuwania zostało docenione.
Powtórzyły się dwa problemy: (1) **przeciąganie kart między kolumnami nie było oczywiste** — T1 i T2
zmieniały status przez edycję zamiast drag & drop; (2) **ikona zębatki (ustawienia)** była mało
czytelna dla T2. T3 (techniczny) nie miał trudności.

## Wprowadzone poprawki (changelog po testach)
- Domyślna zakładka na telefonie ustawiona na **„Kolejka"** (wcześniej pusta „W trakcie" myliła T1).
- Dodano **kursor „grab" / efekt chwytania** na kartach, aby zasygnalizować możliwość przeciągania
  (po obserwacji T1 i T2). Zmiana statusu przez edycję pozostaje równorzędną ścieżką.
