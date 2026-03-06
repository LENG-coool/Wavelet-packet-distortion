# Application of Wavelet Packet Distortion and Convolutional Neural Networks in Imbalanced Fault Diagnosis

<br>

> **Reference Paper**：***Highly imbalanced fault diagnosis of mechanical systems based on wavelet packet distortion and convolutional neural networks***

## 1. Industrial Background and Problem

Traditional deep learning models (such as CNN) typically assume balanced class distributions across different categories. However, in real industrial scenarios:

- **Healthy Samples**: Easy to obtain in large quantities.
- **Fault Samples**: High acquisition cost, sometimes destructive in nature, resulting in extremely limited sample sizes.

**Consequence**: The model develops classification bias, tending to predict all faults as normal conditions, leading to severe misdiagnosis.


## 2. Wavelet Packet Distortion Method

To address the insufficient fault samples problem, this paper proposes a **signal processing-based data augmentation method** that not only generates new samples but also preserves the original frequency characteristics of faults.

### Technical Process

1. **Decomposition**: Decompose the original vibration signal into different frequency bands using Wavelet Packet Transform (WPT).
2. **Random Distortion**: Randomly select a wavelet packet node and apply a nonlinear function for distortion processing.
3. **Reconstruction**: Generate augmented samples with diversity through inverse transformation, achieving dynamic dataset balancing.

<img src="/Fig.1.png" style="width: 100%; " />
<p align="center" style="color: grey">Wavelet packet distortion process diagram</p>

## 3. Model Architecture: ConvNet-based Feature Learning

This method employs a **convolutional neural network** to directly process raw signals without requiring manual feature engineering.

<img src="/Fig.3.png" style="width: 100%; " />
<p align="center" style="color: grey">ConvL + BN + ReLU structure layers</p>

- **Local Receptive Field and Parameter Sharing**: Significantly reduces model parameters and mitigates overfitting risk with small sample sizes.
- **Batch Normalization (BN)**: Stabilizes feature distribution and accelerates model convergence.

## 4. Experimental Setup and Results

The authors conducted rigorous testing on an **aerospace hydraulic pump platform**:

- **Experimental Setup**: 400 healthy samples and 5 fault types with 5 samples each (imbalance ratio **80:1**)
- **Comparison Algorithms**: Native `ConvNet`, downsampling (`DS`), traditional oversampling (`OS`)

### 4.1 Classification Performance Results

<img src="/Fig.5.png" style="width: 90%; " />
<p align="center" style="color: grey">Average F1 scores of four methods across 10 trials</p>

<img src="/Fig.6.png" style="width: 90%; " />
<p align="center" style="color: grey">Precision of four methods across 10 trials</p>

The experimental results demonstrate that the proposed algorithm (*Developed*) outperforms others in **F1 Score**, **Precision**, and **Recall**:

- Average F1 score reached **97.50%**
- Both Precision and Recall exceed **97%**

### 4.2 Feature Visualization Analysis

Using **t-SNE** dimensionality reduction, the method's class boundaries are clearly defined, with even extremely small fault samples precisely separated from healthy samples.

<img src="/Fig.11.png" style="width: 100%; " />
<p align="center" style="color: grey">Distribution of test samples in two-dimensional feature space</p>

## 5. Method Characteristics

- **Diversity**: Unlike simple replication, wavelet packet distortion introduces **frequency domain perturbations**, increasing training data diversity.
- **High Efficiency**: Training on a standard PC requires only approximately **8 seconds** per epoch with fast convergence.
- **Robustness**: The dynamic augmentation strategy effectively suppresses industrial noise and overfitting issues.

## Paper Information

- **Title**: *Highly imbalanced fault diagnosis of mechanical systems based on wavelet packet distortion and convolutional neural networks*
- **Journal**: Advanced Engineering Informatics (2022)
- **DOI**: `10.1016/j.aei.2022.101079`
- **Link**: [https://www.sciencedirect.com/science/article/pii/S147403462200101079](https://www.sciencedirect.com/science/article/pii/S147403462200101079)
