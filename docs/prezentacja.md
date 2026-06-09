# Etap 7 — Szkielet prezentacji końcowej

Projekt: **ReadLab**. Czas: ~5–8 min. Wymóg polecenia: zaprezentować działającą aplikację,
omówić proces projektowy, wskazać kluczowe decyzje, przedstawić napotkane problemy i ich
rozwiązania.

> Format dowolny (slajdy / pokaz na żywo). Poniżej 9 punktów = 9 slajdów. Pod każdym masz, co
> powiedzieć.

---

**1. Tytuł**
ReadLab — kolejka książek do przeczytania. Imię i nazwisko, przedmiot, prowadzący.

**2. Problem (po co to)**
„Gromadzimy książki szybciej, niż je czytamy; brakuje jednego miejsca pokazującego, co czytam
teraz, co czeka, co skończone." Jedno zdanie + przykład z życia.

**3. Użytkownicy (persony)**
Dwie persony w kontraście: „Samouk po godzinach" (desktop) i „Student w biegu" (mobile). Powiedz,
że to one uzasadniają funkcje — nie dodawaliśmy nic „bo można".

**4. Proces projektowy (pokaż, że był iteracyjny)**
Analiza → szkice Low-Fi + User Flow → prototyp Hi-Fi (Figma) → testy z 3 osobami → implementacja.
Pokaż jeden wireframe i mapę User Flow (`assets/`).

**5. Projekt wizualny — kluczowa decyzja**
Minimalizm w duchu Apple: monochromatycznie, kolor tylko funkcjonalnie, dużo przestrzeni,
hairline'y. Pokaż prototyp w Figmie (lub aplikację) — light + dark.

**6. DEMO na żywo (najważniejszy slajd)**
Pokaż w działającej aplikacji:
- dodanie książki (walidacja: pusty tytuł → błąd),
- przeciągnięcie karty Kolejka → W trakcie → Skończone,
- wyszukiwarka + filtr + sortowanie,
- tryb ciemny,
- odświeżenie strony → dane zostają (localStorage).

**7. Kluczowe decyzje projektowe**
- statusy zamiast „done" (cykl życia książki),
- kanban (desktop) / zakładki (mobile) = responsywność,
- tylko tytuł wymagany = szybkie dodawanie,
- localStorage zamiast backendu (zgodne z wymaganiami, fokus na UX).

**8. Problemy i rozwiązania**
- *Nowe dane nie pojawiały się po zmianie listy* → dodano **wersjonowanie seeda** (podmienia dane
  przy aktualizacji).
- *(z testów)* _wstaw 1–2 obserwacje testerów i wprowadzone poprawki._
- *Import do Figmy psuł style* → SVG ze stylami inline + strzałki jako kształty.

**9. Podsumowanie**
Co zrobione (analiza, wireframes, prototyp, implementacja, testy), link do repo i Figmy, „dziękuję
/ pytania".

---

## Ściąga — 4 zdania na otwarcie
„ReadLab to minimalistyczna aplikacja do prowadzenia kolejki książek do przeczytania. Powstała
w pełnym procesie UX/UI: od analizy potrzeb i person, przez szkice i prototyp, po działającą
aplikację w React. Kluczowa decyzja to trzy statusy — Kolejka, W trakcie, Skończone — które
odwzorowują realny cykl czytania. Pokażę teraz, jak to działa na żywo."
