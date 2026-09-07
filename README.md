# System Hunter: Ascension v2.0

An enhanced idle RPG clicker game built with modern web technologies and Electron for cross-platform desktop support.

## 🎮 Features

### Enhanced Visuals
- Modern gradient-based UI with smooth animations
- Animated background particles
- Improved combat effects and damage numbers
- Responsive design for various screen sizes

### Improved Auto-Battle System
- Smart auto-battle AI that prioritizes healing when low on HP
- Configurable auto-battle delay settings
- New **Rush Mode** for ultra-fast grinding (50-200ms per action)

### Enhanced Clicker Mechanics
- Guild Crest clicking with scaling bonuses
- Visual feedback on clicks
- Bonus gold and Qi generation

### Expanded RPG Elements
- 3 Class options (Warrior, Mage, Ranger) at level 5
- 15 Skills across 3 trees (Combat, Magic, Survival)
- Equipment system with inventory management
- Title system based on achievements
- 8 Companions with unique bonuses

### Quality of Life
- Settings panel with customizable delays
- Save/Load system with export/import functionality
- Persistent storage via localStorage
- Auto-save every 10 seconds

## 🚀 Installation & Running

### As Web App (Browser)
Simply open `index.html` in any modern browser.

### As Desktop App (Electron)

1. **Install Node.js** (v16 or higher recommended)

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Run in Development**
   ```bash
   npm start
   ```

4. **Build Installers**
   
   For Windows:
   ```bash
   npm run build:win
   ```
   
   For macOS:
   ```bash
   npm run build:mac
   ```
   
   For Linux:
   ```bash
   npm run build:linux
   ```
   
   For all platforms:
   ```bash
   npm run build
   ```

Built installers will be in the `dist/` folder.

## 📁 File Structure

```
system-hunter-ascension/
├── index.html      # Main HTML file
├── styles.css      # All styling
├── game.js         # Game logic
├── main.js         # Electron main process
├── preload.js      # Electron preload script
├── package.json    # NPM configuration
└── README.md       # This file
```

## 🎯 Gameplay Tips

1. **Early Game**: Focus on clicking the Guild Crest for bonus resources
2. **Mid Game**: Unlock companions for passive income
3. **Late Game**: Invest in skill tree and optimize stat distribution
4. **Auto-Battle**: Enable for AFK grinding
5. **Rush Mode**: Use when actively playing for maximum efficiency

## 🔧 Configuration

Access the Settings tab to customize:
- Auto-battle delay (300ms - 800ms)
- Rush mode speed (50ms - 200ms)
- Sound effects toggle
- Save data management

## 💾 Save Data

Save data is stored in browser localStorage under `systemHunterSave`.
- Use **Export Save** to backup your progress
- Use **Import Save** to restore from backup
- Game auto-saves every 10 seconds

## 🛠️ Building for Production

### Prerequisites
- Node.js 16+
- npm

### Steps
1. Clone/download this repository
2. Run `npm install`
3. Run `npm run build` for your target platform

### Output Formats
- **Windows**: NSIS installer (.exe) and portable (.exe)
- **macOS**: DMG and ZIP
- **Linux**: AppImage and .deb

## 📝 Version History

### v2.0 (Current)
- Complete visual overhaul
- New Rush Mode for fast grinding
- Expanded skill tree (15 skills)
- Inventory system
- Settings panel
- Export/Import save functionality
- 8 zones (up from 6)
- 8 companions (up from 6)
- Title/achievement system

### v1.0 (Original)
- Basic idle RPG mechanics
- 6 zones
- 6 companions
- Basic skill tree

## 📄 License

MIT License - Feel free to modify and distribute!

## 🙏 Credits

Built with ❤️ for idle RPG fans everywhere.
