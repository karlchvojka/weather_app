# Changelog
All notable changes to the Weather App Rebuild will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.0.0] - 2022-09-10
Initial building

### Changed
- CHANGELOG.md
  - Renaming project in specified spots.
- package.json
  - Updated:
    - name
    - version
    - description
- Readme.md
  - Updated:
    - Project Name
    - Project Desc
    - Project goals
- docker-compose.prod.yml
  - sample-prod
    - container_name
- public/index.html
  - Updated title field.
- src/template.html
  - Updated title field.


## [1.0.0] - 2022-09-13
Global config/settings

### Added
- BG image asset: ~/src/globalAssets/images/hexBgRep.png
- Added Module config support for TS to ~/src/globalConfig/ts

### Changed
- Added Background image and css to ~/src/globalConfig/GlobalStyles.tsx
- Updated for TypeScript PNG support:
  - ~/tsconfig.json
  - ~/webpack.config.json
- Updated webpack.config.json for added ts type declarations