<div align="center">

  <img src="https://i.imgur.com/nYV30Ba.png" alt="logo" width="200" height="auto" />
  <p>
    Frontend for the MK Head Hunter project.
  </p>
</div>

### :space_invader: Jak pracujemy

1. `Prettier` – formatujemy kod prettierem, konfiguracja jest w pliku .prettierrc Polecam sobie ustawić automatyczne formatowanie podczas zapisu pliku (ctrl+alt+s -> Languages & Freamworks -> Javascript -> Prettier -> zaznaczamy pole „On save”) lub formatujemy klikając prawym przyciskiem myszy na dany plik lub folder i klikamy Reformat with Prettier.
    
2. Stylujemy za pomocą `styled-components`. Bardzo łatwa i przyjemna sprawa. Zmienne kolorów, rozmiarów czcionki a także marginów i paddingów są w komponencie Theme.tsx i z nich korzystamy.
3. Pracujemy zgodnie z git-flow, upewnij się, że jesteś na branchu develop, stwórz feature brancha `git flow feature start NAZWA` commituj, pushuj i gdy skończysz dany feature `git flow feature finish NAZWA`
4. Stan globalny - `redux-toolkit`
