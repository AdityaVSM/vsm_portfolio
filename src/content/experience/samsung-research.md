> An Android app that translates any app's on-screen text from Indian languages into English in real time, using a fine-tuned Transformer model that runs entirely on the device. It was a university collaboration project with Samsung Research Institute and received an Excellent Project award.

## What it does

A lot of content on phones in India is in regional languages, and not everyone can read every language they come across. We wanted translation that works **inside any app**, without copying text into a separate translator.

From the user's side:

1. While they use any app, the app watches for text in an Indian language.
2. When it detects one, a small **popup** appears.
3. Tapping the popup extracts the text on screen and shows it **translated into English**.

## How it works

- **Screen text.** An Android **Accessibility Service** reads the text currently on screen. That lets it work across apps without needing any integration from them.
- **Translation model.** A Transformer-based encoder–decoder model (BERT/mBART), fine-tuned with TensorFlow and Keras on the **IndicNLP** dataset for Indian languages to English.
- **On-device inference.** The model runs locally with **TensorFlow Lite**. No text leaves the phone and no server is needed.

The model reached a **BLEU score of ~60**.

<!-- TODO(Aditya): what was the ~60 BLEU measured on (test split of IndicNLP? which language pair?), and was there a baseline to compare against? -->

## The hard part: getting a large model onto a phone

The data side was relatively straightforward, since the IndicNLP dataset is standardized and publicly available. The two hard parts were training the model and then deploying it.

After fine-tuning, the model was **too big to run on a device**, and we had no obvious way to ship it. Because this was a university collaboration project, there was no funding for cloud services, so hosting the model on a server wasn't an option either.

That pushed us to **TensorFlow Lite**, which converts a TensorFlow model into a compact format designed for mobile inference. Converting to TFLite let us run the model directly in the Android app (Java) for our prototype. As a bonus, on-device inference means users' screen content stays private and translation works offline.

<!-- TODO(Aditya): did you quantize the model or do anything else to shrink it? Roughly how big was it before and after, and how fast was a translation on the phone? -->

## Outcome

- A working Android prototype that translates on-screen text from Indian languages into English in real time, fully on-device.
- **BLEU score of ~60** from the fine-tuned model.
- The project received an **Excellent Project** award.

<!-- TODO(Aditya): confirm the exact award wording, and add the certificate: put it in public/case-studies/ and use ![Excellent Project certificate](/case-studies/samsung-certificate.jpg) -->
