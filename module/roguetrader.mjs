// Config
import { ROGUETRADER } from "./config.mjs"

// Apps
import { PlayerSheet } from "./app/player-sheet.mjs";

// Data Models
import { RogueTraderActor } from "./documents/actors/player.mjs"
import { PlayerDataModel } from "./datamodels/actors/player.mjs";
import { RangedWeaponDataModel } from "./items/ranged-weapon.mjs";

Hooks.on(`init`, () => {
  console.warn(`Initializing Rogue Trader 2.
    Omnissiah, whose Motive Force infused this servant once with the spark of life and service to the machine,
    embrace the glorious workings of this, Your servant, and admit him once more to the wondrous interface of godly communion.
    Praise be to the Omnissiah.`);

  CONFIG.Actor.documentClass = RogueTraderActor;

  CONFIG.ROGUETRADER = ROGUETRADER;
  CONFIG.INIT = true;

  CONFIG.Actor.dataModels = {
    player: PlayerDataModel
    // npc: NPCDataModel
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

    // Register Additional Handelbar Helpers
    registerHandlebarsHelpers();  
});

function preloadHandlebarsTemplates() {

    const templatePaths = [
        // "systems/nether/templates/partials/character-sheet-character.hbs",
    ];
    
    return foundry.applications.handlebars.loadTemplates(templatePaths);
};


function registerHandlebarsHelpers() {

    Handlebars.registerHelper("equals", function(v1, v2) { return (v1 === v2)});

    Handlebars.registerHelper("contains", function(element, search) { return (element.includes(search))});

    Handlebars.registerHelper("concat", function(s1, s2, s3 = "") { return s1 + s2 + s3;});

    Handlebars.registerHelper("isGreater", function(p1, p2) { return (p1 > p2)});

    Handlebars.registerHelper("isEqualORGreater", function(p1, p2) { return (p1 >= p2)});

    Handlebars.registerHelper("ifOR", function(conditional1, conditional2) { return (conditional1 || conditional2)});

    Handlebars.registerHelper("doLog", function(value) { console.log(value)});

    Handlebars.registerHelper("toBoolean", function(string) { return (string === "true")});

    Handlebars.registerHelper('for', function(from, to, incr, content) {

        let result = "";

        for(let i = from; i < to; i += incr)
            result += content.fn(i);

        return result;
    });

    Handlebars.registerHelper("times", function(n, content) {
        
        let result = "";
        
        for(let i = 0; i < n; i++)
            result += content.fn(i);

        return result;
    });

    Handlebars.registerHelper("notEmpty", function(value) {

        if (value == 0 || value == "0") return true;
        if (value == null|| value  == "") return false;
        return true;
    });
}