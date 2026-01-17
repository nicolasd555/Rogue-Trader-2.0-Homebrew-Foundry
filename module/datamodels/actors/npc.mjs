const {
  ArrayField, BooleanField, HTMLField, IntegerSortField, NumberField, SchemaField, SetField, StringField
} = foundry.data.fields;

import { ActorDataModel } from "./base-actor.mjs";

export class NPCDataModel extends ActorDataModel {
  static defineSchema() {
    return {
      ...super.defineSchema()
    };
  }
}