export class CharacterDataModel extends ActorDataModel {
  static defineSchema() {
    return {
      ...super.defineSchema(),
        playername: new HTMLField(),
        origin: new SchemaField({
          career: new HTMLField(),
          homeworld: new HTMLField(),
          birthright: new HTMLField(),
          lureofthevoid: new HTMLField(),
          trialsandtravails: new HTMLField(),
          motivation: new HTMLField(),
          lineage: new HTMLField(),
        }),
        rank: new NumberField({ required: true, integer: true, min: 1, initial: 1}),
        experience: new NumberField({ required: true, integer: true, min: 5000, initial: 5000}),
    };
  }
}