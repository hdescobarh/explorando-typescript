# Sitema de tipos

Siempre tener presente que:

- La evaluación de tipos ocurre **unicamente** en tiempo de compliación

- Typechecking happens _only_ at compiling time.
- Typechecking is _structural_.
- Type determines the writing and reading behaviour.
- Enum is not a type-level but a running time addition.

## Primitive types

- string
- numbers
- boolean
- null
- undefined
- bigint
- symbol

- any: this disable type checking!!!

## Object types and optional properties

```typescript
obj: {mandatory: string; optional?: string}
```

### Some standard Built-in objects

- Promise
- String
- Numbers
- Boolean

## Collections

```typescript
syntax_1 = type_name[];
syntax_2 = Array<type_name>
```

## Literal types

- Specific constant strings or numbers
- In object properties are assumed to change, you must specify if it is a literal type (with assertions)

## Type assertions

When TypeScript cannot infer the type:

```typescript
const syntax_1 = expression as desired_type;
const syntax_2 = <desired_type>expression;
```

❗ This is prone to erros in excecution time. It is better to use JS capabilities to output validations; for example. Instead of:

```typescript
const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;
// do things
```

Better to use:

```typescript
const myCanvas = document.getElementById("main_canvas");

if (myCanvas instanceof HTMLCanvasElement) {
  // do things
}
```

- Literal type assertions

the const keyword in a type assertion means that it is a Literal type

> expression as const

- Non-null Assertion Operator (Postfix !)

Special TS syntax for removing null and undefined (remember, only at compiling time!)

```typescript
function liveDangerously(x?: number | null) {
  // No error
  console.log(x!.toFixed());
}
```

# Kinds of functions

Signature with function name

> function fn_name(arguments){
> fn_body
> }

Signature without function name

> function (arguments){
> fn_body
> }

Arrow function

> (arguments) => {fn_body}
