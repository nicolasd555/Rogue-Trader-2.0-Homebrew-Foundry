import { ItemDataModel } from "./base-item.mjs";

const {
  ArrayField, BooleanField, HTMLField, IntegerSortField, NumberField, SchemaField, SetField, StringField
} = foundry.data.fields;

/// All weapons use these fields
export class WeaponDataModel extends ItemDataModel {
  static defineSchema() {
    return {
        ...super.defineSchema(),
        class: new StringField({
          required: true,
          blank: false,
          options: ["Pistol", "Basic", "Heavy", "Melee", "Thrown", "Missile"],
          initial: "Pistol"
        }),        
        damage: new HTMLField({
          required: true,
          initial: "1d10", // Default value
          blank: true,
        }),
        damagetype: new HTMLField({
          required: true,
          blank: false,
          options: ["Energy", "Explosive", "Rending", "Impact", "Special"],
        }),
        range: new NumberField({ required: true, integer: true, nullable: true, min: 0, initial: 0 }),
        penetration: new NumberField({ required: true, integer: true, min: 0, initial: 0 }),
        special: new HTMLField({
          required: true,
          blank: true,
          options: [""]
        }),
        weight: new NumberField({ required: true, integer: true, positive: true, initial: 0 }),
    };
  }
}