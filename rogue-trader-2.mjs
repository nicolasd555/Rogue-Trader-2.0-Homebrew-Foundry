import { 
    PlayerCharacterDataModel, 
    NPCDataModel, 
    RangedWeaponDataModel,
    MeleeWeaponDataModel,
    GrenadeDataModel,
    MissileDataModel,
    ArmorDataModel,
    GearDataModel
} from "./module/data-models.mjs";

Hooks.once("init", () => {
  // Configure custom Document implementations.
  CONFIG.Actor.documentClass = SystemActor;
  CONFIG.Item.documentClass = SystemItem;

  // Configure System Data Models.
  CONFIG.Actor.dataModels = {
    playercharacter: PlayerCharacterDataModel,
    NPC: NPCDataModel
  };
  CONFIG.Item.dataModels = {
    rangedweapon: RangedWeaponDataModel,
    meleeweapon: MeleeWeaponDataModel,
    grenade: GrenadeDataModel,
    missile: MissileDataModel,
    armor: ArmorDataModel,
    gear: GearDataModel
  };

  // Configure trackable attributes.
  CONFIG.Actor.trackableAttributes = {
    playercharacter: {
      bar: ["resources.wounds", "resources.damage", "resources.fate"],
      value: []
    },
    NPC: {
      bar: ["resources.wounds", "resources.damage", "resources.fate"],
      value: []
    }
  };
});