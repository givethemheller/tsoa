import { ObjectId } from 'bson';
import { provide } from 'inversify-binding-decorators';
import { TestModel, TestSubModel } from '../testModel';

@provide(ManagedService)
export class ManagedService {
  public getModel(): TestModel {
    return {
      fun: new ObjectId(),
      and: { value1: 'foo', value2: 'bar' },
      boolArray: [true, false],
      boolValue: true,
      id: 1,
      modelValue: {
        email: 'test@test.com',
        id: 100,
      },
      modelsArray: new Array<TestSubModel>(),
      numberArray: [1, 2, 3],
      numberValue: 1,
      objLiteral: {
        name: 'hello',
      },
      object: {
        a: 'a',
      },
      objectArray: [
        {
          a: 'a',
        },
      ],
      optionalString: 'optional string',
      or: { value1: 'foo', value2: 'bar' },
      referenceAnd: { value1: 'foo', value2: 'bar' },
      strLiteralArr: ['Foo', 'Bar'],
      strLiteralVal: 'Foo',
      stringArray: ['string one', 'string two'],
      stringValue: 'a string',
    };
  }
}
