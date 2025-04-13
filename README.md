# Personal Web Portfolio

## Cíl projektu
Hlavním cílem projektu je vytvoření moderní webové aplikace sloužící jako interaktivní profesní
vizitka, která nahrazuje tradiční životopis. Aplikace prezentuje mé profesní portfolio, 
vzdělání🎓, pracovní zkušenosti💼 a kontaktní informace📫 v přehledné a uživatelsky přívětivé formě.

## Postup implementace
1. **Návrh struktury** - Rozdělení obsahu do logických sekcí (Home, About me, Portfolio, Education &
   Work, Skills, Contact)
2. **Implementace UI** - Vytvoření responzivního designu s postranním navigačním panelem
3. **Funckionality** - Implementace interaktivních prvků:  
       ∘ Editace a ukládání dat v úvodní sekci✒️  
       ∘ Navigace mezi sekcemi🔄  
       ∘ Prohlížeč projektů s detaily📂  
       ∘ Stahování/prohlížení PDF životopisu📄  
       ∘ Offline režim📡  
       ∘ Přepínání jazykových verzí🌐  
5. **Optimalizace** - Zajištění offline funkčnosti pomocí cache a Service Worker

## Popis funkčnosti
**Editace úvodní sekce**  
∘ Umožňuje změnu nadpisu a popisu v sekci 'Home'.  
∘ Data se ukládají do localStorage a persistují při obnovení stránky.  
∘ Implementováno pomocí skrytého formuláře, který se zobrazí po kliknutí na tlačítko 'Edit'.  

**Navigace mezi sekcemi**  
∘ Defaultní zobrazení: Postranní panel zobrazuje pouze ikony reprezentující jednotlivé sekce.  
∘ Rozšířený režim: Po kliknutí na burger menu se panel rozbalí a zobrazí ikony společně s názvy sekcí.  
∘ Responzivní chování: Na menších obrazovkách je panel automaticky skrytý.  

**Porfolio s projekty**  
∘ Projekty jsou organizovány v interaktivním karuselu s tlačítky 'Next'(⬅️) a 'Previous' (➡️).  
∘ Před přechodem na detail projektu se uloží index aktuálního projektu.  
∘ Po návratu zpět na hlavní stránku se karusel automaticky posune na naposledy zobrazený projekt,
aby uživatel nemusel znovu procházet celou sekvenci.

**Stahování/prohlížení PDF životopisu**  
∘ Aplikace poskytuje uživatelům pohodlný přístup k životopisu ve formátu PDF prostřednictvím
dvou hlavních způsobů.  
∘ V postranním navigačním panelu jsou umístěny dva přímé odkazy - první umožňuje okamžité stažení📥
životopisu, zatímco druhý otevírá dokument v novém prohlížečovém okně pro rychlý náhled👁️.  
∘ Stejnou funkcionalitu najdou uživatelé i v kontaktní sekci.  

**Offline režim**  
∘ Aplikace využívá Service Worker k ukládání klíčových souborů do cache.  
∘ Umožňuje prohlížení obsahu i bez internetového připojení🌍.
