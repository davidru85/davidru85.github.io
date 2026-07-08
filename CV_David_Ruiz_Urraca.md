# DAVID RUIZ URRACA

**Senior Mobile Engineer · Android · Flutter · KMP · AI Product Builder**

+34 644 627 262 · david@ruizurraca.com · [linkedin.com/in/davidru85](https://linkedin.com/in/davidru85) · [davidru85.github.io](https://davidru85.github.io/)

**Available for Remote Roles**

---

## PROFESSIONAL PROFILE

Product-minded Senior Mobile Engineer building production Android applications at scale since 2015, with a strong cross-platform track record in Flutter and active Kotlin Multiplatform adoption. Currently Technical Lead and sole developer of Explora Prado (Flutter), an app for Museo del Prado that received an Art-Tech 2025 Honorable Mention and was selected for Santander X Explorer 2026. Previously, owned an internal Android Ads SDK end-to-end at OLX Group — versioning strategy, backward compatibility, GDPR consent flows, and integration ergonomics for partner teams across OLX's three consumer verticals (Horizontals, Real Estate & Motors), each shipping market-specific builds, serving tens of millions of active users. I advocate for TDD (Test-Driven Development) and generative AI/agentic workflows as core engineering practices — leveraging Claude Code, Cursor, Codex, and Ollama alongside custom skill packages, terminal-integrated command loops, automated test-debug cycles, and structured AGENTS.md/DESIGN.md patterns to keep AI-assisted development fast, reproducible, and team-ready across collaborators. On personal projects I also work hands-on with health and on-device AI integrations — building with the Health Connect API and Android's AICore (on-device Gemini Nano), plus on-device TTS and STT, for private, local-first features. I'm currently building a personal Android health app that reads Health Connect data to generate personal health metrics and pairs on-device AI with cloud AI to help users understand and improve their health.

---

## PROFESSIONAL EXPERIENCE

### Technical Lead · Jan 2026 – Present
**Explora Prado** · Spain (Remote)

Award-winning Flutter app turning Museo del Prado's permanent collection into a self-guided digital experience. Art-Tech 2025 Honorable Mention · Santander X Explorer 2026.

- Sole owner of the full technical platform: architecture, implementation, release pipeline, and the upcoming App Store / Google Play launch.
- Built the app end-to-end on Flutter/Dart for both Android and iOS with Clean Architecture + BLoC and a layered data model (DTO / Entity / Model), backed by Firebase (Firestore, Storage, Authentication, Analytics, Crashlytics).
- Implemented the in-app purchase layer for both stores (`in_app_purchase`) — purchase verification flow and entitlement persistence, a non-trivial native integration on Android and iOS; store-side product configuration in progress ahead of launch.
- Built dynamic multi-language support (Spanish and English live, with Italian, French, and Portuguese planned) and adaptive UI for a content-heavy museum experience with SVG assets, custom typography, and Flutter Web.
- Developed core features (interactive quiz system, multimedia guides, and payment flows) using Test-Driven Development (TDD) to ensure robust offline synchronization and application reliability.
- Ran A/B tests via Firebase to experiment with onboarding, content presentation, and conversion flows.
- Scaled output as a solo developer through an AI-first workflow leveraging Claude Code and Cursor alongside custom skill packages, terminal command loops, and structured AGENTS.md / DESIGN.md patterns.

---

### Senior Android Engineer · Jul 2021 – Jan 2026
**OLX / Letgo** · Barcelona (Remote)

Android development for a leading global marketplace operating across Poland, Portugal, Turkey, Ukraine, Romania, India, Indonesia, South America, and other markets.

- Architected and maintained the internal Android Ads SDK powering monetisation across OLX's three consumer verticals (Horizontals, Real Estate & Motors), each shipping market-specific builds, serving tens of millions of active users — integrating ad demand primarily through Google Ad Manager alongside additional third-party ad-network SDKs.
- Technical lead for the Android Ads SDK — sole Android engineer for most of the project's life, and lead of a temporarily expanded Android team during higher-load periods.
- Designed an `api/impl` module separation pattern enforcing strict dependency boundaries — improved build times and made partner-team integrations safer and more predictable; standardised the build with Gradle convention plugins, version catalogs (`libs.versions.toml`), and composite builds.
- Drove privacy-first decisions across the SDK: consent state management (IAB TCF, Google UMP), scoped tracking, GDPR and Android Privacy Sandbox compliance (Topics API, Protected Audience, Attribution Reporting).
- Led migration of critical SDK surfaces from XML to Jetpack Compose and from callback-based async to Kotlin Coroutines & Flow, while maintaining backward compatibility.
- Applied Baseline Profiles to improve app startup and reduce jank on critical SDK-hosting surfaces, validating gains with Macrobenchmark.
- Leveraged Test-Driven Development (TDD) with JUnit, MockK, Robolectric, Espresso, and MockWebServer to design the SDK APIs, ensuring zero regression across host apps — raised SDK test coverage from 14% to 70% (tracked with JaCoCo), with Detekt and ktlint enforcing code quality.
- Owned SDK lifecycle end-to-end: versioning strategy, AAR packaging and publication via Maven Publish to Artifactory (JFrog) and Maven Central, integration documentation, and mentoring partner-app teams on consumption patterns.
- Contributed cross-team feature work on consumer apps, reinforcing SDK integration patterns from the consumer side.
- Worked across the organisation's international offices as it evolved: joined in the Letgo era collaborating with the Istanbul office; after Letgo was acquired by OLX, moved to the OLX New Delhi office; and following the sale of OLX Autos (the New Delhi division), joined OLX EU, collaborating with the Poznań and Lisbon offices — coordinating integration and delivery across time zones and markets throughout.
- Led cross-platform coordination with the iOS SDK team to synchronize API designs, telemetry schemas, and release lifecycles, establishing a unified integration standard for client teams.
- Integrated GraphQL-based APIs for data fetching in consumer-app feature work.
- Wrote my first Flutter code here, building cross-platform features alongside the native Android work — the foundation later deepened on Explora Prado.
- Tracking and analytics integration: Amplitude, CleverTap, Google Analytics, Crashlytics.
- Ran A/B tests and experiments to validate ad placements, formats, and SDK changes against monetisation and engagement metrics.

---

### Senior Android Developer · Sep 2019 – Jul 2021
**Wegow** · Madrid (Remote)

Live-music events discovery and ticketing platform. Joined as the company's only Android developer and owned the full app end-to-end: architecture, feature delivery, and production stability across a heterogeneous device base.

- Inherited a legacy Java codebase built on deprecated libraries (Dagger 1); stabilised it and shipped new features during an initial support phase.
- Led and built a ground-up rebuild ("v2") in Kotlin with Dagger 2 on MVVM / Clean Architecture, replacing the legacy Java/Dagger 1 app — a foundation that still underpins the company's product today, 6 years after my departure.
- Built with Room, LiveData, ViewModels, and Coroutines, with Glide for image loading and Firebase for push notifications, analytics, and Crashlytics.
- Integrated Stripe and Redsys payment gateways for ticket purchases and the Google Maps SDK for event discovery and venue geolocation.
- Implemented Test-Driven Development (TDD) as a core practice to ensure high reliability and a regression-free codebase during the rebuild.
- Coordinated directly with the iOS developer to align feature contracts, analytics schemas, and release cycles, driving joint initiatives to unify product behavior across both platforms.
- Used A/B testing to validate UX and conversion changes across the ticketing and event-discovery flows.

---

### Android Developer · Jul 2018 – Sep 2019
**Instantgo** · Madrid (Remote)

On-demand services marketplace where independent professionals offered paid sessions at an hourly rate — most delivered online via 1:1 video call, with support for in-person services too. User base concentrated in California, available across many countries.

- Built the Android app from scratch and brought it to feature parity with the existing iOS app.
- Integrated paid 1:1 video calls with Twilio, managing session and connection lifecycle.
- Implemented the in-app payment flow with Stripe for booking paid video calls.
- Integrated the Firebase ecosystem (Authentication, push notifications, analytics, Crashlytics, Realtime Database, Storage, Cloud Functions, and App Distribution for build delivery) with Dagger 2 for dependency injection.
- Sole Android developer — built the app from scratch with full technical autonomy in a fast-paced startup, using Kotlin + MVVM / Clean Architecture with Retrofit, Room, LiveData, and Glide.
- Ran A/B tests via Firebase to optimise booking and session-conversion flows.

---

### Android Developer · Mar 2018 – Jul 2018
**Telefónica** · Madrid

Android TV development for Movistar TV, Telefónica's IPTV / streaming platform.

- Developed features for the Movistar TV Android TV surface with D-pad navigation and Leanback UI components.
- Worked with ExoPlayer for video playback and integrated custom JavaScript components into the Android TV surface.
- Worked in a Scrum team applying MVP and Kotlin within a large-organization delivery process.
- A/B tested UI variants on the Movistar TV surface to refine navigation and engagement.

---

### Android Developer · Dec 2017 – Mar 2018
**UXSmobile** · Madrid

- Built new modules for the BMI – Evo Banco app with Clean Architecture + MVP in Kotlin.
- Implemented secure REST integrations with Retrofit and local persistence with Room.
- Worked under banking-sector quality and security standards.

---

### Android Developer · Nov 2016 – Dec 2017
**Mobile One2One** · Madrid

- Delivered native Android apps for enterprise clients in retail, transport, and hospitality (Carrefour, Alsa, Iberostar, Baleària, Meliá).
- Built features end-to-end with MVP / Clean Architecture, primarily in Java while taking my first steps with Kotlin.
- Integrated REST APIs (Retrofit) and offline persistence (Realm), implementing custom UI designs.
- Adapted to differing requirements and codebases per client within an agency delivery model.

---

### Android Developer · Sep 2015 – Nov 2016
**AvantGarde IT Services** · Madrid

- Built and shipped client-facing Android apps in Java for public-sector and enterprise clients (Indra, DGT, Atenzia, Brightstar).
- Developed in Java using mainly AsyncTasks, starting to incorporate libraries such as Retrofit, ButterKnife, and an early version of Dagger.
- Built UIs in XML and contributed across the full feature lifecycle.

---

## SIDE PROJECTS

### Personal Health App (Android) · In Development
Personal side project — a privacy-first Android app built around the Health Connect API.

- Reads and aggregates Health Connect data to generate personal health metrics.
- Pairs on-device AI (Android AICore / Gemini Nano) with cloud AI to help users interpret their metrics and get actionable guidance to improve their health.
- Local-first by design: sensitive health data is processed on-device where possible, with cloud AI reserved for deeper analysis.

---

## SPEAKING & OPEN SOURCE

- **Internal Talks & Training**: Delivered internal talks and hands-on training sessions at several companies I've worked for, sharing knowledge with engineering colleagues on Kotlin adoption, clean architecture, and modern Jetpack libraries.
- **Open Source Contributions**: Small contributions to open-source projects — reviewing pull requests, helping with translations, and acting as a tester.
- **Internal SDK Guidelines & Documentation**: Authored internal company playbooks for SDK integration, GDPR consent management, and modular library architecture, used by partner teams within the organisation.

---

## TECHNICAL SKILLS

> **Proficiency:** (E) Expert · (F) Familiar · unmarked = Proficient

| Area | Skills |
|---|---|
| **Languages** | Kotlin (E) · Java · Dart · XML · JSON |
| **Android — UI & Core** | Jetpack Compose (E) · Material Design · View system / XML layouts · Android TV (Leanback) · ExoPlayer · WorkManager |
| **Performance** | Baseline Profiles · Macrobenchmark · app startup optimization · jank / frame-timing analysis · R8 |
| **Architecture & Async** | Clean Architecture (E) · MVVM (E) · MVI · MVP · Coroutines & Flow (E) · RxJava · LiveData · ViewModel |
| **Dependency Injection** | Hilt (E) · Dagger 2 (E) · Koin · Dagger 1 (legacy) (F) |
| **Networking & Data** | Retrofit (E) · Ktor · OkHttp (+ interceptors) · GraphQL · Gson · kotlinx.serialization · Room (E) · Coil · Glide |
| **Testing & Quality** | TDD (E) · JUnit (E) · MockK (E) · Espresso · Robolectric · MockWebServer · JaCoCo · Detekt · ktlint |
| **SDK, Build & CI/CD** | Gradle (Kotlin DSL / Groovy) (E) · version catalogs (`libs.versions.toml`) · convention plugins · composite builds · R8 / ProGuard · build flavors / variants · Maven Publish (E) · Artifactory (JFrog) (E) · Maven Central · AAR packaging (E) · GitHub Actions (E) · Jenkins · Fastlane · Play Feature Delivery |
| **Privacy & Consent** | GDPR (E) · Android Privacy Sandbox (Topics API · Protected Audience · Attribution Reporting) · IAB TCF · Google UMP |
| **On-device & Health** | Health Connect API · AICore (on-device Gemini Nano) · on-device TTS & STT (local AI) |
| **Flutter & Cross-platform** | BLoC · Riverpod (F) · Clean Architecture · `in_app_purchase` · Platform Channels · Flutter Web · Firebase · Firestore · App Check |
| **Kotlin Multiplatform (Exploring)** | Kotlin Multiplatform (KMP) (F) · Compose Multiplatform (F) · SQLDelight (F) · Ktor multiplatform (F) · React Native (F) |
| **AI & Agentic Tooling** | Claude Code (daily) · Cursor · Codex (F) · Ollama (F) · Windsurf (F) · Gemini · Qwen (F) · MCP (F) · custom skill packages (FastAPI SSE, Flutter IAP, httpx, pytest) · terminal command loops · automated test-debug cycles · .cursorrules · AGENTS.md / DESIGN.md patterns |
| **Cloud & Services** | Firebase suite (E) (Auth · Firestore · Realtime DB · Storage · Cloud Functions · Analytics · Crashlytics · Remote Config · App Distribution) · Google Ad Manager (primary ad demand) · third-party ad-network SDKs / mediation · Amplitude · CleverTap · Google Analytics · Twilio · Stripe · Redsys · feature flags / A-B testing |
| **Tools & Methodologies** | A/B testing / experimentation · Android Studio · VS Code · Git (E) · CI/CD · JIRA · Agile · Scrum · Kanban |

---

## EDUCATION

**B.Sc. Computer Science (Information Systems Management)** · Graduated 2012
Universidad de La Rioja · Spain

- Final Year Project on Android platform — Grade: 9/10

---

## LANGUAGES

| Language | Level |
|---|---|
| Spanish | Native |
| English | Professional working proficiency — years of daily use as the working language in international teams |
| Portuguese | Elementary |

---

## INTERESTS

- **360° Photography & Video**: Passionate about immersive 360° capture and an active Insta360 X4 user — I love reliving my trips in full 360° and getting the angles a normal camera can't.
- **Motorcycling & Travel**: Happiest on two wheels and always up for a new road — most of my motorcycle trips and vacations end up being the reason I pick up the 360° camera in the first place.
- **Running & CrossFit**: I stay active with regular running and CrossFit — it's how I keep the discipline and energy that carry over into how I work.
- **Tech & Home Automation**: A tinkerer at heart — I enjoy building and automating my smart home and playing with new gadgets, hardware, and anything I can take apart and improve.
- **Music**: A constant soundtrack to my day — I'm always digging into new music and rarely code, ride, or travel without something playing.
- **Movies & Series**: I love winding down with a good film or series — drawn equally to a gripping story and to anything with striking visuals.
