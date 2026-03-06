# 小波包失真与卷积神经网络在不平衡故障诊断中的应用

<br>

> **参考论文**：***Highly imbalanced fault diagnosis of mechanical systems based on wavelet packet distortion and convolutional neural networks***
## 1. 工业背景与问题

传统的深度学习模型（如CNN）通常假设各类别样本数量均衡。但在实际工业现场：

- **健康样本**：极易获取。
- **故障样本**：获取成本极高，甚至具有破坏性，导致样本量极少。

**后果**：模型会产生分类偏见，倾向于把所有故障都预测为正常，导致严重的误诊。


## 2. 小波包失真方法

为缓解故障样本不足问题，本论文提出了一种**基于信号处理的数据增强方法**，不仅能生成新样本，还能保持原始故障的频率特征。

### 技术流程解析

1. **分解**：将原始振动信号通过小波包变换（WPT）分解到不同频段。
2. **随机失真**：随机选取一个小波包节点，使用非线性函数进行扭曲处理。
3. **重构**：通过逆变换生成具有差异性的增强样本，实现数据集的动态平衡。

<img src="/Fig.1.png" style="width: 100%; " />
<p align="center" style="color: grey">小波包失真过程图</p>

## 3. 模型结构：基于 ConvNet 的特征学习

该方法采用**卷积神经网络**直接处理原始信号，无需人工繁琐的特征工程。

<img src="/Fig.3.png" style="width: 100%; " />
<p align="center" style="color: grey">ConvL + BN + ReLU结构层</p>

- **局部感受野与参数共享**：显著减少模型参数，降低小样本下的过拟合风险
- **批归一化（BN）**：稳定特征分布，加速模型收敛

## 4. 实验设置与结果

作者在**航空液压泵平台**上进行了严苛测试：

- **实验设置**：正常样本 400 个，5 类故障样本各 5 个（不平衡比例 **80:1**）
- **对比算法**：原生 `ConvNet`、下采样`DS`、传统过采样`OS`

### 4.1 分类性能结果

<img src="/Fig.5.png" style="width: 90%; " />
<p align="center" style="color: grey">四种方法在10次试验中的平均F1得分</p>

<img src="/Fig.6.png" style="width: 90%; " />
<p align="center" style="color: grey">四种方法在10次试验中的精确度</p>

实验数据显示，本文开发的算法（*Developed*）在 **F1 Score**、**精确率**和**召回率**上领先：

- 平均 F1 分数达到了 **97.50%**
- 精确率和召回率均超过 **97%**

### 4.2 特征可视化分析

通过**t-SNE**降维可以看到，本文方法提取的特征类别边界清晰，即使是极少量的故障样本也被精准地从健康样本中分离出来。

<img src="/Fig.11.png" style="width: 100%; " />
<p align="center" style="color: grey">测试样本在二维特征空间中的分布图</p>

## 5. 方法特点

- **多样性**：不同于简单的复制，小波包失真引入了**频域扰动**，增加了训练数据的多样性
- **效率高**：在普通 PC 上每轮训练仅需约 **8 秒**，模型收敛快
- **鲁棒性**：通过动态增强策略，有效抑制了工业噪声和过拟合问题

## 论文信息

- **题目**：*Highly imbalanced fault diagnosis of mechanical systems based on wavelet packet distortion and convolutional neural networks*
- **期刊**：Advanced Engineering Informatics (2022)
- **DOI**：`10.1016/j.aei.2022.101079`
- **链接**：[https://www.sciencedirect.com/science/article/pii/S147403462200101079](https://www.sciencedirect.com/science/article/pii/S147403462200101079)