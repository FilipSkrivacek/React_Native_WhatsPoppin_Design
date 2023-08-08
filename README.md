# WHATS POPPIN
**Předělání designu aplikace od minulých ročníků do Reactu Native**

## Vzhled aplikace
![vzhled](https://github.com/FilipSkrivacek/React_Native_WhatsPoppin_Design/blob/29efc8be1abbc17d5862bc5e586af4ea888dc945/assets/VzhledAplikace.png)

Aplikace uživateli nabídne přehled událostí konaných v nejbližší možné době v jeho okolí, které si může nastavit v *nastavevní* buďto pomocí **automaticky určené polohy**, nebo (například v případě, že se uživatel chce podívat, co se koná v jiném městě, kam se třeba chystá) ho **specifikovat ručně**. Na hlavní stránce se události zobrazují ve zkrácené verzi v containerech, které sdělují pouze **základní informace** o dané události. Pomocí tlačítka *podrobnosti* se dá zobrazit stránka s podrobnějšími informacemi o události, jako je třeba **přesné časové rozmezí události**, **případná cena za vstup**, **mapa s přesným místem konání**, **banner k události**, či **popis**.

## Barvy
![barvy](https://github.com/pslib-cz/2021l4web-app-mockup-cirlicdalibor/blob/main/ukazky/barvy.jpg)
## Změny
- Lehce jsem oproti návrhu změnil Navbar z důvodu nepraktičnosti držení telefonu v jedné ruce
## Fonty
- Bebas Neue (20, 17)

## Jak aplikace funguje
Po spuštění se zobrazí načítací obrazovka s logem, ze které se po načtení uživatel dostane na úvodní stránku. Zde ho čeká přehled akcí konaných v jeho okolí v blízké době, přičemž nejprve musí aplikaci povolit sdílení polohy. Neučiní-li tak, bude muset polohu nastavit ručně v nastavení, které se nachází v pravém horním rohu. Naopak v levém horním rohu je ikonka pluska, kterým lze do databáze přidat událost. Podrobnosti o konaných událostech zobrazených na úvodní stránce lze zobrazit pomocí tlačítka *podrobnosti* u každé z událostí.

V **nastavení** lze aplikaci povolit využívat informace o poloze uživatele, či povolit notifikace o nových událostech. Též zde uživatel určí, zda chce svou polohu určovat automaticky, či ji zadat ručně.

Pro **přidání události** musí uživatel zadat
- název události
- začátek události (datum a čas - **nelze datovat do minulosti**)
- konec události (datum a čas - **alespoň půl hodiny od začátku**)
- místo konání (název místa)
- adresu místa konání

Dále může uživatel vložit banner události, případnou cenu za vstup a dodatečný popis k události.

Na úvodní stranu se uživatel dostane vždy kliknutím na logo v levém horním rohu

## Vše je uděláno jen jako design a funkcionalita může být přidána později (22.3.2023)
