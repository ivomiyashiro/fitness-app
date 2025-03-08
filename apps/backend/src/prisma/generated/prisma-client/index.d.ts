
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
 * Model WorkoutExercise
 * 
 */
export type WorkoutExercise = $Result.DefaultSelection<Prisma.$WorkoutExercisePayload>
/**
 * Model Exercise
 * 
 */
export type Exercise = $Result.DefaultSelection<Prisma.$ExercisePayload>
/**
 * Model Set
 * 
 */
export type Set = $Result.DefaultSelection<Prisma.$SetPayload>

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

  /**
   * `prisma.workoutExercise`: Exposes CRUD operations for the **WorkoutExercise** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkoutExercises
    * const workoutExercises = await prisma.workoutExercise.findMany()
    * ```
    */
  get workoutExercise(): Prisma.WorkoutExerciseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.exercise`: Exposes CRUD operations for the **Exercise** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Exercises
    * const exercises = await prisma.exercise.findMany()
    * ```
    */
  get exercise(): Prisma.ExerciseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.set`: Exposes CRUD operations for the **Set** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sets
    * const sets = await prisma.set.findMany()
    * ```
    */
  get set(): Prisma.SetDelegate<ExtArgs, ClientOptions>;
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
    Workout: 'Workout',
    WorkoutExercise: 'WorkoutExercise',
    Exercise: 'Exercise',
    Set: 'Set'
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
      modelProps: "trainingPlan" | "trainingPlanWeek" | "workout" | "workoutExercise" | "exercise" | "set"
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
      WorkoutExercise: {
        payload: Prisma.$WorkoutExercisePayload<ExtArgs>
        fields: Prisma.WorkoutExerciseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkoutExerciseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutExercisePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkoutExerciseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutExercisePayload>
          }
          findFirst: {
            args: Prisma.WorkoutExerciseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutExercisePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkoutExerciseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutExercisePayload>
          }
          findMany: {
            args: Prisma.WorkoutExerciseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutExercisePayload>[]
          }
          create: {
            args: Prisma.WorkoutExerciseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutExercisePayload>
          }
          createMany: {
            args: Prisma.WorkoutExerciseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkoutExerciseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutExercisePayload>[]
          }
          delete: {
            args: Prisma.WorkoutExerciseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutExercisePayload>
          }
          update: {
            args: Prisma.WorkoutExerciseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutExercisePayload>
          }
          deleteMany: {
            args: Prisma.WorkoutExerciseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkoutExerciseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkoutExerciseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutExercisePayload>[]
          }
          upsert: {
            args: Prisma.WorkoutExerciseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutExercisePayload>
          }
          aggregate: {
            args: Prisma.WorkoutExerciseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkoutExercise>
          }
          groupBy: {
            args: Prisma.WorkoutExerciseGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkoutExerciseGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkoutExerciseCountArgs<ExtArgs>
            result: $Utils.Optional<WorkoutExerciseCountAggregateOutputType> | number
          }
        }
      }
      Exercise: {
        payload: Prisma.$ExercisePayload<ExtArgs>
        fields: Prisma.ExerciseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExerciseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExerciseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          findFirst: {
            args: Prisma.ExerciseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExerciseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          findMany: {
            args: Prisma.ExerciseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>[]
          }
          create: {
            args: Prisma.ExerciseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          createMany: {
            args: Prisma.ExerciseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExerciseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>[]
          }
          delete: {
            args: Prisma.ExerciseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          update: {
            args: Prisma.ExerciseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          deleteMany: {
            args: Prisma.ExerciseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExerciseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExerciseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>[]
          }
          upsert: {
            args: Prisma.ExerciseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          aggregate: {
            args: Prisma.ExerciseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExercise>
          }
          groupBy: {
            args: Prisma.ExerciseGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExerciseGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExerciseCountArgs<ExtArgs>
            result: $Utils.Optional<ExerciseCountAggregateOutputType> | number
          }
        }
      }
      Set: {
        payload: Prisma.$SetPayload<ExtArgs>
        fields: Prisma.SetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetPayload>
          }
          findFirst: {
            args: Prisma.SetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetPayload>
          }
          findMany: {
            args: Prisma.SetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetPayload>[]
          }
          create: {
            args: Prisma.SetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetPayload>
          }
          createMany: {
            args: Prisma.SetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetPayload>[]
          }
          delete: {
            args: Prisma.SetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetPayload>
          }
          update: {
            args: Prisma.SetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetPayload>
          }
          deleteMany: {
            args: Prisma.SetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetPayload>[]
          }
          upsert: {
            args: Prisma.SetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetPayload>
          }
          aggregate: {
            args: Prisma.SetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSet>
          }
          groupBy: {
            args: Prisma.SetGroupByArgs<ExtArgs>
            result: $Utils.Optional<SetGroupByOutputType>[]
          }
          count: {
            args: Prisma.SetCountArgs<ExtArgs>
            result: $Utils.Optional<SetCountAggregateOutputType> | number
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
    workoutExercise?: WorkoutExerciseOmit
    exercise?: ExerciseOmit
    set?: SetOmit
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
   * Count Type WorkoutCountOutputType
   */

  export type WorkoutCountOutputType = {
    workoutExercises: number
  }

  export type WorkoutCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workoutExercises?: boolean | WorkoutCountOutputTypeCountWorkoutExercisesArgs
  }

  // Custom InputTypes
  /**
   * WorkoutCountOutputType without action
   */
  export type WorkoutCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutCountOutputType
     */
    select?: WorkoutCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WorkoutCountOutputType without action
   */
  export type WorkoutCountOutputTypeCountWorkoutExercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkoutExerciseWhereInput
  }


  /**
   * Count Type WorkoutExerciseCountOutputType
   */

  export type WorkoutExerciseCountOutputType = {
    sets: number
  }

  export type WorkoutExerciseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sets?: boolean | WorkoutExerciseCountOutputTypeCountSetsArgs
  }

  // Custom InputTypes
  /**
   * WorkoutExerciseCountOutputType without action
   */
  export type WorkoutExerciseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExerciseCountOutputType
     */
    select?: WorkoutExerciseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WorkoutExerciseCountOutputType without action
   */
  export type WorkoutExerciseCountOutputTypeCountSetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SetWhereInput
  }


  /**
   * Count Type ExerciseCountOutputType
   */

  export type ExerciseCountOutputType = {
    workoutExercises: number
  }

  export type ExerciseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workoutExercises?: boolean | ExerciseCountOutputTypeCountWorkoutExercisesArgs
  }

  // Custom InputTypes
  /**
   * ExerciseCountOutputType without action
   */
  export type ExerciseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseCountOutputType
     */
    select?: ExerciseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ExerciseCountOutputType without action
   */
  export type ExerciseCountOutputTypeCountWorkoutExercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkoutExerciseWhereInput
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
    trainingPlan?: boolean | TrainingPlanDefaultArgs<ExtArgs>
    workouts?: boolean | TrainingPlanWeek$workoutsArgs<ExtArgs>
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
    trainingPlan?: boolean | TrainingPlanDefaultArgs<ExtArgs>
    workouts?: boolean | TrainingPlanWeek$workoutsArgs<ExtArgs>
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
      trainingPlan: Prisma.$TrainingPlanPayload<ExtArgs>
      workouts: Prisma.$WorkoutPayload<ExtArgs>[]
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
    trainingPlan<T extends TrainingPlanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TrainingPlanDefaultArgs<ExtArgs>>): Prisma__TrainingPlanClient<$Result.GetResult<Prisma.$TrainingPlanPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    workouts<T extends TrainingPlanWeek$workoutsArgs<ExtArgs> = {}>(args?: Subset<T, TrainingPlanWeek$workoutsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
    workoutExercises?: boolean | Workout$workoutExercisesArgs<ExtArgs>
    _count?: boolean | WorkoutCountOutputTypeDefaultArgs<ExtArgs>
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
    workoutExercises?: boolean | Workout$workoutExercisesArgs<ExtArgs>
    _count?: boolean | WorkoutCountOutputTypeDefaultArgs<ExtArgs>
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
      workoutExercises: Prisma.$WorkoutExercisePayload<ExtArgs>[]
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
    workoutExercises<T extends Workout$workoutExercisesArgs<ExtArgs> = {}>(args?: Subset<T, Workout$workoutExercisesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutExercisePayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
   * Workout.workoutExercises
   */
  export type Workout$workoutExercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExercise
     */
    select?: WorkoutExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutExercise
     */
    omit?: WorkoutExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutExerciseInclude<ExtArgs> | null
    where?: WorkoutExerciseWhereInput
    orderBy?: WorkoutExerciseOrderByWithRelationInput | WorkoutExerciseOrderByWithRelationInput[]
    cursor?: WorkoutExerciseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkoutExerciseScalarFieldEnum | WorkoutExerciseScalarFieldEnum[]
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
   * Model WorkoutExercise
   */

  export type AggregateWorkoutExercise = {
    _count: WorkoutExerciseCountAggregateOutputType | null
    _avg: WorkoutExerciseAvgAggregateOutputType | null
    _sum: WorkoutExerciseSumAggregateOutputType | null
    _min: WorkoutExerciseMinAggregateOutputType | null
    _max: WorkoutExerciseMaxAggregateOutputType | null
  }

  export type WorkoutExerciseAvgAggregateOutputType = {
    order: number | null
  }

  export type WorkoutExerciseSumAggregateOutputType = {
    order: number | null
  }

  export type WorkoutExerciseMinAggregateOutputType = {
    workoutExerciseId: string | null
    workoutId: string | null
    exerciseId: string | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkoutExerciseMaxAggregateOutputType = {
    workoutExerciseId: string | null
    workoutId: string | null
    exerciseId: string | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkoutExerciseCountAggregateOutputType = {
    workoutExerciseId: number
    workoutId: number
    exerciseId: number
    order: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WorkoutExerciseAvgAggregateInputType = {
    order?: true
  }

  export type WorkoutExerciseSumAggregateInputType = {
    order?: true
  }

  export type WorkoutExerciseMinAggregateInputType = {
    workoutExerciseId?: true
    workoutId?: true
    exerciseId?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkoutExerciseMaxAggregateInputType = {
    workoutExerciseId?: true
    workoutId?: true
    exerciseId?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkoutExerciseCountAggregateInputType = {
    workoutExerciseId?: true
    workoutId?: true
    exerciseId?: true
    order?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WorkoutExerciseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkoutExercise to aggregate.
     */
    where?: WorkoutExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutExercises to fetch.
     */
    orderBy?: WorkoutExerciseOrderByWithRelationInput | WorkoutExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkoutExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutExercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutExercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkoutExercises
    **/
    _count?: true | WorkoutExerciseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkoutExerciseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkoutExerciseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkoutExerciseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkoutExerciseMaxAggregateInputType
  }

  export type GetWorkoutExerciseAggregateType<T extends WorkoutExerciseAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkoutExercise]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkoutExercise[P]>
      : GetScalarType<T[P], AggregateWorkoutExercise[P]>
  }




  export type WorkoutExerciseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkoutExerciseWhereInput
    orderBy?: WorkoutExerciseOrderByWithAggregationInput | WorkoutExerciseOrderByWithAggregationInput[]
    by: WorkoutExerciseScalarFieldEnum[] | WorkoutExerciseScalarFieldEnum
    having?: WorkoutExerciseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkoutExerciseCountAggregateInputType | true
    _avg?: WorkoutExerciseAvgAggregateInputType
    _sum?: WorkoutExerciseSumAggregateInputType
    _min?: WorkoutExerciseMinAggregateInputType
    _max?: WorkoutExerciseMaxAggregateInputType
  }

  export type WorkoutExerciseGroupByOutputType = {
    workoutExerciseId: string
    workoutId: string
    exerciseId: string
    order: number
    createdAt: Date
    updatedAt: Date
    _count: WorkoutExerciseCountAggregateOutputType | null
    _avg: WorkoutExerciseAvgAggregateOutputType | null
    _sum: WorkoutExerciseSumAggregateOutputType | null
    _min: WorkoutExerciseMinAggregateOutputType | null
    _max: WorkoutExerciseMaxAggregateOutputType | null
  }

  type GetWorkoutExerciseGroupByPayload<T extends WorkoutExerciseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkoutExerciseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkoutExerciseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkoutExerciseGroupByOutputType[P]>
            : GetScalarType<T[P], WorkoutExerciseGroupByOutputType[P]>
        }
      >
    >


  export type WorkoutExerciseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    workoutExerciseId?: boolean
    workoutId?: boolean
    exerciseId?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workout?: boolean | WorkoutDefaultArgs<ExtArgs>
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
    sets?: boolean | WorkoutExercise$setsArgs<ExtArgs>
    _count?: boolean | WorkoutExerciseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workoutExercise"]>

  export type WorkoutExerciseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    workoutExerciseId?: boolean
    workoutId?: boolean
    exerciseId?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workout?: boolean | WorkoutDefaultArgs<ExtArgs>
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workoutExercise"]>

  export type WorkoutExerciseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    workoutExerciseId?: boolean
    workoutId?: boolean
    exerciseId?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workout?: boolean | WorkoutDefaultArgs<ExtArgs>
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workoutExercise"]>

  export type WorkoutExerciseSelectScalar = {
    workoutExerciseId?: boolean
    workoutId?: boolean
    exerciseId?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WorkoutExerciseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"workoutExerciseId" | "workoutId" | "exerciseId" | "order" | "createdAt" | "updatedAt", ExtArgs["result"]["workoutExercise"]>
  export type WorkoutExerciseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workout?: boolean | WorkoutDefaultArgs<ExtArgs>
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
    sets?: boolean | WorkoutExercise$setsArgs<ExtArgs>
    _count?: boolean | WorkoutExerciseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WorkoutExerciseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workout?: boolean | WorkoutDefaultArgs<ExtArgs>
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
  }
  export type WorkoutExerciseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workout?: boolean | WorkoutDefaultArgs<ExtArgs>
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
  }

  export type $WorkoutExercisePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkoutExercise"
    objects: {
      workout: Prisma.$WorkoutPayload<ExtArgs>
      exercise: Prisma.$ExercisePayload<ExtArgs>
      sets: Prisma.$SetPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      workoutExerciseId: string
      workoutId: string
      exerciseId: string
      order: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["workoutExercise"]>
    composites: {}
  }

  type WorkoutExerciseGetPayload<S extends boolean | null | undefined | WorkoutExerciseDefaultArgs> = $Result.GetResult<Prisma.$WorkoutExercisePayload, S>

  type WorkoutExerciseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkoutExerciseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkoutExerciseCountAggregateInputType | true
    }

  export interface WorkoutExerciseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkoutExercise'], meta: { name: 'WorkoutExercise' } }
    /**
     * Find zero or one WorkoutExercise that matches the filter.
     * @param {WorkoutExerciseFindUniqueArgs} args - Arguments to find a WorkoutExercise
     * @example
     * // Get one WorkoutExercise
     * const workoutExercise = await prisma.workoutExercise.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkoutExerciseFindUniqueArgs>(args: SelectSubset<T, WorkoutExerciseFindUniqueArgs<ExtArgs>>): Prisma__WorkoutExerciseClient<$Result.GetResult<Prisma.$WorkoutExercisePayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one WorkoutExercise that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkoutExerciseFindUniqueOrThrowArgs} args - Arguments to find a WorkoutExercise
     * @example
     * // Get one WorkoutExercise
     * const workoutExercise = await prisma.workoutExercise.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkoutExerciseFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkoutExerciseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkoutExerciseClient<$Result.GetResult<Prisma.$WorkoutExercisePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first WorkoutExercise that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutExerciseFindFirstArgs} args - Arguments to find a WorkoutExercise
     * @example
     * // Get one WorkoutExercise
     * const workoutExercise = await prisma.workoutExercise.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkoutExerciseFindFirstArgs>(args?: SelectSubset<T, WorkoutExerciseFindFirstArgs<ExtArgs>>): Prisma__WorkoutExerciseClient<$Result.GetResult<Prisma.$WorkoutExercisePayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first WorkoutExercise that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutExerciseFindFirstOrThrowArgs} args - Arguments to find a WorkoutExercise
     * @example
     * // Get one WorkoutExercise
     * const workoutExercise = await prisma.workoutExercise.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkoutExerciseFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkoutExerciseFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkoutExerciseClient<$Result.GetResult<Prisma.$WorkoutExercisePayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more WorkoutExercises that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutExerciseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkoutExercises
     * const workoutExercises = await prisma.workoutExercise.findMany()
     * 
     * // Get first 10 WorkoutExercises
     * const workoutExercises = await prisma.workoutExercise.findMany({ take: 10 })
     * 
     * // Only select the `workoutExerciseId`
     * const workoutExerciseWithWorkoutExerciseIdOnly = await prisma.workoutExercise.findMany({ select: { workoutExerciseId: true } })
     * 
     */
    findMany<T extends WorkoutExerciseFindManyArgs>(args?: SelectSubset<T, WorkoutExerciseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutExercisePayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a WorkoutExercise.
     * @param {WorkoutExerciseCreateArgs} args - Arguments to create a WorkoutExercise.
     * @example
     * // Create one WorkoutExercise
     * const WorkoutExercise = await prisma.workoutExercise.create({
     *   data: {
     *     // ... data to create a WorkoutExercise
     *   }
     * })
     * 
     */
    create<T extends WorkoutExerciseCreateArgs>(args: SelectSubset<T, WorkoutExerciseCreateArgs<ExtArgs>>): Prisma__WorkoutExerciseClient<$Result.GetResult<Prisma.$WorkoutExercisePayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many WorkoutExercises.
     * @param {WorkoutExerciseCreateManyArgs} args - Arguments to create many WorkoutExercises.
     * @example
     * // Create many WorkoutExercises
     * const workoutExercise = await prisma.workoutExercise.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkoutExerciseCreateManyArgs>(args?: SelectSubset<T, WorkoutExerciseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorkoutExercises and returns the data saved in the database.
     * @param {WorkoutExerciseCreateManyAndReturnArgs} args - Arguments to create many WorkoutExercises.
     * @example
     * // Create many WorkoutExercises
     * const workoutExercise = await prisma.workoutExercise.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorkoutExercises and only return the `workoutExerciseId`
     * const workoutExerciseWithWorkoutExerciseIdOnly = await prisma.workoutExercise.createManyAndReturn({
     *   select: { workoutExerciseId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkoutExerciseCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkoutExerciseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutExercisePayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a WorkoutExercise.
     * @param {WorkoutExerciseDeleteArgs} args - Arguments to delete one WorkoutExercise.
     * @example
     * // Delete one WorkoutExercise
     * const WorkoutExercise = await prisma.workoutExercise.delete({
     *   where: {
     *     // ... filter to delete one WorkoutExercise
     *   }
     * })
     * 
     */
    delete<T extends WorkoutExerciseDeleteArgs>(args: SelectSubset<T, WorkoutExerciseDeleteArgs<ExtArgs>>): Prisma__WorkoutExerciseClient<$Result.GetResult<Prisma.$WorkoutExercisePayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one WorkoutExercise.
     * @param {WorkoutExerciseUpdateArgs} args - Arguments to update one WorkoutExercise.
     * @example
     * // Update one WorkoutExercise
     * const workoutExercise = await prisma.workoutExercise.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkoutExerciseUpdateArgs>(args: SelectSubset<T, WorkoutExerciseUpdateArgs<ExtArgs>>): Prisma__WorkoutExerciseClient<$Result.GetResult<Prisma.$WorkoutExercisePayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more WorkoutExercises.
     * @param {WorkoutExerciseDeleteManyArgs} args - Arguments to filter WorkoutExercises to delete.
     * @example
     * // Delete a few WorkoutExercises
     * const { count } = await prisma.workoutExercise.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkoutExerciseDeleteManyArgs>(args?: SelectSubset<T, WorkoutExerciseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkoutExercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutExerciseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkoutExercises
     * const workoutExercise = await prisma.workoutExercise.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkoutExerciseUpdateManyArgs>(args: SelectSubset<T, WorkoutExerciseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkoutExercises and returns the data updated in the database.
     * @param {WorkoutExerciseUpdateManyAndReturnArgs} args - Arguments to update many WorkoutExercises.
     * @example
     * // Update many WorkoutExercises
     * const workoutExercise = await prisma.workoutExercise.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WorkoutExercises and only return the `workoutExerciseId`
     * const workoutExerciseWithWorkoutExerciseIdOnly = await prisma.workoutExercise.updateManyAndReturn({
     *   select: { workoutExerciseId: true },
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
    updateManyAndReturn<T extends WorkoutExerciseUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkoutExerciseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutExercisePayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one WorkoutExercise.
     * @param {WorkoutExerciseUpsertArgs} args - Arguments to update or create a WorkoutExercise.
     * @example
     * // Update or create a WorkoutExercise
     * const workoutExercise = await prisma.workoutExercise.upsert({
     *   create: {
     *     // ... data to create a WorkoutExercise
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkoutExercise we want to update
     *   }
     * })
     */
    upsert<T extends WorkoutExerciseUpsertArgs>(args: SelectSubset<T, WorkoutExerciseUpsertArgs<ExtArgs>>): Prisma__WorkoutExerciseClient<$Result.GetResult<Prisma.$WorkoutExercisePayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of WorkoutExercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutExerciseCountArgs} args - Arguments to filter WorkoutExercises to count.
     * @example
     * // Count the number of WorkoutExercises
     * const count = await prisma.workoutExercise.count({
     *   where: {
     *     // ... the filter for the WorkoutExercises we want to count
     *   }
     * })
    **/
    count<T extends WorkoutExerciseCountArgs>(
      args?: Subset<T, WorkoutExerciseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkoutExerciseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkoutExercise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutExerciseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WorkoutExerciseAggregateArgs>(args: Subset<T, WorkoutExerciseAggregateArgs>): Prisma.PrismaPromise<GetWorkoutExerciseAggregateType<T>>

    /**
     * Group by WorkoutExercise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutExerciseGroupByArgs} args - Group by arguments.
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
      T extends WorkoutExerciseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkoutExerciseGroupByArgs['orderBy'] }
        : { orderBy?: WorkoutExerciseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WorkoutExerciseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkoutExerciseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkoutExercise model
   */
  readonly fields: WorkoutExerciseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkoutExercise.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkoutExerciseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workout<T extends WorkoutDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkoutDefaultArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    exercise<T extends ExerciseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExerciseDefaultArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    sets<T extends WorkoutExercise$setsArgs<ExtArgs> = {}>(args?: Subset<T, WorkoutExercise$setsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SetPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
   * Fields of the WorkoutExercise model
   */ 
  interface WorkoutExerciseFieldRefs {
    readonly workoutExerciseId: FieldRef<"WorkoutExercise", 'String'>
    readonly workoutId: FieldRef<"WorkoutExercise", 'String'>
    readonly exerciseId: FieldRef<"WorkoutExercise", 'String'>
    readonly order: FieldRef<"WorkoutExercise", 'Int'>
    readonly createdAt: FieldRef<"WorkoutExercise", 'DateTime'>
    readonly updatedAt: FieldRef<"WorkoutExercise", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WorkoutExercise findUnique
   */
  export type WorkoutExerciseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExercise
     */
    select?: WorkoutExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutExercise
     */
    omit?: WorkoutExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutExerciseInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutExercise to fetch.
     */
    where: WorkoutExerciseWhereUniqueInput
  }

  /**
   * WorkoutExercise findUniqueOrThrow
   */
  export type WorkoutExerciseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExercise
     */
    select?: WorkoutExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutExercise
     */
    omit?: WorkoutExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutExerciseInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutExercise to fetch.
     */
    where: WorkoutExerciseWhereUniqueInput
  }

  /**
   * WorkoutExercise findFirst
   */
  export type WorkoutExerciseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExercise
     */
    select?: WorkoutExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutExercise
     */
    omit?: WorkoutExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutExerciseInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutExercise to fetch.
     */
    where?: WorkoutExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutExercises to fetch.
     */
    orderBy?: WorkoutExerciseOrderByWithRelationInput | WorkoutExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkoutExercises.
     */
    cursor?: WorkoutExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutExercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutExercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkoutExercises.
     */
    distinct?: WorkoutExerciseScalarFieldEnum | WorkoutExerciseScalarFieldEnum[]
  }

  /**
   * WorkoutExercise findFirstOrThrow
   */
  export type WorkoutExerciseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExercise
     */
    select?: WorkoutExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutExercise
     */
    omit?: WorkoutExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutExerciseInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutExercise to fetch.
     */
    where?: WorkoutExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutExercises to fetch.
     */
    orderBy?: WorkoutExerciseOrderByWithRelationInput | WorkoutExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkoutExercises.
     */
    cursor?: WorkoutExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutExercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutExercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkoutExercises.
     */
    distinct?: WorkoutExerciseScalarFieldEnum | WorkoutExerciseScalarFieldEnum[]
  }

  /**
   * WorkoutExercise findMany
   */
  export type WorkoutExerciseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExercise
     */
    select?: WorkoutExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutExercise
     */
    omit?: WorkoutExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutExerciseInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutExercises to fetch.
     */
    where?: WorkoutExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutExercises to fetch.
     */
    orderBy?: WorkoutExerciseOrderByWithRelationInput | WorkoutExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkoutExercises.
     */
    cursor?: WorkoutExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutExercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutExercises.
     */
    skip?: number
    distinct?: WorkoutExerciseScalarFieldEnum | WorkoutExerciseScalarFieldEnum[]
  }

  /**
   * WorkoutExercise create
   */
  export type WorkoutExerciseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExercise
     */
    select?: WorkoutExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutExercise
     */
    omit?: WorkoutExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutExerciseInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkoutExercise.
     */
    data: XOR<WorkoutExerciseCreateInput, WorkoutExerciseUncheckedCreateInput>
  }

  /**
   * WorkoutExercise createMany
   */
  export type WorkoutExerciseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkoutExercises.
     */
    data: WorkoutExerciseCreateManyInput | WorkoutExerciseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkoutExercise createManyAndReturn
   */
  export type WorkoutExerciseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExercise
     */
    select?: WorkoutExerciseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutExercise
     */
    omit?: WorkoutExerciseOmit<ExtArgs> | null
    /**
     * The data used to create many WorkoutExercises.
     */
    data: WorkoutExerciseCreateManyInput | WorkoutExerciseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutExerciseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkoutExercise update
   */
  export type WorkoutExerciseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExercise
     */
    select?: WorkoutExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutExercise
     */
    omit?: WorkoutExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutExerciseInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkoutExercise.
     */
    data: XOR<WorkoutExerciseUpdateInput, WorkoutExerciseUncheckedUpdateInput>
    /**
     * Choose, which WorkoutExercise to update.
     */
    where: WorkoutExerciseWhereUniqueInput
  }

  /**
   * WorkoutExercise updateMany
   */
  export type WorkoutExerciseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkoutExercises.
     */
    data: XOR<WorkoutExerciseUpdateManyMutationInput, WorkoutExerciseUncheckedUpdateManyInput>
    /**
     * Filter which WorkoutExercises to update
     */
    where?: WorkoutExerciseWhereInput
    /**
     * Limit how many WorkoutExercises to update.
     */
    limit?: number
  }

  /**
   * WorkoutExercise updateManyAndReturn
   */
  export type WorkoutExerciseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExercise
     */
    select?: WorkoutExerciseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutExercise
     */
    omit?: WorkoutExerciseOmit<ExtArgs> | null
    /**
     * The data used to update WorkoutExercises.
     */
    data: XOR<WorkoutExerciseUpdateManyMutationInput, WorkoutExerciseUncheckedUpdateManyInput>
    /**
     * Filter which WorkoutExercises to update
     */
    where?: WorkoutExerciseWhereInput
    /**
     * Limit how many WorkoutExercises to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutExerciseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkoutExercise upsert
   */
  export type WorkoutExerciseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExercise
     */
    select?: WorkoutExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutExercise
     */
    omit?: WorkoutExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutExerciseInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkoutExercise to update in case it exists.
     */
    where: WorkoutExerciseWhereUniqueInput
    /**
     * In case the WorkoutExercise found by the `where` argument doesn't exist, create a new WorkoutExercise with this data.
     */
    create: XOR<WorkoutExerciseCreateInput, WorkoutExerciseUncheckedCreateInput>
    /**
     * In case the WorkoutExercise was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkoutExerciseUpdateInput, WorkoutExerciseUncheckedUpdateInput>
  }

  /**
   * WorkoutExercise delete
   */
  export type WorkoutExerciseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExercise
     */
    select?: WorkoutExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutExercise
     */
    omit?: WorkoutExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutExerciseInclude<ExtArgs> | null
    /**
     * Filter which WorkoutExercise to delete.
     */
    where: WorkoutExerciseWhereUniqueInput
  }

  /**
   * WorkoutExercise deleteMany
   */
  export type WorkoutExerciseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkoutExercises to delete
     */
    where?: WorkoutExerciseWhereInput
    /**
     * Limit how many WorkoutExercises to delete.
     */
    limit?: number
  }

  /**
   * WorkoutExercise.sets
   */
  export type WorkoutExercise$setsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Set
     */
    select?: SetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Set
     */
    omit?: SetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetInclude<ExtArgs> | null
    where?: SetWhereInput
    orderBy?: SetOrderByWithRelationInput | SetOrderByWithRelationInput[]
    cursor?: SetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SetScalarFieldEnum | SetScalarFieldEnum[]
  }

  /**
   * WorkoutExercise without action
   */
  export type WorkoutExerciseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExercise
     */
    select?: WorkoutExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutExercise
     */
    omit?: WorkoutExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutExerciseInclude<ExtArgs> | null
  }


  /**
   * Model Exercise
   */

  export type AggregateExercise = {
    _count: ExerciseCountAggregateOutputType | null
    _min: ExerciseMinAggregateOutputType | null
    _max: ExerciseMaxAggregateOutputType | null
  }

  export type ExerciseMinAggregateOutputType = {
    exerciseId: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ExerciseMaxAggregateOutputType = {
    exerciseId: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ExerciseCountAggregateOutputType = {
    exerciseId: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ExerciseMinAggregateInputType = {
    exerciseId?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ExerciseMaxAggregateInputType = {
    exerciseId?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ExerciseCountAggregateInputType = {
    exerciseId?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ExerciseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Exercise to aggregate.
     */
    where?: ExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exercises to fetch.
     */
    orderBy?: ExerciseOrderByWithRelationInput | ExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Exercises
    **/
    _count?: true | ExerciseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExerciseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExerciseMaxAggregateInputType
  }

  export type GetExerciseAggregateType<T extends ExerciseAggregateArgs> = {
        [P in keyof T & keyof AggregateExercise]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExercise[P]>
      : GetScalarType<T[P], AggregateExercise[P]>
  }




  export type ExerciseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExerciseWhereInput
    orderBy?: ExerciseOrderByWithAggregationInput | ExerciseOrderByWithAggregationInput[]
    by: ExerciseScalarFieldEnum[] | ExerciseScalarFieldEnum
    having?: ExerciseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExerciseCountAggregateInputType | true
    _min?: ExerciseMinAggregateInputType
    _max?: ExerciseMaxAggregateInputType
  }

  export type ExerciseGroupByOutputType = {
    exerciseId: string
    name: string
    createdAt: Date
    updatedAt: Date
    _count: ExerciseCountAggregateOutputType | null
    _min: ExerciseMinAggregateOutputType | null
    _max: ExerciseMaxAggregateOutputType | null
  }

  type GetExerciseGroupByPayload<T extends ExerciseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExerciseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExerciseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExerciseGroupByOutputType[P]>
            : GetScalarType<T[P], ExerciseGroupByOutputType[P]>
        }
      >
    >


  export type ExerciseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    exerciseId?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workoutExercises?: boolean | Exercise$workoutExercisesArgs<ExtArgs>
    _count?: boolean | ExerciseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exercise"]>

  export type ExerciseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    exerciseId?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["exercise"]>

  export type ExerciseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    exerciseId?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["exercise"]>

  export type ExerciseSelectScalar = {
    exerciseId?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ExerciseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"exerciseId" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["exercise"]>
  export type ExerciseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workoutExercises?: boolean | Exercise$workoutExercisesArgs<ExtArgs>
    _count?: boolean | ExerciseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ExerciseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ExerciseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ExercisePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Exercise"
    objects: {
      workoutExercises: Prisma.$WorkoutExercisePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      exerciseId: string
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["exercise"]>
    composites: {}
  }

  type ExerciseGetPayload<S extends boolean | null | undefined | ExerciseDefaultArgs> = $Result.GetResult<Prisma.$ExercisePayload, S>

  type ExerciseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExerciseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExerciseCountAggregateInputType | true
    }

  export interface ExerciseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Exercise'], meta: { name: 'Exercise' } }
    /**
     * Find zero or one Exercise that matches the filter.
     * @param {ExerciseFindUniqueArgs} args - Arguments to find a Exercise
     * @example
     * // Get one Exercise
     * const exercise = await prisma.exercise.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExerciseFindUniqueArgs>(args: SelectSubset<T, ExerciseFindUniqueArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Exercise that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExerciseFindUniqueOrThrowArgs} args - Arguments to find a Exercise
     * @example
     * // Get one Exercise
     * const exercise = await prisma.exercise.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExerciseFindUniqueOrThrowArgs>(args: SelectSubset<T, ExerciseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Exercise that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseFindFirstArgs} args - Arguments to find a Exercise
     * @example
     * // Get one Exercise
     * const exercise = await prisma.exercise.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExerciseFindFirstArgs>(args?: SelectSubset<T, ExerciseFindFirstArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Exercise that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseFindFirstOrThrowArgs} args - Arguments to find a Exercise
     * @example
     * // Get one Exercise
     * const exercise = await prisma.exercise.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExerciseFindFirstOrThrowArgs>(args?: SelectSubset<T, ExerciseFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Exercises that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Exercises
     * const exercises = await prisma.exercise.findMany()
     * 
     * // Get first 10 Exercises
     * const exercises = await prisma.exercise.findMany({ take: 10 })
     * 
     * // Only select the `exerciseId`
     * const exerciseWithExerciseIdOnly = await prisma.exercise.findMany({ select: { exerciseId: true } })
     * 
     */
    findMany<T extends ExerciseFindManyArgs>(args?: SelectSubset<T, ExerciseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Exercise.
     * @param {ExerciseCreateArgs} args - Arguments to create a Exercise.
     * @example
     * // Create one Exercise
     * const Exercise = await prisma.exercise.create({
     *   data: {
     *     // ... data to create a Exercise
     *   }
     * })
     * 
     */
    create<T extends ExerciseCreateArgs>(args: SelectSubset<T, ExerciseCreateArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Exercises.
     * @param {ExerciseCreateManyArgs} args - Arguments to create many Exercises.
     * @example
     * // Create many Exercises
     * const exercise = await prisma.exercise.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExerciseCreateManyArgs>(args?: SelectSubset<T, ExerciseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Exercises and returns the data saved in the database.
     * @param {ExerciseCreateManyAndReturnArgs} args - Arguments to create many Exercises.
     * @example
     * // Create many Exercises
     * const exercise = await prisma.exercise.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Exercises and only return the `exerciseId`
     * const exerciseWithExerciseIdOnly = await prisma.exercise.createManyAndReturn({
     *   select: { exerciseId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExerciseCreateManyAndReturnArgs>(args?: SelectSubset<T, ExerciseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Exercise.
     * @param {ExerciseDeleteArgs} args - Arguments to delete one Exercise.
     * @example
     * // Delete one Exercise
     * const Exercise = await prisma.exercise.delete({
     *   where: {
     *     // ... filter to delete one Exercise
     *   }
     * })
     * 
     */
    delete<T extends ExerciseDeleteArgs>(args: SelectSubset<T, ExerciseDeleteArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Exercise.
     * @param {ExerciseUpdateArgs} args - Arguments to update one Exercise.
     * @example
     * // Update one Exercise
     * const exercise = await prisma.exercise.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExerciseUpdateArgs>(args: SelectSubset<T, ExerciseUpdateArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Exercises.
     * @param {ExerciseDeleteManyArgs} args - Arguments to filter Exercises to delete.
     * @example
     * // Delete a few Exercises
     * const { count } = await prisma.exercise.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExerciseDeleteManyArgs>(args?: SelectSubset<T, ExerciseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Exercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Exercises
     * const exercise = await prisma.exercise.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExerciseUpdateManyArgs>(args: SelectSubset<T, ExerciseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Exercises and returns the data updated in the database.
     * @param {ExerciseUpdateManyAndReturnArgs} args - Arguments to update many Exercises.
     * @example
     * // Update many Exercises
     * const exercise = await prisma.exercise.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Exercises and only return the `exerciseId`
     * const exerciseWithExerciseIdOnly = await prisma.exercise.updateManyAndReturn({
     *   select: { exerciseId: true },
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
    updateManyAndReturn<T extends ExerciseUpdateManyAndReturnArgs>(args: SelectSubset<T, ExerciseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Exercise.
     * @param {ExerciseUpsertArgs} args - Arguments to update or create a Exercise.
     * @example
     * // Update or create a Exercise
     * const exercise = await prisma.exercise.upsert({
     *   create: {
     *     // ... data to create a Exercise
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Exercise we want to update
     *   }
     * })
     */
    upsert<T extends ExerciseUpsertArgs>(args: SelectSubset<T, ExerciseUpsertArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Exercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseCountArgs} args - Arguments to filter Exercises to count.
     * @example
     * // Count the number of Exercises
     * const count = await prisma.exercise.count({
     *   where: {
     *     // ... the filter for the Exercises we want to count
     *   }
     * })
    **/
    count<T extends ExerciseCountArgs>(
      args?: Subset<T, ExerciseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExerciseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Exercise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExerciseAggregateArgs>(args: Subset<T, ExerciseAggregateArgs>): Prisma.PrismaPromise<GetExerciseAggregateType<T>>

    /**
     * Group by Exercise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseGroupByArgs} args - Group by arguments.
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
      T extends ExerciseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExerciseGroupByArgs['orderBy'] }
        : { orderBy?: ExerciseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExerciseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExerciseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Exercise model
   */
  readonly fields: ExerciseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Exercise.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExerciseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workoutExercises<T extends Exercise$workoutExercisesArgs<ExtArgs> = {}>(args?: Subset<T, Exercise$workoutExercisesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutExercisePayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
   * Fields of the Exercise model
   */ 
  interface ExerciseFieldRefs {
    readonly exerciseId: FieldRef<"Exercise", 'String'>
    readonly name: FieldRef<"Exercise", 'String'>
    readonly createdAt: FieldRef<"Exercise", 'DateTime'>
    readonly updatedAt: FieldRef<"Exercise", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Exercise findUnique
   */
  export type ExerciseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter, which Exercise to fetch.
     */
    where: ExerciseWhereUniqueInput
  }

  /**
   * Exercise findUniqueOrThrow
   */
  export type ExerciseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter, which Exercise to fetch.
     */
    where: ExerciseWhereUniqueInput
  }

  /**
   * Exercise findFirst
   */
  export type ExerciseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter, which Exercise to fetch.
     */
    where?: ExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exercises to fetch.
     */
    orderBy?: ExerciseOrderByWithRelationInput | ExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Exercises.
     */
    cursor?: ExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Exercises.
     */
    distinct?: ExerciseScalarFieldEnum | ExerciseScalarFieldEnum[]
  }

  /**
   * Exercise findFirstOrThrow
   */
  export type ExerciseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter, which Exercise to fetch.
     */
    where?: ExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exercises to fetch.
     */
    orderBy?: ExerciseOrderByWithRelationInput | ExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Exercises.
     */
    cursor?: ExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Exercises.
     */
    distinct?: ExerciseScalarFieldEnum | ExerciseScalarFieldEnum[]
  }

  /**
   * Exercise findMany
   */
  export type ExerciseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter, which Exercises to fetch.
     */
    where?: ExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exercises to fetch.
     */
    orderBy?: ExerciseOrderByWithRelationInput | ExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Exercises.
     */
    cursor?: ExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exercises.
     */
    skip?: number
    distinct?: ExerciseScalarFieldEnum | ExerciseScalarFieldEnum[]
  }

  /**
   * Exercise create
   */
  export type ExerciseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * The data needed to create a Exercise.
     */
    data: XOR<ExerciseCreateInput, ExerciseUncheckedCreateInput>
  }

  /**
   * Exercise createMany
   */
  export type ExerciseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Exercises.
     */
    data: ExerciseCreateManyInput | ExerciseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Exercise createManyAndReturn
   */
  export type ExerciseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * The data used to create many Exercises.
     */
    data: ExerciseCreateManyInput | ExerciseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Exercise update
   */
  export type ExerciseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * The data needed to update a Exercise.
     */
    data: XOR<ExerciseUpdateInput, ExerciseUncheckedUpdateInput>
    /**
     * Choose, which Exercise to update.
     */
    where: ExerciseWhereUniqueInput
  }

  /**
   * Exercise updateMany
   */
  export type ExerciseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Exercises.
     */
    data: XOR<ExerciseUpdateManyMutationInput, ExerciseUncheckedUpdateManyInput>
    /**
     * Filter which Exercises to update
     */
    where?: ExerciseWhereInput
    /**
     * Limit how many Exercises to update.
     */
    limit?: number
  }

  /**
   * Exercise updateManyAndReturn
   */
  export type ExerciseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * The data used to update Exercises.
     */
    data: XOR<ExerciseUpdateManyMutationInput, ExerciseUncheckedUpdateManyInput>
    /**
     * Filter which Exercises to update
     */
    where?: ExerciseWhereInput
    /**
     * Limit how many Exercises to update.
     */
    limit?: number
  }

  /**
   * Exercise upsert
   */
  export type ExerciseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * The filter to search for the Exercise to update in case it exists.
     */
    where: ExerciseWhereUniqueInput
    /**
     * In case the Exercise found by the `where` argument doesn't exist, create a new Exercise with this data.
     */
    create: XOR<ExerciseCreateInput, ExerciseUncheckedCreateInput>
    /**
     * In case the Exercise was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExerciseUpdateInput, ExerciseUncheckedUpdateInput>
  }

  /**
   * Exercise delete
   */
  export type ExerciseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter which Exercise to delete.
     */
    where: ExerciseWhereUniqueInput
  }

  /**
   * Exercise deleteMany
   */
  export type ExerciseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Exercises to delete
     */
    where?: ExerciseWhereInput
    /**
     * Limit how many Exercises to delete.
     */
    limit?: number
  }

  /**
   * Exercise.workoutExercises
   */
  export type Exercise$workoutExercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExercise
     */
    select?: WorkoutExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutExercise
     */
    omit?: WorkoutExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutExerciseInclude<ExtArgs> | null
    where?: WorkoutExerciseWhereInput
    orderBy?: WorkoutExerciseOrderByWithRelationInput | WorkoutExerciseOrderByWithRelationInput[]
    cursor?: WorkoutExerciseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkoutExerciseScalarFieldEnum | WorkoutExerciseScalarFieldEnum[]
  }

  /**
   * Exercise without action
   */
  export type ExerciseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
  }


  /**
   * Model Set
   */

  export type AggregateSet = {
    _count: SetCountAggregateOutputType | null
    _avg: SetAvgAggregateOutputType | null
    _sum: SetSumAggregateOutputType | null
    _min: SetMinAggregateOutputType | null
    _max: SetMaxAggregateOutputType | null
  }

  export type SetAvgAggregateOutputType = {
    reps: number | null
    rir: number | null
    order: number | null
  }

  export type SetSumAggregateOutputType = {
    reps: number | null
    rir: number | null
    order: number | null
  }

  export type SetMinAggregateOutputType = {
    setId: string | null
    workoutExerciseId: string | null
    reps: number | null
    rir: number | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SetMaxAggregateOutputType = {
    setId: string | null
    workoutExerciseId: string | null
    reps: number | null
    rir: number | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SetCountAggregateOutputType = {
    setId: number
    workoutExerciseId: number
    reps: number
    rir: number
    order: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SetAvgAggregateInputType = {
    reps?: true
    rir?: true
    order?: true
  }

  export type SetSumAggregateInputType = {
    reps?: true
    rir?: true
    order?: true
  }

  export type SetMinAggregateInputType = {
    setId?: true
    workoutExerciseId?: true
    reps?: true
    rir?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SetMaxAggregateInputType = {
    setId?: true
    workoutExerciseId?: true
    reps?: true
    rir?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SetCountAggregateInputType = {
    setId?: true
    workoutExerciseId?: true
    reps?: true
    rir?: true
    order?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Set to aggregate.
     */
    where?: SetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sets to fetch.
     */
    orderBy?: SetOrderByWithRelationInput | SetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sets
    **/
    _count?: true | SetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SetMaxAggregateInputType
  }

  export type GetSetAggregateType<T extends SetAggregateArgs> = {
        [P in keyof T & keyof AggregateSet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSet[P]>
      : GetScalarType<T[P], AggregateSet[P]>
  }




  export type SetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SetWhereInput
    orderBy?: SetOrderByWithAggregationInput | SetOrderByWithAggregationInput[]
    by: SetScalarFieldEnum[] | SetScalarFieldEnum
    having?: SetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SetCountAggregateInputType | true
    _avg?: SetAvgAggregateInputType
    _sum?: SetSumAggregateInputType
    _min?: SetMinAggregateInputType
    _max?: SetMaxAggregateInputType
  }

  export type SetGroupByOutputType = {
    setId: string
    workoutExerciseId: string
    reps: number
    rir: number
    order: number
    createdAt: Date
    updatedAt: Date
    _count: SetCountAggregateOutputType | null
    _avg: SetAvgAggregateOutputType | null
    _sum: SetSumAggregateOutputType | null
    _min: SetMinAggregateOutputType | null
    _max: SetMaxAggregateOutputType | null
  }

  type GetSetGroupByPayload<T extends SetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SetGroupByOutputType[P]>
            : GetScalarType<T[P], SetGroupByOutputType[P]>
        }
      >
    >


  export type SetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    setId?: boolean
    workoutExerciseId?: boolean
    reps?: boolean
    rir?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workoutExercise?: boolean | WorkoutExerciseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["set"]>

  export type SetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    setId?: boolean
    workoutExerciseId?: boolean
    reps?: boolean
    rir?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workoutExercise?: boolean | WorkoutExerciseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["set"]>

  export type SetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    setId?: boolean
    workoutExerciseId?: boolean
    reps?: boolean
    rir?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workoutExercise?: boolean | WorkoutExerciseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["set"]>

  export type SetSelectScalar = {
    setId?: boolean
    workoutExerciseId?: boolean
    reps?: boolean
    rir?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"setId" | "workoutExerciseId" | "reps" | "rir" | "order" | "createdAt" | "updatedAt", ExtArgs["result"]["set"]>
  export type SetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workoutExercise?: boolean | WorkoutExerciseDefaultArgs<ExtArgs>
  }
  export type SetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workoutExercise?: boolean | WorkoutExerciseDefaultArgs<ExtArgs>
  }
  export type SetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workoutExercise?: boolean | WorkoutExerciseDefaultArgs<ExtArgs>
  }

  export type $SetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Set"
    objects: {
      workoutExercise: Prisma.$WorkoutExercisePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      setId: string
      workoutExerciseId: string
      reps: number
      rir: number
      order: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["set"]>
    composites: {}
  }

  type SetGetPayload<S extends boolean | null | undefined | SetDefaultArgs> = $Result.GetResult<Prisma.$SetPayload, S>

  type SetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SetCountAggregateInputType | true
    }

  export interface SetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Set'], meta: { name: 'Set' } }
    /**
     * Find zero or one Set that matches the filter.
     * @param {SetFindUniqueArgs} args - Arguments to find a Set
     * @example
     * // Get one Set
     * const set = await prisma.set.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SetFindUniqueArgs>(args: SelectSubset<T, SetFindUniqueArgs<ExtArgs>>): Prisma__SetClient<$Result.GetResult<Prisma.$SetPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Set that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SetFindUniqueOrThrowArgs} args - Arguments to find a Set
     * @example
     * // Get one Set
     * const set = await prisma.set.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SetFindUniqueOrThrowArgs>(args: SelectSubset<T, SetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SetClient<$Result.GetResult<Prisma.$SetPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Set that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SetFindFirstArgs} args - Arguments to find a Set
     * @example
     * // Get one Set
     * const set = await prisma.set.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SetFindFirstArgs>(args?: SelectSubset<T, SetFindFirstArgs<ExtArgs>>): Prisma__SetClient<$Result.GetResult<Prisma.$SetPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Set that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SetFindFirstOrThrowArgs} args - Arguments to find a Set
     * @example
     * // Get one Set
     * const set = await prisma.set.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SetFindFirstOrThrowArgs>(args?: SelectSubset<T, SetFindFirstOrThrowArgs<ExtArgs>>): Prisma__SetClient<$Result.GetResult<Prisma.$SetPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Sets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sets
     * const sets = await prisma.set.findMany()
     * 
     * // Get first 10 Sets
     * const sets = await prisma.set.findMany({ take: 10 })
     * 
     * // Only select the `setId`
     * const setWithSetIdOnly = await prisma.set.findMany({ select: { setId: true } })
     * 
     */
    findMany<T extends SetFindManyArgs>(args?: SelectSubset<T, SetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SetPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Set.
     * @param {SetCreateArgs} args - Arguments to create a Set.
     * @example
     * // Create one Set
     * const Set = await prisma.set.create({
     *   data: {
     *     // ... data to create a Set
     *   }
     * })
     * 
     */
    create<T extends SetCreateArgs>(args: SelectSubset<T, SetCreateArgs<ExtArgs>>): Prisma__SetClient<$Result.GetResult<Prisma.$SetPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Sets.
     * @param {SetCreateManyArgs} args - Arguments to create many Sets.
     * @example
     * // Create many Sets
     * const set = await prisma.set.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SetCreateManyArgs>(args?: SelectSubset<T, SetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sets and returns the data saved in the database.
     * @param {SetCreateManyAndReturnArgs} args - Arguments to create many Sets.
     * @example
     * // Create many Sets
     * const set = await prisma.set.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sets and only return the `setId`
     * const setWithSetIdOnly = await prisma.set.createManyAndReturn({
     *   select: { setId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SetCreateManyAndReturnArgs>(args?: SelectSubset<T, SetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SetPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Set.
     * @param {SetDeleteArgs} args - Arguments to delete one Set.
     * @example
     * // Delete one Set
     * const Set = await prisma.set.delete({
     *   where: {
     *     // ... filter to delete one Set
     *   }
     * })
     * 
     */
    delete<T extends SetDeleteArgs>(args: SelectSubset<T, SetDeleteArgs<ExtArgs>>): Prisma__SetClient<$Result.GetResult<Prisma.$SetPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Set.
     * @param {SetUpdateArgs} args - Arguments to update one Set.
     * @example
     * // Update one Set
     * const set = await prisma.set.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SetUpdateArgs>(args: SelectSubset<T, SetUpdateArgs<ExtArgs>>): Prisma__SetClient<$Result.GetResult<Prisma.$SetPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Sets.
     * @param {SetDeleteManyArgs} args - Arguments to filter Sets to delete.
     * @example
     * // Delete a few Sets
     * const { count } = await prisma.set.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SetDeleteManyArgs>(args?: SelectSubset<T, SetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sets
     * const set = await prisma.set.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SetUpdateManyArgs>(args: SelectSubset<T, SetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sets and returns the data updated in the database.
     * @param {SetUpdateManyAndReturnArgs} args - Arguments to update many Sets.
     * @example
     * // Update many Sets
     * const set = await prisma.set.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sets and only return the `setId`
     * const setWithSetIdOnly = await prisma.set.updateManyAndReturn({
     *   select: { setId: true },
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
    updateManyAndReturn<T extends SetUpdateManyAndReturnArgs>(args: SelectSubset<T, SetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SetPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Set.
     * @param {SetUpsertArgs} args - Arguments to update or create a Set.
     * @example
     * // Update or create a Set
     * const set = await prisma.set.upsert({
     *   create: {
     *     // ... data to create a Set
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Set we want to update
     *   }
     * })
     */
    upsert<T extends SetUpsertArgs>(args: SelectSubset<T, SetUpsertArgs<ExtArgs>>): Prisma__SetClient<$Result.GetResult<Prisma.$SetPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Sets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SetCountArgs} args - Arguments to filter Sets to count.
     * @example
     * // Count the number of Sets
     * const count = await prisma.set.count({
     *   where: {
     *     // ... the filter for the Sets we want to count
     *   }
     * })
    **/
    count<T extends SetCountArgs>(
      args?: Subset<T, SetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Set.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SetAggregateArgs>(args: Subset<T, SetAggregateArgs>): Prisma.PrismaPromise<GetSetAggregateType<T>>

    /**
     * Group by Set.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SetGroupByArgs} args - Group by arguments.
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
      T extends SetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SetGroupByArgs['orderBy'] }
        : { orderBy?: SetGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Set model
   */
  readonly fields: SetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Set.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workoutExercise<T extends WorkoutExerciseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkoutExerciseDefaultArgs<ExtArgs>>): Prisma__WorkoutExerciseClient<$Result.GetResult<Prisma.$WorkoutExercisePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
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
   * Fields of the Set model
   */ 
  interface SetFieldRefs {
    readonly setId: FieldRef<"Set", 'String'>
    readonly workoutExerciseId: FieldRef<"Set", 'String'>
    readonly reps: FieldRef<"Set", 'Int'>
    readonly rir: FieldRef<"Set", 'Int'>
    readonly order: FieldRef<"Set", 'Int'>
    readonly createdAt: FieldRef<"Set", 'DateTime'>
    readonly updatedAt: FieldRef<"Set", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Set findUnique
   */
  export type SetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Set
     */
    select?: SetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Set
     */
    omit?: SetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetInclude<ExtArgs> | null
    /**
     * Filter, which Set to fetch.
     */
    where: SetWhereUniqueInput
  }

  /**
   * Set findUniqueOrThrow
   */
  export type SetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Set
     */
    select?: SetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Set
     */
    omit?: SetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetInclude<ExtArgs> | null
    /**
     * Filter, which Set to fetch.
     */
    where: SetWhereUniqueInput
  }

  /**
   * Set findFirst
   */
  export type SetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Set
     */
    select?: SetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Set
     */
    omit?: SetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetInclude<ExtArgs> | null
    /**
     * Filter, which Set to fetch.
     */
    where?: SetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sets to fetch.
     */
    orderBy?: SetOrderByWithRelationInput | SetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sets.
     */
    cursor?: SetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sets.
     */
    distinct?: SetScalarFieldEnum | SetScalarFieldEnum[]
  }

  /**
   * Set findFirstOrThrow
   */
  export type SetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Set
     */
    select?: SetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Set
     */
    omit?: SetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetInclude<ExtArgs> | null
    /**
     * Filter, which Set to fetch.
     */
    where?: SetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sets to fetch.
     */
    orderBy?: SetOrderByWithRelationInput | SetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sets.
     */
    cursor?: SetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sets.
     */
    distinct?: SetScalarFieldEnum | SetScalarFieldEnum[]
  }

  /**
   * Set findMany
   */
  export type SetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Set
     */
    select?: SetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Set
     */
    omit?: SetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetInclude<ExtArgs> | null
    /**
     * Filter, which Sets to fetch.
     */
    where?: SetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sets to fetch.
     */
    orderBy?: SetOrderByWithRelationInput | SetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sets.
     */
    cursor?: SetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sets.
     */
    skip?: number
    distinct?: SetScalarFieldEnum | SetScalarFieldEnum[]
  }

  /**
   * Set create
   */
  export type SetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Set
     */
    select?: SetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Set
     */
    omit?: SetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetInclude<ExtArgs> | null
    /**
     * The data needed to create a Set.
     */
    data: XOR<SetCreateInput, SetUncheckedCreateInput>
  }

  /**
   * Set createMany
   */
  export type SetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sets.
     */
    data: SetCreateManyInput | SetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Set createManyAndReturn
   */
  export type SetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Set
     */
    select?: SetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Set
     */
    omit?: SetOmit<ExtArgs> | null
    /**
     * The data used to create many Sets.
     */
    data: SetCreateManyInput | SetCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Set update
   */
  export type SetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Set
     */
    select?: SetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Set
     */
    omit?: SetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetInclude<ExtArgs> | null
    /**
     * The data needed to update a Set.
     */
    data: XOR<SetUpdateInput, SetUncheckedUpdateInput>
    /**
     * Choose, which Set to update.
     */
    where: SetWhereUniqueInput
  }

  /**
   * Set updateMany
   */
  export type SetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sets.
     */
    data: XOR<SetUpdateManyMutationInput, SetUncheckedUpdateManyInput>
    /**
     * Filter which Sets to update
     */
    where?: SetWhereInput
    /**
     * Limit how many Sets to update.
     */
    limit?: number
  }

  /**
   * Set updateManyAndReturn
   */
  export type SetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Set
     */
    select?: SetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Set
     */
    omit?: SetOmit<ExtArgs> | null
    /**
     * The data used to update Sets.
     */
    data: XOR<SetUpdateManyMutationInput, SetUncheckedUpdateManyInput>
    /**
     * Filter which Sets to update
     */
    where?: SetWhereInput
    /**
     * Limit how many Sets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Set upsert
   */
  export type SetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Set
     */
    select?: SetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Set
     */
    omit?: SetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetInclude<ExtArgs> | null
    /**
     * The filter to search for the Set to update in case it exists.
     */
    where: SetWhereUniqueInput
    /**
     * In case the Set found by the `where` argument doesn't exist, create a new Set with this data.
     */
    create: XOR<SetCreateInput, SetUncheckedCreateInput>
    /**
     * In case the Set was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SetUpdateInput, SetUncheckedUpdateInput>
  }

  /**
   * Set delete
   */
  export type SetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Set
     */
    select?: SetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Set
     */
    omit?: SetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetInclude<ExtArgs> | null
    /**
     * Filter which Set to delete.
     */
    where: SetWhereUniqueInput
  }

  /**
   * Set deleteMany
   */
  export type SetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sets to delete
     */
    where?: SetWhereInput
    /**
     * Limit how many Sets to delete.
     */
    limit?: number
  }

  /**
   * Set without action
   */
  export type SetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Set
     */
    select?: SetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Set
     */
    omit?: SetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetInclude<ExtArgs> | null
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


  export const WorkoutExerciseScalarFieldEnum: {
    workoutExerciseId: 'workoutExerciseId',
    workoutId: 'workoutId',
    exerciseId: 'exerciseId',
    order: 'order',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WorkoutExerciseScalarFieldEnum = (typeof WorkoutExerciseScalarFieldEnum)[keyof typeof WorkoutExerciseScalarFieldEnum]


  export const ExerciseScalarFieldEnum: {
    exerciseId: 'exerciseId',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ExerciseScalarFieldEnum = (typeof ExerciseScalarFieldEnum)[keyof typeof ExerciseScalarFieldEnum]


  export const SetScalarFieldEnum: {
    setId: 'setId',
    workoutExerciseId: 'workoutExerciseId',
    reps: 'reps',
    rir: 'rir',
    order: 'order',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SetScalarFieldEnum = (typeof SetScalarFieldEnum)[keyof typeof SetScalarFieldEnum]


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
    trainingPlan?: XOR<TrainingPlanScalarRelationFilter, TrainingPlanWhereInput>
    workouts?: WorkoutListRelationFilter
  }

  export type TrainingPlanWeekOrderByWithRelationInput = {
    trainingPlanWeekId?: SortOrder
    trainingPlanId?: SortOrder
    weekNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    trainingPlan?: TrainingPlanOrderByWithRelationInput
    workouts?: WorkoutOrderByRelationAggregateInput
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
    trainingPlan?: XOR<TrainingPlanScalarRelationFilter, TrainingPlanWhereInput>
    workouts?: WorkoutListRelationFilter
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
    workoutExercises?: WorkoutExerciseListRelationFilter
  }

  export type WorkoutOrderByWithRelationInput = {
    workoutId?: SortOrder
    trainingPlanWeekId?: SortOrder
    name?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    trainingPlanWeek?: TrainingPlanWeekOrderByWithRelationInput
    workoutExercises?: WorkoutExerciseOrderByRelationAggregateInput
  }

  export type WorkoutWhereUniqueInput = Prisma.AtLeast<{
    workoutId?: string
    AND?: WorkoutWhereInput | WorkoutWhereInput[]
    OR?: WorkoutWhereInput[]
    NOT?: WorkoutWhereInput | WorkoutWhereInput[]
    trainingPlanWeekId?: StringFilter<"Workout"> | string
    name?: StringFilter<"Workout"> | string
    order?: IntFilter<"Workout"> | number
    createdAt?: DateTimeFilter<"Workout"> | Date | string
    updatedAt?: DateTimeFilter<"Workout"> | Date | string
    trainingPlanWeek?: XOR<TrainingPlanWeekScalarRelationFilter, TrainingPlanWeekWhereInput>
    workoutExercises?: WorkoutExerciseListRelationFilter
  }, "workoutId">

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

  export type WorkoutExerciseWhereInput = {
    AND?: WorkoutExerciseWhereInput | WorkoutExerciseWhereInput[]
    OR?: WorkoutExerciseWhereInput[]
    NOT?: WorkoutExerciseWhereInput | WorkoutExerciseWhereInput[]
    workoutExerciseId?: StringFilter<"WorkoutExercise"> | string
    workoutId?: StringFilter<"WorkoutExercise"> | string
    exerciseId?: StringFilter<"WorkoutExercise"> | string
    order?: IntFilter<"WorkoutExercise"> | number
    createdAt?: DateTimeFilter<"WorkoutExercise"> | Date | string
    updatedAt?: DateTimeFilter<"WorkoutExercise"> | Date | string
    workout?: XOR<WorkoutScalarRelationFilter, WorkoutWhereInput>
    exercise?: XOR<ExerciseScalarRelationFilter, ExerciseWhereInput>
    sets?: SetListRelationFilter
  }

  export type WorkoutExerciseOrderByWithRelationInput = {
    workoutExerciseId?: SortOrder
    workoutId?: SortOrder
    exerciseId?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    workout?: WorkoutOrderByWithRelationInput
    exercise?: ExerciseOrderByWithRelationInput
    sets?: SetOrderByRelationAggregateInput
  }

  export type WorkoutExerciseWhereUniqueInput = Prisma.AtLeast<{
    workoutExerciseId?: string
    AND?: WorkoutExerciseWhereInput | WorkoutExerciseWhereInput[]
    OR?: WorkoutExerciseWhereInput[]
    NOT?: WorkoutExerciseWhereInput | WorkoutExerciseWhereInput[]
    workoutId?: StringFilter<"WorkoutExercise"> | string
    exerciseId?: StringFilter<"WorkoutExercise"> | string
    order?: IntFilter<"WorkoutExercise"> | number
    createdAt?: DateTimeFilter<"WorkoutExercise"> | Date | string
    updatedAt?: DateTimeFilter<"WorkoutExercise"> | Date | string
    workout?: XOR<WorkoutScalarRelationFilter, WorkoutWhereInput>
    exercise?: XOR<ExerciseScalarRelationFilter, ExerciseWhereInput>
    sets?: SetListRelationFilter
  }, "workoutExerciseId">

  export type WorkoutExerciseOrderByWithAggregationInput = {
    workoutExerciseId?: SortOrder
    workoutId?: SortOrder
    exerciseId?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WorkoutExerciseCountOrderByAggregateInput
    _avg?: WorkoutExerciseAvgOrderByAggregateInput
    _max?: WorkoutExerciseMaxOrderByAggregateInput
    _min?: WorkoutExerciseMinOrderByAggregateInput
    _sum?: WorkoutExerciseSumOrderByAggregateInput
  }

  export type WorkoutExerciseScalarWhereWithAggregatesInput = {
    AND?: WorkoutExerciseScalarWhereWithAggregatesInput | WorkoutExerciseScalarWhereWithAggregatesInput[]
    OR?: WorkoutExerciseScalarWhereWithAggregatesInput[]
    NOT?: WorkoutExerciseScalarWhereWithAggregatesInput | WorkoutExerciseScalarWhereWithAggregatesInput[]
    workoutExerciseId?: StringWithAggregatesFilter<"WorkoutExercise"> | string
    workoutId?: StringWithAggregatesFilter<"WorkoutExercise"> | string
    exerciseId?: StringWithAggregatesFilter<"WorkoutExercise"> | string
    order?: IntWithAggregatesFilter<"WorkoutExercise"> | number
    createdAt?: DateTimeWithAggregatesFilter<"WorkoutExercise"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WorkoutExercise"> | Date | string
  }

  export type ExerciseWhereInput = {
    AND?: ExerciseWhereInput | ExerciseWhereInput[]
    OR?: ExerciseWhereInput[]
    NOT?: ExerciseWhereInput | ExerciseWhereInput[]
    exerciseId?: StringFilter<"Exercise"> | string
    name?: StringFilter<"Exercise"> | string
    createdAt?: DateTimeFilter<"Exercise"> | Date | string
    updatedAt?: DateTimeFilter<"Exercise"> | Date | string
    workoutExercises?: WorkoutExerciseListRelationFilter
  }

  export type ExerciseOrderByWithRelationInput = {
    exerciseId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    workoutExercises?: WorkoutExerciseOrderByRelationAggregateInput
  }

  export type ExerciseWhereUniqueInput = Prisma.AtLeast<{
    exerciseId?: string
    name?: string
    AND?: ExerciseWhereInput | ExerciseWhereInput[]
    OR?: ExerciseWhereInput[]
    NOT?: ExerciseWhereInput | ExerciseWhereInput[]
    createdAt?: DateTimeFilter<"Exercise"> | Date | string
    updatedAt?: DateTimeFilter<"Exercise"> | Date | string
    workoutExercises?: WorkoutExerciseListRelationFilter
  }, "exerciseId" | "name">

  export type ExerciseOrderByWithAggregationInput = {
    exerciseId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ExerciseCountOrderByAggregateInput
    _max?: ExerciseMaxOrderByAggregateInput
    _min?: ExerciseMinOrderByAggregateInput
  }

  export type ExerciseScalarWhereWithAggregatesInput = {
    AND?: ExerciseScalarWhereWithAggregatesInput | ExerciseScalarWhereWithAggregatesInput[]
    OR?: ExerciseScalarWhereWithAggregatesInput[]
    NOT?: ExerciseScalarWhereWithAggregatesInput | ExerciseScalarWhereWithAggregatesInput[]
    exerciseId?: StringWithAggregatesFilter<"Exercise"> | string
    name?: StringWithAggregatesFilter<"Exercise"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Exercise"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Exercise"> | Date | string
  }

  export type SetWhereInput = {
    AND?: SetWhereInput | SetWhereInput[]
    OR?: SetWhereInput[]
    NOT?: SetWhereInput | SetWhereInput[]
    setId?: StringFilter<"Set"> | string
    workoutExerciseId?: StringFilter<"Set"> | string
    reps?: IntFilter<"Set"> | number
    rir?: IntFilter<"Set"> | number
    order?: IntFilter<"Set"> | number
    createdAt?: DateTimeFilter<"Set"> | Date | string
    updatedAt?: DateTimeFilter<"Set"> | Date | string
    workoutExercise?: XOR<WorkoutExerciseScalarRelationFilter, WorkoutExerciseWhereInput>
  }

  export type SetOrderByWithRelationInput = {
    setId?: SortOrder
    workoutExerciseId?: SortOrder
    reps?: SortOrder
    rir?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    workoutExercise?: WorkoutExerciseOrderByWithRelationInput
  }

  export type SetWhereUniqueInput = Prisma.AtLeast<{
    setId?: string
    AND?: SetWhereInput | SetWhereInput[]
    OR?: SetWhereInput[]
    NOT?: SetWhereInput | SetWhereInput[]
    workoutExerciseId?: StringFilter<"Set"> | string
    reps?: IntFilter<"Set"> | number
    rir?: IntFilter<"Set"> | number
    order?: IntFilter<"Set"> | number
    createdAt?: DateTimeFilter<"Set"> | Date | string
    updatedAt?: DateTimeFilter<"Set"> | Date | string
    workoutExercise?: XOR<WorkoutExerciseScalarRelationFilter, WorkoutExerciseWhereInput>
  }, "setId">

  export type SetOrderByWithAggregationInput = {
    setId?: SortOrder
    workoutExerciseId?: SortOrder
    reps?: SortOrder
    rir?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SetCountOrderByAggregateInput
    _avg?: SetAvgOrderByAggregateInput
    _max?: SetMaxOrderByAggregateInput
    _min?: SetMinOrderByAggregateInput
    _sum?: SetSumOrderByAggregateInput
  }

  export type SetScalarWhereWithAggregatesInput = {
    AND?: SetScalarWhereWithAggregatesInput | SetScalarWhereWithAggregatesInput[]
    OR?: SetScalarWhereWithAggregatesInput[]
    NOT?: SetScalarWhereWithAggregatesInput | SetScalarWhereWithAggregatesInput[]
    setId?: StringWithAggregatesFilter<"Set"> | string
    workoutExerciseId?: StringWithAggregatesFilter<"Set"> | string
    reps?: IntWithAggregatesFilter<"Set"> | number
    rir?: IntWithAggregatesFilter<"Set"> | number
    order?: IntWithAggregatesFilter<"Set"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Set"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Set"> | Date | string
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
    trainingPlan: TrainingPlanCreateNestedOneWithoutTrainingPlanWeeksInput
    workouts?: WorkoutCreateNestedManyWithoutTrainingPlanWeekInput
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
    trainingPlan?: TrainingPlanUpdateOneRequiredWithoutTrainingPlanWeeksNestedInput
    workouts?: WorkoutUpdateManyWithoutTrainingPlanWeekNestedInput
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
    workoutExercises?: WorkoutExerciseCreateNestedManyWithoutWorkoutInput
  }

  export type WorkoutUncheckedCreateInput = {
    workoutId?: string
    trainingPlanWeekId: string
    name: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
    workoutExercises?: WorkoutExerciseUncheckedCreateNestedManyWithoutWorkoutInput
  }

  export type WorkoutUpdateInput = {
    workoutId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trainingPlanWeek?: TrainingPlanWeekUpdateOneRequiredWithoutWorkoutsNestedInput
    workoutExercises?: WorkoutExerciseUpdateManyWithoutWorkoutNestedInput
  }

  export type WorkoutUncheckedUpdateInput = {
    workoutId?: StringFieldUpdateOperationsInput | string
    trainingPlanWeekId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workoutExercises?: WorkoutExerciseUncheckedUpdateManyWithoutWorkoutNestedInput
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

  export type WorkoutExerciseCreateInput = {
    workoutExerciseId?: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
    workout: WorkoutCreateNestedOneWithoutWorkoutExercisesInput
    exercise: ExerciseCreateNestedOneWithoutWorkoutExercisesInput
    sets?: SetCreateNestedManyWithoutWorkoutExerciseInput
  }

  export type WorkoutExerciseUncheckedCreateInput = {
    workoutExerciseId?: string
    workoutId: string
    exerciseId: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
    sets?: SetUncheckedCreateNestedManyWithoutWorkoutExerciseInput
  }

  export type WorkoutExerciseUpdateInput = {
    workoutExerciseId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workout?: WorkoutUpdateOneRequiredWithoutWorkoutExercisesNestedInput
    exercise?: ExerciseUpdateOneRequiredWithoutWorkoutExercisesNestedInput
    sets?: SetUpdateManyWithoutWorkoutExerciseNestedInput
  }

  export type WorkoutExerciseUncheckedUpdateInput = {
    workoutExerciseId?: StringFieldUpdateOperationsInput | string
    workoutId?: StringFieldUpdateOperationsInput | string
    exerciseId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sets?: SetUncheckedUpdateManyWithoutWorkoutExerciseNestedInput
  }

  export type WorkoutExerciseCreateManyInput = {
    workoutExerciseId?: string
    workoutId: string
    exerciseId: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkoutExerciseUpdateManyMutationInput = {
    workoutExerciseId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkoutExerciseUncheckedUpdateManyInput = {
    workoutExerciseId?: StringFieldUpdateOperationsInput | string
    workoutId?: StringFieldUpdateOperationsInput | string
    exerciseId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExerciseCreateInput = {
    exerciseId?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    workoutExercises?: WorkoutExerciseCreateNestedManyWithoutExerciseInput
  }

  export type ExerciseUncheckedCreateInput = {
    exerciseId?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    workoutExercises?: WorkoutExerciseUncheckedCreateNestedManyWithoutExerciseInput
  }

  export type ExerciseUpdateInput = {
    exerciseId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workoutExercises?: WorkoutExerciseUpdateManyWithoutExerciseNestedInput
  }

  export type ExerciseUncheckedUpdateInput = {
    exerciseId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workoutExercises?: WorkoutExerciseUncheckedUpdateManyWithoutExerciseNestedInput
  }

  export type ExerciseCreateManyInput = {
    exerciseId?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExerciseUpdateManyMutationInput = {
    exerciseId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExerciseUncheckedUpdateManyInput = {
    exerciseId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SetCreateInput = {
    setId?: string
    reps: number
    rir: number
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
    workoutExercise: WorkoutExerciseCreateNestedOneWithoutSetsInput
  }

  export type SetUncheckedCreateInput = {
    setId?: string
    workoutExerciseId: string
    reps: number
    rir: number
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SetUpdateInput = {
    setId?: StringFieldUpdateOperationsInput | string
    reps?: IntFieldUpdateOperationsInput | number
    rir?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workoutExercise?: WorkoutExerciseUpdateOneRequiredWithoutSetsNestedInput
  }

  export type SetUncheckedUpdateInput = {
    setId?: StringFieldUpdateOperationsInput | string
    workoutExerciseId?: StringFieldUpdateOperationsInput | string
    reps?: IntFieldUpdateOperationsInput | number
    rir?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SetCreateManyInput = {
    setId?: string
    workoutExerciseId: string
    reps: number
    rir: number
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SetUpdateManyMutationInput = {
    setId?: StringFieldUpdateOperationsInput | string
    reps?: IntFieldUpdateOperationsInput | number
    rir?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SetUncheckedUpdateManyInput = {
    setId?: StringFieldUpdateOperationsInput | string
    workoutExerciseId?: StringFieldUpdateOperationsInput | string
    reps?: IntFieldUpdateOperationsInput | number
    rir?: IntFieldUpdateOperationsInput | number
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

  export type TrainingPlanScalarRelationFilter = {
    is?: TrainingPlanWhereInput
    isNot?: TrainingPlanWhereInput
  }

  export type WorkoutListRelationFilter = {
    every?: WorkoutWhereInput
    some?: WorkoutWhereInput
    none?: WorkoutWhereInput
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

  export type WorkoutExerciseListRelationFilter = {
    every?: WorkoutExerciseWhereInput
    some?: WorkoutExerciseWhereInput
    none?: WorkoutExerciseWhereInput
  }

  export type WorkoutExerciseOrderByRelationAggregateInput = {
    _count?: SortOrder
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

  export type WorkoutScalarRelationFilter = {
    is?: WorkoutWhereInput
    isNot?: WorkoutWhereInput
  }

  export type ExerciseScalarRelationFilter = {
    is?: ExerciseWhereInput
    isNot?: ExerciseWhereInput
  }

  export type SetListRelationFilter = {
    every?: SetWhereInput
    some?: SetWhereInput
    none?: SetWhereInput
  }

  export type SetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkoutExerciseCountOrderByAggregateInput = {
    workoutExerciseId?: SortOrder
    workoutId?: SortOrder
    exerciseId?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkoutExerciseAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type WorkoutExerciseMaxOrderByAggregateInput = {
    workoutExerciseId?: SortOrder
    workoutId?: SortOrder
    exerciseId?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkoutExerciseMinOrderByAggregateInput = {
    workoutExerciseId?: SortOrder
    workoutId?: SortOrder
    exerciseId?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkoutExerciseSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type ExerciseCountOrderByAggregateInput = {
    exerciseId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExerciseMaxOrderByAggregateInput = {
    exerciseId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExerciseMinOrderByAggregateInput = {
    exerciseId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkoutExerciseScalarRelationFilter = {
    is?: WorkoutExerciseWhereInput
    isNot?: WorkoutExerciseWhereInput
  }

  export type SetCountOrderByAggregateInput = {
    setId?: SortOrder
    workoutExerciseId?: SortOrder
    reps?: SortOrder
    rir?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SetAvgOrderByAggregateInput = {
    reps?: SortOrder
    rir?: SortOrder
    order?: SortOrder
  }

  export type SetMaxOrderByAggregateInput = {
    setId?: SortOrder
    workoutExerciseId?: SortOrder
    reps?: SortOrder
    rir?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SetMinOrderByAggregateInput = {
    setId?: SortOrder
    workoutExerciseId?: SortOrder
    reps?: SortOrder
    rir?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SetSumOrderByAggregateInput = {
    reps?: SortOrder
    rir?: SortOrder
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

  export type TrainingPlanCreateNestedOneWithoutTrainingPlanWeeksInput = {
    create?: XOR<TrainingPlanCreateWithoutTrainingPlanWeeksInput, TrainingPlanUncheckedCreateWithoutTrainingPlanWeeksInput>
    connectOrCreate?: TrainingPlanCreateOrConnectWithoutTrainingPlanWeeksInput
    connect?: TrainingPlanWhereUniqueInput
  }

  export type WorkoutCreateNestedManyWithoutTrainingPlanWeekInput = {
    create?: XOR<WorkoutCreateWithoutTrainingPlanWeekInput, WorkoutUncheckedCreateWithoutTrainingPlanWeekInput> | WorkoutCreateWithoutTrainingPlanWeekInput[] | WorkoutUncheckedCreateWithoutTrainingPlanWeekInput[]
    connectOrCreate?: WorkoutCreateOrConnectWithoutTrainingPlanWeekInput | WorkoutCreateOrConnectWithoutTrainingPlanWeekInput[]
    createMany?: WorkoutCreateManyTrainingPlanWeekInputEnvelope
    connect?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
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

  export type TrainingPlanUpdateOneRequiredWithoutTrainingPlanWeeksNestedInput = {
    create?: XOR<TrainingPlanCreateWithoutTrainingPlanWeeksInput, TrainingPlanUncheckedCreateWithoutTrainingPlanWeeksInput>
    connectOrCreate?: TrainingPlanCreateOrConnectWithoutTrainingPlanWeeksInput
    upsert?: TrainingPlanUpsertWithoutTrainingPlanWeeksInput
    connect?: TrainingPlanWhereUniqueInput
    update?: XOR<XOR<TrainingPlanUpdateToOneWithWhereWithoutTrainingPlanWeeksInput, TrainingPlanUpdateWithoutTrainingPlanWeeksInput>, TrainingPlanUncheckedUpdateWithoutTrainingPlanWeeksInput>
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

  export type WorkoutExerciseCreateNestedManyWithoutWorkoutInput = {
    create?: XOR<WorkoutExerciseCreateWithoutWorkoutInput, WorkoutExerciseUncheckedCreateWithoutWorkoutInput> | WorkoutExerciseCreateWithoutWorkoutInput[] | WorkoutExerciseUncheckedCreateWithoutWorkoutInput[]
    connectOrCreate?: WorkoutExerciseCreateOrConnectWithoutWorkoutInput | WorkoutExerciseCreateOrConnectWithoutWorkoutInput[]
    createMany?: WorkoutExerciseCreateManyWorkoutInputEnvelope
    connect?: WorkoutExerciseWhereUniqueInput | WorkoutExerciseWhereUniqueInput[]
  }

  export type WorkoutExerciseUncheckedCreateNestedManyWithoutWorkoutInput = {
    create?: XOR<WorkoutExerciseCreateWithoutWorkoutInput, WorkoutExerciseUncheckedCreateWithoutWorkoutInput> | WorkoutExerciseCreateWithoutWorkoutInput[] | WorkoutExerciseUncheckedCreateWithoutWorkoutInput[]
    connectOrCreate?: WorkoutExerciseCreateOrConnectWithoutWorkoutInput | WorkoutExerciseCreateOrConnectWithoutWorkoutInput[]
    createMany?: WorkoutExerciseCreateManyWorkoutInputEnvelope
    connect?: WorkoutExerciseWhereUniqueInput | WorkoutExerciseWhereUniqueInput[]
  }

  export type TrainingPlanWeekUpdateOneRequiredWithoutWorkoutsNestedInput = {
    create?: XOR<TrainingPlanWeekCreateWithoutWorkoutsInput, TrainingPlanWeekUncheckedCreateWithoutWorkoutsInput>
    connectOrCreate?: TrainingPlanWeekCreateOrConnectWithoutWorkoutsInput
    upsert?: TrainingPlanWeekUpsertWithoutWorkoutsInput
    connect?: TrainingPlanWeekWhereUniqueInput
    update?: XOR<XOR<TrainingPlanWeekUpdateToOneWithWhereWithoutWorkoutsInput, TrainingPlanWeekUpdateWithoutWorkoutsInput>, TrainingPlanWeekUncheckedUpdateWithoutWorkoutsInput>
  }

  export type WorkoutExerciseUpdateManyWithoutWorkoutNestedInput = {
    create?: XOR<WorkoutExerciseCreateWithoutWorkoutInput, WorkoutExerciseUncheckedCreateWithoutWorkoutInput> | WorkoutExerciseCreateWithoutWorkoutInput[] | WorkoutExerciseUncheckedCreateWithoutWorkoutInput[]
    connectOrCreate?: WorkoutExerciseCreateOrConnectWithoutWorkoutInput | WorkoutExerciseCreateOrConnectWithoutWorkoutInput[]
    upsert?: WorkoutExerciseUpsertWithWhereUniqueWithoutWorkoutInput | WorkoutExerciseUpsertWithWhereUniqueWithoutWorkoutInput[]
    createMany?: WorkoutExerciseCreateManyWorkoutInputEnvelope
    set?: WorkoutExerciseWhereUniqueInput | WorkoutExerciseWhereUniqueInput[]
    disconnect?: WorkoutExerciseWhereUniqueInput | WorkoutExerciseWhereUniqueInput[]
    delete?: WorkoutExerciseWhereUniqueInput | WorkoutExerciseWhereUniqueInput[]
    connect?: WorkoutExerciseWhereUniqueInput | WorkoutExerciseWhereUniqueInput[]
    update?: WorkoutExerciseUpdateWithWhereUniqueWithoutWorkoutInput | WorkoutExerciseUpdateWithWhereUniqueWithoutWorkoutInput[]
    updateMany?: WorkoutExerciseUpdateManyWithWhereWithoutWorkoutInput | WorkoutExerciseUpdateManyWithWhereWithoutWorkoutInput[]
    deleteMany?: WorkoutExerciseScalarWhereInput | WorkoutExerciseScalarWhereInput[]
  }

  export type WorkoutExerciseUncheckedUpdateManyWithoutWorkoutNestedInput = {
    create?: XOR<WorkoutExerciseCreateWithoutWorkoutInput, WorkoutExerciseUncheckedCreateWithoutWorkoutInput> | WorkoutExerciseCreateWithoutWorkoutInput[] | WorkoutExerciseUncheckedCreateWithoutWorkoutInput[]
    connectOrCreate?: WorkoutExerciseCreateOrConnectWithoutWorkoutInput | WorkoutExerciseCreateOrConnectWithoutWorkoutInput[]
    upsert?: WorkoutExerciseUpsertWithWhereUniqueWithoutWorkoutInput | WorkoutExerciseUpsertWithWhereUniqueWithoutWorkoutInput[]
    createMany?: WorkoutExerciseCreateManyWorkoutInputEnvelope
    set?: WorkoutExerciseWhereUniqueInput | WorkoutExerciseWhereUniqueInput[]
    disconnect?: WorkoutExerciseWhereUniqueInput | WorkoutExerciseWhereUniqueInput[]
    delete?: WorkoutExerciseWhereUniqueInput | WorkoutExerciseWhereUniqueInput[]
    connect?: WorkoutExerciseWhereUniqueInput | WorkoutExerciseWhereUniqueInput[]
    update?: WorkoutExerciseUpdateWithWhereUniqueWithoutWorkoutInput | WorkoutExerciseUpdateWithWhereUniqueWithoutWorkoutInput[]
    updateMany?: WorkoutExerciseUpdateManyWithWhereWithoutWorkoutInput | WorkoutExerciseUpdateManyWithWhereWithoutWorkoutInput[]
    deleteMany?: WorkoutExerciseScalarWhereInput | WorkoutExerciseScalarWhereInput[]
  }

  export type WorkoutCreateNestedOneWithoutWorkoutExercisesInput = {
    create?: XOR<WorkoutCreateWithoutWorkoutExercisesInput, WorkoutUncheckedCreateWithoutWorkoutExercisesInput>
    connectOrCreate?: WorkoutCreateOrConnectWithoutWorkoutExercisesInput
    connect?: WorkoutWhereUniqueInput
  }

  export type ExerciseCreateNestedOneWithoutWorkoutExercisesInput = {
    create?: XOR<ExerciseCreateWithoutWorkoutExercisesInput, ExerciseUncheckedCreateWithoutWorkoutExercisesInput>
    connectOrCreate?: ExerciseCreateOrConnectWithoutWorkoutExercisesInput
    connect?: ExerciseWhereUniqueInput
  }

  export type SetCreateNestedManyWithoutWorkoutExerciseInput = {
    create?: XOR<SetCreateWithoutWorkoutExerciseInput, SetUncheckedCreateWithoutWorkoutExerciseInput> | SetCreateWithoutWorkoutExerciseInput[] | SetUncheckedCreateWithoutWorkoutExerciseInput[]
    connectOrCreate?: SetCreateOrConnectWithoutWorkoutExerciseInput | SetCreateOrConnectWithoutWorkoutExerciseInput[]
    createMany?: SetCreateManyWorkoutExerciseInputEnvelope
    connect?: SetWhereUniqueInput | SetWhereUniqueInput[]
  }

  export type SetUncheckedCreateNestedManyWithoutWorkoutExerciseInput = {
    create?: XOR<SetCreateWithoutWorkoutExerciseInput, SetUncheckedCreateWithoutWorkoutExerciseInput> | SetCreateWithoutWorkoutExerciseInput[] | SetUncheckedCreateWithoutWorkoutExerciseInput[]
    connectOrCreate?: SetCreateOrConnectWithoutWorkoutExerciseInput | SetCreateOrConnectWithoutWorkoutExerciseInput[]
    createMany?: SetCreateManyWorkoutExerciseInputEnvelope
    connect?: SetWhereUniqueInput | SetWhereUniqueInput[]
  }

  export type WorkoutUpdateOneRequiredWithoutWorkoutExercisesNestedInput = {
    create?: XOR<WorkoutCreateWithoutWorkoutExercisesInput, WorkoutUncheckedCreateWithoutWorkoutExercisesInput>
    connectOrCreate?: WorkoutCreateOrConnectWithoutWorkoutExercisesInput
    upsert?: WorkoutUpsertWithoutWorkoutExercisesInput
    connect?: WorkoutWhereUniqueInput
    update?: XOR<XOR<WorkoutUpdateToOneWithWhereWithoutWorkoutExercisesInput, WorkoutUpdateWithoutWorkoutExercisesInput>, WorkoutUncheckedUpdateWithoutWorkoutExercisesInput>
  }

  export type ExerciseUpdateOneRequiredWithoutWorkoutExercisesNestedInput = {
    create?: XOR<ExerciseCreateWithoutWorkoutExercisesInput, ExerciseUncheckedCreateWithoutWorkoutExercisesInput>
    connectOrCreate?: ExerciseCreateOrConnectWithoutWorkoutExercisesInput
    upsert?: ExerciseUpsertWithoutWorkoutExercisesInput
    connect?: ExerciseWhereUniqueInput
    update?: XOR<XOR<ExerciseUpdateToOneWithWhereWithoutWorkoutExercisesInput, ExerciseUpdateWithoutWorkoutExercisesInput>, ExerciseUncheckedUpdateWithoutWorkoutExercisesInput>
  }

  export type SetUpdateManyWithoutWorkoutExerciseNestedInput = {
    create?: XOR<SetCreateWithoutWorkoutExerciseInput, SetUncheckedCreateWithoutWorkoutExerciseInput> | SetCreateWithoutWorkoutExerciseInput[] | SetUncheckedCreateWithoutWorkoutExerciseInput[]
    connectOrCreate?: SetCreateOrConnectWithoutWorkoutExerciseInput | SetCreateOrConnectWithoutWorkoutExerciseInput[]
    upsert?: SetUpsertWithWhereUniqueWithoutWorkoutExerciseInput | SetUpsertWithWhereUniqueWithoutWorkoutExerciseInput[]
    createMany?: SetCreateManyWorkoutExerciseInputEnvelope
    set?: SetWhereUniqueInput | SetWhereUniqueInput[]
    disconnect?: SetWhereUniqueInput | SetWhereUniqueInput[]
    delete?: SetWhereUniqueInput | SetWhereUniqueInput[]
    connect?: SetWhereUniqueInput | SetWhereUniqueInput[]
    update?: SetUpdateWithWhereUniqueWithoutWorkoutExerciseInput | SetUpdateWithWhereUniqueWithoutWorkoutExerciseInput[]
    updateMany?: SetUpdateManyWithWhereWithoutWorkoutExerciseInput | SetUpdateManyWithWhereWithoutWorkoutExerciseInput[]
    deleteMany?: SetScalarWhereInput | SetScalarWhereInput[]
  }

  export type SetUncheckedUpdateManyWithoutWorkoutExerciseNestedInput = {
    create?: XOR<SetCreateWithoutWorkoutExerciseInput, SetUncheckedCreateWithoutWorkoutExerciseInput> | SetCreateWithoutWorkoutExerciseInput[] | SetUncheckedCreateWithoutWorkoutExerciseInput[]
    connectOrCreate?: SetCreateOrConnectWithoutWorkoutExerciseInput | SetCreateOrConnectWithoutWorkoutExerciseInput[]
    upsert?: SetUpsertWithWhereUniqueWithoutWorkoutExerciseInput | SetUpsertWithWhereUniqueWithoutWorkoutExerciseInput[]
    createMany?: SetCreateManyWorkoutExerciseInputEnvelope
    set?: SetWhereUniqueInput | SetWhereUniqueInput[]
    disconnect?: SetWhereUniqueInput | SetWhereUniqueInput[]
    delete?: SetWhereUniqueInput | SetWhereUniqueInput[]
    connect?: SetWhereUniqueInput | SetWhereUniqueInput[]
    update?: SetUpdateWithWhereUniqueWithoutWorkoutExerciseInput | SetUpdateWithWhereUniqueWithoutWorkoutExerciseInput[]
    updateMany?: SetUpdateManyWithWhereWithoutWorkoutExerciseInput | SetUpdateManyWithWhereWithoutWorkoutExerciseInput[]
    deleteMany?: SetScalarWhereInput | SetScalarWhereInput[]
  }

  export type WorkoutExerciseCreateNestedManyWithoutExerciseInput = {
    create?: XOR<WorkoutExerciseCreateWithoutExerciseInput, WorkoutExerciseUncheckedCreateWithoutExerciseInput> | WorkoutExerciseCreateWithoutExerciseInput[] | WorkoutExerciseUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: WorkoutExerciseCreateOrConnectWithoutExerciseInput | WorkoutExerciseCreateOrConnectWithoutExerciseInput[]
    createMany?: WorkoutExerciseCreateManyExerciseInputEnvelope
    connect?: WorkoutExerciseWhereUniqueInput | WorkoutExerciseWhereUniqueInput[]
  }

  export type WorkoutExerciseUncheckedCreateNestedManyWithoutExerciseInput = {
    create?: XOR<WorkoutExerciseCreateWithoutExerciseInput, WorkoutExerciseUncheckedCreateWithoutExerciseInput> | WorkoutExerciseCreateWithoutExerciseInput[] | WorkoutExerciseUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: WorkoutExerciseCreateOrConnectWithoutExerciseInput | WorkoutExerciseCreateOrConnectWithoutExerciseInput[]
    createMany?: WorkoutExerciseCreateManyExerciseInputEnvelope
    connect?: WorkoutExerciseWhereUniqueInput | WorkoutExerciseWhereUniqueInput[]
  }

  export type WorkoutExerciseUpdateManyWithoutExerciseNestedInput = {
    create?: XOR<WorkoutExerciseCreateWithoutExerciseInput, WorkoutExerciseUncheckedCreateWithoutExerciseInput> | WorkoutExerciseCreateWithoutExerciseInput[] | WorkoutExerciseUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: WorkoutExerciseCreateOrConnectWithoutExerciseInput | WorkoutExerciseCreateOrConnectWithoutExerciseInput[]
    upsert?: WorkoutExerciseUpsertWithWhereUniqueWithoutExerciseInput | WorkoutExerciseUpsertWithWhereUniqueWithoutExerciseInput[]
    createMany?: WorkoutExerciseCreateManyExerciseInputEnvelope
    set?: WorkoutExerciseWhereUniqueInput | WorkoutExerciseWhereUniqueInput[]
    disconnect?: WorkoutExerciseWhereUniqueInput | WorkoutExerciseWhereUniqueInput[]
    delete?: WorkoutExerciseWhereUniqueInput | WorkoutExerciseWhereUniqueInput[]
    connect?: WorkoutExerciseWhereUniqueInput | WorkoutExerciseWhereUniqueInput[]
    update?: WorkoutExerciseUpdateWithWhereUniqueWithoutExerciseInput | WorkoutExerciseUpdateWithWhereUniqueWithoutExerciseInput[]
    updateMany?: WorkoutExerciseUpdateManyWithWhereWithoutExerciseInput | WorkoutExerciseUpdateManyWithWhereWithoutExerciseInput[]
    deleteMany?: WorkoutExerciseScalarWhereInput | WorkoutExerciseScalarWhereInput[]
  }

  export type WorkoutExerciseUncheckedUpdateManyWithoutExerciseNestedInput = {
    create?: XOR<WorkoutExerciseCreateWithoutExerciseInput, WorkoutExerciseUncheckedCreateWithoutExerciseInput> | WorkoutExerciseCreateWithoutExerciseInput[] | WorkoutExerciseUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: WorkoutExerciseCreateOrConnectWithoutExerciseInput | WorkoutExerciseCreateOrConnectWithoutExerciseInput[]
    upsert?: WorkoutExerciseUpsertWithWhereUniqueWithoutExerciseInput | WorkoutExerciseUpsertWithWhereUniqueWithoutExerciseInput[]
    createMany?: WorkoutExerciseCreateManyExerciseInputEnvelope
    set?: WorkoutExerciseWhereUniqueInput | WorkoutExerciseWhereUniqueInput[]
    disconnect?: WorkoutExerciseWhereUniqueInput | WorkoutExerciseWhereUniqueInput[]
    delete?: WorkoutExerciseWhereUniqueInput | WorkoutExerciseWhereUniqueInput[]
    connect?: WorkoutExerciseWhereUniqueInput | WorkoutExerciseWhereUniqueInput[]
    update?: WorkoutExerciseUpdateWithWhereUniqueWithoutExerciseInput | WorkoutExerciseUpdateWithWhereUniqueWithoutExerciseInput[]
    updateMany?: WorkoutExerciseUpdateManyWithWhereWithoutExerciseInput | WorkoutExerciseUpdateManyWithWhereWithoutExerciseInput[]
    deleteMany?: WorkoutExerciseScalarWhereInput | WorkoutExerciseScalarWhereInput[]
  }

  export type WorkoutExerciseCreateNestedOneWithoutSetsInput = {
    create?: XOR<WorkoutExerciseCreateWithoutSetsInput, WorkoutExerciseUncheckedCreateWithoutSetsInput>
    connectOrCreate?: WorkoutExerciseCreateOrConnectWithoutSetsInput
    connect?: WorkoutExerciseWhereUniqueInput
  }

  export type WorkoutExerciseUpdateOneRequiredWithoutSetsNestedInput = {
    create?: XOR<WorkoutExerciseCreateWithoutSetsInput, WorkoutExerciseUncheckedCreateWithoutSetsInput>
    connectOrCreate?: WorkoutExerciseCreateOrConnectWithoutSetsInput
    upsert?: WorkoutExerciseUpsertWithoutSetsInput
    connect?: WorkoutExerciseWhereUniqueInput
    update?: XOR<XOR<WorkoutExerciseUpdateToOneWithWhereWithoutSetsInput, WorkoutExerciseUpdateWithoutSetsInput>, WorkoutExerciseUncheckedUpdateWithoutSetsInput>
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

  export type WorkoutCreateWithoutTrainingPlanWeekInput = {
    workoutId?: string
    name: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
    workoutExercises?: WorkoutExerciseCreateNestedManyWithoutWorkoutInput
  }

  export type WorkoutUncheckedCreateWithoutTrainingPlanWeekInput = {
    workoutId?: string
    name: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
    workoutExercises?: WorkoutExerciseUncheckedCreateNestedManyWithoutWorkoutInput
  }

  export type WorkoutCreateOrConnectWithoutTrainingPlanWeekInput = {
    where: WorkoutWhereUniqueInput
    create: XOR<WorkoutCreateWithoutTrainingPlanWeekInput, WorkoutUncheckedCreateWithoutTrainingPlanWeekInput>
  }

  export type WorkoutCreateManyTrainingPlanWeekInputEnvelope = {
    data: WorkoutCreateManyTrainingPlanWeekInput | WorkoutCreateManyTrainingPlanWeekInput[]
    skipDuplicates?: boolean
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

  export type WorkoutExerciseCreateWithoutWorkoutInput = {
    workoutExerciseId?: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
    exercise: ExerciseCreateNestedOneWithoutWorkoutExercisesInput
    sets?: SetCreateNestedManyWithoutWorkoutExerciseInput
  }

  export type WorkoutExerciseUncheckedCreateWithoutWorkoutInput = {
    workoutExerciseId?: string
    exerciseId: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
    sets?: SetUncheckedCreateNestedManyWithoutWorkoutExerciseInput
  }

  export type WorkoutExerciseCreateOrConnectWithoutWorkoutInput = {
    where: WorkoutExerciseWhereUniqueInput
    create: XOR<WorkoutExerciseCreateWithoutWorkoutInput, WorkoutExerciseUncheckedCreateWithoutWorkoutInput>
  }

  export type WorkoutExerciseCreateManyWorkoutInputEnvelope = {
    data: WorkoutExerciseCreateManyWorkoutInput | WorkoutExerciseCreateManyWorkoutInput[]
    skipDuplicates?: boolean
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

  export type WorkoutExerciseUpsertWithWhereUniqueWithoutWorkoutInput = {
    where: WorkoutExerciseWhereUniqueInput
    update: XOR<WorkoutExerciseUpdateWithoutWorkoutInput, WorkoutExerciseUncheckedUpdateWithoutWorkoutInput>
    create: XOR<WorkoutExerciseCreateWithoutWorkoutInput, WorkoutExerciseUncheckedCreateWithoutWorkoutInput>
  }

  export type WorkoutExerciseUpdateWithWhereUniqueWithoutWorkoutInput = {
    where: WorkoutExerciseWhereUniqueInput
    data: XOR<WorkoutExerciseUpdateWithoutWorkoutInput, WorkoutExerciseUncheckedUpdateWithoutWorkoutInput>
  }

  export type WorkoutExerciseUpdateManyWithWhereWithoutWorkoutInput = {
    where: WorkoutExerciseScalarWhereInput
    data: XOR<WorkoutExerciseUpdateManyMutationInput, WorkoutExerciseUncheckedUpdateManyWithoutWorkoutInput>
  }

  export type WorkoutExerciseScalarWhereInput = {
    AND?: WorkoutExerciseScalarWhereInput | WorkoutExerciseScalarWhereInput[]
    OR?: WorkoutExerciseScalarWhereInput[]
    NOT?: WorkoutExerciseScalarWhereInput | WorkoutExerciseScalarWhereInput[]
    workoutExerciseId?: StringFilter<"WorkoutExercise"> | string
    workoutId?: StringFilter<"WorkoutExercise"> | string
    exerciseId?: StringFilter<"WorkoutExercise"> | string
    order?: IntFilter<"WorkoutExercise"> | number
    createdAt?: DateTimeFilter<"WorkoutExercise"> | Date | string
    updatedAt?: DateTimeFilter<"WorkoutExercise"> | Date | string
  }

  export type WorkoutCreateWithoutWorkoutExercisesInput = {
    workoutId?: string
    name: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
    trainingPlanWeek: TrainingPlanWeekCreateNestedOneWithoutWorkoutsInput
  }

  export type WorkoutUncheckedCreateWithoutWorkoutExercisesInput = {
    workoutId?: string
    trainingPlanWeekId: string
    name: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkoutCreateOrConnectWithoutWorkoutExercisesInput = {
    where: WorkoutWhereUniqueInput
    create: XOR<WorkoutCreateWithoutWorkoutExercisesInput, WorkoutUncheckedCreateWithoutWorkoutExercisesInput>
  }

  export type ExerciseCreateWithoutWorkoutExercisesInput = {
    exerciseId?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExerciseUncheckedCreateWithoutWorkoutExercisesInput = {
    exerciseId?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExerciseCreateOrConnectWithoutWorkoutExercisesInput = {
    where: ExerciseWhereUniqueInput
    create: XOR<ExerciseCreateWithoutWorkoutExercisesInput, ExerciseUncheckedCreateWithoutWorkoutExercisesInput>
  }

  export type SetCreateWithoutWorkoutExerciseInput = {
    setId?: string
    reps: number
    rir: number
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SetUncheckedCreateWithoutWorkoutExerciseInput = {
    setId?: string
    reps: number
    rir: number
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SetCreateOrConnectWithoutWorkoutExerciseInput = {
    where: SetWhereUniqueInput
    create: XOR<SetCreateWithoutWorkoutExerciseInput, SetUncheckedCreateWithoutWorkoutExerciseInput>
  }

  export type SetCreateManyWorkoutExerciseInputEnvelope = {
    data: SetCreateManyWorkoutExerciseInput | SetCreateManyWorkoutExerciseInput[]
    skipDuplicates?: boolean
  }

  export type WorkoutUpsertWithoutWorkoutExercisesInput = {
    update: XOR<WorkoutUpdateWithoutWorkoutExercisesInput, WorkoutUncheckedUpdateWithoutWorkoutExercisesInput>
    create: XOR<WorkoutCreateWithoutWorkoutExercisesInput, WorkoutUncheckedCreateWithoutWorkoutExercisesInput>
    where?: WorkoutWhereInput
  }

  export type WorkoutUpdateToOneWithWhereWithoutWorkoutExercisesInput = {
    where?: WorkoutWhereInput
    data: XOR<WorkoutUpdateWithoutWorkoutExercisesInput, WorkoutUncheckedUpdateWithoutWorkoutExercisesInput>
  }

  export type WorkoutUpdateWithoutWorkoutExercisesInput = {
    workoutId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trainingPlanWeek?: TrainingPlanWeekUpdateOneRequiredWithoutWorkoutsNestedInput
  }

  export type WorkoutUncheckedUpdateWithoutWorkoutExercisesInput = {
    workoutId?: StringFieldUpdateOperationsInput | string
    trainingPlanWeekId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExerciseUpsertWithoutWorkoutExercisesInput = {
    update: XOR<ExerciseUpdateWithoutWorkoutExercisesInput, ExerciseUncheckedUpdateWithoutWorkoutExercisesInput>
    create: XOR<ExerciseCreateWithoutWorkoutExercisesInput, ExerciseUncheckedCreateWithoutWorkoutExercisesInput>
    where?: ExerciseWhereInput
  }

  export type ExerciseUpdateToOneWithWhereWithoutWorkoutExercisesInput = {
    where?: ExerciseWhereInput
    data: XOR<ExerciseUpdateWithoutWorkoutExercisesInput, ExerciseUncheckedUpdateWithoutWorkoutExercisesInput>
  }

  export type ExerciseUpdateWithoutWorkoutExercisesInput = {
    exerciseId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExerciseUncheckedUpdateWithoutWorkoutExercisesInput = {
    exerciseId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SetUpsertWithWhereUniqueWithoutWorkoutExerciseInput = {
    where: SetWhereUniqueInput
    update: XOR<SetUpdateWithoutWorkoutExerciseInput, SetUncheckedUpdateWithoutWorkoutExerciseInput>
    create: XOR<SetCreateWithoutWorkoutExerciseInput, SetUncheckedCreateWithoutWorkoutExerciseInput>
  }

  export type SetUpdateWithWhereUniqueWithoutWorkoutExerciseInput = {
    where: SetWhereUniqueInput
    data: XOR<SetUpdateWithoutWorkoutExerciseInput, SetUncheckedUpdateWithoutWorkoutExerciseInput>
  }

  export type SetUpdateManyWithWhereWithoutWorkoutExerciseInput = {
    where: SetScalarWhereInput
    data: XOR<SetUpdateManyMutationInput, SetUncheckedUpdateManyWithoutWorkoutExerciseInput>
  }

  export type SetScalarWhereInput = {
    AND?: SetScalarWhereInput | SetScalarWhereInput[]
    OR?: SetScalarWhereInput[]
    NOT?: SetScalarWhereInput | SetScalarWhereInput[]
    setId?: StringFilter<"Set"> | string
    workoutExerciseId?: StringFilter<"Set"> | string
    reps?: IntFilter<"Set"> | number
    rir?: IntFilter<"Set"> | number
    order?: IntFilter<"Set"> | number
    createdAt?: DateTimeFilter<"Set"> | Date | string
    updatedAt?: DateTimeFilter<"Set"> | Date | string
  }

  export type WorkoutExerciseCreateWithoutExerciseInput = {
    workoutExerciseId?: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
    workout: WorkoutCreateNestedOneWithoutWorkoutExercisesInput
    sets?: SetCreateNestedManyWithoutWorkoutExerciseInput
  }

  export type WorkoutExerciseUncheckedCreateWithoutExerciseInput = {
    workoutExerciseId?: string
    workoutId: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
    sets?: SetUncheckedCreateNestedManyWithoutWorkoutExerciseInput
  }

  export type WorkoutExerciseCreateOrConnectWithoutExerciseInput = {
    where: WorkoutExerciseWhereUniqueInput
    create: XOR<WorkoutExerciseCreateWithoutExerciseInput, WorkoutExerciseUncheckedCreateWithoutExerciseInput>
  }

  export type WorkoutExerciseCreateManyExerciseInputEnvelope = {
    data: WorkoutExerciseCreateManyExerciseInput | WorkoutExerciseCreateManyExerciseInput[]
    skipDuplicates?: boolean
  }

  export type WorkoutExerciseUpsertWithWhereUniqueWithoutExerciseInput = {
    where: WorkoutExerciseWhereUniqueInput
    update: XOR<WorkoutExerciseUpdateWithoutExerciseInput, WorkoutExerciseUncheckedUpdateWithoutExerciseInput>
    create: XOR<WorkoutExerciseCreateWithoutExerciseInput, WorkoutExerciseUncheckedCreateWithoutExerciseInput>
  }

  export type WorkoutExerciseUpdateWithWhereUniqueWithoutExerciseInput = {
    where: WorkoutExerciseWhereUniqueInput
    data: XOR<WorkoutExerciseUpdateWithoutExerciseInput, WorkoutExerciseUncheckedUpdateWithoutExerciseInput>
  }

  export type WorkoutExerciseUpdateManyWithWhereWithoutExerciseInput = {
    where: WorkoutExerciseScalarWhereInput
    data: XOR<WorkoutExerciseUpdateManyMutationInput, WorkoutExerciseUncheckedUpdateManyWithoutExerciseInput>
  }

  export type WorkoutExerciseCreateWithoutSetsInput = {
    workoutExerciseId?: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
    workout: WorkoutCreateNestedOneWithoutWorkoutExercisesInput
    exercise: ExerciseCreateNestedOneWithoutWorkoutExercisesInput
  }

  export type WorkoutExerciseUncheckedCreateWithoutSetsInput = {
    workoutExerciseId?: string
    workoutId: string
    exerciseId: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkoutExerciseCreateOrConnectWithoutSetsInput = {
    where: WorkoutExerciseWhereUniqueInput
    create: XOR<WorkoutExerciseCreateWithoutSetsInput, WorkoutExerciseUncheckedCreateWithoutSetsInput>
  }

  export type WorkoutExerciseUpsertWithoutSetsInput = {
    update: XOR<WorkoutExerciseUpdateWithoutSetsInput, WorkoutExerciseUncheckedUpdateWithoutSetsInput>
    create: XOR<WorkoutExerciseCreateWithoutSetsInput, WorkoutExerciseUncheckedCreateWithoutSetsInput>
    where?: WorkoutExerciseWhereInput
  }

  export type WorkoutExerciseUpdateToOneWithWhereWithoutSetsInput = {
    where?: WorkoutExerciseWhereInput
    data: XOR<WorkoutExerciseUpdateWithoutSetsInput, WorkoutExerciseUncheckedUpdateWithoutSetsInput>
  }

  export type WorkoutExerciseUpdateWithoutSetsInput = {
    workoutExerciseId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workout?: WorkoutUpdateOneRequiredWithoutWorkoutExercisesNestedInput
    exercise?: ExerciseUpdateOneRequiredWithoutWorkoutExercisesNestedInput
  }

  export type WorkoutExerciseUncheckedUpdateWithoutSetsInput = {
    workoutExerciseId?: StringFieldUpdateOperationsInput | string
    workoutId?: StringFieldUpdateOperationsInput | string
    exerciseId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
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
    workoutExercises?: WorkoutExerciseUpdateManyWithoutWorkoutNestedInput
  }

  export type WorkoutUncheckedUpdateWithoutTrainingPlanWeekInput = {
    workoutId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workoutExercises?: WorkoutExerciseUncheckedUpdateManyWithoutWorkoutNestedInput
  }

  export type WorkoutUncheckedUpdateManyWithoutTrainingPlanWeekInput = {
    workoutId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkoutExerciseCreateManyWorkoutInput = {
    workoutExerciseId?: string
    exerciseId: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkoutExerciseUpdateWithoutWorkoutInput = {
    workoutExerciseId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    exercise?: ExerciseUpdateOneRequiredWithoutWorkoutExercisesNestedInput
    sets?: SetUpdateManyWithoutWorkoutExerciseNestedInput
  }

  export type WorkoutExerciseUncheckedUpdateWithoutWorkoutInput = {
    workoutExerciseId?: StringFieldUpdateOperationsInput | string
    exerciseId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sets?: SetUncheckedUpdateManyWithoutWorkoutExerciseNestedInput
  }

  export type WorkoutExerciseUncheckedUpdateManyWithoutWorkoutInput = {
    workoutExerciseId?: StringFieldUpdateOperationsInput | string
    exerciseId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SetCreateManyWorkoutExerciseInput = {
    setId?: string
    reps: number
    rir: number
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SetUpdateWithoutWorkoutExerciseInput = {
    setId?: StringFieldUpdateOperationsInput | string
    reps?: IntFieldUpdateOperationsInput | number
    rir?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SetUncheckedUpdateWithoutWorkoutExerciseInput = {
    setId?: StringFieldUpdateOperationsInput | string
    reps?: IntFieldUpdateOperationsInput | number
    rir?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SetUncheckedUpdateManyWithoutWorkoutExerciseInput = {
    setId?: StringFieldUpdateOperationsInput | string
    reps?: IntFieldUpdateOperationsInput | number
    rir?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkoutExerciseCreateManyExerciseInput = {
    workoutExerciseId?: string
    workoutId: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkoutExerciseUpdateWithoutExerciseInput = {
    workoutExerciseId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workout?: WorkoutUpdateOneRequiredWithoutWorkoutExercisesNestedInput
    sets?: SetUpdateManyWithoutWorkoutExerciseNestedInput
  }

  export type WorkoutExerciseUncheckedUpdateWithoutExerciseInput = {
    workoutExerciseId?: StringFieldUpdateOperationsInput | string
    workoutId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sets?: SetUncheckedUpdateManyWithoutWorkoutExerciseNestedInput
  }

  export type WorkoutExerciseUncheckedUpdateManyWithoutExerciseInput = {
    workoutExerciseId?: StringFieldUpdateOperationsInput | string
    workoutId?: StringFieldUpdateOperationsInput | string
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