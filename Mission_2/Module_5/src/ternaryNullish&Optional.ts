// ? => Ternary Operator => descision makeing
// ?? => Nullish Coalescing Operator  // null and Undefined
// ?. => Optional Chaining Operator


const isEligible  = ( age : number ) =>{
  if( age >= 21){
    return "you are eligible for marriage"
  }
  else{
    return "you are not eligible for marriage"
  }
}
console.log(isEligible(25));

//useing ternary operator
const isEligibleTernary  = ( age : number ) =>{
  const result =  age >= 21 ? "eligible" : " not eligible";
  return result;
}

console.log(isEligibleTernary(18));

//nullish coalescing operator

const userTheme = null;

const defaultTheme = userTheme ?? "Light Theme";

console.log( defaultTheme ); 

//difference between ternary and nullish coalescing operator

const isAuthenticated = true;

const isAuthenticatedWithTernary = isAuthenticated ? isAuthenticated : "Guest User";

const isAuthenticatedWithNullish = isAuthenticated ?? "Guest User";

console.log( isAuthenticatedWithTernary ); 
console.log( isAuthenticatedWithNullish );

//optional chaining operator

const user : {
  address : {
    city : string,
    town : string,
    postalCod ? : number,
  }
} = {
  address : {
    city : "New York",
    town : "Brooklyn",
  }

}

const postalCode = user?.address?.postalCod;
console.log( postalCode ); //undefined