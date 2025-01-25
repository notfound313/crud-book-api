export default class Zodvalidator {
    static validate(schema, objectValidate) {
      return schema.parse(objectValidate);
    }
}