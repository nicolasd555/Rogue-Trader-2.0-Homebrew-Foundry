import {WeaponDataModel } from "./base-weapon.mjs";

const {
  ArrayField, BooleanField, HTMLField, IntegerSortField, NumberField, SchemaField, SetField, StringField
} = foundry.data.fields;

/// Only ranged weapons have these qualities
export class RangedWeaponDataModel extends WeaponDataModel {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      type: new StringField({
        required: true,
        blank: false,
        options: [
          "Bolt", 
          "Exotic", 
          "Flame", 
          "Las", 
          "Launcer", 
          "Melta", 
          "Plasma", 
          "Primitive", 
          "Solid Projectile"
        ],
        initial: "Solid Projectile"
      }),
    rateoffire: new HTMLField({
      required: true,
      blank: false,
      options: [""]
    }),
    clip: new NumberField({ required: true, integer: true, min: 1, initial: 1 }),
    reload: new HTMLField({
      required: true,
      initial: "Half", // Default value
      nullable: false,
    }),
    };
  }
}