
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model TrainingPlan
 * 
 */
export type TrainingPlan = $Result.DefaultSelection<Prisma.$TrainingPlanPayload>
/**
 * Model TrainingPlanWeek
 * 
 */
export type TrainingPlanWeek = $Result.DefaultSelection<Prisma.$TrainingPlanWeekPayload>
/**
 * Model Workout
 * 
 */
export type Workout = $Result.DefaultSelection<Prisma.$WorkoutPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more TrainingPlans
 * const trainingPlans = await prisma.trainingPlan.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more TrainingPlans
   * const trainingPlans = await prisma.trainingPlan.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs, $Utils.Call<Prisma.TypeMapCb, {
    extArgs: ExtArgs
  }>, ClientOptions>

      /**
   * `prisma.trainingPlan`: Exposes CRUD operations for the **TrainingPlan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TrainingPlans
    * const trainingPlans = await prisma.trainingPlan.findMany()
    * ```
    */
  get trainingPlan(): Prisma.TrainingPlanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.trainingPlanWeek`: Exposes CRUD operations for the **TrainingPlanWeek** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TrainingPlanWeeks
    * const trainingPlanWeeks = await prisma.trainingPlanWeek.findMany()
    * ```
    */
  get trainingPlanWeek(): Prisma.TrainingPlanWeekDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workout`: Exposes CRUD operations for the **Workout** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Workouts
    * const workouts = await prisma.workout.findMany()
    * ```
    */
  get workout(): Prisma.WorkoutDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.3.1
   * Query Engine version: a9055b89e58b4b5bfb59600785423b1db3d0e75d
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    TrainingPlan: 'TrainingPlan',
    TrainingPlanWeek: 'TrainingPlanWeek',
    Workout: 'Workout'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "trainingPlan" | "trainingPlanWeek" | "workout"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      TrainingPlan: {
        payload: Prisma.$TrainingPlanPayload<ExtArgs>
        fields: Prisma.TrainingPlanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TrainingPlanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingPlanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TrainingPlanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingPlanPayload>
          }
          findFirst: {
            args: Prisma.TrainingPlanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingPlanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TrainingPlanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingPlanPayload>
          }
          findMany: {
            args: Prisma.TrainingPlanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingPlanPayload>[]
          }
          create: {
            args: Prisma.TrainingPlanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingPlanPayload>
          }
          createMany: {
            args: Prisma.TrainingPlanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TrainingPlanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingPlanPayload>[]
          }
          delete: {
            args: Prisma.TrainingPlanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingPlanPayload>
          }
          update: {
            args: Prisma.TrainingPlanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingPlanPayload>
          }
          deleteMany: {
            args: Prisma.TrainingPlanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TrainingPlanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TrainingPlanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingPlanPayload>[]
          }
          upsert: {
            args: Prisma.TrainingPlanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingPlanPayload>
          }
          aggregate: {
            args: Prisma.TrainingPlanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrainingPlan>
          }
          groupBy: {
            args: Prisma.TrainingPlanGroupByArgs<ExtArgs>
            result: $Utils.Optional<TrainingPlanGroupByOutputType>[]
          }
          count: {
            args: Prisma.TrainingPlanCountArgs<ExtArgs>
            result: $Utils.Optional<TrainingPlanCountAggregateOutputType> | number
          }
        }
      }
      TrainingPlanWeek: {
        payload: Prisma.$TrainingPlanWeekPayload<ExtArgs>
        fields: Prisma.TrainingPlanWeekFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TrainingPlanWeekFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingPlanWeekPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TrainingPlanWeekFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingPlanWeekPayload>
          }
          findFirst: {
            args: Prisma.TrainingPlanWeekFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingPlanWeekPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TrainingPlanWeekFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingPlanWeekPayload>
          }
          findMany: {
            args: Prisma.TrainingPlanWeekFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingPlanWeekPayload>[]
          }
          create: {
            args: Prisma.TrainingPlanWeekCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingPlanWeekPayload>
          }
          createMany: {
            args: Prisma.TrainingPlanWeekCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TrainingPlanWeekCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingPlanWeekPayload>[]
          }
          delete: {
            args: Prisma.TrainingPlanWeekDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingPlanWeekPayload>
          }
          update: {
            args: Prisma.TrainingPlanWeekUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingPlanWeekPayload>
          }
          deleteMany: {
            args: Prisma.TrainingPlanWeekDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TrainingPlanWeekUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TrainingPlanWeekUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingPlanWeekPayload>[]
          }
          upsert: {
            args: Prisma.TrainingPlanWeekUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingPlanWeekPayload>
          }
          aggregate: {
            args: Prisma.TrainingPlanWeekAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrainingPlanWeek>
          }
          groupBy: {
            args: Prisma.TrainingPlanWeekGroupByArgs<ExtArgs>
            result: $Utils.Optional<TrainingPlanWeekGroupByOutputType>[]
          }
          count: {
            args: Prisma.TrainingPlanWeekCountArgs<ExtArgs>
            result: $Utils.Optional<TrainingPlanWeekCountAggregateOutputType> | number
          }
        }
      }
      Workout: {
        payload: Prisma.$WorkoutPayload<ExtArgs>
        fields: Prisma.WorkoutFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkoutFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkoutFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>
          }
          findFirst: {
            args: Prisma.WorkoutFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkoutFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>
          }
          findMany: {
            args: Prisma.WorkoutFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>[]
          }
          create: {
            args: Prisma.WorkoutCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>
          }
          createMany: {
            args: Prisma.WorkoutCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkoutCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>[]
          }
          delete: {
            args: Prisma.WorkoutDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>
          }
          update: {
            args: Prisma.WorkoutUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>
          }
          deleteMany: {
            args: Prisma.WorkoutDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkoutUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkoutUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>[]
          }
          upsert: {
            args: Prisma.WorkoutUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>
          }
          aggregate: {
            args: Prisma.WorkoutAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkout>
          }
          groupBy: {
            args: Prisma.WorkoutGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkoutGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkoutCountArgs<ExtArgs>
            result: $Utils.Optional<WorkoutCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    trainingPlan?: TrainingPlanOmit
    trainingPlanWeek?: TrainingPlanWeekOmit
    workout?: WorkoutOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type TrainingPlanCountOutputType
   */

  export type TrainingPlanCountOutputType = {
    trainingPlanWeeks: number
  }

  export type TrainingPlanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trainingPlanWeeks?: boolean | TrainingPlanCountOutputTypeCountTrainingPlanWeeksArgs
  }

  // Custom InputTypes
  /**
   * TrainingPlanCountOutputType without action
   */
  export type TrainingPlanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingPlanCountOutputType
     */
    select?: TrainingPlanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TrainingPlanCountOutputType without action
   */
  export type TrainingPlanCountOutputTypeCountTrainingPlanWeeksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrainingPlanWeekWhereInput
  }


  /**
   * Count Type TrainingPlanWeekCountOutputType
   */

  export type TrainingPlanWeekCountOutputType = {
    workouts: number
  }

  export type TrainingPlanWeekCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workouts?: boolean | TrainingPlanWeekCountOutputTypeCountWorkoutsArgs
  }

  // Custom InputTypes
  /**
   * TrainingPlanWeekCountOutputType without action
   */
  export type TrainingPlanWeekCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingPlanWeekCountOutputType
     */
    select?: TrainingPlanWeekCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TrainingPlanWeekCountOutputType without action
   */
  export type TrainingPlanWeekCountOutputTypeCountWorkoutsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkoutWhereInput
  }


  /**
   * Models
   */

  /**
   * Model TrainingPlan
   */

  export type AggregateTrainingPlan = {
    _count: TrainingPlanCountAggregateOutputType | null
    _min: TrainingPlanMinAggregateOutputType | null
    _max: TrainingPlanMaxAggregateOutputType | null
  }

  export type TrainingPlanMinAggregateOutputType = {
    trainingPlanId: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TrainingPlanMaxAggregateOutputType = {
    trainingPlanId: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TrainingPlanCountAggregateOutputType = {
    trainingPlanId: number
    name: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TrainingPlanMinAggregateInputType = {
    trainingPlanId?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TrainingPlanMaxAggregateInputType = {
    trainingPlanId?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TrainingPlanCountAggregateInputType = {
    trainingPlanId?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TrainingPlanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrainingPlan to aggregate.
     */
    where?: TrainingPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrainingPlans to fetch.
     */
    orderBy?: TrainingPlanOrderByWithRelationInput | TrainingPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TrainingPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrainingPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrainingPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TrainingPlans
    **/
    _count?: true | TrainingPlanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TrainingPlanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TrainingPlanMaxAggregateInputType
  }

  export type GetTrainingPlanAggregateType<T extends TrainingPlanAggregateArgs> = {
        [P in keyof T & keyof AggregateTrainingPlan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrainingPlan[P]>
      : GetScalarType<T[P], AggregateTrainingPlan[P]>
  }




  export type TrainingPlanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrainingPlanWhereInput
    orderBy?: TrainingPlanOrderByWithAggregationInput | TrainingPlanOrderByWithAggregationInput[]
    by: TrainingPlanScalarFieldEnum[] | TrainingPlanScalarFieldEnum
    having?: TrainingPlanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TrainingPlanCountAggregateInputType | true
    _min?: TrainingPlanMinAggregateInputType
    _max?: TrainingPlanMaxAggregateInputType
  }

  export type TrainingPlanGroupByOutputType = {
    trainingPlanId: string
    name: string
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: TrainingPlanCountAggregateOutputType | null
    _min: TrainingPlanMinAggregateOutputType | null
    _max: TrainingPlanMaxAggregateOutputType | null
  }

  type GetTrainingPlanGroupByPayload<T extends TrainingPlanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TrainingPlanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TrainingPlanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TrainingPlanGroupByOutputType[P]>
            : GetScalarType<T[P], TrainingPlanGroupByOutputType[P]>
        }
      >
    >


  export type TrainingPlanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    trainingPlanId?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    trainingPlanWeeks?: boolean | TrainingPlan$trainingPlanWeeksArgs<ExtArgs>
    _count?: boolean | TrainingPlanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trainingPlan"]>

  export type TrainingPlanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    trainingPlanId?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["trainingPlan"]>

  export type TrainingPlanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    trainingPlanId?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["trainingPlan"]>

  export type TrainingPlanSelectScalar = {
    trainingPlanId?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TrainingPlanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"trainingPlanId" | "name" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["trainingPlan"]>
  export type TrainingPlanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trainingPlanWeeks?: boolean | TrainingPlan$trainingPlanWeeksArgs<ExtArgs>
    _count?: boolean | TrainingPlanCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TrainingPlanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TrainingPlanIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TrainingPlanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TrainingPlan"
    objects: {
      trainingPlanWeeks: Prisma.$TrainingPlanWeekPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      trainingPlanId: string
      name: string
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["trainingPlan"]>
    composites: {}
  }

  type TrainingPlanGetPayload<S extends boolean | null | undefined | TrainingPlanDefaultArgs> = $Result.GetResult<Prisma.$TrainingPlanPayload, S>

  type TrainingPlanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TrainingPlanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TrainingPlanCountAggregateInputType | true
    }

  export interface TrainingPlanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TrainingPlan'], meta: { name: 'TrainingPlan' } }
    /**
     * Find zero or one TrainingPlan that matches the filter.
     * @param {TrainingPlanFindUniqueArgs} args - Arguments to find a TrainingPlan
     * @example
     * // Get one TrainingPlan
     * const trainingPlan = await prisma.trainingPlan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TrainingPlanFindUniqueArgs>(args: SelectSubset<T, TrainingPlanFindUniqueArgs<ExtArgs>>): Prisma__TrainingPlanClient<$Result.GetResult<Prisma.$TrainingPlanPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one TrainingPlan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TrainingPlanFindUniqueOrThrowArgs} args - Arguments to find a TrainingPlan
     * @example
     * // Get one TrainingPlan
     * const trainingPlan = await prisma.trainingPlan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TrainingPlanFindUniqueOrThrowArgs>(args: SelectSubset<T, TrainingPlanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TrainingPlanClient<$Result.GetResult<Prisma.$TrainingPlanPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first TrainingPlan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingPlanFindFirstArgs} args - Arguments to find a TrainingPlan
     * @example
     * // Get one TrainingPlan
     * const trainingPlan = await prisma.trainingPlan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TrainingPlanFindFirstArgs>(args?: SelectSubset<T, TrainingPlanFindFirstArgs<ExtArgs>>): Prisma__TrainingPlanClient<$Result.GetResult<Prisma.$TrainingPlanPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first TrainingPlan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingPlanFindFirstOrThrowArgs} args - Arguments to find a TrainingPlan
     * @example
     * // Get one TrainingPlan
     * const trainingPlan = await prisma.trainingPlan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TrainingPlanFindFirstOrThrowArgs>(args?: SelectSubset<T, TrainingPlanFindFirstOrThrowArgs<ExtArgs>>): Prisma__TrainingPlanClient<$Result.GetResult<Prisma.$TrainingPlanPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more TrainingPlans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingPlanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TrainingPlans
     * const trainingPlans = await prisma.trainingPlan.findMany()
     * 
     * // Get first 10 TrainingPlans
     * const trainingPlans = await prisma.trainingPlan.findMany({ take: 10 })
     * 
     * // Only select the `trainingPlanId`
     * const trainingPlanWithTrainingPlanIdOnly = await prisma.trainingPlan.findMany({ select: { trainingPlanId: true } })
     * 
     */
    findMany<T extends TrainingPlanFindManyArgs>(args?: SelectSubset<T, TrainingPlanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrainingPlanPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a TrainingPlan.
     * @param {TrainingPlanCreateArgs} args - Arguments to create a TrainingPlan.
     * @example
     * // Create one TrainingPlan
     * const TrainingPlan = await prisma.trainingPlan.create({
     *   data: {
     *     // ... data to create a TrainingPlan
     *   }
     * })
     * 
     */
    create<T extends TrainingPlanCreateArgs>(args: SelectSubset<T, TrainingPlanCreateArgs<ExtArgs>>): Prisma__TrainingPlanClient<$Result.GetResult<Prisma.$TrainingPlanPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many TrainingPlans.
     * @param {TrainingPlanCreateManyArgs} args - Arguments to create many TrainingPlans.
     * @example
     * // Create many TrainingPlans
     * const trainingPlan = await prisma.trainingPlan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TrainingPlanCreateManyArgs>(args?: SelectSubset<T, TrainingPlanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TrainingPlans and returns the data saved in the database.
     * @param {TrainingPlanCreateManyAndReturnArgs} args - Arguments to create many TrainingPlans.
     * @example
     * // Create many TrainingPlans
     * const trainingPlan = await prisma.trainingPlan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TrainingPlans and only return the `trainingPlanId`
     * const trainingPlanWithTrainingPlanIdOnly = await prisma.trainingPlan.createManyAndReturn({
     *   select: { trainingPlanId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TrainingPlanCreateManyAndReturnArgs>(args?: SelectSubset<T, TrainingPlanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrainingPlanPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a TrainingPlan.
     * @param {TrainingPlanDeleteArgs} args - Arguments to delete one TrainingPlan.
     * @example
     * // Delete one TrainingPlan
     * const TrainingPlan = await prisma.trainingPlan.delete({
     *   where: {
     *     // ... filter to delete one TrainingPlan
     *   }
     * })
     * 
     */
    delete<T extends TrainingPlanDeleteArgs>(args: SelectSubset<T, TrainingPlanDeleteArgs<ExtArgs>>): Prisma__TrainingPlanClient<$Result.GetResult<Prisma.$TrainingPlanPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one TrainingPlan.
     * @param {TrainingPlanUpdateArgs} args - Arguments to update one TrainingPlan.
     * @example
     * // Update one TrainingPlan
     * const trainingPlan = await prisma.trainingPlan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TrainingPlanUpdateArgs>(args: SelectSubset<T, TrainingPlanUpdateArgs<ExtArgs>>): Prisma__TrainingPlanClient<$Result.GetResult<Prisma.$TrainingPlanPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more TrainingPlans.
     * @param {TrainingPlanDeleteManyArgs} args - Arguments to filter TrainingPlans to delete.
     * @example
     * // Delete a few TrainingPlans
     * const { count } = await prisma.trainingPlan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TrainingPlanDeleteManyArgs>(args?: SelectSubset<T, TrainingPlanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TrainingPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingPlanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TrainingPlans
     * const trainingPlan = await prisma.trainingPlan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TrainingPlanUpdateManyArgs>(args: SelectSubset<T, TrainingPlanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TrainingPlans and returns the data updated in the database.
     * @param {TrainingPlanUpdateManyAndReturnArgs} args - Arguments to update many TrainingPlans.
     * @example
     * // Update many TrainingPlans
     * const trainingPlan = await prisma.trainingPlan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TrainingPlans and only return the `trainingPlanId`
     * const trainingPlanWithTrainingPlanIdOnly = await prisma.trainingPlan.updateManyAndReturn({
     *   select: { trainingPlanId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TrainingPlanUpdateManyAndReturnArgs>(args: SelectSubset<T, TrainingPlanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrainingPlanPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one TrainingPlan.
     * @param {TrainingPlanUpsertArgs} args - Arguments to update or create a TrainingPlan.
     * @example
     * // Update or create a TrainingPlan
     * const trainingPlan = await prisma.trainingPlan.upsert({
     *   create: {
     *     // ... data to create a TrainingPlan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TrainingPlan we want to update
     *   }
     * })
     */
    upsert<T extends TrainingPlanUpsertArgs>(args: SelectSubset<T, TrainingPlanUpsertArgs<ExtArgs>>): Prisma__TrainingPlanClient<$Result.GetResult<Prisma.$TrainingPlanPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of TrainingPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingPlanCountArgs} args - Arguments to filter TrainingPlans to count.
     * @example
     * // Count the number of TrainingPlans
     * const count = await prisma.trainingPlan.count({
     *   where: {
     *     // ... the filter for the TrainingPlans we want to count
     *   }
     * })
    **/
    count<T extends TrainingPlanCountArgs>(
      args?: Subset<T, TrainingPlanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TrainingPlanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TrainingPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingPlanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TrainingPlanAggregateArgs>(args: Subset<T, TrainingPlanAggregateArgs>): Prisma.PrismaPromise<GetTrainingPlanAggregateType<T>>

    /**
     * Group by TrainingPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingPlanGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TrainingPlanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TrainingPlanGroupByArgs['orderBy'] }
        : { orderBy?: TrainingPlanGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TrainingPlanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrainingPlanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TrainingPlan model
   */
  readonly fields: TrainingPlanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TrainingPlan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TrainingPlanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    trainingPlanWeeks<T extends TrainingPlan$trainingPlanWeeksArgs<ExtArgs> = {}>(args?: Subset<T, TrainingPlan$trainingPlanWeeksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrainingPlanWeekPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TrainingPlan model
   */ 
  interface TrainingPlanFieldRefs {
    readonly trainingPlanId: FieldRef<"TrainingPlan", 'String'>
    readonly name: FieldRef<"TrainingPlan", 'String'>
    readonly description: FieldRef<"TrainingPlan", 'String'>
    readonly createdAt: FieldRef<"TrainingPlan", 'DateTime'>
    readonly updatedAt: FieldRef<"TrainingPlan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TrainingPlan findUnique
   */
  export type TrainingPlanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingPlan
     */
    select?: TrainingPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingPlan
     */
    omit?: TrainingPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingPlanInclude<ExtArgs> | null
    /**
     * Filter, which TrainingPlan to fetch.
     */
    where: TrainingPlanWhereUniqueInput
  }

  /**
   * TrainingPlan findUniqueOrThrow
   */
  export type TrainingPlanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingPlan
     */
    select?: TrainingPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingPlan
     */
    omit?: TrainingPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingPlanInclude<ExtArgs> | null
    /**
     * Filter, which TrainingPlan to fetch.
     */
    where: TrainingPlanWhereUniqueInput
  }

  /**
   * TrainingPlan findFirst
   */
  export type TrainingPlanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingPlan
     */
    select?: TrainingPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingPlan
     */
    omit?: TrainingPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingPlanInclude<ExtArgs> | null
    /**
     * Filter, which TrainingPlan to fetch.
     */
    where?: TrainingPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrainingPlans to fetch.
     */
    orderBy?: TrainingPlanOrderByWithRelationInput | TrainingPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrainingPlans.
     */
    cursor?: TrainingPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrainingPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrainingPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrainingPlans.
     */
    distinct?: TrainingPlanScalarFieldEnum | TrainingPlanScalarFieldEnum[]
  }

  /**
   * TrainingPlan findFirstOrThrow
   */
  export type TrainingPlanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingPlan
     */
    select?: TrainingPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingPlan
     */
    omit?: TrainingPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingPlanInclude<ExtArgs> | null
    /**
     * Filter, which TrainingPlan to fetch.
     */
    where?: TrainingPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrainingPlans to fetch.
     */
    orderBy?: TrainingPlanOrderByWithRelationInput | TrainingPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrainingPlans.
     */
    cursor?: TrainingPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrainingPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrainingPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrainingPlans.
     */
    distinct?: TrainingPlanScalarFieldEnum | TrainingPlanScalarFieldEnum[]
  }

  /**
   * TrainingPlan findMany
   */
  export type TrainingPlanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingPlan
     */
    select?: TrainingPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingPlan
     */
    omit?: TrainingPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingPlanInclude<ExtArgs> | null
    /**
     * Filter, which TrainingPlans to fetch.
     */
    where?: TrainingPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrainingPlans to fetch.
     */
    orderBy?: TrainingPlanOrderByWithRelationInput | TrainingPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TrainingPlans.
     */
    cursor?: TrainingPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrainingPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrainingPlans.
     */
    skip?: number
    distinct?: TrainingPlanScalarFieldEnum | TrainingPlanScalarFieldEnum[]
  }

  /**
   * TrainingPlan create
   */
  export type TrainingPlanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingPlan
     */
    select?: TrainingPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingPlan
     */
    omit?: TrainingPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingPlanInclude<ExtArgs> | null
    /**
     * The data needed to create a TrainingPlan.
     */
    data: XOR<TrainingPlanCreateInput, TrainingPlanUncheckedCreateInput>
  }

  /**
   * TrainingPlan createMany
   */
  export type TrainingPlanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TrainingPlans.
     */
    data: TrainingPlanCreateManyInput | TrainingPlanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TrainingPlan createManyAndReturn
   */
  export type TrainingPlanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingPlan
     */
    select?: TrainingPlanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingPlan
     */
    omit?: TrainingPlanOmit<ExtArgs> | null
    /**
     * The data used to create many TrainingPlans.
     */
    data: TrainingPlanCreateManyInput | TrainingPlanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TrainingPlan update
   */
  export type TrainingPlanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingPlan
     */
    select?: TrainingPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingPlan
     */
    omit?: TrainingPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingPlanInclude<ExtArgs> | null
    /**
     * The data needed to update a TrainingPlan.
     */
    data: XOR<TrainingPlanUpdateInput, TrainingPlanUncheckedUpdateInput>
    /**
     * Choose, which TrainingPlan to update.
     */
    where: TrainingPlanWhereUniqueInput
  }

  /**
   * TrainingPlan updateMany
   */
  export type TrainingPlanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TrainingPlans.
     */
    data: XOR<TrainingPlanUpdateManyMutationInput, TrainingPlanUncheckedUpdateManyInput>
    /**
     * Filter which TrainingPlans to update
     */
    where?: TrainingPlanWhereInput
    /**
     * Limit how many TrainingPlans to update.
     */
    limit?: number
  }

  /**
   * TrainingPlan updateManyAndReturn
   */
  export type TrainingPlanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingPlan
     */
    select?: TrainingPlanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingPlan
     */
    omit?: TrainingPlanOmit<ExtArgs> | null
    /**
     * The data used to update TrainingPlans.
     */
    data: XOR<TrainingPlanUpdateManyMutationInput, TrainingPlanUncheckedUpdateManyInput>
    /**
     * Filter which TrainingPlans to update
     */
    where?: TrainingPlanWhereInput
    /**
     * Limit how many TrainingPlans to update.
     */
    limit?: number
  }

  /**
   * TrainingPlan upsert
   */
  export type TrainingPlanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingPlan
     */
    select?: TrainingPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingPlan
     */
    omit?: TrainingPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingPlanInclude<ExtArgs> | null
    /**
     * The filter to search for the TrainingPlan to update in case it exists.
     */
    where: TrainingPlanWhereUniqueInput
    /**
     * In case the TrainingPlan found by the `where` argument doesn't exist, create a new TrainingPlan with this data.
     */
    create: XOR<TrainingPlanCreateInput, TrainingPlanUncheckedCreateInput>
    /**
     * In case the TrainingPlan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TrainingPlanUpdateInput, TrainingPlanUncheckedUpdateInput>
  }

  /**
   * TrainingPlan delete
   */
  export type TrainingPlanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingPlan
     */
    select?: TrainingPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingPlan
     */
    omit?: TrainingPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingPlanInclude<ExtArgs> | null
    /**
     * Filter which TrainingPlan to delete.
     */
    where: TrainingPlanWhereUniqueInput
  }

  /**
   * TrainingPlan deleteMany
   */
  export type TrainingPlanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrainingPlans to delete
     */
    where?: TrainingPlanWhereInput
    /**
     * Limit how many TrainingPlans to delete.
     */
    limit?: number
  }

  /**
   * TrainingPlan.trainingPlanWeeks
   */
  export type TrainingPlan$trainingPlanWeeksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingPlanWeek
     */
    select?: TrainingPlanWeekSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingPlanWeek
     */
    omit?: TrainingPlanWeekOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingPlanWeekInclude<ExtArgs> | null
    where?: TrainingPlanWeekWhereInput
    orderBy?: TrainingPlanWeekOrderByWithRelationInput | TrainingPlanWeekOrderByWithRelationInput[]
    cursor?: TrainingPlanWeekWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TrainingPlanWeekScalarFieldEnum | TrainingPlanWeekScalarFieldEnum[]
  }

  /**
   * TrainingPlan without action
   */
  export type TrainingPlanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingPlan
     */
    select?: TrainingPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingPlan
     */
    omit?: TrainingPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingPlanInclude<ExtArgs> | null
  }


  /**
   * Model TrainingPlanWeek
   */

  export type AggregateTrainingPlanWeek = {
    _count: TrainingPlanWeekCountAggregateOutputType | null
    _avg: TrainingPlanWeekAvgAggregateOutputType | null
    _sum: TrainingPlanWeekSumAggregateOutputType | null
    _min: TrainingPlanWeekMinAggregateOutputType | null
    _max: TrainingPlanWeekMaxAggregateOutputType | null
  }

  export type TrainingPlanWeekAvgAggregateOutputType = {
    weekNumber: number | null
  }

  export type TrainingPlanWeekSumAggregateOutputType = {
    weekNumber: number | null
  }

  export type TrainingPlanWeekMinAggregateOutputType = {
    trainingPlanWeekId: string | null
    trainingPlanId: string | null
    weekNumber: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TrainingPlanWeekMaxAggregateOutputType = {
    trainingPlanWeekId: string | null
    trainingPlanId: string | null
    weekNumber: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TrainingPlanWeekCountAggregateOutputType = {
    trainingPlanWeekId: number
    trainingPlanId: number
    weekNumber: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TrainingPlanWeekAvgAggregateInputType = {
    weekNumber?: true
  }

  export type TrainingPlanWeekSumAggregateInputType = {
    weekNumber?: true
  }

  export type TrainingPlanWeekMinAggregateInputType = {
    trainingPlanWeekId?: true
    trainingPlanId?: true
    weekNumber?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TrainingPlanWeekMaxAggregateInputType = {
    trainingPlanWeekId?: true
    trainingPlanId?: true
    weekNumber?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TrainingPlanWeekCountAggregateInputType = {
    trainingPlanWeekId?: true
    trainingPlanId?: true
    weekNumber?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TrainingPlanWeekAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrainingPlanWeek to aggregate.
     */
    where?: TrainingPlanWeekWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrainingPlanWeeks to fetch.
     */
    orderBy?: TrainingPlanWeekOrderByWithRelationInput | TrainingPlanWeekOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TrainingPlanWeekWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrainingPlanWeeks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrainingPlanWeeks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TrainingPlanWeeks
    **/
    _count?: true | TrainingPlanWeekCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TrainingPlanWeekAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TrainingPlanWeekSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TrainingPlanWeekMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TrainingPlanWeekMaxAggregateInputType
  }

  export type GetTrainingPlanWeekAggregateType<T extends TrainingPlanWeekAggregateArgs> = {
        [P in keyof T & keyof AggregateTrainingPlanWeek]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrainingPlanWeek[P]>
      : GetScalarType<T[P], AggregateTrainingPlanWeek[P]>
  }




  export type TrainingPlanWeekGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrainingPlanWeekWhereInput
    orderBy?: TrainingPlanWeekOrderByWithAggregationInput | TrainingPlanWeekOrderByWithAggregationInput[]
    by: TrainingPlanWeekScalarFieldEnum[] | TrainingPlanWeekScalarFieldEnum
    having?: TrainingPlanWeekScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TrainingPlanWeekCountAggregateInputType | true
    _avg?: TrainingPlanWeekAvgAggregateInputType
    _sum?: TrainingPlanWeekSumAggregateInputType
    _min?: TrainingPlanWeekMinAggregateInputType
    _max?: TrainingPlanWeekMaxAggregateInputType
  }

  export type TrainingPlanWeekGroupByOutputType = {
    trainingPlanWeekId: string
    trainingPlanId: string
    weekNumber: number
    createdAt: Date
    updatedAt: Date
    _count: TrainingPlanWeekCountAggregateOutputType | null
    _avg: TrainingPlanWeekAvgAggregateOutputType | null
    _sum: TrainingPlanWeekSumAggregateOutputType | null
    _min: TrainingPlanWeekMinAggregateOutputType | null
    _max: TrainingPlanWeekMaxAggregateOutputType | null
  }

  type GetTrainingPlanWeekGroupByPayload<T extends TrainingPlanWeekGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TrainingPlanWeekGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TrainingPlanWeekGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TrainingPlanWeekGroupByOutputType[P]>
            : GetScalarType<T[P], TrainingPlanWeekGroupByOutputType[P]>
        }
      >
    >


  export type TrainingPlanWeekSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    trainingPlanWeekId?: boolean
    trainingPlanId?: boolean
    weekNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workouts?: boolean | TrainingPlanWeek$workoutsArgs<ExtArgs>
    trainingPlan?: boolean | TrainingPlanDefaultArgs<ExtArgs>
    _count?: boolean | TrainingPlanWeekCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trainingPlanWeek"]>

  export type TrainingPlanWeekSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    trainingPlanWeekId?: boolean
    trainingPlanId?: boolean
    weekNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    trainingPlan?: boolean | TrainingPlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trainingPlanWeek"]>

  export type TrainingPlanWeekSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    trainingPlanWeekId?: boolean
    trainingPlanId?: boolean
    weekNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    trainingPlan?: boolean | TrainingPlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trainingPlanWeek"]>

  export type TrainingPlanWeekSelectScalar = {
    trainingPlanWeekId?: boolean
    trainingPlanId?: boolean
    weekNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TrainingPlanWeekOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"trainingPlanWeekId" | "trainingPlanId" | "weekNumber" | "createdAt" | "updatedAt", ExtArgs["result"]["trainingPlanWeek"]>
  export type TrainingPlanWeekInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workouts?: boolean | TrainingPlanWeek$workoutsArgs<ExtArgs>
    trainingPlan?: boolean | TrainingPlanDefaultArgs<ExtArgs>
    _count?: boolean | TrainingPlanWeekCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TrainingPlanWeekIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trainingPlan?: boolean | TrainingPlanDefaultArgs<ExtArgs>
  }
  export type TrainingPlanWeekIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trainingPlan?: boolean | TrainingPlanDefaultArgs<ExtArgs>
  }

  export type $TrainingPlanWeekPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TrainingPlanWeek"
    objects: {
      workouts: Prisma.$WorkoutPayload<ExtArgs>[]
      trainingPlan: Prisma.$TrainingPlanPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      trainingPlanWeekId: string
      trainingPlanId: string
      weekNumber: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["trainingPlanWeek"]>
    composites: {}
  }

  type TrainingPlanWeekGetPayload<S extends boolean | null | undefined | TrainingPlanWeekDefaultArgs> = $Result.GetResult<Prisma.$TrainingPlanWeekPayload, S>

  type TrainingPlanWeekCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TrainingPlanWeekFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TrainingPlanWeekCountAggregateInputType | true
    }

  export interface TrainingPlanWeekDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TrainingPlanWeek'], meta: { name: 'TrainingPlanWeek' } }
    /**
     * Find zero or one TrainingPlanWeek that matches the filter.
     * @param {TrainingPlanWeekFindUniqueArgs} args - Arguments to find a TrainingPlanWeek
     * @example
     * // Get one TrainingPlanWeek
     * const trainingPlanWeek = await prisma.trainingPlanWeek.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TrainingPlanWeekFindUniqueArgs>(args: SelectSubset<T, TrainingPlanWeekFindUniqueArgs<ExtArgs>>): Prisma__TrainingPlanWeekClient<$Result.GetResult<Prisma.$TrainingPlanWeekPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one TrainingPlanWeek that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TrainingPlanWeekFindUniqueOrThrowArgs} args - Arguments to find a TrainingPlanWeek
     * @example
     * // Get one TrainingPlanWeek
     * const trainingPlanWeek = await prisma.trainingPlanWeek.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TrainingPlanWeekFindUniqueOrThrowArgs>(args: SelectSubset<T, TrainingPlanWeekFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TrainingPlanWeekClient<$Result.GetResult<Prisma.$TrainingPlanWeekPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first TrainingPlanWeek that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingPlanWeekFindFirstArgs} args - Arguments to find a TrainingPlanWeek
     * @example
     * // Get one TrainingPlanWeek
     * const trainingPlanWeek = await prisma.trainingPlanWeek.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TrainingPlanWeekFindFirstArgs>(args?: SelectSubset<T, TrainingPlanWeekFindFirstArgs<ExtArgs>>): Prisma__TrainingPlanWeekClient<$Result.GetResult<Prisma.$TrainingPlanWeekPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first TrainingPlanWeek that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingPlanWeekFindFirstOrThrowArgs} args - Arguments to find a TrainingPlanWeek
     * @example
     * // Get one TrainingPlanWeek
     * const trainingPlanWeek = await prisma.trainingPlanWeek.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TrainingPlanWeekFindFirstOrThrowArgs>(args?: SelectSubset<T, TrainingPlanWeekFindFirstOrThrowArgs<ExtArgs>>): Prisma__TrainingPlanWeekClient<$Result.GetResult<Prisma.$TrainingPlanWeekPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more TrainingPlanWeeks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingPlanWeekFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TrainingPlanWeeks
     * const trainingPlanWeeks = await prisma.trainingPlanWeek.findMany()
     * 
     * // Get first 10 TrainingPlanWeeks
     * const trainingPlanWeeks = await prisma.trainingPlanWeek.findMany({ take: 10 })
     * 
     * // Only select the `trainingPlanWeekId`
     * const trainingPlanWeekWithTrainingPlanWeekIdOnly = await prisma.trainingPlanWeek.findMany({ select: { trainingPlanWeekId: true } })
     * 
     */
    findMany<T extends TrainingPlanWeekFindManyArgs>(args?: SelectSubset<T, TrainingPlanWeekFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrainingPlanWeekPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a TrainingPlanWeek.
     * @param {TrainingPlanWeekCreateArgs} args - Arguments to create a TrainingPlanWeek.
     * @example
     * // Create one TrainingPlanWeek
     * const TrainingPlanWeek = await prisma.trainingPlanWeek.create({
     *   data: {
     *     // ... data to create a TrainingPlanWeek
     *   }
     * })
     * 
     */
    create<T extends TrainingPlanWeekCreateArgs>(args: SelectSubset<T, TrainingPlanWeekCreateArgs<ExtArgs>>): Prisma__TrainingPlanWeekClient<$Result.GetResult<Prisma.$TrainingPlanWeekPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many TrainingPlanWeeks.
     * @param {TrainingPlanWeekCreateManyArgs} args - Arguments to create many TrainingPlanWeeks.
     * @example
     * // Create many TrainingPlanWeeks
     * const trainingPlanWeek = await prisma.trainingPlanWeek.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TrainingPlanWeekCreateManyArgs>(args?: SelectSubset<T, TrainingPlanWeekCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TrainingPlanWeeks and returns the data saved in the database.
     * @param {TrainingPlanWeekCreateManyAndReturnArgs} args - Arguments to create many TrainingPlanWeeks.
     * @example
     * // Create many TrainingPlanWeeks
     * const trainingPlanWeek = await prisma.trainingPlanWeek.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TrainingPlanWeeks and only return the `trainingPlanWeekId`
     * const trainingPlanWeekWithTrainingPlanWeekIdOnly = await prisma.trainingPlanWeek.createManyAndReturn({
     *   select: { trainingPlanWeekId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TrainingPlanWeekCreateManyAndReturnArgs>(args?: SelectSubset<T, TrainingPlanWeekCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrainingPlanWeekPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a TrainingPlanWeek.
     * @param {TrainingPlanWeekDeleteArgs} args - Arguments to delete one TrainingPlanWeek.
     * @example
     * // Delete one TrainingPlanWeek
     * const TrainingPlanWeek = await prisma.trainingPlanWeek.delete({
     *   where: {
     *     // ... filter to delete one TrainingPlanWeek
     *   }
     * })
     * 
     */
    delete<T extends TrainingPlanWeekDeleteArgs>(args: SelectSubset<T, TrainingPlanWeekDeleteArgs<ExtArgs>>): Prisma__TrainingPlanWeekClient<$Result.GetResult<Prisma.$TrainingPlanWeekPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one TrainingPlanWeek.
     * @param {TrainingPlanWeekUpdateArgs} args - Arguments to update one TrainingPlanWeek.
     * @example
     * // Update one TrainingPlanWeek
     * const trainingPlanWeek = await prisma.trainingPlanWeek.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TrainingPlanWeekUpdateArgs>(args: SelectSubset<T, TrainingPlanWeekUpdateArgs<ExtArgs>>): Prisma__TrainingPlanWeekClient<$Result.GetResult<Prisma.$TrainingPlanWeekPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more TrainingPlanWeeks.
     * @param {TrainingPlanWeekDeleteManyArgs} args - Arguments to filter TrainingPlanWeeks to delete.
     * @example
     * // Delete a few TrainingPlanWeeks
     * const { count } = await prisma.trainingPlanWeek.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TrainingPlanWeekDeleteManyArgs>(args?: SelectSubset<T, TrainingPlanWeekDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TrainingPlanWeeks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingPlanWeekUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TrainingPlanWeeks
     * const trainingPlanWeek = await prisma.trainingPlanWeek.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TrainingPlanWeekUpdateManyArgs>(args: SelectSubset<T, TrainingPlanWeekUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TrainingPlanWeeks and returns the data updated in the database.
     * @param {TrainingPlanWeekUpdateManyAndReturnArgs} args - Arguments to update many TrainingPlanWeeks.
     * @example
     * // Update many TrainingPlanWeeks
     * const trainingPlanWeek = await prisma.trainingPlanWeek.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TrainingPlanWeeks and only return the `trainingPlanWeekId`
     * const trainingPlanWeekWithTrainingPlanWeekIdOnly = await prisma.trainingPlanWeek.updateManyAndReturn({
     *   select: { trainingPlanWeekId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TrainingPlanWeekUpdateManyAndReturnArgs>(args: SelectSubset<T, TrainingPlanWeekUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrainingPlanWeekPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one TrainingPlanWeek.
     * @param {TrainingPlanWeekUpsertArgs} args - Arguments to update or create a TrainingPlanWeek.
     * @example
     * // Update or create a TrainingPlanWeek
     * const trainingPlanWeek = await prisma.trainingPlanWeek.upsert({
     *   create: {
     *     // ... data to create a TrainingPlanWeek
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TrainingPlanWeek we want to update
     *   }
     * })
     */
    upsert<T extends TrainingPlanWeekUpsertArgs>(args: SelectSubset<T, TrainingPlanWeekUpsertArgs<ExtArgs>>): Prisma__TrainingPlanWeekClient<$Result.GetResult<Prisma.$TrainingPlanWeekPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of TrainingPlanWeeks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingPlanWeekCountArgs} args - Arguments to filter TrainingPlanWeeks to count.
     * @example
     * // Count the number of TrainingPlanWeeks
     * const count = await prisma.trainingPlanWeek.count({
     *   where: {
     *     // ... the filter for the TrainingPlanWeeks we want to count
     *   }
     * })
    **/
    count<T extends TrainingPlanWeekCountArgs>(
      args?: Subset<T, TrainingPlanWeekCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TrainingPlanWeekCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TrainingPlanWeek.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingPlanWeekAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TrainingPlanWeekAggregateArgs>(args: Subset<T, TrainingPlanWeekAggregateArgs>): Prisma.PrismaPromise<GetTrainingPlanWeekAggregateType<T>>

    /**
     * Group by TrainingPlanWeek.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingPlanWeekGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TrainingPlanWeekGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TrainingPlanWeekGroupByArgs['orderBy'] }
        : { orderBy?: TrainingPlanWeekGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TrainingPlanWeekGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrainingPlanWeekGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TrainingPlanWeek model
   */
  readonly fields: TrainingPlanWeekFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TrainingPlanWeek.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TrainingPlanWeekClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workouts<T extends TrainingPlanWeek$workoutsArgs<ExtArgs> = {}>(args?: Subset<T, TrainingPlanWeek$workoutsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    trainingPlan<T extends TrainingPlanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TrainingPlanDefaultArgs<ExtArgs>>): Prisma__TrainingPlanClient<$Result.GetResult<Prisma.$TrainingPlanPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TrainingPlanWeek model
   */ 
  interface TrainingPlanWeekFieldRefs {
    readonly trainingPlanWeekId: FieldRef<"TrainingPlanWeek", 'String'>
    readonly trainingPlanId: FieldRef<"TrainingPlanWeek", 'String'>
    readonly weekNumber: FieldRef<"TrainingPlanWeek", 'Int'>
    readonly createdAt: FieldRef<"TrainingPlanWeek", 'DateTime'>
    readonly updatedAt: FieldRef<"TrainingPlanWeek", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TrainingPlanWeek findUnique
   */
  export type TrainingPlanWeekFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingPlanWeek
     */
    select?: TrainingPlanWeekSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingPlanWeek
     */
    omit?: TrainingPlanWeekOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingPlanWeekInclude<ExtArgs> | null
    /**
     * Filter, which TrainingPlanWeek to fetch.
     */
    where: TrainingPlanWeekWhereUniqueInput
  }

  /**
   * TrainingPlanWeek findUniqueOrThrow
   */
  export type TrainingPlanWeekFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingPlanWeek
     */
    select?: TrainingPlanWeekSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingPlanWeek
     */
    omit?: TrainingPlanWeekOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingPlanWeekInclude<ExtArgs> | null
    /**
     * Filter, which TrainingPlanWeek to fetch.
     */
    where: TrainingPlanWeekWhereUniqueInput
  }

  /**
   * TrainingPlanWeek findFirst
   */
  export type TrainingPlanWeekFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingPlanWeek
     */
    select?: TrainingPlanWeekSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingPlanWeek
     */
    omit?: TrainingPlanWeekOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingPlanWeekInclude<ExtArgs> | null
    /**
     * Filter, which TrainingPlanWeek to fetch.
     */
    where?: TrainingPlanWeekWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrainingPlanWeeks to fetch.
     */
    orderBy?: TrainingPlanWeekOrderByWithRelationInput | TrainingPlanWeekOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrainingPlanWeeks.
     */
    cursor?: TrainingPlanWeekWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrainingPlanWeeks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrainingPlanWeeks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrainingPlanWeeks.
     */
    distinct?: TrainingPlanWeekScalarFieldEnum | TrainingPlanWeekScalarFieldEnum[]
  }

  /**
   * TrainingPlanWeek findFirstOrThrow
   */
  export type TrainingPlanWeekFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingPlanWeek
     */
    select?: TrainingPlanWeekSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingPlanWeek
     */
    omit?: TrainingPlanWeekOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingPlanWeekInclude<ExtArgs> | null
    /**
     * Filter, which TrainingPlanWeek to fetch.
     */
    where?: TrainingPlanWeekWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrainingPlanWeeks to fetch.
     */
    orderBy?: TrainingPlanWeekOrderByWithRelationInput | TrainingPlanWeekOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrainingPlanWeeks.
     */
    cursor?: TrainingPlanWeekWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrainingPlanWeeks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrainingPlanWeeks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrainingPlanWeeks.
     */
    distinct?: TrainingPlanWeekScalarFieldEnum | TrainingPlanWeekScalarFieldEnum[]
  }

  /**
   * TrainingPlanWeek findMany
   */
  export type TrainingPlanWeekFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingPlanWeek
     */
    select?: TrainingPlanWeekSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingPlanWeek
     */
    omit?: TrainingPlanWeekOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingPlanWeekInclude<ExtArgs> | null
    /**
     * Filter, which TrainingPlanWeeks to fetch.
     */
    where?: TrainingPlanWeekWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrainingPlanWeeks to fetch.
     */
    orderBy?: TrainingPlanWeekOrderByWithRelationInput | TrainingPlanWeekOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TrainingPlanWeeks.
     */
    cursor?: TrainingPlanWeekWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrainingPlanWeeks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrainingPlanWeeks.
     */
    skip?: number
    distinct?: TrainingPlanWeekScalarFieldEnum | TrainingPlanWeekScalarFieldEnum[]
  }

  /**
   * TrainingPlanWeek create
   */
  export type TrainingPlanWeekCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingPlanWeek
     */
    select?: TrainingPlanWeekSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingPlanWeek
     */
    omit?: TrainingPlanWeekOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingPlanWeekInclude<ExtArgs> | null
    /**
     * The data needed to create a TrainingPlanWeek.
     */
    data: XOR<TrainingPlanWeekCreateInput, TrainingPlanWeekUncheckedCreateInput>
  }

  /**
   * TrainingPlanWeek createMany
   */
  export type TrainingPlanWeekCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TrainingPlanWeeks.
     */
    data: TrainingPlanWeekCreateManyInput | TrainingPlanWeekCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TrainingPlanWeek createManyAndReturn
   */
  export type TrainingPlanWeekCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingPlanWeek
     */
    select?: TrainingPlanWeekSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingPlanWeek
     */
    omit?: TrainingPlanWeekOmit<ExtArgs> | null
    /**
     * The data used to create many TrainingPlanWeeks.
     */
    data: TrainingPlanWeekCreateManyInput | TrainingPlanWeekCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingPlanWeekIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TrainingPlanWeek update
   */
  export type TrainingPlanWeekUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingPlanWeek
     */
    select?: TrainingPlanWeekSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingPlanWeek
     */
    omit?: TrainingPlanWeekOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingPlanWeekInclude<ExtArgs> | null
    /**
     * The data needed to update a TrainingPlanWeek.
     */
    data: XOR<TrainingPlanWeekUpdateInput, TrainingPlanWeekUncheckedUpdateInput>
    /**
     * Choose, which TrainingPlanWeek to update.
     */
    where: TrainingPlanWeekWhereUniqueInput
  }

  /**
   * TrainingPlanWeek updateMany
   */
  export type TrainingPlanWeekUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TrainingPlanWeeks.
     */
    data: XOR<TrainingPlanWeekUpdateManyMutationInput, TrainingPlanWeekUncheckedUpdateManyInput>
    /**
     * Filter which TrainingPlanWeeks to update
     */
    where?: TrainingPlanWeekWhereInput
    /**
     * Limit how many TrainingPlanWeeks to update.
     */
    limit?: number
  }

  /**
   * TrainingPlanWeek updateManyAndReturn
   */
  export type TrainingPlanWeekUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingPlanWeek
     */
    select?: TrainingPlanWeekSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingPlanWeek
     */
    omit?: TrainingPlanWeekOmit<ExtArgs> | null
    /**
     * The data used to update TrainingPlanWeeks.
     */
    data: XOR<TrainingPlanWeekUpdateManyMutationInput, TrainingPlanWeekUncheckedUpdateManyInput>
    /**
     * Filter which TrainingPlanWeeks to update
     */
    where?: TrainingPlanWeekWhereInput
    /**
     * Limit how many TrainingPlanWeeks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingPlanWeekIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TrainingPlanWeek upsert
   */
  export type TrainingPlanWeekUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingPlanWeek
     */
    select?: TrainingPlanWeekSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingPlanWeek
     */
    omit?: TrainingPlanWeekOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingPlanWeekInclude<ExtArgs> | null
    /**
     * The filter to search for the TrainingPlanWeek to update in case it exists.
     */
    where: TrainingPlanWeekWhereUniqueInput
    /**
     * In case the TrainingPlanWeek found by the `where` argument doesn't exist, create a new TrainingPlanWeek with this data.
     */
    create: XOR<TrainingPlanWeekCreateInput, TrainingPlanWeekUncheckedCreateInput>
    /**
     * In case the TrainingPlanWeek was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TrainingPlanWeekUpdateInput, TrainingPlanWeekUncheckedUpdateInput>
  }

  /**
   * TrainingPlanWeek delete
   */
  export type TrainingPlanWeekDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingPlanWeek
     */
    select?: TrainingPlanWeekSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingPlanWeek
     */
    omit?: TrainingPlanWeekOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingPlanWeekInclude<ExtArgs> | null
    /**
     * Filter which TrainingPlanWeek to delete.
     */
    where: TrainingPlanWeekWhereUniqueInput
  }

  /**
   * TrainingPlanWeek deleteMany
   */
  export type TrainingPlanWeekDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrainingPlanWeeks to delete
     */
    where?: TrainingPlanWeekWhereInput
    /**
     * Limit how many TrainingPlanWeeks to delete.
     */
    limit?: number
  }

  /**
   * TrainingPlanWeek.workouts
   */
  export type TrainingPlanWeek$workoutsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    where?: WorkoutWhereInput
    orderBy?: WorkoutOrderByWithRelationInput | WorkoutOrderByWithRelationInput[]
    cursor?: WorkoutWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkoutScalarFieldEnum | WorkoutScalarFieldEnum[]
  }

  /**
   * TrainingPlanWeek without action
   */
  export type TrainingPlanWeekDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingPlanWeek
     */
    select?: TrainingPlanWeekSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingPlanWeek
     */
    omit?: TrainingPlanWeekOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingPlanWeekInclude<ExtArgs> | null
  }


  /**
   * Model Workout
   */

  export type AggregateWorkout = {
    _count: WorkoutCountAggregateOutputType | null
    _avg: WorkoutAvgAggregateOutputType | null
    _sum: WorkoutSumAggregateOutputType | null
    _min: WorkoutMinAggregateOutputType | null
    _max: WorkoutMaxAggregateOutputType | null
  }

  export type WorkoutAvgAggregateOutputType = {
    order: number | null
  }

  export type WorkoutSumAggregateOutputType = {
    order: number | null
  }

  export type WorkoutMinAggregateOutputType = {
    workoutId: string | null
    trainingPlanWeekId: string | null
    name: string | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkoutMaxAggregateOutputType = {
    workoutId: string | null
    trainingPlanWeekId: string | null
    name: string | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkoutCountAggregateOutputType = {
    workoutId: number
    trainingPlanWeekId: number
    name: number
    order: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WorkoutAvgAggregateInputType = {
    order?: true
  }

  export type WorkoutSumAggregateInputType = {
    order?: true
  }

  export type WorkoutMinAggregateInputType = {
    workoutId?: true
    trainingPlanWeekId?: true
    name?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkoutMaxAggregateInputType = {
    workoutId?: true
    trainingPlanWeekId?: true
    name?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkoutCountAggregateInputType = {
    workoutId?: true
    trainingPlanWeekId?: true
    name?: true
    order?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WorkoutAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Workout to aggregate.
     */
    where?: WorkoutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workouts to fetch.
     */
    orderBy?: WorkoutOrderByWithRelationInput | WorkoutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkoutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Workouts
    **/
    _count?: true | WorkoutCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkoutAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkoutSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkoutMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkoutMaxAggregateInputType
  }

  export type GetWorkoutAggregateType<T extends WorkoutAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkout]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkout[P]>
      : GetScalarType<T[P], AggregateWorkout[P]>
  }




  export type WorkoutGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkoutWhereInput
    orderBy?: WorkoutOrderByWithAggregationInput | WorkoutOrderByWithAggregationInput[]
    by: WorkoutScalarFieldEnum[] | WorkoutScalarFieldEnum
    having?: WorkoutScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkoutCountAggregateInputType | true
    _avg?: WorkoutAvgAggregateInputType
    _sum?: WorkoutSumAggregateInputType
    _min?: WorkoutMinAggregateInputType
    _max?: WorkoutMaxAggregateInputType
  }

  export type WorkoutGroupByOutputType = {
    workoutId: string
    trainingPlanWeekId: string
    name: string
    order: number
    createdAt: Date
    updatedAt: Date
    _count: WorkoutCountAggregateOutputType | null
    _avg: WorkoutAvgAggregateOutputType | null
    _sum: WorkoutSumAggregateOutputType | null
    _min: WorkoutMinAggregateOutputType | null
    _max: WorkoutMaxAggregateOutputType | null
  }

  type GetWorkoutGroupByPayload<T extends WorkoutGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkoutGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkoutGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkoutGroupByOutputType[P]>
            : GetScalarType<T[P], WorkoutGroupByOutputType[P]>
        }
      >
    >


  export type WorkoutSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    workoutId?: boolean
    trainingPlanWeekId?: boolean
    name?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    trainingPlanWeek?: boolean | TrainingPlanWeekDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workout"]>

  export type WorkoutSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    workoutId?: boolean
    trainingPlanWeekId?: boolean
    name?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    trainingPlanWeek?: boolean | TrainingPlanWeekDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workout"]>

  export type WorkoutSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    workoutId?: boolean
    trainingPlanWeekId?: boolean
    name?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    trainingPlanWeek?: boolean | TrainingPlanWeekDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workout"]>

  export type WorkoutSelectScalar = {
    workoutId?: boolean
    trainingPlanWeekId?: boolean
    name?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WorkoutOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"workoutId" | "trainingPlanWeekId" | "name" | "order" | "createdAt" | "updatedAt", ExtArgs["result"]["workout"]>
  export type WorkoutInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trainingPlanWeek?: boolean | TrainingPlanWeekDefaultArgs<ExtArgs>
  }
  export type WorkoutIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trainingPlanWeek?: boolean | TrainingPlanWeekDefaultArgs<ExtArgs>
  }
  export type WorkoutIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trainingPlanWeek?: boolean | TrainingPlanWeekDefaultArgs<ExtArgs>
  }

  export type $WorkoutPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Workout"
    objects: {
      trainingPlanWeek: Prisma.$TrainingPlanWeekPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      workoutId: string
      trainingPlanWeekId: string
      name: string
      order: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["workout"]>
    composites: {}
  }

  type WorkoutGetPayload<S extends boolean | null | undefined | WorkoutDefaultArgs> = $Result.GetResult<Prisma.$WorkoutPayload, S>

  type WorkoutCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkoutFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkoutCountAggregateInputType | true
    }

  export interface WorkoutDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Workout'], meta: { name: 'Workout' } }
    /**
     * Find zero or one Workout that matches the filter.
     * @param {WorkoutFindUniqueArgs} args - Arguments to find a Workout
     * @example
     * // Get one Workout
     * const workout = await prisma.workout.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkoutFindUniqueArgs>(args: SelectSubset<T, WorkoutFindUniqueArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Workout that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkoutFindUniqueOrThrowArgs} args - Arguments to find a Workout
     * @example
     * // Get one Workout
     * const workout = await prisma.workout.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkoutFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkoutFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Workout that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutFindFirstArgs} args - Arguments to find a Workout
     * @example
     * // Get one Workout
     * const workout = await prisma.workout.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkoutFindFirstArgs>(args?: SelectSubset<T, WorkoutFindFirstArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Workout that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutFindFirstOrThrowArgs} args - Arguments to find a Workout
     * @example
     * // Get one Workout
     * const workout = await prisma.workout.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkoutFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkoutFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Workouts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Workouts
     * const workouts = await prisma.workout.findMany()
     * 
     * // Get first 10 Workouts
     * const workouts = await prisma.workout.findMany({ take: 10 })
     * 
     * // Only select the `workoutId`
     * const workoutWithWorkoutIdOnly = await prisma.workout.findMany({ select: { workoutId: true } })
     * 
     */
    findMany<T extends WorkoutFindManyArgs>(args?: SelectSubset<T, WorkoutFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Workout.
     * @param {WorkoutCreateArgs} args - Arguments to create a Workout.
     * @example
     * // Create one Workout
     * const Workout = await prisma.workout.create({
     *   data: {
     *     // ... data to create a Workout
     *   }
     * })
     * 
     */
    create<T extends WorkoutCreateArgs>(args: SelectSubset<T, WorkoutCreateArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Workouts.
     * @param {WorkoutCreateManyArgs} args - Arguments to create many Workouts.
     * @example
     * // Create many Workouts
     * const workout = await prisma.workout.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkoutCreateManyArgs>(args?: SelectSubset<T, WorkoutCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Workouts and returns the data saved in the database.
     * @param {WorkoutCreateManyAndReturnArgs} args - Arguments to create many Workouts.
     * @example
     * // Create many Workouts
     * const workout = await prisma.workout.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Workouts and only return the `workoutId`
     * const workoutWithWorkoutIdOnly = await prisma.workout.createManyAndReturn({
     *   select: { workoutId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkoutCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkoutCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Workout.
     * @param {WorkoutDeleteArgs} args - Arguments to delete one Workout.
     * @example
     * // Delete one Workout
     * const Workout = await prisma.workout.delete({
     *   where: {
     *     // ... filter to delete one Workout
     *   }
     * })
     * 
     */
    delete<T extends WorkoutDeleteArgs>(args: SelectSubset<T, WorkoutDeleteArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Workout.
     * @param {WorkoutUpdateArgs} args - Arguments to update one Workout.
     * @example
     * // Update one Workout
     * const workout = await prisma.workout.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkoutUpdateArgs>(args: SelectSubset<T, WorkoutUpdateArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Workouts.
     * @param {WorkoutDeleteManyArgs} args - Arguments to filter Workouts to delete.
     * @example
     * // Delete a few Workouts
     * const { count } = await prisma.workout.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkoutDeleteManyArgs>(args?: SelectSubset<T, WorkoutDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workouts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Workouts
     * const workout = await prisma.workout.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkoutUpdateManyArgs>(args: SelectSubset<T, WorkoutUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workouts and returns the data updated in the database.
     * @param {WorkoutUpdateManyAndReturnArgs} args - Arguments to update many Workouts.
     * @example
     * // Update many Workouts
     * const workout = await prisma.workout.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Workouts and only return the `workoutId`
     * const workoutWithWorkoutIdOnly = await prisma.workout.updateManyAndReturn({
     *   select: { workoutId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WorkoutUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkoutUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Workout.
     * @param {WorkoutUpsertArgs} args - Arguments to update or create a Workout.
     * @example
     * // Update or create a Workout
     * const workout = await prisma.workout.upsert({
     *   create: {
     *     // ... data to create a Workout
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Workout we want to update
     *   }
     * })
     */
    upsert<T extends WorkoutUpsertArgs>(args: SelectSubset<T, WorkoutUpsertArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Workouts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutCountArgs} args - Arguments to filter Workouts to count.
     * @example
     * // Count the number of Workouts
     * const count = await prisma.workout.count({
     *   where: {
     *     // ... the filter for the Workouts we want to count
     *   }
     * })
    **/
    count<T extends WorkoutCountArgs>(
      args?: Subset<T, WorkoutCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkoutCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Workout.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkoutAggregateArgs>(args: Subset<T, WorkoutAggregateArgs>): Prisma.PrismaPromise<GetWorkoutAggregateType<T>>

    /**
     * Group by Workout.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorkoutGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkoutGroupByArgs['orderBy'] }
        : { orderBy?: WorkoutGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorkoutGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkoutGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Workout model
   */
  readonly fields: WorkoutFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Workout.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkoutClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    trainingPlanWeek<T extends TrainingPlanWeekDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TrainingPlanWeekDefaultArgs<ExtArgs>>): Prisma__TrainingPlanWeekClient<$Result.GetResult<Prisma.$TrainingPlanWeekPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Workout model
   */ 
  interface WorkoutFieldRefs {
    readonly workoutId: FieldRef<"Workout", 'String'>
    readonly trainingPlanWeekId: FieldRef<"Workout", 'String'>
    readonly name: FieldRef<"Workout", 'String'>
    readonly order: FieldRef<"Workout", 'Int'>
    readonly createdAt: FieldRef<"Workout", 'DateTime'>
    readonly updatedAt: FieldRef<"Workout", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Workout findUnique
   */
  export type WorkoutFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * Filter, which Workout to fetch.
     */
    where: WorkoutWhereUniqueInput
  }

  /**
   * Workout findUniqueOrThrow
   */
  export type WorkoutFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * Filter, which Workout to fetch.
     */
    where: WorkoutWhereUniqueInput
  }

  /**
   * Workout findFirst
   */
  export type WorkoutFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * Filter, which Workout to fetch.
     */
    where?: WorkoutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workouts to fetch.
     */
    orderBy?: WorkoutOrderByWithRelationInput | WorkoutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Workouts.
     */
    cursor?: WorkoutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workouts.
     */
    distinct?: WorkoutScalarFieldEnum | WorkoutScalarFieldEnum[]
  }

  /**
   * Workout findFirstOrThrow
   */
  export type WorkoutFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * Filter, which Workout to fetch.
     */
    where?: WorkoutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workouts to fetch.
     */
    orderBy?: WorkoutOrderByWithRelationInput | WorkoutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Workouts.
     */
    cursor?: WorkoutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workouts.
     */
    distinct?: WorkoutScalarFieldEnum | WorkoutScalarFieldEnum[]
  }

  /**
   * Workout findMany
   */
  export type WorkoutFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * Filter, which Workouts to fetch.
     */
    where?: WorkoutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workouts to fetch.
     */
    orderBy?: WorkoutOrderByWithRelationInput | WorkoutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Workouts.
     */
    cursor?: WorkoutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workouts.
     */
    skip?: number
    distinct?: WorkoutScalarFieldEnum | WorkoutScalarFieldEnum[]
  }

  /**
   * Workout create
   */
  export type WorkoutCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * The data needed to create a Workout.
     */
    data: XOR<WorkoutCreateInput, WorkoutUncheckedCreateInput>
  }

  /**
   * Workout createMany
   */
  export type WorkoutCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Workouts.
     */
    data: WorkoutCreateManyInput | WorkoutCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Workout createManyAndReturn
   */
  export type WorkoutCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * The data used to create many Workouts.
     */
    data: WorkoutCreateManyInput | WorkoutCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Workout update
   */
  export type WorkoutUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * The data needed to update a Workout.
     */
    data: XOR<WorkoutUpdateInput, WorkoutUncheckedUpdateInput>
    /**
     * Choose, which Workout to update.
     */
    where: WorkoutWhereUniqueInput
  }

  /**
   * Workout updateMany
   */
  export type WorkoutUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Workouts.
     */
    data: XOR<WorkoutUpdateManyMutationInput, WorkoutUncheckedUpdateManyInput>
    /**
     * Filter which Workouts to update
     */
    where?: WorkoutWhereInput
    /**
     * Limit how many Workouts to update.
     */
    limit?: number
  }

  /**
   * Workout updateManyAndReturn
   */
  export type WorkoutUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * The data used to update Workouts.
     */
    data: XOR<WorkoutUpdateManyMutationInput, WorkoutUncheckedUpdateManyInput>
    /**
     * Filter which Workouts to update
     */
    where?: WorkoutWhereInput
    /**
     * Limit how many Workouts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Workout upsert
   */
  export type WorkoutUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * The filter to search for the Workout to update in case it exists.
     */
    where: WorkoutWhereUniqueInput
    /**
     * In case the Workout found by the `where` argument doesn't exist, create a new Workout with this data.
     */
    create: XOR<WorkoutCreateInput, WorkoutUncheckedCreateInput>
    /**
     * In case the Workout was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkoutUpdateInput, WorkoutUncheckedUpdateInput>
  }

  /**
   * Workout delete
   */
  export type WorkoutDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * Filter which Workout to delete.
     */
    where: WorkoutWhereUniqueInput
  }

  /**
   * Workout deleteMany
   */
  export type WorkoutDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Workouts to delete
     */
    where?: WorkoutWhereInput
    /**
     * Limit how many Workouts to delete.
     */
    limit?: number
  }

  /**
   * Workout without action
   */
  export type WorkoutDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const TrainingPlanScalarFieldEnum: {
    trainingPlanId: 'trainingPlanId',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TrainingPlanScalarFieldEnum = (typeof TrainingPlanScalarFieldEnum)[keyof typeof TrainingPlanScalarFieldEnum]


  export const TrainingPlanWeekScalarFieldEnum: {
    trainingPlanWeekId: 'trainingPlanWeekId',
    trainingPlanId: 'trainingPlanId',
    weekNumber: 'weekNumber',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TrainingPlanWeekScalarFieldEnum = (typeof TrainingPlanWeekScalarFieldEnum)[keyof typeof TrainingPlanWeekScalarFieldEnum]


  export const WorkoutScalarFieldEnum: {
    workoutId: 'workoutId',
    trainingPlanWeekId: 'trainingPlanWeekId',
    name: 'name',
    order: 'order',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WorkoutScalarFieldEnum = (typeof WorkoutScalarFieldEnum)[keyof typeof WorkoutScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type TrainingPlanWhereInput = {
    AND?: TrainingPlanWhereInput | TrainingPlanWhereInput[]
    OR?: TrainingPlanWhereInput[]
    NOT?: TrainingPlanWhereInput | TrainingPlanWhereInput[]
    trainingPlanId?: StringFilter<"TrainingPlan"> | string
    name?: StringFilter<"TrainingPlan"> | string
    description?: StringNullableFilter<"TrainingPlan"> | string | null
    createdAt?: DateTimeFilter<"TrainingPlan"> | Date | string
    updatedAt?: DateTimeFilter<"TrainingPlan"> | Date | string
    trainingPlanWeeks?: TrainingPlanWeekListRelationFilter
  }

  export type TrainingPlanOrderByWithRelationInput = {
    trainingPlanId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    trainingPlanWeeks?: TrainingPlanWeekOrderByRelationAggregateInput
  }

  export type TrainingPlanWhereUniqueInput = Prisma.AtLeast<{
    trainingPlanId?: string
    name?: string
    AND?: TrainingPlanWhereInput | TrainingPlanWhereInput[]
    OR?: TrainingPlanWhereInput[]
    NOT?: TrainingPlanWhereInput | TrainingPlanWhereInput[]
    description?: StringNullableFilter<"TrainingPlan"> | string | null
    createdAt?: DateTimeFilter<"TrainingPlan"> | Date | string
    updatedAt?: DateTimeFilter<"TrainingPlan"> | Date | string
    trainingPlanWeeks?: TrainingPlanWeekListRelationFilter
  }, "trainingPlanId" | "name">

  export type TrainingPlanOrderByWithAggregationInput = {
    trainingPlanId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TrainingPlanCountOrderByAggregateInput
    _max?: TrainingPlanMaxOrderByAggregateInput
    _min?: TrainingPlanMinOrderByAggregateInput
  }

  export type TrainingPlanScalarWhereWithAggregatesInput = {
    AND?: TrainingPlanScalarWhereWithAggregatesInput | TrainingPlanScalarWhereWithAggregatesInput[]
    OR?: TrainingPlanScalarWhereWithAggregatesInput[]
    NOT?: TrainingPlanScalarWhereWithAggregatesInput | TrainingPlanScalarWhereWithAggregatesInput[]
    trainingPlanId?: StringWithAggregatesFilter<"TrainingPlan"> | string
    name?: StringWithAggregatesFilter<"TrainingPlan"> | string
    description?: StringNullableWithAggregatesFilter<"TrainingPlan"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"TrainingPlan"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TrainingPlan"> | Date | string
  }

  export type TrainingPlanWeekWhereInput = {
    AND?: TrainingPlanWeekWhereInput | TrainingPlanWeekWhereInput[]
    OR?: TrainingPlanWeekWhereInput[]
    NOT?: TrainingPlanWeekWhereInput | TrainingPlanWeekWhereInput[]
    trainingPlanWeekId?: StringFilter<"TrainingPlanWeek"> | string
    trainingPlanId?: StringFilter<"TrainingPlanWeek"> | string
    weekNumber?: IntFilter<"TrainingPlanWeek"> | number
    createdAt?: DateTimeFilter<"TrainingPlanWeek"> | Date | string
    updatedAt?: DateTimeFilter<"TrainingPlanWeek"> | Date | string
    workouts?: WorkoutListRelationFilter
    trainingPlan?: XOR<TrainingPlanScalarRelationFilter, TrainingPlanWhereInput>
  }

  export type TrainingPlanWeekOrderByWithRelationInput = {
    trainingPlanWeekId?: SortOrder
    trainingPlanId?: SortOrder
    weekNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    workouts?: WorkoutOrderByRelationAggregateInput
    trainingPlan?: TrainingPlanOrderByWithRelationInput
  }

  export type TrainingPlanWeekWhereUniqueInput = Prisma.AtLeast<{
    trainingPlanWeekId?: string
    AND?: TrainingPlanWeekWhereInput | TrainingPlanWeekWhereInput[]
    OR?: TrainingPlanWeekWhereInput[]
    NOT?: TrainingPlanWeekWhereInput | TrainingPlanWeekWhereInput[]
    trainingPlanId?: StringFilter<"TrainingPlanWeek"> | string
    weekNumber?: IntFilter<"TrainingPlanWeek"> | number
    createdAt?: DateTimeFilter<"TrainingPlanWeek"> | Date | string
    updatedAt?: DateTimeFilter<"TrainingPlanWeek"> | Date | string
    workouts?: WorkoutListRelationFilter
    trainingPlan?: XOR<TrainingPlanScalarRelationFilter, TrainingPlanWhereInput>
  }, "trainingPlanWeekId">

  export type TrainingPlanWeekOrderByWithAggregationInput = {
    trainingPlanWeekId?: SortOrder
    trainingPlanId?: SortOrder
    weekNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TrainingPlanWeekCountOrderByAggregateInput
    _avg?: TrainingPlanWeekAvgOrderByAggregateInput
    _max?: TrainingPlanWeekMaxOrderByAggregateInput
    _min?: TrainingPlanWeekMinOrderByAggregateInput
    _sum?: TrainingPlanWeekSumOrderByAggregateInput
  }

  export type TrainingPlanWeekScalarWhereWithAggregatesInput = {
    AND?: TrainingPlanWeekScalarWhereWithAggregatesInput | TrainingPlanWeekScalarWhereWithAggregatesInput[]
    OR?: TrainingPlanWeekScalarWhereWithAggregatesInput[]
    NOT?: TrainingPlanWeekScalarWhereWithAggregatesInput | TrainingPlanWeekScalarWhereWithAggregatesInput[]
    trainingPlanWeekId?: StringWithAggregatesFilter<"TrainingPlanWeek"> | string
    trainingPlanId?: StringWithAggregatesFilter<"TrainingPlanWeek"> | string
    weekNumber?: IntWithAggregatesFilter<"TrainingPlanWeek"> | number
    createdAt?: DateTimeWithAggregatesFilter<"TrainingPlanWeek"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TrainingPlanWeek"> | Date | string
  }

  export type WorkoutWhereInput = {
    AND?: WorkoutWhereInput | WorkoutWhereInput[]
    OR?: WorkoutWhereInput[]
    NOT?: WorkoutWhereInput | WorkoutWhereInput[]
    workoutId?: StringFilter<"Workout"> | string
    trainingPlanWeekId?: StringFilter<"Workout"> | string
    name?: StringFilter<"Workout"> | string
    order?: IntFilter<"Workout"> | number
    createdAt?: DateTimeFilter<"Workout"> | Date | string
    updatedAt?: DateTimeFilter<"Workout"> | Date | string
    trainingPlanWeek?: XOR<TrainingPlanWeekScalarRelationFilter, TrainingPlanWeekWhereInput>
  }

  export type WorkoutOrderByWithRelationInput = {
    workoutId?: SortOrder
    trainingPlanWeekId?: SortOrder
    name?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    trainingPlanWeek?: TrainingPlanWeekOrderByWithRelationInput
  }

  export type WorkoutWhereUniqueInput = Prisma.AtLeast<{
    workoutId?: string
    name?: string
    AND?: WorkoutWhereInput | WorkoutWhereInput[]
    OR?: WorkoutWhereInput[]
    NOT?: WorkoutWhereInput | WorkoutWhereInput[]
    trainingPlanWeekId?: StringFilter<"Workout"> | string
    order?: IntFilter<"Workout"> | number
    createdAt?: DateTimeFilter<"Workout"> | Date | string
    updatedAt?: DateTimeFilter<"Workout"> | Date | string
    trainingPlanWeek?: XOR<TrainingPlanWeekScalarRelationFilter, TrainingPlanWeekWhereInput>
  }, "workoutId" | "name">

  export type WorkoutOrderByWithAggregationInput = {
    workoutId?: SortOrder
    trainingPlanWeekId?: SortOrder
    name?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WorkoutCountOrderByAggregateInput
    _avg?: WorkoutAvgOrderByAggregateInput
    _max?: WorkoutMaxOrderByAggregateInput
    _min?: WorkoutMinOrderByAggregateInput
    _sum?: WorkoutSumOrderByAggregateInput
  }

  export type WorkoutScalarWhereWithAggregatesInput = {
    AND?: WorkoutScalarWhereWithAggregatesInput | WorkoutScalarWhereWithAggregatesInput[]
    OR?: WorkoutScalarWhereWithAggregatesInput[]
    NOT?: WorkoutScalarWhereWithAggregatesInput | WorkoutScalarWhereWithAggregatesInput[]
    workoutId?: StringWithAggregatesFilter<"Workout"> | string
    trainingPlanWeekId?: StringWithAggregatesFilter<"Workout"> | string
    name?: StringWithAggregatesFilter<"Workout"> | string
    order?: IntWithAggregatesFilter<"Workout"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Workout"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Workout"> | Date | string
  }

  export type TrainingPlanCreateInput = {
    trainingPlanId?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    trainingPlanWeeks?: TrainingPlanWeekCreateNestedManyWithoutTrainingPlanInput
  }

  export type TrainingPlanUncheckedCreateInput = {
    trainingPlanId?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    trainingPlanWeeks?: TrainingPlanWeekUncheckedCreateNestedManyWithoutTrainingPlanInput
  }

  export type TrainingPlanUpdateInput = {
    trainingPlanId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trainingPlanWeeks?: TrainingPlanWeekUpdateManyWithoutTrainingPlanNestedInput
  }

  export type TrainingPlanUncheckedUpdateInput = {
    trainingPlanId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trainingPlanWeeks?: TrainingPlanWeekUncheckedUpdateManyWithoutTrainingPlanNestedInput
  }

  export type TrainingPlanCreateManyInput = {
    trainingPlanId?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TrainingPlanUpdateManyMutationInput = {
    trainingPlanId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrainingPlanUncheckedUpdateManyInput = {
    trainingPlanId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrainingPlanWeekCreateInput = {
    trainingPlanWeekId?: string
    weekNumber: number
    createdAt?: Date | string
    updatedAt?: Date | string
    workouts?: WorkoutCreateNestedManyWithoutTrainingPlanWeekInput
    trainingPlan: TrainingPlanCreateNestedOneWithoutTrainingPlanWeeksInput
  }

  export type TrainingPlanWeekUncheckedCreateInput = {
    trainingPlanWeekId?: string
    trainingPlanId: string
    weekNumber: number
    createdAt?: Date | string
    updatedAt?: Date | string
    workouts?: WorkoutUncheckedCreateNestedManyWithoutTrainingPlanWeekInput
  }

  export type TrainingPlanWeekUpdateInput = {
    trainingPlanWeekId?: StringFieldUpdateOperationsInput | string
    weekNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workouts?: WorkoutUpdateManyWithoutTrainingPlanWeekNestedInput
    trainingPlan?: TrainingPlanUpdateOneRequiredWithoutTrainingPlanWeeksNestedInput
  }

  export type TrainingPlanWeekUncheckedUpdateInput = {
    trainingPlanWeekId?: StringFieldUpdateOperationsInput | string
    trainingPlanId?: StringFieldUpdateOperationsInput | string
    weekNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workouts?: WorkoutUncheckedUpdateManyWithoutTrainingPlanWeekNestedInput
  }

  export type TrainingPlanWeekCreateManyInput = {
    trainingPlanWeekId?: string
    trainingPlanId: string
    weekNumber: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TrainingPlanWeekUpdateManyMutationInput = {
    trainingPlanWeekId?: StringFieldUpdateOperationsInput | string
    weekNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrainingPlanWeekUncheckedUpdateManyInput = {
    trainingPlanWeekId?: StringFieldUpdateOperationsInput | string
    trainingPlanId?: StringFieldUpdateOperationsInput | string
    weekNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkoutCreateInput = {
    workoutId?: string
    name: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
    trainingPlanWeek: TrainingPlanWeekCreateNestedOneWithoutWorkoutsInput
  }

  export type WorkoutUncheckedCreateInput = {
    workoutId?: string
    trainingPlanWeekId: string
    name: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkoutUpdateInput = {
    workoutId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trainingPlanWeek?: TrainingPlanWeekUpdateOneRequiredWithoutWorkoutsNestedInput
  }

  export type WorkoutUncheckedUpdateInput = {
    workoutId?: StringFieldUpdateOperationsInput | string
    trainingPlanWeekId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkoutCreateManyInput = {
    workoutId?: string
    trainingPlanWeekId: string
    name: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkoutUpdateManyMutationInput = {
    workoutId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkoutUncheckedUpdateManyInput = {
    workoutId?: StringFieldUpdateOperationsInput | string
    trainingPlanWeekId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type TrainingPlanWeekListRelationFilter = {
    every?: TrainingPlanWeekWhereInput
    some?: TrainingPlanWeekWhereInput
    none?: TrainingPlanWeekWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TrainingPlanWeekOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TrainingPlanCountOrderByAggregateInput = {
    trainingPlanId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TrainingPlanMaxOrderByAggregateInput = {
    trainingPlanId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TrainingPlanMinOrderByAggregateInput = {
    trainingPlanId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type WorkoutListRelationFilter = {
    every?: WorkoutWhereInput
    some?: WorkoutWhereInput
    none?: WorkoutWhereInput
  }

  export type TrainingPlanScalarRelationFilter = {
    is?: TrainingPlanWhereInput
    isNot?: TrainingPlanWhereInput
  }

  export type WorkoutOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TrainingPlanWeekCountOrderByAggregateInput = {
    trainingPlanWeekId?: SortOrder
    trainingPlanId?: SortOrder
    weekNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TrainingPlanWeekAvgOrderByAggregateInput = {
    weekNumber?: SortOrder
  }

  export type TrainingPlanWeekMaxOrderByAggregateInput = {
    trainingPlanWeekId?: SortOrder
    trainingPlanId?: SortOrder
    weekNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TrainingPlanWeekMinOrderByAggregateInput = {
    trainingPlanWeekId?: SortOrder
    trainingPlanId?: SortOrder
    weekNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TrainingPlanWeekSumOrderByAggregateInput = {
    weekNumber?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type TrainingPlanWeekScalarRelationFilter = {
    is?: TrainingPlanWeekWhereInput
    isNot?: TrainingPlanWeekWhereInput
  }

  export type WorkoutCountOrderByAggregateInput = {
    workoutId?: SortOrder
    trainingPlanWeekId?: SortOrder
    name?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkoutAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type WorkoutMaxOrderByAggregateInput = {
    workoutId?: SortOrder
    trainingPlanWeekId?: SortOrder
    name?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkoutMinOrderByAggregateInput = {
    workoutId?: SortOrder
    trainingPlanWeekId?: SortOrder
    name?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkoutSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type TrainingPlanWeekCreateNestedManyWithoutTrainingPlanInput = {
    create?: XOR<TrainingPlanWeekCreateWithoutTrainingPlanInput, TrainingPlanWeekUncheckedCreateWithoutTrainingPlanInput> | TrainingPlanWeekCreateWithoutTrainingPlanInput[] | TrainingPlanWeekUncheckedCreateWithoutTrainingPlanInput[]
    connectOrCreate?: TrainingPlanWeekCreateOrConnectWithoutTrainingPlanInput | TrainingPlanWeekCreateOrConnectWithoutTrainingPlanInput[]
    createMany?: TrainingPlanWeekCreateManyTrainingPlanInputEnvelope
    connect?: TrainingPlanWeekWhereUniqueInput | TrainingPlanWeekWhereUniqueInput[]
  }

  export type TrainingPlanWeekUncheckedCreateNestedManyWithoutTrainingPlanInput = {
    create?: XOR<TrainingPlanWeekCreateWithoutTrainingPlanInput, TrainingPlanWeekUncheckedCreateWithoutTrainingPlanInput> | TrainingPlanWeekCreateWithoutTrainingPlanInput[] | TrainingPlanWeekUncheckedCreateWithoutTrainingPlanInput[]
    connectOrCreate?: TrainingPlanWeekCreateOrConnectWithoutTrainingPlanInput | TrainingPlanWeekCreateOrConnectWithoutTrainingPlanInput[]
    createMany?: TrainingPlanWeekCreateManyTrainingPlanInputEnvelope
    connect?: TrainingPlanWeekWhereUniqueInput | TrainingPlanWeekWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TrainingPlanWeekUpdateManyWithoutTrainingPlanNestedInput = {
    create?: XOR<TrainingPlanWeekCreateWithoutTrainingPlanInput, TrainingPlanWeekUncheckedCreateWithoutTrainingPlanInput> | TrainingPlanWeekCreateWithoutTrainingPlanInput[] | TrainingPlanWeekUncheckedCreateWithoutTrainingPlanInput[]
    connectOrCreate?: TrainingPlanWeekCreateOrConnectWithoutTrainingPlanInput | TrainingPlanWeekCreateOrConnectWithoutTrainingPlanInput[]
    upsert?: TrainingPlanWeekUpsertWithWhereUniqueWithoutTrainingPlanInput | TrainingPlanWeekUpsertWithWhereUniqueWithoutTrainingPlanInput[]
    createMany?: TrainingPlanWeekCreateManyTrainingPlanInputEnvelope
    set?: TrainingPlanWeekWhereUniqueInput | TrainingPlanWeekWhereUniqueInput[]
    disconnect?: TrainingPlanWeekWhereUniqueInput | TrainingPlanWeekWhereUniqueInput[]
    delete?: TrainingPlanWeekWhereUniqueInput | TrainingPlanWeekWhereUniqueInput[]
    connect?: TrainingPlanWeekWhereUniqueInput | TrainingPlanWeekWhereUniqueInput[]
    update?: TrainingPlanWeekUpdateWithWhereUniqueWithoutTrainingPlanInput | TrainingPlanWeekUpdateWithWhereUniqueWithoutTrainingPlanInput[]
    updateMany?: TrainingPlanWeekUpdateManyWithWhereWithoutTrainingPlanInput | TrainingPlanWeekUpdateManyWithWhereWithoutTrainingPlanInput[]
    deleteMany?: TrainingPlanWeekScalarWhereInput | TrainingPlanWeekScalarWhereInput[]
  }

  export type TrainingPlanWeekUncheckedUpdateManyWithoutTrainingPlanNestedInput = {
    create?: XOR<TrainingPlanWeekCreateWithoutTrainingPlanInput, TrainingPlanWeekUncheckedCreateWithoutTrainingPlanInput> | TrainingPlanWeekCreateWithoutTrainingPlanInput[] | TrainingPlanWeekUncheckedCreateWithoutTrainingPlanInput[]
    connectOrCreate?: TrainingPlanWeekCreateOrConnectWithoutTrainingPlanInput | TrainingPlanWeekCreateOrConnectWithoutTrainingPlanInput[]
    upsert?: TrainingPlanWeekUpsertWithWhereUniqueWithoutTrainingPlanInput | TrainingPlanWeekUpsertWithWhereUniqueWithoutTrainingPlanInput[]
    createMany?: TrainingPlanWeekCreateManyTrainingPlanInputEnvelope
    set?: TrainingPlanWeekWhereUniqueInput | TrainingPlanWeekWhereUniqueInput[]
    disconnect?: TrainingPlanWeekWhereUniqueInput | TrainingPlanWeekWhereUniqueInput[]
    delete?: TrainingPlanWeekWhereUniqueInput | TrainingPlanWeekWhereUniqueInput[]
    connect?: TrainingPlanWeekWhereUniqueInput | TrainingPlanWeekWhereUniqueInput[]
    update?: TrainingPlanWeekUpdateWithWhereUniqueWithoutTrainingPlanInput | TrainingPlanWeekUpdateWithWhereUniqueWithoutTrainingPlanInput[]
    updateMany?: TrainingPlanWeekUpdateManyWithWhereWithoutTrainingPlanInput | TrainingPlanWeekUpdateManyWithWhereWithoutTrainingPlanInput[]
    deleteMany?: TrainingPlanWeekScalarWhereInput | TrainingPlanWeekScalarWhereInput[]
  }

  export type WorkoutCreateNestedManyWithoutTrainingPlanWeekInput = {
    create?: XOR<WorkoutCreateWithoutTrainingPlanWeekInput, WorkoutUncheckedCreateWithoutTrainingPlanWeekInput> | WorkoutCreateWithoutTrainingPlanWeekInput[] | WorkoutUncheckedCreateWithoutTrainingPlanWeekInput[]
    connectOrCreate?: WorkoutCreateOrConnectWithoutTrainingPlanWeekInput | WorkoutCreateOrConnectWithoutTrainingPlanWeekInput[]
    createMany?: WorkoutCreateManyTrainingPlanWeekInputEnvelope
    connect?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
  }

  export type TrainingPlanCreateNestedOneWithoutTrainingPlanWeeksInput = {
    create?: XOR<TrainingPlanCreateWithoutTrainingPlanWeeksInput, TrainingPlanUncheckedCreateWithoutTrainingPlanWeeksInput>
    connectOrCreate?: TrainingPlanCreateOrConnectWithoutTrainingPlanWeeksInput
    connect?: TrainingPlanWhereUniqueInput
  }

  export type WorkoutUncheckedCreateNestedManyWithoutTrainingPlanWeekInput = {
    create?: XOR<WorkoutCreateWithoutTrainingPlanWeekInput, WorkoutUncheckedCreateWithoutTrainingPlanWeekInput> | WorkoutCreateWithoutTrainingPlanWeekInput[] | WorkoutUncheckedCreateWithoutTrainingPlanWeekInput[]
    connectOrCreate?: WorkoutCreateOrConnectWithoutTrainingPlanWeekInput | WorkoutCreateOrConnectWithoutTrainingPlanWeekInput[]
    createMany?: WorkoutCreateManyTrainingPlanWeekInputEnvelope
    connect?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type WorkoutUpdateManyWithoutTrainingPlanWeekNestedInput = {
    create?: XOR<WorkoutCreateWithoutTrainingPlanWeekInput, WorkoutUncheckedCreateWithoutTrainingPlanWeekInput> | WorkoutCreateWithoutTrainingPlanWeekInput[] | WorkoutUncheckedCreateWithoutTrainingPlanWeekInput[]
    connectOrCreate?: WorkoutCreateOrConnectWithoutTrainingPlanWeekInput | WorkoutCreateOrConnectWithoutTrainingPlanWeekInput[]
    upsert?: WorkoutUpsertWithWhereUniqueWithoutTrainingPlanWeekInput | WorkoutUpsertWithWhereUniqueWithoutTrainingPlanWeekInput[]
    createMany?: WorkoutCreateManyTrainingPlanWeekInputEnvelope
    set?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
    disconnect?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
    delete?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
    connect?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
    update?: WorkoutUpdateWithWhereUniqueWithoutTrainingPlanWeekInput | WorkoutUpdateWithWhereUniqueWithoutTrainingPlanWeekInput[]
    updateMany?: WorkoutUpdateManyWithWhereWithoutTrainingPlanWeekInput | WorkoutUpdateManyWithWhereWithoutTrainingPlanWeekInput[]
    deleteMany?: WorkoutScalarWhereInput | WorkoutScalarWhereInput[]
  }

  export type TrainingPlanUpdateOneRequiredWithoutTrainingPlanWeeksNestedInput = {
    create?: XOR<TrainingPlanCreateWithoutTrainingPlanWeeksInput, TrainingPlanUncheckedCreateWithoutTrainingPlanWeeksInput>
    connectOrCreate?: TrainingPlanCreateOrConnectWithoutTrainingPlanWeeksInput
    upsert?: TrainingPlanUpsertWithoutTrainingPlanWeeksInput
    connect?: TrainingPlanWhereUniqueInput
    update?: XOR<XOR<TrainingPlanUpdateToOneWithWhereWithoutTrainingPlanWeeksInput, TrainingPlanUpdateWithoutTrainingPlanWeeksInput>, TrainingPlanUncheckedUpdateWithoutTrainingPlanWeeksInput>
  }

  export type WorkoutUncheckedUpdateManyWithoutTrainingPlanWeekNestedInput = {
    create?: XOR<WorkoutCreateWithoutTrainingPlanWeekInput, WorkoutUncheckedCreateWithoutTrainingPlanWeekInput> | WorkoutCreateWithoutTrainingPlanWeekInput[] | WorkoutUncheckedCreateWithoutTrainingPlanWeekInput[]
    connectOrCreate?: WorkoutCreateOrConnectWithoutTrainingPlanWeekInput | WorkoutCreateOrConnectWithoutTrainingPlanWeekInput[]
    upsert?: WorkoutUpsertWithWhereUniqueWithoutTrainingPlanWeekInput | WorkoutUpsertWithWhereUniqueWithoutTrainingPlanWeekInput[]
    createMany?: WorkoutCreateManyTrainingPlanWeekInputEnvelope
    set?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
    disconnect?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
    delete?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
    connect?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
    update?: WorkoutUpdateWithWhereUniqueWithoutTrainingPlanWeekInput | WorkoutUpdateWithWhereUniqueWithoutTrainingPlanWeekInput[]
    updateMany?: WorkoutUpdateManyWithWhereWithoutTrainingPlanWeekInput | WorkoutUpdateManyWithWhereWithoutTrainingPlanWeekInput[]
    deleteMany?: WorkoutScalarWhereInput | WorkoutScalarWhereInput[]
  }

  export type TrainingPlanWeekCreateNestedOneWithoutWorkoutsInput = {
    create?: XOR<TrainingPlanWeekCreateWithoutWorkoutsInput, TrainingPlanWeekUncheckedCreateWithoutWorkoutsInput>
    connectOrCreate?: TrainingPlanWeekCreateOrConnectWithoutWorkoutsInput
    connect?: TrainingPlanWeekWhereUniqueInput
  }

  export type TrainingPlanWeekUpdateOneRequiredWithoutWorkoutsNestedInput = {
    create?: XOR<TrainingPlanWeekCreateWithoutWorkoutsInput, TrainingPlanWeekUncheckedCreateWithoutWorkoutsInput>
    connectOrCreate?: TrainingPlanWeekCreateOrConnectWithoutWorkoutsInput
    upsert?: TrainingPlanWeekUpsertWithoutWorkoutsInput
    connect?: TrainingPlanWeekWhereUniqueInput
    update?: XOR<XOR<TrainingPlanWeekUpdateToOneWithWhereWithoutWorkoutsInput, TrainingPlanWeekUpdateWithoutWorkoutsInput>, TrainingPlanWeekUncheckedUpdateWithoutWorkoutsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type TrainingPlanWeekCreateWithoutTrainingPlanInput = {
    trainingPlanWeekId?: string
    weekNumber: number
    createdAt?: Date | string
    updatedAt?: Date | string
    workouts?: WorkoutCreateNestedManyWithoutTrainingPlanWeekInput
  }

  export type TrainingPlanWeekUncheckedCreateWithoutTrainingPlanInput = {
    trainingPlanWeekId?: string
    weekNumber: number
    createdAt?: Date | string
    updatedAt?: Date | string
    workouts?: WorkoutUncheckedCreateNestedManyWithoutTrainingPlanWeekInput
  }

  export type TrainingPlanWeekCreateOrConnectWithoutTrainingPlanInput = {
    where: TrainingPlanWeekWhereUniqueInput
    create: XOR<TrainingPlanWeekCreateWithoutTrainingPlanInput, TrainingPlanWeekUncheckedCreateWithoutTrainingPlanInput>
  }

  export type TrainingPlanWeekCreateManyTrainingPlanInputEnvelope = {
    data: TrainingPlanWeekCreateManyTrainingPlanInput | TrainingPlanWeekCreateManyTrainingPlanInput[]
    skipDuplicates?: boolean
  }

  export type TrainingPlanWeekUpsertWithWhereUniqueWithoutTrainingPlanInput = {
    where: TrainingPlanWeekWhereUniqueInput
    update: XOR<TrainingPlanWeekUpdateWithoutTrainingPlanInput, TrainingPlanWeekUncheckedUpdateWithoutTrainingPlanInput>
    create: XOR<TrainingPlanWeekCreateWithoutTrainingPlanInput, TrainingPlanWeekUncheckedCreateWithoutTrainingPlanInput>
  }

  export type TrainingPlanWeekUpdateWithWhereUniqueWithoutTrainingPlanInput = {
    where: TrainingPlanWeekWhereUniqueInput
    data: XOR<TrainingPlanWeekUpdateWithoutTrainingPlanInput, TrainingPlanWeekUncheckedUpdateWithoutTrainingPlanInput>
  }

  export type TrainingPlanWeekUpdateManyWithWhereWithoutTrainingPlanInput = {
    where: TrainingPlanWeekScalarWhereInput
    data: XOR<TrainingPlanWeekUpdateManyMutationInput, TrainingPlanWeekUncheckedUpdateManyWithoutTrainingPlanInput>
  }

  export type TrainingPlanWeekScalarWhereInput = {
    AND?: TrainingPlanWeekScalarWhereInput | TrainingPlanWeekScalarWhereInput[]
    OR?: TrainingPlanWeekScalarWhereInput[]
    NOT?: TrainingPlanWeekScalarWhereInput | TrainingPlanWeekScalarWhereInput[]
    trainingPlanWeekId?: StringFilter<"TrainingPlanWeek"> | string
    trainingPlanId?: StringFilter<"TrainingPlanWeek"> | string
    weekNumber?: IntFilter<"TrainingPlanWeek"> | number
    createdAt?: DateTimeFilter<"TrainingPlanWeek"> | Date | string
    updatedAt?: DateTimeFilter<"TrainingPlanWeek"> | Date | string
  }

  export type WorkoutCreateWithoutTrainingPlanWeekInput = {
    workoutId?: string
    name: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkoutUncheckedCreateWithoutTrainingPlanWeekInput = {
    workoutId?: string
    name: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkoutCreateOrConnectWithoutTrainingPlanWeekInput = {
    where: WorkoutWhereUniqueInput
    create: XOR<WorkoutCreateWithoutTrainingPlanWeekInput, WorkoutUncheckedCreateWithoutTrainingPlanWeekInput>
  }

  export type WorkoutCreateManyTrainingPlanWeekInputEnvelope = {
    data: WorkoutCreateManyTrainingPlanWeekInput | WorkoutCreateManyTrainingPlanWeekInput[]
    skipDuplicates?: boolean
  }

  export type TrainingPlanCreateWithoutTrainingPlanWeeksInput = {
    trainingPlanId?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TrainingPlanUncheckedCreateWithoutTrainingPlanWeeksInput = {
    trainingPlanId?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TrainingPlanCreateOrConnectWithoutTrainingPlanWeeksInput = {
    where: TrainingPlanWhereUniqueInput
    create: XOR<TrainingPlanCreateWithoutTrainingPlanWeeksInput, TrainingPlanUncheckedCreateWithoutTrainingPlanWeeksInput>
  }

  export type WorkoutUpsertWithWhereUniqueWithoutTrainingPlanWeekInput = {
    where: WorkoutWhereUniqueInput
    update: XOR<WorkoutUpdateWithoutTrainingPlanWeekInput, WorkoutUncheckedUpdateWithoutTrainingPlanWeekInput>
    create: XOR<WorkoutCreateWithoutTrainingPlanWeekInput, WorkoutUncheckedCreateWithoutTrainingPlanWeekInput>
  }

  export type WorkoutUpdateWithWhereUniqueWithoutTrainingPlanWeekInput = {
    where: WorkoutWhereUniqueInput
    data: XOR<WorkoutUpdateWithoutTrainingPlanWeekInput, WorkoutUncheckedUpdateWithoutTrainingPlanWeekInput>
  }

  export type WorkoutUpdateManyWithWhereWithoutTrainingPlanWeekInput = {
    where: WorkoutScalarWhereInput
    data: XOR<WorkoutUpdateManyMutationInput, WorkoutUncheckedUpdateManyWithoutTrainingPlanWeekInput>
  }

  export type WorkoutScalarWhereInput = {
    AND?: WorkoutScalarWhereInput | WorkoutScalarWhereInput[]
    OR?: WorkoutScalarWhereInput[]
    NOT?: WorkoutScalarWhereInput | WorkoutScalarWhereInput[]
    workoutId?: StringFilter<"Workout"> | string
    trainingPlanWeekId?: StringFilter<"Workout"> | string
    name?: StringFilter<"Workout"> | string
    order?: IntFilter<"Workout"> | number
    createdAt?: DateTimeFilter<"Workout"> | Date | string
    updatedAt?: DateTimeFilter<"Workout"> | Date | string
  }

  export type TrainingPlanUpsertWithoutTrainingPlanWeeksInput = {
    update: XOR<TrainingPlanUpdateWithoutTrainingPlanWeeksInput, TrainingPlanUncheckedUpdateWithoutTrainingPlanWeeksInput>
    create: XOR<TrainingPlanCreateWithoutTrainingPlanWeeksInput, TrainingPlanUncheckedCreateWithoutTrainingPlanWeeksInput>
    where?: TrainingPlanWhereInput
  }

  export type TrainingPlanUpdateToOneWithWhereWithoutTrainingPlanWeeksInput = {
    where?: TrainingPlanWhereInput
    data: XOR<TrainingPlanUpdateWithoutTrainingPlanWeeksInput, TrainingPlanUncheckedUpdateWithoutTrainingPlanWeeksInput>
  }

  export type TrainingPlanUpdateWithoutTrainingPlanWeeksInput = {
    trainingPlanId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrainingPlanUncheckedUpdateWithoutTrainingPlanWeeksInput = {
    trainingPlanId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrainingPlanWeekCreateWithoutWorkoutsInput = {
    trainingPlanWeekId?: string
    weekNumber: number
    createdAt?: Date | string
    updatedAt?: Date | string
    trainingPlan: TrainingPlanCreateNestedOneWithoutTrainingPlanWeeksInput
  }

  export type TrainingPlanWeekUncheckedCreateWithoutWorkoutsInput = {
    trainingPlanWeekId?: string
    trainingPlanId: string
    weekNumber: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TrainingPlanWeekCreateOrConnectWithoutWorkoutsInput = {
    where: TrainingPlanWeekWhereUniqueInput
    create: XOR<TrainingPlanWeekCreateWithoutWorkoutsInput, TrainingPlanWeekUncheckedCreateWithoutWorkoutsInput>
  }

  export type TrainingPlanWeekUpsertWithoutWorkoutsInput = {
    update: XOR<TrainingPlanWeekUpdateWithoutWorkoutsInput, TrainingPlanWeekUncheckedUpdateWithoutWorkoutsInput>
    create: XOR<TrainingPlanWeekCreateWithoutWorkoutsInput, TrainingPlanWeekUncheckedCreateWithoutWorkoutsInput>
    where?: TrainingPlanWeekWhereInput
  }

  export type TrainingPlanWeekUpdateToOneWithWhereWithoutWorkoutsInput = {
    where?: TrainingPlanWeekWhereInput
    data: XOR<TrainingPlanWeekUpdateWithoutWorkoutsInput, TrainingPlanWeekUncheckedUpdateWithoutWorkoutsInput>
  }

  export type TrainingPlanWeekUpdateWithoutWorkoutsInput = {
    trainingPlanWeekId?: StringFieldUpdateOperationsInput | string
    weekNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trainingPlan?: TrainingPlanUpdateOneRequiredWithoutTrainingPlanWeeksNestedInput
  }

  export type TrainingPlanWeekUncheckedUpdateWithoutWorkoutsInput = {
    trainingPlanWeekId?: StringFieldUpdateOperationsInput | string
    trainingPlanId?: StringFieldUpdateOperationsInput | string
    weekNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrainingPlanWeekCreateManyTrainingPlanInput = {
    trainingPlanWeekId?: string
    weekNumber: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TrainingPlanWeekUpdateWithoutTrainingPlanInput = {
    trainingPlanWeekId?: StringFieldUpdateOperationsInput | string
    weekNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workouts?: WorkoutUpdateManyWithoutTrainingPlanWeekNestedInput
  }

  export type TrainingPlanWeekUncheckedUpdateWithoutTrainingPlanInput = {
    trainingPlanWeekId?: StringFieldUpdateOperationsInput | string
    weekNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workouts?: WorkoutUncheckedUpdateManyWithoutTrainingPlanWeekNestedInput
  }

  export type TrainingPlanWeekUncheckedUpdateManyWithoutTrainingPlanInput = {
    trainingPlanWeekId?: StringFieldUpdateOperationsInput | string
    weekNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkoutCreateManyTrainingPlanWeekInput = {
    workoutId?: string
    name: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkoutUpdateWithoutTrainingPlanWeekInput = {
    workoutId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkoutUncheckedUpdateWithoutTrainingPlanWeekInput = {
    workoutId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkoutUncheckedUpdateManyWithoutTrainingPlanWeekInput = {
    workoutId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}