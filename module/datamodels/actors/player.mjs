const {
  ArrayField, BooleanField, HTMLField, IntegerSortField, NumberField, SchemaField, SetField, StringField
} = foundry.data.fields;

import { ActorDataModel } from "./base-actor.mjs";

export class PlayerDataModel extends ActorDataModel {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      playerName: new HTMLField(),
      origin: new SchemaField({
        career: new HTMLField(),
        homeworld: new HTMLField(),
        birthright: new HTMLField(),
        lureOfTheVoid: new HTMLField(),
        trialsAndTravails: new HTMLField(),
        motivation: new HTMLField(),
        lineage: new HTMLField(),
      }),
      rank: new NumberField({ required: true, integer: true, min: 1, initial: 1}),
      experience: new NumberField({ required: true, integer: true, min: 5000, initial: 5000}),
      profitFactor: new NumberField({ required: true, integer: true, min: 0, initial: 0}),
    };
  }

  //   static migrateData(source) {
  //   // Migrate profitFactor
  //   source.system.profitFactor ??= 0;
  //   return super.migrateData(source);
  // }
}