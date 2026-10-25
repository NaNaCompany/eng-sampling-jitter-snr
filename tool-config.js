export const tool={
  "id": "E143",
  "slug": "eng-sampling-jitter-snr",
  "title": "샘플링 지터 SNR 계산기",
  "title_en": "Sampling Jitter SNR Calculator",
  "category": "신호·샘플링",
  "category_en": "Signals and sampling",
  "fields": [
    {
      "key": "f",
      "label": "정현파 입력 주파수 f",
      "label_en": "Sinusoidal input frequency f",
      "dimension": "frequency",
      "example": 100000000.0,
      "constraint": "positive",
      "display_unit": "Hz",
      "display_value": "100000000"
    },
    {
      "key": "jitter",
      "label": "총 RMS 시간 지터 σt",
      "label_en": "Total RMS timing jitter σt",
      "dimension": "time",
      "example": 1e-12,
      "constraint": "positive",
      "display_unit": "s",
      "display_value": "9.9999999999999998e-13"
    }
  ],
  "result_label": "지터가 제한하는 SNR",
  "result_label_en": "Jitter-limited SNR",
  "result_dimension": "decibel",
  "formula": "SNR_j = −20 log₁₀(2πfσt)",
  "purpose": "정현파를 샘플링할 때 시간 지터만으로 제한되는 신호 대 잡음비 계산.",
  "purpose_en": "Estimate the signal-to-noise ratio imposed solely by timing jitter when sampling a sine wave.",
  "assumptions": "비상관인 작은 RMS 샘플 시각 오차와 단일 정현파 입력을 가정합니다. 이 도구는 2πfσt ≤ 0.1 rad로 근사 범위를 제한합니다. σt는 관련 대역의 총 RMS 시각 지터입니다. 독립적인 지터 성분만 제곱합의 제곱근으로 합칠 수 있습니다. 양자화·열잡음·왜곡·다중톤·큰 위상오차는 제외합니다.",
  "assumptions_en": "Required: a single sinusoidal input and small, uncorrelated RMS timing errors. This tool limits 2πfσt to 0.1 rad or less. σt is the total RMS timing jitter over the relevant integration bandwidth; root-sum-square combination applies only to independent jitter sources. Excluded: quantization, thermal noise, distortion, multiple tones and large phase errors.",
  "sources": [
    {
      "label": "Analog Devices — ADC SNR method and RMS timing jitter",
      "url": "https://www.analog.com/en/resources/faqs/FAQ_Using_the_ADC_SNRmethod_what_is_the_equivalent.html"
    }
  ],
  "condition": "정현파와 작은 비상관 지터 가정을 확인했습니다.",
  "condition_en": "I have checked the sinusoidal-input and small uncorrelated-jitter assumptions.",
  "site": "https://nanalab.kr/eng-sampling-jitter-snr/",
  "repository": "https://github.com/NaNaCompany/eng-sampling-jitter-snr",
  "groups": [],
  "output_unit": "db"
};
