# DAVID RUIZ URRACA

**Senior Mobile Engineer · Android & Flutter · Kotlin Multiplatform · SDK & Platform Architecture · AI Product Builder**

+34 644 627 262 · david@ruizurraca.com · [linkedin.com/in/davidru85](https://linkedin.com/in/davidru85) · [davidru85.github.io](https://davidru85.github.io/)

**Available for Remote Roles**

---

## PROFESSIONAL PROFILE

Product-minded Senior Mobile Engineer building production mobile systems since 2015 across native Android applications, Android SDKs, Flutter products, and Kotlin Multiplatform shared layers. I own delivery end to end across architecture, API and SDK contracts, backward compatibility, privacy and consent, testing, CI/CD, release engineering, analytics, payments, and experimentation.

At OLX Group, I owned an internal Android Ads SDK across the Horizontals, Real Estate, and Motors verticals, serving tens of millions of active users across market-specific builds. I led its architecture, lifecycle, publication, integration standards, and partner-team enablement, while raising SDK test coverage from 14% to 70%. At Explora Prado, I am the Technical Lead and sole developer of a live Flutter product for Museo del Prado, released on both the App Store and Google Play and still in active development.

My current product work combines privacy-first health data, on-device AI, cloud AI, and cross-platform architecture. I am building an Android health app around Health Connect and Android AICore (on-device Gemini Nano), and I maintain two public Kotlin Multiplatform portfolio projects for Android and iOS: carApp, an offline-first vehicle-cost tracker, and Multiverse Explorer, a Rick and Morty API client that pairs a shared Kotlin core with fully native UIs — Jetpack Compose with Material 3 Expressive and SwiftUI with Liquid Glass. I also use generative AI and agentic development workflows to accelerate implementation while preserving reproducibility, testing discipline, and engineering quality.

## SELECTED IMPACT

- **Mobile platform ownership:** Owned the Android Ads SDK lifecycle at OLX Group, including architecture, API/versioning strategy, backward compatibility, privacy and consent, AAR packaging, Maven publication, documentation, and partner-team integration.
- **Production scale:** Supported monetisation across three OLX consumer verticals, each shipping market-specific builds and serving tens of millions of active users.
- **Quality improvement:** Raised Android Ads SDK test coverage from 14% to 70% using JUnit, MockK, Robolectric, Espresso, MockWebServer, and JaCoCo, with Detekt and ktlint enforcing code quality.
- **End-to-end product delivery:** Built and operate the full technical platform for Explora Prado, including Flutter applications for Android and iOS, Firebase services, in-app purchases, release pipelines, and live store releases.
- **Long-term technical impact:** Led the ground-up Kotlin/Dagger 2 rebuild of Wegow's Android product; the resulting v2 still underpins the company's product six years after my departure.
- **AI product engineering:** Building a privacy-first Health Connect product that combines on-device Gemini Nano/AICore with cloud AI, with local-first handling of sensitive health data.

---

## PROFESSIONAL EXPERIENCE

### Technical Lead (Freelance) · Jan 2026 – Present
**Explora Prado** · Spain (Remote)

Recognised Flutter app turning Museo del Prado's permanent collection into a self-guided digital experience. Art-Tech 2025 Honorable Mention · Santander X Explorer 2026 selection.

- Own the full technical platform as the sole developer, including architecture, implementation, release pipeline, and live releases on the [App Store](https://apps.apple.com/app/id6758626429) and [Google Play](https://play.google.com/store/apps/details?id=com.explora.prado).
- Built the Android and iOS applications end to end with Flutter/Dart, Clean Architecture, BLoC, and a layered DTO / Entity / Model data structure backed by Firebase (Firestore, Storage, Authentication, Analytics, and Crashlytics).
- Implemented the in-app purchase platform for both stores with `in_app_purchase`, including purchase verification and entitlement persistence; store-side products are live on both platforms.
- Built dynamic localisation with Spanish and English live, plus Italian, French, and Portuguese planned, and delivered adaptive UI for a content-heavy museum experience using SVG assets and custom typography.
- Built the internal content-administration back office in Flutter Web for operator use, separate from the consumer-facing application.
- Developed interactive quizzes, multimedia guides, payment flows, and offline synchronisation using Test-Driven Development (TDD) to support application reliability.
- Run Firebase A/B tests across onboarding, content presentation, and conversion flows.
- Scale solo delivery through an AI-first workflow using Claude Code and Cursor, custom skill packages, terminal-integrated command loops, automated test-debug cycles, and structured `AGENTS.md` / `DESIGN.md` patterns.

---

### Senior Android Engineer · Jul 2021 – Jan 2026
**OLX / Letgo** · Barcelona (Remote)

Android platform engineering for a global marketplace operating across Poland, Portugal, Turkey, Ukraine, Romania, India, Indonesia, South America, and other markets.

- Owned the internal Android Ads SDK as a mobile platform, powering monetisation across OLX's Horizontals, Real Estate, and Motors verticals. Each vertical shipped market-specific builds serving tens of millions of active users, with ad demand integrated primarily through Google Ad Manager and additional third-party ad-network SDKs.
- Served as the SDK's technical lead and sole Android engineer for most of its lifecycle, leading a temporarily expanded Android team during higher-load periods.
- Designed the `api` / `impl` module boundary to enforce dependency isolation, make partner integrations safer and more predictable, and improve build performance. Standardised builds with Gradle convention plugins, version catalogs (`libs.versions.toml`), and composite builds.
- Led privacy-first SDK decisions covering consent-state management, IAB TCF, Google UMP, scoped tracking, GDPR, and Android Privacy Sandbox technologies including Topics API, Protected Audience, and Attribution Reporting.
- Led migration of critical SDK surfaces from XML to Jetpack Compose and from callback-based asynchronous code to Kotlin Coroutines and Flow while maintaining backward compatibility.
- Applied Baseline Profiles and Macrobenchmark to improve startup performance and reduce jank on critical SDK-hosting surfaces.
- Used TDD and automated testing with JUnit, MockK, Robolectric, Espresso, and MockWebServer; raised SDK test coverage from 14% to 70% as tracked by JaCoCo, with Detekt and ktlint enforcing code quality.
- Owned the SDK lifecycle from versioning and AAR packaging through Maven Publish distribution to Artifactory (JFrog) and Maven Central, integration documentation, and partner-team enablement.
- Coordinated with the iOS SDK team to align API designs, telemetry schemas, and release lifecycles, establishing a unified integration standard for client teams.
- Worked across OLX's international organisation as it evolved, collaborating with teams in Istanbul, New Delhi, Poznań, and Lisbon to coordinate integration and delivery across time zones and markets.
- Contributed to consumer-app feature work, including GraphQL-based data fetching, and wrote Flutter code alongside native Android development.
- Integrated Amplitude, CleverTap, Google Analytics, and Crashlytics; ran A/B tests and experiments to validate ad placements, formats, and SDK changes against monetisation and engagement metrics.

---

### Senior Android Developer · Sep 2019 – Jul 2021
**Wegow** · Madrid (Remote)

Live-music events discovery and ticketing platform. Joined as the company's only Android developer and owned the application end to end across architecture, feature delivery, and production stability.

- Stabilised the inherited Java application built on deprecated libraries, including Dagger 1, while continuing feature delivery.
- Led and built a ground-up Android v2 in Kotlin with Dagger 2, MVVM, and Clean Architecture; this foundation still underpins the company's product six years after my departure.
- Built core functionality with Room, LiveData, ViewModels, Coroutines, and Glide, and integrated Firebase for push notifications, analytics, and Crashlytics.
- Integrated Stripe and Redsys payment gateways for ticket purchases and the Google Maps SDK for event discovery and venue geolocation.
- Applied TDD as a core engineering practice to support a reliable, regression-resistant rebuild.
- Coordinated with the iOS developer on feature contracts, analytics schemas, release cycles, and shared product behaviour across both platforms.
- Used A/B testing to validate UX and conversion changes across ticketing and event-discovery flows.

---

### Android Developer · Jul 2018 – Sep 2019
**Instantgo** · Madrid (Remote)

On-demand services marketplace where independent professionals offered paid sessions at an hourly rate — most delivered online via 1:1 video call, with support for in-person services too. User base concentrated in California, available across many countries.

- Built the Android application from scratch and brought it to feature parity with the existing iOS application.
- Owned the Android implementation as the sole Android developer in a fast-paced startup, using Kotlin, MVVM, Clean Architecture, Retrofit, Room, LiveData, and Glide.
- Integrated paid 1:1 video sessions with Twilio, including session and connection lifecycle management.
- Implemented booking payments with Stripe.
- Integrated Firebase Authentication, push notifications, analytics, Crashlytics, Realtime Database, Storage, Cloud Functions, and App Distribution, with Dagger 2 for dependency injection.
- Ran Firebase A/B tests to optimise booking and session-conversion flows.

---

### Android Developer · Mar 2018 – Jul 2018
**Telefónica** · Madrid

Android TV development for Movistar TV, Telefónica's IPTV and streaming platform. Developed D-pad navigation and Leanback UI features, integrated ExoPlayer and custom JavaScript components, and worked in a Scrum team using MVP and Kotlin. A/B tested UI variants to refine navigation and engagement.

---

### Android Developer · Dec 2017 – Mar 2018
**UXSmobile** · Madrid

Built Kotlin modules for the BMI – Evo Banco application using Clean Architecture, MVP, Retrofit, and Room, under banking-sector quality and security standards.

---

### Android Developer · Nov 2016 – Dec 2017
**Mobile One2One** · Madrid

Delivered native Android applications for enterprise clients in retail, transport, and hospitality, including Carrefour, Alsa, Iberostar, Baleària, and Meliá. Built end-to-end features with MVP, Clean Architecture, Java, Kotlin, Retrofit, Realm, and custom UI designs within an agency delivery model.

---

### Android Developer · Sep 2015 – Nov 2016
**AvantGarde IT Services** · Madrid

Built and shipped client-facing Java Android applications for public-sector and enterprise clients including Indra, DGT, Atenzia, and Brightstar. Contributed across the full feature lifecycle using AsyncTasks, Retrofit, ButterKnife, EventBus, an early version of Dagger, and XML-based UIs.

---

## SIDE PROJECTS

### Personal Health App (Android) · In Development
Personal side project — a privacy-first Android app built around the Health Connect API.

- Reads and aggregates Health Connect data to generate personal health metrics.
- Pairs on-device AI (Android AICore / Gemini Nano) with cloud AI to help users interpret their metrics and get actionable guidance to improve their health.
- Local-first by design: sensitive health data is processed on-device where possible, with cloud AI reserved for deeper analysis.

### carApp (Kotlin Multiplatform) · In Development
Personal side project and public portfolio piece — a cross-platform **Android and iOS** app for tracking vehicle costs, with an offline-first MVP focused on fuel expenses.

- Shares domain, data, synchronization, and presentation state-holder logic through **Kotlin Multiplatform**, while keeping the user interfaces native with **Jetpack Compose** on Android and **SwiftUI** on iOS.
- Covers vehicle management, refuelling history, and real-world fuel-consumption calculations using the full-to-full method and distance-weighted averages.
- Built as a comprehensive, modular project with **SQLDelight** local persistence, Firebase/Firestore backup and recovery, anonymous-first authentication, test-driven development, architecture and contract checks, and protected GitHub Actions CI.
- **Repository:** [github.com/davidru85/carApp](https://github.com/davidru85/carApp)

### Multiverse Explorer (Kotlin Multiplatform) · 2026
Personal project and public portfolio piece — a cross-platform **Android and iOS** client for the public Rick and Morty API to browse every character, inspect character details, and keep favourites, built on one shared Kotlin core with two fully native UIs that follow each platform's own design guidelines.

- Shares domain, data, and presentation logic (state holders, reducers, and UI-state contracts with unidirectional data flow) through **Kotlin Multiplatform**, exported to iOS as a single Kotlin framework, while keeping the UIs native: **Jetpack Compose with Material 3 Expressive** on Android and **SwiftUI with Liquid Glass** on iOS (with a material fallback below iOS 26).
- Structured as 13 Gradle modules under Clean Architecture, with inward-only dependencies enforced on every build and an `api` / `impl` boundary that keeps networking and storage types out of feature code; architectural decisions are recorded in 15 ADRs.
- Built from a Figma design specification kept in sync with the code through a committed design-token export that both platforms' test suites verify against. Android cards take a dynamic accent colour extracted from each character's portrait, iOS uses native glass surfaces (`glassEffect`, `GlassEffectContainer`) with Reduce Transparency fallbacks, and both apps ship screen-reader semantics, scalable text, measured 4.5:1 text contrast, and platform-minimum touch targets.
- Implements REST and GraphQL data sources over a single Ktor client, switchable at runtime, plus response caching with an explicit freshness and offline-fallback policy, memory and disk image caching, and a typed failure model with designed empty, stale, error, and partial-data states.
- Delivers paginated character discovery with debounced search and status filtering, locally persisted favourites, a card-to-detail shared-element transition with Reduce Motion support, predictive back on Android, and English/Spanish localisation.
- Built test-first with 1,550+ automated tests across shared Kotlin, Android, and iOS code, screenshot testing on both platforms (Roborazzi and swift-snapshot-testing), and REST/GraphQL contract tests against recorded fixtures plus a weekly live-API probe.
- Enforces quality through a GitHub Actions pull-request gate with per-module checks, an iOS job, ktlint, Android Lint, SwiftLint, swift-format, dependency analysis, and repository-hygiene checks, with builds standardised through Gradle convention plugins and a version catalog.
- **Repository:** [github.com/davidru85/RickAndMorty](https://github.com/davidru85/RickAndMorty)

---

## LEADERSHIP, KNOWLEDGE SHARING & OPEN SOURCE

- **Internal Talks & Training:** Delivered internal talks and hands-on training at several companies, helping engineering colleagues adopt Kotlin, Clean Architecture, and modern Jetpack libraries.
- **Open Source Contributions:** Made small contributions to open-source projects through pull-request reviews, translation support, and testing.
- **Internal SDK Guidelines & Documentation:** Authored internal playbooks for SDK integration, GDPR consent management, and modular library architecture, used by partner teams within the organisation.

---

## TECHNICAL SKILLS

> **Proficiency:** (Expert) · (Familiar) · unmarked = Proficient

| Area | Skills |
|---|---|
| **Languages** | Kotlin (Expert) · Java · Dart · Swift (Familiar) · TypeScript (Familiar) · JavaScript (Familiar) · XML · JSON |
| **Android Platform, UI & Core** | Jetpack Compose (Expert) · Material Design · Material 3 Expressive · Navigation Compose · shared-element transitions · predictive back · accessibility (screen-reader semantics, scalable text, contrast) · View system / XML layouts · Android TV / Leanback · ExoPlayer · WorkManager · Timber |
| **Architecture & Asynchronous Programming** | Clean Architecture (Expert) · MVVM (Expert) · MVI · Unidirectional Data Flow · MVP · enforced module boundaries · Coroutines & Flow (Expert) · RxJava · LiveData · ViewModel · EventBus (legacy) (Familiar) |
| **Dependency Injection** | Hilt (Expert) · Dagger 2 (Expert) · Koin · Dagger 1 (legacy) (Familiar) |
| **Networking & Data** | Retrofit (Expert) · Ktor · OkHttp (+ interceptors) · GraphQL · Gson · Jackson · kotlinx.serialization · Room (Expert) · DataStore · HTTP response caching (stale-while-revalidate, offline fallback) · Coil · Glide |
| **Performance Engineering** | Baseline Profiles · Macrobenchmark · application startup optimisation · jank and frame-timing analysis · R8 |
| **Testing & Code Quality** | TDD (Expert) · JUnit (Expert) · MockK (Expert) · Espresso · Robolectric · Compose UI testing · Roborazzi (screenshot testing) · contract testing (recorded REST / GraphQL fixtures) · MockWebServer · JaCoCo · Detekt · ktlint · Android Lint · XCTest (Familiar) · swift-snapshot-testing (Familiar) · SwiftLint (Familiar) · swift-format (Familiar) |
| **SDK, Build & CI/CD** | Gradle (Kotlin DSL / Groovy) (Expert) · version catalogs (`libs.versions.toml`) · convention plugins · composite builds · custom Gradle verification tasks (module-boundary and dependency policies) · Dependency Analysis Gradle Plugin · R8 / ProGuard · build flavors / variants · Maven Publish (Expert) · Artifactory (JFrog) (Expert) · Maven Central · AAR packaging (Expert) · GitHub Actions (Expert) · Jenkins · Fastlane · XcodeGen (Familiar) · Play Feature Delivery |
| **Privacy & Consent** | GDPR (Expert) · Android Privacy Sandbox (Topics API · Protected Audience · Attribution Reporting) · IAB TCF · Google UMP |
| **On-device & Health** | Health Connect API · AICore (on-device Gemini Nano) · on-device TTS & STT (local AI) |
| **Flutter & Cross-Platform** | BLoC · Riverpod (Familiar) · Clean Architecture · `in_app_purchase` · Platform Channels · Flutter Web · Firebase · Firestore · App Check |
| **Kotlin Multiplatform** | Kotlin Multiplatform · shared domain, data, and presentation layers · Kotlin/Native framework export to iOS · Compose Multiplatform · SwiftUI (native iOS) (Familiar) · Liquid Glass (Familiar) · SQLDelight (Familiar) · Ktor Multiplatform · React Native (Familiar) |
| **AI & Agentic Tooling** | Claude Code (daily) · Cursor · Codex (Familiar) · Ollama (Familiar) · Windsurf (Familiar) · Gemini · Qwen (Familiar) · MCP Servers (Familiar) · AI skills and custom skill packages · terminal command loops · automated test-debug cycles · `AGENTS.md` / `DESIGN.md` patterns |
| **Cloud & Product Services** | Firebase suite (Expert): Authentication, Firestore, Realtime Database, Storage, Cloud Functions, Analytics, Crashlytics, Remote Config, App Distribution · Google Ad Manager · third-party ad-network SDKs and mediation · Amplitude · CleverTap · Google Analytics · Twilio · Stripe · Redsys · feature flags · A/B testing |
| **Tools & Methodologies** | Android Studio · Xcode (Familiar) · VS Code · Figma (design handoff) · Git (Expert) · CI/CD · Architecture Decision Records (ADRs) · JIRA · Agile · Scrum · Kanban · A/B testing and experimentation |

> **On React Native, JavaScript & TypeScript:** deliberately marked *Familiar* — a platform on-ramp, not on the level of Kotlin or Dart. What makes it usable in practice is the combination of app-development and architecture experience since 2015 with an AI-assisted workflow (Claude Code, Cursor): enough to take on React Native projects and become productive on them without a long ramp-up.

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
