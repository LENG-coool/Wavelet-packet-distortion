# Applicazione della deformazione del pacchetto d'onda e della rete neurale convoluzionale nella diagnosi dei guasti squilibrati

<br>

> **Articolo di riferimento**：***Highly imbalanced fault diagnosis of mechanical systems based on wavelet packet distortion and convolutional neural networks***

## 1. Contesto industriale e problema

I modelli tradizionali di deep learning (come CNN) normalmente presuppongono una distribuzione equilibrata delle classi. Tuttavia, negli scenari industriali reali:

- **Campioni sani**: Facili da ottenere in grandi quantità.
- **Campioni di guasto**: Alto costo di acquisizione, a volte carattere distruttivo, con conseguente quantità estremamente limitata di campioni.

**Conseguenza**: Il modello sviluppa una distorsione nella classificazione, tendendo a prevedere tutti i guasti come condizioni normali, con conseguente grave diagnosi errata.


## 2. Metodo di deformazione del pacchetto d'onda

Per affrontare il problema dei campioni di guasto insufficienti, questo articolo propone un **metodo di aumento dei dati basato su elaborazione di segnali** che non solo genera nuovi campioni, ma preserva anche le caratteristiche di frequenza originali dei guasti.

### Processo tecnico

1. **Decomposizione**: Decomposizione del segnale di vibrazione originale in diversi intervalli di frequenza utilizzando la trasformazione del pacchetto d'onda (WPT).
2. **Deformazione casuale**: Selezione casuale di un nodo del pacchetto d'onda e applicazione di una funzione non lineare per il trattamento della deformazione.
3. **Ricostruzione**: Generazione di campioni aumentati con diversità attraverso la trasformazione inversa, conseguimento dell'equilibrio dinamico del set di dati.

<img src="/Fig.1.png" style="width: 100%; " />
<p align="center" style="color: grey">Diagramma del processo di deformazione del pacchetto d'onda</p>

## 3. Architettura del modello: apprendimento delle caratteristiche basato su ConvNet

Questo metodo impiega una **rete neurale convoluzionale** per elaborare direttamente i segnali grezzi senza richiedere l'ingegneria manuale delle caratteristiche.

<img src="/Fig.3.png" style="width: 100%; " />
<p align="center" style="color: grey">Strati dell'architettura ConvL + BN + ReLU</p>

- **Campo ricettivo locale e condivisione dei parametri**: Riduce significativamente il numero di parametri del modello e mitiga il rischio di sovradattamento con piccole dimensioni del campione.
- **Normalizzazione batch (BN)**: Stabilizza la distribuzione delle caratteristiche e accelera la convergenza del modello.

## 4. Impostazione sperimentale e risultati

Gli autori hanno condotto test rigorosi su una **piattaforma di pompa idraulica aerospaziale**:

- **Impostazione sperimentale**: 400 campioni sani e 5 tipi di guasti con 5 campioni ciascuno (rapporto di squilibrio **80:1**)
- **Algoritmi di confronto**: ConvNet nativo, downsampling (`DS`), sovracampionamento tradizionale (`OS`)

### 4.1 Risultati delle prestazioni di classificazione

<img src="/Fig.5.png" style="width: 90%; " />
<p align="center" style="color: grey">Punteggio F1 medio di quattro metodi in 10 prove</p>

<img src="/Fig.6.png" style="width: 90%; " />
<p align="center" style="color: grey">Precisione di quattro metodi in 10 prove</p>

I risultati sperimentali dimostrano che l'algoritmo proposto (*Developed*) supera gli altri in **punteggio F1**, **precisione** e **richiamo**:

- Il punteggio F1 medio ha raggiunto **97.50%**
- Sia la precisione che il richiamo superano **97%**

### 4.2 Analisi della visualizzazione delle caratteristiche

Utilizzando la **riduzione della dimensionalità t-SNE**, i confini delle classi del metodo sono chiaramente definiti, con anche i campioni di guasto estremamente piccoli separati con precisione dai campioni sani.

<img src="/Fig.11.png" style="width: 100%; " />
<p align="center" style="color: grey">Distribuzione dei campioni di test nello spazio bidimensionale delle caratteristiche</p>

## 5. Caratteristiche del metodo

- **Diversità**: A differenza della semplice replica, la deformazione del pacchetto d'onda introduce **perturbazioni nel dominio della frequenza**, aumentando la diversità dei dati di addestramento.
- **Alta efficienza**: L'addestramento su un PC standard richiede solo circa **8 secondi** per epoca con convergenza veloce.
- **Robustezza**: La strategia di aumento dinamico sopprime efficacemente il rumore industriale e i problemi di sovradattamento.

## Informazioni dell'articolo

- **Titolo**: *Highly imbalanced fault diagnosis of mechanical systems based on wavelet packet distortion and convolutional neural networks*
- **Rivista**: Advanced Engineering Informatics (2022)
- **DOI**: `10.1016/j.aei.2022.101535`
- **Collegamento**: [https://doi.org/10.1016/j.aei.2022.101535](https://doi.org/10.1016/j.aei.2022.101535)
