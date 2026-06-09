# Etap 6 — Ostateczne testy i optymalizacja

Projekt: **ReadLab**. Cel: dopracowana wersja gotowa do prezentacji.

## Sprawdzenie poprawności działania (CRUD + rozszerzony zakres)
| Funkcja | Wynik |
|---|---|
| Dodawanie książki + walidacja (pusty tytuł → błąd) | ✅ |
| Edycja książki | ✅ |
| Usuwanie + dialog potwierdzenia | ✅ |
| Zmiana statusu (drag & drop / edycja) | ✅ |
| Wyszukiwarka (tytuł / autor / tag) | ✅ |
| Filtrowanie (tag, priorytet) + sortowanie | ✅ |
| Tryb ciemny (zapamiętywany) | ✅ |
| Zapis w localStorage (dane po odświeżeniu) + wersjonowanie seeda | ✅ |
| Ostrzeżenie o limicie „W trakcie" | ✅ |

## Testy na różnych rozdzielczościach
| Szerokość | Układ | Wynik |
|---|---|---|
| 390 px (mobile) | segmentowany przełącznik statusów, karty na pełną szerokość | ✅ |
| 768 px (tablet) | przełączenie na kanban 3-kolumnowy, karty zawijają tytuł | ✅ |
| 1280 px (desktop) | pełny kanban z odstępami | ✅ |

Próg przełączenia mobile↔desktop: **768 px** (Tailwind `md`).

## Błędy i optymalizacja
- **Konsola przeglądarki:** brak błędów i ostrzeżeń.
- **Build produkcyjny:** przechodzi (`npm run build`), CSS ~19,5 KB / JS ~67 KB gzip — lekko.
- **Optymalizacja:** Vite minifikuje i dzieli zasoby; brak ciężkich grafik (ikony jako inline SVG,
  favicon SVG). Czas ładowania natychmiastowy.

## Wprowadzone poprawki końcowe
- **Domyślna zakładka na mobile → „Kolejka"** (wcześniej „W trakcie", która bywa pusta) —
  użytkownik od razu widzi listę książek po wejściu na telefonie.

## Uwaga dot. danych demo
Wszystkie książki startują w statusie **„Kolejka"** (zgodnie z założeniem). Na potrzeby
prezentacji można przeciągnąć 2–3 pozycje do „W trakcie"/„Skończone", aby pokazać pełny kanban.
