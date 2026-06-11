# ReadLab - aplikacja (frontend)

Kolejka książek do przeczytania. React + Tailwind CSS + localStorage (bez backendu).
To jest implementacja z **Etapu 5** projektu.

## Uruchomienie

```bash
cd app
npm install      # tylko za pierwszym razem
npm run dev      # uruchamia serwer deweloperski (http://localhost:3000)
```

Build produkcyjny: `npm run build`, podgląd builda: `npm run preview`.

> Wymagany Node.js 20.19+ lub 22.12+ (Vite 7).

## Funkcje (mapowanie na wymagania projektu)

**Wymagany CRUD:**

- ➕ dodawanie książki (tytuł, autor, tag, priorytet, termin, status),
- ✏️ edycja książki,
- 🗑️ usuwanie (z potwierdzeniem),
- ✅ zmiana statusu: **Kolejka → W trakcie → Skończone** (zamiast zwykłego „wykonane"),
- 📋 lista / tablica książek.

**Rozszerzony zakres (podbija ocenę):**

- 🔎 wyszukiwarka (tytuł / autor / tag),
- 🎚️ filtrowanie (tag, priorytet) + sortowanie (data, tytuł, priorytet, termin),
- 🏷️ tagi, priorytety (kolorowe), terminy (z ostrzeżeniem o zbliżającym się / przeterminowanym),
- 🌙 tryb ciemny (zapamiętywany),
- ⚠️ ostrzeżenie o limicie „W trakcie" (problem Persony A),
- ✔️ walidacja formularza (tytuł wymagany),
- 💾 zapis w `localStorage` (dane przeżywają odświeżenie).

**Responsywność:** desktop = kanban 3 kolumny z przeciąganiem kart (drag & drop);
mobile = zakładki statusów (jedna lista naraz). Przełączenie następuje przy ~768px.

## Struktura

```
src/
├── App.jsx                  # kompozycja + stan widoku (filtry, modale)
├── components/
│   ├── TopBar.jsx           # nazwa, wyszukiwarka, Dodaj, Ustawienia
│   ├── FilterBar.jsx        # filtry + sortowanie
│   ├── Board.jsx            # kanban (desktop) / zakładki (mobile)
│   ├── Column.jsx           # kolumna statusu (drop target)
│   ├── Card.jsx             # karta książki (draggable)
│   ├── Modal.jsx            # wspólny szkielet modala
│   ├── MaterialModal.jsx    # formularz dodawania/edycji + walidacja
│   ├── ConfirmDialog.jsx    # potwierdzenie usuwania / czyszczenia
│   └── SettingsModal.jsx    # tryb ciemny, limit, czyszczenie danych
├── hooks/
│   ├── useMaterials.js      # CRUD + zapis książek do localStorage
│   └── useSettings.js       # tryb ciemny + limit, localStorage
├── lib/
│   ├── constants.js         # statusy, priorytety, sortowanie
│   └── storage.js           # warstwa nad localStorage
└── data/seed.js             # przykładowa lista książek
```

Pierwsze uruchomienie ładuje dane przykładowe; po edycji wszystko trzymane jest w `localStorage`
(klucze `readlab.materials`, `readlab.settings`). „Wyczyść dane" w ustawieniach resetuje listę.
