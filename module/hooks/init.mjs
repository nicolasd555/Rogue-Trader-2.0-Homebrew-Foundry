// Apps
import { PlayerSheet } from "../apps/PlayerSheet.mjs";

// Data Models
import { CharacterDataModel } from "./actors/Player.mjs";
import { NPCDataModel } from "./actors/npc.mjs";
import { RangedWeaponDataModel } from "./items/ranged-weapon.mjs";

// Utils
import { __ID__ } from "../consts.mjs";

Hooks.on(`init`, () => {
	Logger.debug(`Initializing`);

	// CONFIG.Token.documentClass = TAFTokenDocument;
	// CONFIG.Actor.documentClass = TAFActor;

  CONFIG.Actor.dataModels = {
    player: CharacterDataModel,
    npc: NPCDataModel
  };

	// We disable items in the system for now
  CONFIG.Item.dataModels = {
    rangedweapon: RangedWeaponDataModel
  };
	delete CONFIG.ui.sidebar.TABS.items;

	foundry.documents.collections.Actors.registerSheet(
		__ID__,
		PlayerSheet,
		{
			makeDefault: true,
			label: `roguetrader.sheet-names.PlayerSheet`,
		},
	);

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

	// registerWorldSettings();

	// registerSockets();
	// registerCustomComponents();
	// Handlebars.registerHelper(helpers);
});
