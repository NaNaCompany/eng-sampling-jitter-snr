# 샘플링 지터 SNR 계산기

정현파를 샘플링할 때 시간 지터만으로 제한되는 신호 대 잡음비 계산.

- ID: E143
- App: https://nanalab.kr/eng-sampling-jitter-snr/
- Repository: https://github.com/NaNaCompany/eng-sampling-jitter-snr
- Formula: SNR_j = −20 log₁₀(2πfσt)

## Model and data

비상관인 작은 RMS 샘플 시각 오차와 단일 정현파 입력을 가정합니다. 이 도구는 2πfσt ≤ 0.1 rad로 근사 범위를 제한합니다. σt는 관련 대역의 총 RMS 시각 지터입니다. 독립적인 지터 성분만 제곱합의 제곱근으로 합칠 수 있습니다. 양자화·열잡음·왜곡·다중톤·큰 위상오차는 제외합니다.

Inputs normalize to SI. Repeated-input models support adding/removing actual input rows. Calculations, finite-number checks and physical-domain checks run locally; no external property database or solver API is used.

## Validation

Run node --test tests/*.test.mjs and python scripts/build-locales.py --check. tests/reference.json contains independently computed high-precision default and boundary references. The source notices distinguish original MIT work from citation-only external references.

## Static languages

Korean (existing root), English (`en/`), Spanish (`es/`), Simplified Chinese (`zh/`), Japanese (`ja/`) and German (`de/`). Each page has its own canonical URL, reciprocal hreflang, localized metadata, interface, validation messages and preview image. The language links work without JavaScript. Calculation code is shared and no runtime translation API is used.

Edit `localization/*.json` for text, `src/template.html` for the shared page, and run `python scripts/build-locales.py`. Run `python scripts/build-locales.py --check` and `npm test` before publishing. Decimal commas are accepted in Spanish and German; thousands separators are not supported.
