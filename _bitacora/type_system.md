# Sistema de tipos

Para siempre tener presente:

- El _typechecking_ ocurre **unicamente** en tiempo de compilación.
- El _typechecking_ estructural.
- El tipo determina el comportamiento de lectura y escritura.
- _Enum_ **NO** es una característica a nivel de tipos. Es una adición que funciona en tiempo de ejecución.
- La keyword _type_ crea alias, no tipos.

## Primitivos

Además de los de base de JS (string, numbers, boolean, null, undefined, bigint, symbol), tememos:

- any: Cuidado, bajo este tipo se pierden las características de _typechecking_.
- never: es un subtipo de todo tipo.

## Tipo _Object_

Cualquier valor de JS con propiedades.

- Las propiedades opcionales es un _feature_ de JS. Recordar que sí la propiedad no existe retorna _undefined_.

```typescript
obj: {mandatory_property: string; optional_property?: string}
```

### Algunos _Built-in objects_ de la biblioteca estándar.

- Promise
- String
- Numbers
- Boolean

### Colecciones

- _Arrays_

```typescript
syntax_1 = type_name[];
syntax_2 = Array<type_name>
```

## _Literal types_

- Son \_string_s o \_number_s específicos que se comportan como tipos.
- En algunos casos TS no puede inferir que el literal se trata de un tipo; por ejemplo, las propiedades de un objeto se asumen cambian, entonces no son consideradas _literal type_. Para abordar eso se usa _type assertions_

## Type assertions

Algunas veces TS no puede inferir el tipo; por ejemplo, cuando lo que retorna una función solo se sabe en tiempo de ejecución (Recordar, TS opera SOLO en tiempo de compilación).

```typescript
const syntax_1 = expression as desired_type;
const syntax_2 = <desired_type>expression;
```

- Ejemplo:

```typescript
const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;
// do things
```

❗ Lo anterior tiende a errores. Recordar, TS no actúa en tiempo de ejecución y, por lo tanto, **no hace validaciones**. Una mejor alternativa, aprovechando capacidades de JS es es:

```typescript
const myCanvas = document.getElementById("main_canvas");

if (myCanvas instanceof HTMLCanvasElement) {
  // do things
}
```

# _Literal type assertions_

Aquí TS infiere method es una _string_

```typescript
const obj = { url: "https://example.com", method: "GET" };
```

Para especificar es un _literal type_

```typescript
const syntax_1 = { url: "https://example.com", method: "GET" as "GET" };
// Es análogo a const de JS, pero para tipos
const syntax_1 = { url: "https://example.com", method: "GET" } as const;
```
