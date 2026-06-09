# ReadLab — kolejka książek do przeczytania

Projekt na przedmiot **Projektowanie Interfejsów Użytkownika**
(prowadzący: mgr inż. Bartłomiej Kizielewicz).

Aplikacja typu _Task Management App_, CRUD, w domenie samodzielnej nauki: jedno miejsce na liste książek,
które chcemy przeczytać, z podziałem na statusy **Kolejka → W trakcie → Skończone**.

**_ Wykonanie: _** Gracjan Prusik, Neumann Bartlomiej

- **Technologie:** React + Tailwind CSS + localStorage

## Uruchomienie aplikacji

```bash
cd app
npm install
npm run dev
```

> Wymagany Node.js w wersji 20.19+ lub 22.12+.

## Zakres funkcjonalny

**Wymagany (CRUD):** dodawanie, edycja, usuwanie książki, zmiana statusu
(Kolejka → W trakcie → Skończone), wyświetlanie listy.

**Rozszerzony:** wyszukiwarka, filtrowanie (tag / priorytet), sortowanie, tagi,
priorytety, terminy z ostrzeżeniem, tryb ciemny, walidacja formularzy, zapis w `localStorage`.

**Responsywność:** desktop — tablica kanban (3 kolumny, drag & drop); mobile — segmentowany
przełącznik statusów.

## Struktura projektu

```
projektowanie-interfejsow/
├── README.md                 # ten plik
├── app/                      # aplikacja (React + Tailwind + localStorage)
│   └── README.md             # szczegóły techniczne aplikacji
├── docs/                     # dokumentacja projektowa
│   ├── dokumentacja.md               # GŁÓWNY dokument do oddania (→ eksport PDF)
│   ├── etap-1-analiza.md             # analiza, persony, problem, zakres
│   ├── etap-2-wireframes.md          # ekrany i User Flow
│   ├── etap-3-figma-przewodnik.md    # jak złożyć prototyp Hi-Fi w Figmie
│   ├── etap-4-testy.md               # scenariusz testów + tabele wniosków
│   ├── etap-6-qa.md                  # testy końcowe i optymalizacja
│   ├── prezentacja.md                # szkielet prezentacji końcowej
│   └── szkice-cechy.md               # cechy wizualne / specyfikacja
└── assets/                   # szkice Low-Fi i mapa User Flow (SVG)
```

## Linki do oddania

- **Repozytorium z kodem:** https://github.com/neumann1337/readlab
- **Prototyp w Figmie:** _(uzupełnij — link do pliku Figma)_

## Postęp etapów

| Etap | Zakres                                    | Status                                 |
| ---- | ----------------------------------------- | -------------------------------------- |
| 1    | Analiza potrzeb, persony, problem, zakres | ✅                                     |
| 2    | Szkice interfejsu + User Flow             | ✅                                     |
| 3    | Prototyp Hi-Fi (Figma)                    | 🟡 przewodnik gotowy → import do figmy |
| 4    | Testy użyteczności + wnioski              | 🟡 scenariusz gotowy → import do figmy |
| 5    | Implementacja frontendu                   | ✅                                     |
| 6    | Testy końcowe i optymalizacja             | ✅                                     |
| 7    | Prezentacja + dokumentacja                | 🟡                                     |
