

const kgToGramConverter = (input : string | number ) : string | number | undefined => {

  if (typeof input === "string"){

     const [value] = input.split(' ');
    return `Converted Output is : ${Number(value) * 1000} grams`;

  } else if (typeof input === "number") {
    return input * 1000;
  }

}

const result1 = kgToGramConverter("5 kg") as string;

const result2 = kgToGramConverter(7) as number;   



type CustomError = {
  message: string,
}


try{

} catch(error){
  console.log((error as CustomError).message);
}