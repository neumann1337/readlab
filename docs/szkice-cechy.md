# Szkice / prototyp — cechy wizualne

Zwięzła lista cech, które szkice (a potem prototyp w Figmie) mają oddawać.
Styl: **minimalizm w duchu Apple**.

## Cechy ogólne stylu

- **Monochromatycznie** — czerń, biel, szarości. Kolor tylko funkcjonalnie (czerwień = termin po czasie / usuwanie).
- **Bez ikon-emoji.** Typy i priorytety jako subtelny tekst.
- **Dużo wolnej przestrzeni** — szerokie marginesy i odstępy między elementami.
- **Hairline'y zamiast ramek i cieni** — cienkie linie 1px jako separatory.
- **Duże zaokrąglenia** — karty ~18px, modale ~24px.
- **Przyciski w formie pigułki** (`pill`, pełne zaokrąglenie). Główna akcja = ciemna pigułka z jasnym tekstem.
- **Typografia bezszeryfowa** (SF Pro / system), nagłówki z lekko ściśniętym odstępem liter, wagi średnie/półgrube.
- **Pasek górny** lekki, półprzezroczysty (efekt rozmycia), oddzielony cienką linią.
- **Tryb jasny i ciemny** — ciemny na prawdziwej czerni.

## Cechy per ekran

**Lista / tablica (ekran główny)**
- Górny pasek: nazwa „ReadLab" (sam tekst), wyszukiwarka (pigułka), ikona ustawień, ciemny przycisk „+ Dodaj".
- Pasek filtrów: pigułki Tag / Priorytet + sortowanie po prawej.
- Desktop: **trzy kolumny** (Kolejka / W trakcie / Skończone), każda z nagłówkiem wersalikami i licznikiem.
- Mobile: **segmentowany przełącznik** statusów zamiast kolumn (jedna lista naraz).
- Karta książki: tytuł, autor (drobny, szary), niżej wiersz meta (tag jako hairline-chip, priorytet, termin).
- Karty „Skończone" — przygaszone (niższa nieprzezroczystość).

**Dodawanie / edycja książki (modal)**
- Wyśrodkowany modal na rozmytym, przyciemnionym tle.
- Pola: Tytuł, Autor, Tag, Priorytet, Termin, Status.
- Etykiety drobne i szare nad polami.
- Stopka: po lewej „Usuń" (czerwony, tylko w edycji), po prawej „Anuluj" (obrys) i „Zapisz" (ciemna pigułka).
- Stan błędu: czerwone obramowanie pola + krótki komunikat (np. „Podaj tytuł").

**Ustawienia (modal)**
- Sekcje z nagłówkami wersalikami: Wygląd / Lista „W trakcie" / Dane.
- Wiersze oddzielone hairline'ami: etykieta + krótki opis po lewej, kontrolka po prawej.
- Przełącznik trybu ciemnego, wybór limitu, przycisk „Wyczyść" (czerwony obrys).

**Potwierdzenie usunięcia (mały modal)**
- Tytuł pytający, jedno zdanie opisu, przyciski „Anuluj" + czerwony „Usuń".

**Stan pusty**
- Wyśrodkowany, dużo przestrzeni: nagłówek + jedno zdanie + ciemna pigułka „+ Dodaj książkę". Bez grafik.
