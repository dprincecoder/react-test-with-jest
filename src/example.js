/**
    returns an example of use example code block;
    @param name A name of the code to run
    @param thisArgs the argument number of multiplication or addition of two numbers x and y
  */
export function example(name, x, y) {
  switch (name) {
    case "Addition":
      return x + y;
    case "Multiplication":
      return x * y;
    case "Subtraction":
      return x - y;
    case "Division":
      return x / y;
    case "Squared":
      return (x + y) * (x + y);

    default:
      return { x, y };
  }
}
