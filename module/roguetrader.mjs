// Config
import { ROGUETRADER } from "./config.mjs"

// Apps
import { PlayerSheet } from "./app/player-sheet.mjs";

// Data Models
import { RogueTraderActor } from "./documents/actors/player.mjs"
import { PlayerDataModel } from "./datamodels/actors/player.mjs";
import { NPCDataModel} from "./datamodels/actors/npc.mjs"
import { RangedWeaponDataModel } from "./items/ranged-weapon.mjs";

Hooks.on(`init`, () => {
  console.warn(`Initializing Rogue Trader 2.
    Omnissiah, whose Motive Force infused this servant once with the spark of life and service to the machine,
    embrace the glorious workings of this, Your servant, and admit him once more to the wondrous interface of godly communion.
    Praise be to the Omnissiah.`);

  CONFIG.Actor.documentClass = RogueTraderActor;

  CONFIG.ROGUETRADER = ROGUETRADER;

  CONFIG.Actor.dataModels = {
    player: PlayerDataModel,
    npc: NPCDataModel
  };

  CONFIG.Item.dataModels = {
    rangedweapon: RangedWeaponDataModel
  };

  // Register custom Sheets and unregister the start Sheets
  // Items.unregisterSheet("core", ItemSheet);

  const DocumentSheetConfig = foundry.applications.apps.DocumentSheetConfig;
  DocumentSheetConfig.unregisterSheet(Actor, "core", foundry.appv1.sheets.ActorSheet);
  DocumentSheetConfig.registerSheet(
    Actor, 
    "roguetrader", 
    PlayerSheet, { 
      types: ["player"], 
      type: "player",
      makeDefault: true, 
      label: "roguetrader.sheet.playersheet"
    });


    // Configure trackable attributes.
  CONFIG.Actor.trackableAttributes = {
    player: {
      bar: [
        "resources.damage", 
        "resources.fate"
      ],
      value: []
    },
    NPC: {
      bar: [
        "resources.damage", 
        "resources.fate"
      ],
      value: []
    }
  };

      // Load all Partial-Handlebar Files
    preloadHandlebarsTemplates();
});

function preloadHandlebarsTemplates() {

    const templatePaths = [
        "systems/rogue-trader-2/templates/partials/charactersheet/player/origin.hbs",
        "systems/rogue-trader-2/templates/partials/charactersheet/characteristics.hbs",
        "systems/rogue-trader-2/templates/partials/charactersheet/npc/header.hbs",
    ];
    
    return foundry.applications.handlebars.loadTemplates(templatePaths);
};