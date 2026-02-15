# scrcpy GUI (React Native)

A React Native interface for managing scrcpy-style mirroring sessions with a pastel-first default design.

## Features

- **Android screen mirroring** control card (start/stop + device list action)
- **Camera mirroring** control card (start/stop + camera source action)
- **Pastel color scheme** for cards, accents, and screen background
- **Phosphor icons** for all main visual actions
- **Connection profile** toggle for wireless ADB state
- **Live preview panel** placeholder for stream telemetry integration

## Run

```bash
npm install
npm run start
```

Then open on Android/iOS emulator or run `npm run web` for web preview.

## Notes

This project focuses on GUI state and interaction flow. Hook the action callbacks in `App.tsx` to your local scrcpy bridge/service for actual stream rendering and device transport.
