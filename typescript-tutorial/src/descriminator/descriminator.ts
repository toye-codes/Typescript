// Challenge - Discriminated Unions and exhaustive check using the never type
// A discriminated union in TypeScript is a type that can be one of several different types, each identified by a unique literal property (the discriminator), allowing for type-safe handling of each possible variant.


type IncrementAction = {
  amount: number;
  timestamp: number;
  user: string;
};

type DecrementAction = {
  amount: number;
  timestamp: number;
  user: string;
};

type Action = IncrementAction | DecrementAction;



