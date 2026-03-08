# Absolutní a kompletní ukázka CommonMark & GitHub Flavored Markdown (GFM) ✨

Tento dokument je vyčerpávající chemické laboratorní pískoviště pro naprosto **všechny specifikace a funkce**, které přináší CommonMark a moderní GitHub Flavored Markdown (GFM). Pamatujte si: GFM je plně kompatibilní nadstavbou (superset) nad nadací CommonMark (`cmark`).

---

## 1. Nadpisy (Headings) - Základní CommonMark

### ATX Styl (Znak Křížku)

# Nadpis H1

## Nadpis H2

### Nadpis H3

#### Nadpis H4

##### Nadpis H5

###### Nadpis H6

### Setext Styl (Podtržení)

# Alternativní Nadpis H1

## Alternativní Nadpis H2

---

## 2. Textové Formátování a Typografie

Standardní CommonMark značky, které můžete libovolně kombinovat (GFM navíc bezpečně ignoruje [intraword_emphasis_like_this](#) zamezující chyby při názvech proměnných):

- _Kurzíva hvězdičkami (Italics)_ nebo _podtržítky_.
- **Tučné hvězdičkami (Bold)** nebo **podtržítky**.
- **_Tučná kurzíva_** nebo **_jiná tučná kurzíva_**.
- `console.log('Inline Code')` a jak escapeovat backtick: ``zde je backtick: ` uvnitř inline kódu``.
- GFM rozšíření: ~~Přeškrtnutý text (Strikethrough) pomocí vlnovek.~~

Běžný text v odstavcích se zalamuje plynule. Nicméně pokud přidáte na konec řádku  
dvě mezery jako před chvílí, vytvoříte _Hard Line Break_ a odstavce nesplynou (předvede HTML `<br>`).
To samé platí, pokud řádek zakončíte zpětným lomítkem (\)\
Nová řádka vznikne.

---

## 3. Výstrahy a Blokové Citace (Blockquotes & Alerts)

**Standardní CommonMark Blockquote:**

> Začněte blokovou citaci pravou svorkou.
> Lze citovat přes více řádků.
>
> > Citace lze i libovolně zanořovat.
> >
> > - **Podporují** uvnitř jakýkoliv jiný Markdown.

**GitHub Flavored Markdown Alerts (Callouts / Admonitions):**
Tyto bloky renderuje GitHub s unikátními barvami a ikonkami. Zápis vychází z blockquotes.

> [!NOTE]
> Užitečné informace, které by čtenář měl vědět (modré upozornění).

> [!TIP]
> Skvělý tip nebo lifehack k lepšímu fungování (zelené upozornění).

> [!IMPORTANT]
> Zásadní informace pro uživatele (fialové upozornění).

> [!WARNING]
> Nedorozumění, varování před důsledky (žluté upozornění).

> [!CAUTION]
> Skutečné nebezpečí, varování před kritickými chybami nebo ztrátou dat (červené upozornění).

---

## 4. Seznamy (Lists)

### Neuspořádané (Unordered)

Můžete použít znaky z rodiny `-`, `*` nebo `+`:

- Jablka
- Hrušky
  - Maliny (odsazeno 2 mezerami)
  - Borůvky
    - Jahody (odsazeno 4 mezerami)

### Uspořádané (Ordered)

Lze zvolit libovolné počáteční číslo a může končit buď tečkou, nebo kulatou závorkou:

1. Analýza požadavků
2. Psaní kódu
   1. Backend (Odsazeno)
   2. Frontend

3) Testování aplikace (CommonMark syntaxe s uzavírací závorkou)

### Task Listy (GFM rozšíření)

Zatrhávací seznamy typické pro GFM (issues a pull requesty):

- [x] Splněný cíl v projektu.
- [ ] Otevřený a nedokončený cíl.
- [ ] Budoucí plány do roadmapy.

---

## 5. Blokový Kód (Code Blocks)

**Zpět kompatibilní Indented Code Block:**
(Tvoří se pouhým odsazením min. 4 mezer nebo 1 tabulátorem z levého okraje).

    <h1>CommonMark Native Indent Code</h1>
    <p>Zde se znaky > či * ignorují jako formátování.</p>

**Fenced Code Block (S určením jazyka - ideál pro GFM syntax highlighting):**

```typescript
// GFM umožňuje podbarvovat syntaxi specifikováním identifikátoru
interface User {
  name: string;
  id: number;
}
const user: User = { name: "John", id: 123 };
console.log(user);
```

Můžete použít i tildy (`~~~`):

```python
import os
def system_check():
    print(os.cpu_count())
```

---

## 6. Odkazy a Obrázky (Links & Images)

**Textové Odkazy:**
Lze použít [Běžný link s textem](https://example.com) nebo přidat titulek pro hover kurzorem (tzv. tooltip):
[Odkaz s tooltipem](https://example.com "Tady je bublina po najetí").

**Referenční Odkazy (Reference Links):**
Nahoře je text pro [link první][1], a dále v textu píši odkaz na abstraktní string [Google][seznamovac]. Zápis proběhne úplně na konci souboru (často čistější text).

**Automatické Prolinkování (GFM Autolinks):**
Do ostrých závorek CommonMark <https://example.com> vygeneruje link z url zadání. GFM umí ale vzít https://www.github.com nebo test@email.com a naformátovat do linku zcela automaticky, bez nutnosti jakéhokoli Markdown formátu těsně kolem (stačí string v odstavci).

**Obrázky (Images):**
Identické s odkazy, jen mají přednastaven fixní parametr `!`.  
![Ukázkové logo](https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png "Github Logo z Assets")
I obrázky těží z referenčního linku: ![Referenční Obrázek][image-ref]
A tady máte obrázek zabalený do aktivního odkazu na kliknutí:
[![Clickable Image](https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png)](https://github.com)

---

## 7. Tabulky (Tables - GFM Extension)

Nativní GFM rozšíření, do kterého přidáváte tvořící sloupce (pipes) a kolony. Zarovnání diktují dvojtečky posazené v hlavičkovém oddělovači.

| Zleva zarovnáno (Default) | Vycentrováno (Center) | Zarovnáno Vpravo (Right) |
| :------------------------ | :-------------------: | -----------------------: |
| Jablko                    |     Ovocný strom      |                  `$1.50` |
| **Tučný Text**            |       _Kurzíva_       |                   `0.50` |
| Záznam z tabulky          |       [Link](#)       |           `1,000,000.00` |
| ~~Vypito~~                |        Zmizelo        |                        0 |

---

## 8. Abstraktní Čáry a Přechody tematických sekcí (Thematic Breaks)

Cokoliv ze symetrických 3 a více znaků -, \* nebo \_ na volné řádce bez jiného obsahu generuje čáru.

---

---

---

---

## 9. Matematické rovnice (MathML / LaTeX podpora - GFM Modern)

GitHub začal nativně podporovat `MathJax`. Rovnice zapisujeme stejně jako ve speciálních dialektech pro akademiky (obsahuje inline & block).

**Inline Matematika (`$`):**
Rovnice Pythagorovy věty je zapsána inline v textu takto: $a^2 + b^2 = c^2$. Složitější kalkuly jako $\sqrt{3x-1}+(1+x)^2$ jdou ruku v ruce s textem.

**Bloková Matematika (`$$`):**
Výpočet přes plný objem se umístí čistě pod i před své obalující dolarové značky.

$$
\left( \sum_{k=1}^n a_k b_k \right)^2 \leq \left( \sum_{k=1}^n a_k^2 \right) \left( \sum_{k=1}^n b_k^2 \right)
$$

---

## 10. Poznámky pod čarou (Footnotes - GFM Modern)

Něco tvrdíte, a musíte to nekompromisně doložit vědeckým obsahem. Příkladem budiž úvodní odkaz na knihu[^1] a na dlouhý dovětek.[^bignote] Odkazy se na konci stránky rozvedou.

---

## 11. Ostatní HTML & Prvky kompatibility

### Skrývací Element (Details / Summary)

Není vázáno přísně k GFM Specu coby parser property, nicméně protože GFM propouští značky HTML do rendereru, výborně z toho těží: `<details>` a `<summary>`. Uvnitř značek můžete zase v klidu psát Markdown za předpokladu volných prázdných řádků před textem!

<details>
<summary><b>🔥 Rozbalte si tajemství (Klikněte na mě)</b></summary>

Uvnitř rozbalovací lišty funguje **tučné písmo** a vše z Markdownu nahoře bez sebemenšího problému.

```shell
sudo rm -rf /*
```

</details>

### Další Inline Tags & Emojis

Můžete bezprostředně využívat emoji z rodiny GitHub formátování přímo pomocí dvojteček:
:rocket: :zap: :star: :heart: :computer: :tada: :fire:

A do toho povolené raw HTML značky jako zvýraznění <mark>Vybarvený text ve zlatožluté!</mark>, a nebo dokonce klávesové zkratky užívané jako značka <kbd>Ctrl</kbd> + <kbd>C</kbd> s <kbd>Alt</kbd> + <kbd>F4</kbd>.

### GFM Escaping (Uprchlíci ze zpracování)

Chcete-li napsat libovolný kontrolní znak tak, aby na něj GFM ani CommonMark nesahal, tak využíváme tzv. Escapování přes **zpětné lomítko (\\)**.
Tady vygeneruji pět hvězdiček: \*\*\*\*\*
Bez escapeingu se toto chytí na `Thematic break`. Zde je uchráněn.

---

### Referenční Dictionary k Odkazům (Sem se dívá markdown, když parsuje obsah v hranatých závorkách výše)

[1]: https://git-scm.com/ "Nástroj Git"
[seznamovac]: https://google.com "Link pro Google"
[image-ref]: https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png

[^1]: Tohle je ten jednoduchý poznatek vázaný k odkazu výše (tzv. Footnote 1).

[^bignote]: A tohle je masivnější footnote bignote, klidně může obsahovat rovnou kód! Kód a poznámky pod okraj se dají řetězit takto.
